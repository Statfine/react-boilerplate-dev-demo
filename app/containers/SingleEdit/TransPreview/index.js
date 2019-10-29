/**
 * 拖拽
 *  加载所有拖动特效
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectEffectVideo, makeSelectEffectImage, makeSelectVideoPlayer, makeSelectChooseEffect } from '../selectors';
import { changeEffectCom, changeEffectChartLet } from '../actions';

import TransVideo from '../TransCom/TransVideo';
import TransChartlet from '../TransCom/TransChartlet';

export const TransDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    display: ${({ showBaseLineX }) => showBaseLineX ? 'block' : 'none'};
    width: 100%;
    height: 2px;
    border-top: 1px dashed #FF8140;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1px;
    z-index: 99;
  }
  &:after {
    content: '';
    display: ${({ showBaseLineY }) => showBaseLineY ? 'block' : 'none'};
    width: 2px;
    height: 100%;
    border-left: 1px dashed #FF8140;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1px;
    z-index: 99;
  }
`;

class TransPreview extends PureComponent {
  state = {
    isShowBaseLineX: false,
    isShowBaseLineY: false,
  }

  componentDidMount() {
    console.log('componentDidMount');
    document.addEventListener('mouseup', this.handlePreviewDivMouseUp);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('mouseup', this.handlePreviewDivMouseUp);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  isDraging = false;

  handleKeyDown = (ev) => {
    console.log('handleKeyDown', ev.keyCode);
    const { dragKey, effectKey } = this.props.chooseEffect;
    if ((dragKey === '' && effectKey === '') || dragKey === 'videoTrans') return;
    if (ev.keyCode === 8 || ev.keyCode === 46) { // 删除
      console.log('handleKeyDown2:', dragKey);
      this.props.videoPlayerEl.videoEl.updateChartlet(
        dragKey,
        'delete',
      );
      this.props.actionChangeEffectChartlet(
        'delete',
        { dragKey },
      );
    }
  }

  // 敲黑板，如果只显示当前选中的拖拽组件可以用如下方法
  // 选中可以通过 获取点击的位置，遍历得到哪些特效。更近层级关系获取层级最高的。
  handlePreviewDivMouseUp = (ev) => {
    // ev.stopPropagation();
    if (this.isDraging) return;
    const { effectVideo, effectImage } = this.props;
    const rect = this.previewDiv.getBoundingClientRect();
    const evPointX = ev.clientX - rect.x; // 获取相对坐标点
    const evPointY = ev.clientY - rect.y;

    if ((evPointX < 0 || evPointX > rect.width)
      || (evPointY < 0 || evPointY > rect.height)) {
      this.props.actionChangeEffectCom({ dragKey: '' });
      return;
    }

    const previewStyle = { width: rect.width, height: rect.height };

    // 判断视频
    const videoSection = this.handleEffectSection(effectVideo.position, previewStyle);
    const effectList = []; // 所在区间的特效
    if ((evPointX >= videoSection.startX && evPointX <= videoSection.endX)
      && (evPointY >= videoSection.startY && evPointY <= videoSection.endY)
    ) {
      effectList.push(effectVideo);
    }

    // 判断贴图
    effectImage.map((item) => {
      const effectSection = this.handleEffectSection(item.position, previewStyle);
      if ((evPointX >= effectSection.startX && evPointX <= effectSection.endX)
        && (evPointY >= effectSection.startY && evPointY <= effectSection.endY)
      ) {
        effectList.push(item);
      }
      return null;
    });
    console.log('选中了', effectList);

    if (effectList.length > 0) {
      let dragKey = 'videoTrans';
      let effectKey = 'effectVideo';
      if (effectList[effectList.length - 1].dragKey) {
        dragKey = effectList[effectList.length - 1].dragKey;
        effectKey = effectList[effectList.length - 1].type;
      }
      this.props.actionChangeEffectCom({ dragKey, effectKey });
    } else this.props.actionChangeEffectCom({ dragKey: '' });
  }

  // 特效区间(基于预览区域的顶点(TransDiv))
  handleEffectSection = (position, previewStyle) => {
    // console.log('position', position, previewStyle);
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;
    if (position.x < 0) startX = 0;
    else startX = position.x;
    endX = startX + position.w;
    if (position.x < 0) startY = 0;
    else startY = position.y;
    endY = startY + position.h;
    const params = {
      startX: startX * 0.01 * previewStyle.width,
      endX: endX * 0.01 * previewStyle.width,
      startY: startY * 0.01 * previewStyle.height,
      endY: endY * 0.01 * previewStyle.height,
    };
    return params;
  }

  handleIsDraging = (flag) => this.isDraging = flag;

  render() {
    const { isShowBaseLineX, isShowBaseLineY } = this.state;
    return (
      <TransDiv
        innerRef={(ref) => this.previewDiv = ref}
        showBaseLineX={isShowBaseLineX}
        showBaseLineY={isShowBaseLineY}
        // onMouseUp={this.handlePreviewDivMouseUp}
      >
        <TransVideo
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
          handleIsDraging={this.handleIsDraging}
        />
        <TransChartlet
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
          handleIsDraging={this.handleIsDraging}
        />
      </TransDiv>
    );
  }
}

/**
 *  effectVideo 视频特效 （位置）
 *  effectImage 贴图特效 （位置）
 *  videoPlayerEl 视频实例
 *  chooseEffect  选中
 *
 *  actionChangeEffectCom 设置被选中的工具和拖动组件
*/
TransPreview.propTypes = {
  effectVideo: PropTypes.object.isRequired,
  effectImage: PropTypes.array.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,

  actionChangeEffectCom: PropTypes.func.isRequired,
  actionChangeEffectChartlet: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoPlayerEl: makeSelectVideoPlayer(),
  effectVideo: makeSelectEffectVideo(),
  effectImage: makeSelectEffectImage(),
  chooseEffect: makeSelectChooseEffect(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectCom: (...arg) => dispatch(changeEffectCom(...arg)),
    actionChangeEffectChartlet: (actionTpty, ...arg) => dispatch(changeEffectChartLet(actionTpty, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransPreview);
