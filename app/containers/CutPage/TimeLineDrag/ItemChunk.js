import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import _ from 'lodash';

import { ItemVideo, ItemCover, ResizerLeft, ResizerRight, IconAnt, VideoTime } from './styled';

const MIN_WIDTH = 20;

function formatHourMinSec(t) {
  const h = parseInt(t / 3600);
  const m = parseInt((t - (h * 3600)) / 60);
  const s = parseInt(t - ((h * 3600) + (m * 60)));
  return `${zeroFill(h)}:${zeroFill(m)}:${zeroFill(s)}`;
}

function zeroFill(s) {
  if (s < 10 && s >= 0) return `0${s}`;
  return s;
}

export default class ItemChunk extends PureComponent {
  state = {
    dragDown: false,
    moveLeftWidth: 0,
  }

  handleGetStyle = () => {
    const { index, videoList, baseWidth } = this.props;
    let transformX = 0;
    const width = (videoList[index].endTime - videoList[index].startTime) * baseWidth;
    for (let i = 0; i <= index; i += 1) {
      const info = videoList[i - 1];
      if (i !== 0) transformX += (info.endTime - info.startTime) * baseWidth;
    }
    // console.log('handleGetStyle====>', width, transformX);
    return { width, transformX };
  }

  handleOnMouseDown = (e, type) => {
    const { index, videoList } = this.props;
    e.stopPropagation();
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    this.dragOffset = e.pageX;
    this.type = type;
    this.source = videoList[index];
    this.setState({ dragDown: true });
    document.addEventListener('mousemove', this.handleMouseMove);
    if (type === 'right') this.props.hanldeTrans(true);
  };

  handleMouseMove = (ev) => {
    const { baseWidth, fatherObj } = this.props;
    const info = this.source;
    const infoWidth = (info.endTime - info.startTime) * baseWidth;

    ev.stopPropagation();
    const x = ev.clientX;
    const moveWidth = x - this.dragOffset;
    // const moveTime = moveWidth / baseWidth;
    // console.log(moveWidth, moveTime);
    if (!this.state.dragDown) return;
    if (this.type === 'left') {
      if (moveWidth > 0) { //  正数  右移动，宽度减小，视频的开始时间减小
        if (moveWidth > infoWidth - MIN_WIDTH) {
          this.setState({ moveLeftWidth: infoWidth - MIN_WIDTH });
          message.destroy();
          message.warning(`素材不能小于${MIN_WIDTH / baseWidth}S`);
        } else this.setState({ moveLeftWidth: moveWidth });
      }
      if (moveWidth < 0) { // 负数  左移动，宽度增加，视频的开始时间增加
        if (infoWidth - moveWidth > (info.endTime) * baseWidth) { // 此时可拖动到的最长时间为视频设置结束时间 而不是视频总时长
          // this.setState({ moveLeftWidth: -(((info.endTime) * baseWidth) - infoWidth) });
          this.setState({ moveLeftWidth: -(info.startTime * baseWidth) });
          message.destroy();
          message.warning('已经到达视频开始位置');
        } else this.setState({ moveLeftWidth: moveWidth });
      }
    }
    // 右边时间改动为即时的，捕获用到moveLeftWidth
    if (this.type === 'right') {
      const moveTime = moveWidth / baseWidth;
      if (moveWidth > 0) { //  正数  右移动，宽度增加，视频的结束时间增加
        if (info.endTime + moveTime > info.startTime + ((fatherObj.width - this.handleGetStyle().transformX) / baseWidth)) {
          this.handleCbChangeRight(info.startTime + ((fatherObj.width - this.handleGetStyle().transformX) / baseWidth));
        } else if (moveWidth + infoWidth > (info.length - info.startTime) * baseWidth) { // 此时可拖动到的最长时间为 视频总时长减去开始时间
          message.destroy();
          message.warning('已经到达视频结束位置');
          this.handleCbChangeRight(info.length);
        } else this.handleCbChangeRight(info.endTime + moveTime);
      }
      if (moveWidth < 0) { //  正数  左移动，宽度减小，视频的结束时间减小
        console.log(moveWidth, infoWidth);
        if (-moveWidth > infoWidth - MIN_WIDTH) {
          message.destroy();
          message.warning(`素材不能小于${MIN_WIDTH / baseWidth}S`);
          this.handleCbChangeRight(info.startTime + (MIN_WIDTH / baseWidth));
        } else this.handleCbChangeRight(info.endTime + moveTime);
      }
    }

    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp = () => {
    if (this.state.dragDown) {
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
      document.removeEventListener('mouseup', this.handleMouseUp);
      document.removeEventListener('mousemove', this.handleMouseMove);

      if (this.type === 'left') this.handleCbChanngeLeft();
      this.setState({ dragDown: false, moveLeftWidth: 0 });
      this.props.hanldeTrans(false);
    }
  }

  /*
   * 效果考虑， 只有在右边拖动的时候才需要实时修改父层状态
   * 左边拖动回调
  */
  handleCbChanngeLeft = () => {
    const { handleChangeTime, index, videoList, baseWidth } = this.props;
    const { moveLeftWidth } = this.state;
    const moveTime = moveLeftWidth / baseWidth;
    const info = videoList[index];
    const st = info.startTime + moveTime;
    handleChangeTime(index, _.merge({}, info, { startTime: st > 0 ? st : 0 }));
  }

  handleCbChangeRight = (endTime) => {
    const { handleChangeTime, index } = this.props;
    handleChangeTime(index, _.merge({}, this.source, { endTime }));
  }

  render() {
    const { moveLeftWidth, dragDown } = this.state;
    const { index, choosedIndex, videoList, handleChoosed, noTrans, dragHoverIndex, dragHoverIndexPosition, baseWidth } = this.props;
    const choosed = index === choosedIndex;
    const itemStyle = this.handleGetStyle();
    const info = videoList[index];
    return (
      <ItemVideo
        width={itemStyle.width - moveLeftWidth}
        choosed={choosed}
        dragDown={dragDown || noTrans}
        transformX={itemStyle.transformX + moveLeftWidth}
        onClick={() => {
          // e.stopPropagation(); // 父元素点击事件（时间轴变动）
          handleChoosed(index);
        }}
        dragHover={dragHoverIndex === index}
      >
        { choosedIndex === index && <VideoTime style={{ left: '-6px' }}>{formatHourMinSec(info.startTime + (moveLeftWidth / baseWidth))}</VideoTime> }
        { choosedIndex === index && <VideoTime style={{ right: '-6px' }}>{formatHourMinSec(info.endTime)}</VideoTime> }
        { (dragHoverIndex === index && dragHoverIndexPosition === 'left') && <IconAnt type="environment" style={{ left: '-6px' }} /> }
        { (dragHoverIndex === index && dragHoverIndexPosition === 'right') && <IconAnt type="environment" style={{ right: '-6px' }} /> }
        <ItemCover cover={info.cover} />
        { choosed &&
          <ResizerLeft
            onClick={(e) => {
              // 点击事件冒泡
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              // 拖动事件冒泡
              e.stopPropagation();
              e.preventDefault();
              this.handleOnMouseDown(e, 'left');
            }}
          /> }
        { choosed &&
          <ResizerRight
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              this.handleOnMouseDown(e, 'right');
            }}
          /> }
      </ItemVideo>
    );
  }
}

/*
 * index:  序列
 * choosedIndex 选中序列
 * videoList 所有视频对象
 * baseWidth 1秒的宽度
 * fatherObj 父元素style
 * noTrans 是否有transition效果
 * handleChoosed 选择事件
 * handleChangeTime 事件修改事件
 * hanldeTrans 是否有transition效果事件
 * dragHoverIndex 拖动时候  悬浮的覆盖层下标
 * dragHoverIndex 拖动时候  悬浮的覆盖层下标 前替换还是后替换 'left, right'
*/
ItemChunk.propTypes = {
  index: PropTypes.number,
  choosedIndex: PropTypes.number,
  videoList: PropTypes.array,
  baseWidth: PropTypes.number,
  fatherObj: PropTypes.object,
  noTrans: PropTypes.bool,
  handleChoosed: PropTypes.func,
  handleChangeTime: PropTypes.func,
  hanldeTrans: PropTypes.func,
  dragHoverIndex: PropTypes.number,
  dragHoverIndexPosition: PropTypes.string,
};
