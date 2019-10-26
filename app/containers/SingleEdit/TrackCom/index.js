import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import imgPointerRuler from './pointer_ruler.svg';
import { timeToMSecond } from '../commom/tool';
import { AXIS, ADSORB_DISTANCE } from '../commom/config';

const Wrap = styled.div`
  width: 100%;
  position: relative;
`;

const PointerAxis = styled.div`
  position: absolute;
  padding: 0 16px;
  height: 100%;
  width: 100%;
`;

const Pointer = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #ff8140;
  z-index: 10;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* transform: translateX(${({ left }) => left}px); */
  /* left: ${({ left }) => left + 16}px; */
`;

const PointerCursorImgDiv = styled.div`
  position: absolute;
  left: -4px;
  z-index: 99999;
  height: 15px;
  width: 10px;
  cursor: pointer;
  background-size: contain;
  background-image: url(${({ src }) => src});
`;

const TimeAxis = styled.div`
  background-color: #F4F6F6;
  padding: 0 16px;
  height: 36px;
  box-shadow:0px 1px 0px 0px rgba(217,217,217,1);
  position: relative;
`;

const TimeP = styled.div`
  position: absolute;
  left: 16px;
  top: 7px;
`;

const TimeItem = styled.span`
  position: absolute;
  left: ${({ left }) => left}px;
  font-size: 12px;
`;

const ScaleP = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const ScalePItem = styled.div`
  position: absolute;
  width: 1px;
  height: 8px;
  display: inline-block;
  background-color: #D8D8D8;
  left: ${({ left }) => left}px;
  bottom: 0;
`;

const DragAxis = styled.div`
  padding: 20px 16px;
`;

const DragWrap = styled.div`
  border-radius: 4px;
  height: 56px;
  overflow: hidden;
  position: relative;
`;

const BaseContainer = styled.div`
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  border: 2px solid rgba(216,216,216,1);
`;

const BaseImg = styled.div`
  width: 100px;
  height: 100%;
  display: inline-block;
  background: url(${({ url }) => url}) no-repeat;
  background-size: cover;
`;

const DragContainer = styled.div`
  position: absolute;
  height: 56px;
  top: 0;
  display: flex;
  width: 100%;
`;

const DragEle = styled.div`
  cursor: move;
  position: relative;
  height: 100%;
  /* width: ${({ width }) => width}px; */
  border-radius: 4px;
  overflow: hidden;
  border-top: 2px solid #ff8140;
  border-bottom: 2px solid #ff8140;
  /* transition: width .2s; */
`;

const DragIcon = styled.span`
  width: 5px;
  cursor: col-resize;
  position: absolute;
  display: inline-block;
  height: 100%;
  background-color: #ff8140;
  transition: all 0.3s ease;
  z-index: 2;
  &:before {
    left: 3px;
    position: absolute;
    display: inline-block;
    content: ' ';
    width: 1px;
    height: 10px;
    top: 21px;
    background-color: #fff;
  }

  &:after {
    right: 3px;
    position: absolute;
    display: inline-block;
    content: ' ';
    width: 1px;
    height: 10px;
    top: 21px;
    background-color: #fff;
  }
`;

const DragIconL = styled(DragIcon)`
  left: 0;
`;
const DragIconR = styled(DragIcon)`
  right: 0;
`;

const DragMaskLeft = styled.div`
  height: 100%;
  /* width: ${({ width }) => width}px; */
  background-color: rgba(255, 255, 255, .5);
  /* transition: width .2s; */
`;

const DragMaskRight = styled.div`
  height: 100%;
  flex: 1;
  background-color: rgba(255, 255, 255, .5);
`;

class Track extends React.Component {
  state = {
    axisItemWidth: 0,
    pxWith1s: 0,
    oneSwithPx: 0,
    moveEle: 0, // 移动元素 1:左侧 2:整体 3:右侧 4: 播放指针
    moveEleInfo: null, // 移动元素信息
    imgCounts: 0,
  }

  componentDidMount() {
    this.listenResize();
    window.addEventListener('resize', () => this.listenResize());
    document.addEventListener('mousemove', this.handleMouseMove, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videoInfo.length !== this.props.videoInfo.length) this.listenResize(nextProps.videoInfo.length);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.listenResize());
  }

  setTime = () => { // 设置定时，吸附时短暂停止滑动
    if (this.timeout) clearTimeout(this.timeout);
    this.pauseMove = true;
    this.timeout = setTimeout(() => {
      this.pauseMove = false;
    }, 500);
  }

  timeout = null;
  pauseMove = false;
  axisEle = null;
  dragCon = null;
  maskLeft = null;
  maskRight = null;
  pointerEle = null;
  dragRight = null;
  startX = 0; // 鼠标滑动前起始位置
  resizeTimeout = null;

  listenResize = (length = this.props.videoInfo.length) => {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => { // 延迟.3s执行，多次触发resize，执行最后一次
      if (this.axisEle) {
        const ele = this.axisEle.getBoundingClientRect();
        const itemWidth = (ele.width - 32) / AXIS;
        const pxWith1s = (ele.width - 32) / length; // 每秒所占的像素大小
        const oneSwithPx = length / (ele.width - 32); // 每个像素所占的视频时间
        const imgCounts = Math.ceil((ele.width - 32) / 100);
        if (this.state.imgCounts !== imgCounts) this.props.onFetchThumbNb(imgCounts);
        this.setState({ imgCounts, axisItemWidth: itemWidth, pxWith1s, oneSwithPx });
      }
    }, 300);
  }

  handleClickPointer = (e) => { // 鼠标点击,移动播放指针
    e.stopPropagation();
    const { oneSwithPx } = this.state;
    const { effectVideo } = this.props;
    const { startTime, endTime } = effectVideo;
    const clientX = e.clientX;
    let currentTime = oneSwithPx * (clientX - 16);
    if (currentTime <= startTime) currentTime = startTime;
    if (currentTime >= endTime) currentTime = endTime;
    this.handleChangeCurrentTime(currentTime);
  }

  handleChangeCurrentTime = (currentTime) => { // 更改currentTime
    const { effectVideo, videoPlayerEl, onChangeVideoPlay } = this.props;
    const { startTime, endTime } = effectVideo;
    // this.setState({ curTime: currentTime });
    videoPlayerEl.videoEl.pause();
    if (startTime > currentTime) {
      videoPlayerEl.videoEl.seek(0);
      onChangeVideoPlay({ state: 0, currentTime: 0 });
    } else if (endTime < currentTime) {
      videoPlayerEl.videoEl.seek(endTime - startTime);
      onChangeVideoPlay({ state: 0, currentTime: endTime - startTime });
    } else {
      videoPlayerEl.videoEl.seek(currentTime - startTime);
      onChangeVideoPlay({ state: 0, currentTime: currentTime - startTime });
    }
  }

  // 鼠标按下
  handleMouseDown = (e, moveEle) => {
    e.stopPropagation();
    e.preventDefault();
    document.addEventListener('mouseup', this.handleMouseUp, true);
    this.startX = e.clientX;
    this.setState({ moveEle });
  }

  // 鼠标抬起
  handleMouseUp = () => {
    const { moveEle, oneSwithPx, pxWith1s } = this.state;
    const { effectVideo, onChangeEffectVideo, videoPlayerEl } = this.props;
    const { startTime, endTime } = effectVideo;
    const { currentTime, videoEl } = videoPlayerEl;
    // const { curTime } = trackInfo;
    const curTime = startTime + currentTime;
    if (moveEle === 0) return;
    document.removeEventListener('mouseup', this.handleMouseUp, true);
    // 对比初始距离，计算修改后的初始时间和结束时间
    if (moveEle === 4) {
      const { left: pointerX } = this.pointerEle.getBoundingClientRect();
      const pointerDiff = pointerX - (currentTime * pxWith1s + 16);
      const time = currentTime + pointerDiff * oneSwithPx;
      const currTime = time < 0 ? 0 : time;
      this.handleChangeCurrentTime(currTime);
      // videoPlayerEl.videoEl.pause();
      // videoPlayerEl.videoEl.seek(curTime);
      // onChangeVideoPlay({ currentTime: curTime });
    } else {
      const dragEndMaskInfo = this.maskLeft.getBoundingClientRect();
      const dragEndDragConInfo = this.dragCon.getBoundingClientRect();
      const maskDiff = dragEndMaskInfo.width - pxWith1s * startTime;
      const dragDiff = dragEndDragConInfo.width - pxWith1s * (endTime - startTime);
      const maskDiffSec = maskDiff * oneSwithPx;
      const dragDiffSec = dragDiff * oneSwithPx;
      onChangeEffectVideo({ startTime: startTime + maskDiffSec, endTime: endTime + maskDiffSec + dragDiffSec });
      let videoCurTime = Number((curTime - startTime - maskDiffSec).toFixed(9));
      if (videoCurTime < 0) videoCurTime = 0;
      else if (curTime > endTime + maskDiffSec + dragDiffSec) videoCurTime = dragEndDragConInfo.width * oneSwithPx;
      videoEl.seek(videoCurTime);
    }
    this.setState({ moveEle: 0 });
  }

  // 监听鼠标移动
  handleMouseMove = (e) => {
    const { moveEle } = this.state;
    if (!moveEle || this.pauseMove) return;
    const mx = e.clientX; // 鼠标位置
    const differ = Math.round(mx - this.startX);
    this.startX = mx;
    let { left: pointerX } = this.pointerEle.getBoundingClientRect();
    let { width: maskLWidth } = this.maskLeft.getBoundingClientRect(); // 左边蒙层信息
    let { width: maskRWidth, left: maskRX } = this.maskRight.getBoundingClientRect(); // 右边蒙层信息
    let { width: dragConWidth, left: dragConX, right: dragConR } = this.dragCon.getBoundingClientRect(); // 滑块信息
    pointerX = Math.round(pointerX);
    maskLWidth = Math.round(maskLWidth);
    maskRWidth = Math.round(maskRWidth);
    maskRX = Math.round(maskRX);
    dragConWidth = Math.round(dragConWidth);
    dragConX = Math.round(dragConX);
    dragConR = Math.round(dragConR);
    if (moveEle === 4) { // 播放指针
      if (pointerX <= dragConX && differ <= 0) this.pointerEle.style.left = `${dragConX}px`; // 移到最左边
      else if (pointerX >= maskRX && differ >= 0) this.pointerEle.style.left = `${maskRX}px`; // 移到最右边
      else this.pointerEle.style.left = `${pointerX + differ < 0 ? 0 : pointerX + differ}px`;
      return;
    }
    if (moveEle === 1) { // 拉伸左边滑块
      if (dragConWidth <= 5 && differ >= 0) return;
      if (
        (pointerX - dragConX < ADSORB_DISTANCE && differ > 0 && pointerX - dragConX > 0) || // 滑块向右移动，吸附效果
        (dragConX - pointerX < ADSORB_DISTANCE && differ < 0 && dragConX - pointerX > 0) // 滑块向左移动，吸附
        ) {
        this.setTime();
        this.maskLeft.style.width = `${pointerX - 16 < 0 ? 0 : pointerX - 16}px`;
        this.dragCon.style.width = `${dragConR - pointerX < 0 ? 0 : dragConR - pointerX}px`;
      } else {
        let { left: dragRX } = this.dragRight.getBoundingClientRect();
        dragRX = Math.round(dragRX);
        if (dragRX - 16 <= maskLWidth + differ) this.maskLeft.style.width = `${dragRX - 16}px`;
        else this.maskLeft.style.width = `${maskLWidth + differ < 0 ? 0 : maskLWidth + differ}px`;
        this.dragCon.style.width = `${dragConWidth - differ < 5 ? 5 : dragConWidth - differ}px`;
      }
    } else if (moveEle === 2) { // 滑块整体移动
      if ((maskRWidth <= 0 && differ >= 0) || (maskLWidth <= 0 && differ <= 0)) return; // 一端处于边缘位置，禁止向边缘位置滑动
      if ( // 左侧切刀临近播放指针
        (pointerX - dragConX < ADSORB_DISTANCE && differ > 0 && pointerX - dragConX > 0 && maskRWidth >= pointerX - dragConX) || // 滑块向右移动，吸附效果
        (dragConX - pointerX < ADSORB_DISTANCE && differ < 0 && dragConX - pointerX > 0) // 滑块向左移动，吸附
        ) {
        this.setTime();
        this.maskLeft.style.width = `${pointerX - 16 < 0 ? 0 : pointerX - 16}px`;
      } else if (
        (maskRX - pointerX < ADSORB_DISTANCE && differ < 0 && maskRX - pointerX > 0) || // 滑块向左移动，吸附效果
        (pointerX - maskRX < ADSORB_DISTANCE && differ > 0 && pointerX - maskRX > 0) // 滑块向右移动，吸附
      ) { // 右侧切刀临近播放指针
        this.setTime();
        this.maskLeft.style.width = `${pointerX - 16 - dragConWidth < 0 ? 0 : pointerX - 16 - dragConWidth}px`;
      } else {
        this.maskLeft.style.width = `${maskLWidth + differ < 0 ? 0 : maskLWidth + differ}px`;
      }
    } else if (moveEle === 3) { // 拉伸右边滑块
      if (dragConWidth <= 5 && differ <= 0) return;
      if (
        (maskRX - pointerX < ADSORB_DISTANCE && maskRX - pointerX > 0 && differ < 0) || // 右侧切刀向左拉伸
        (pointerX - maskRX < ADSORB_DISTANCE && pointerX - maskRX > 0 && differ > 0) // 右侧切刀向右拉伸
      ) {
        this.setTime();
        this.dragCon.style.width = `${pointerX - maskLWidth - 16 < 0 ? 0 : pointerX - maskLWidth - 16}px`;
      } else {
        this.dragCon.style.width = `${dragConWidth + differ < 5 ? 5 : dragConWidth + differ}px`;
      }
    }
  }

  // 每5格显示一个时间
  renderTimeItem = () => {
    const { axisItemWidth } = this.state;
    const { videoInfo } = this.props;
    const { length: videoLen } = videoInfo;
    const result = [];
    const length = (AXIS / 5);
    const itemTime = videoLen / length;
    for (let i = 0; i < length; i += 1) {
      result.push(
        <TimeItem key={i} left={axisItemWidth * i * 5}>{timeToMSecond(itemTime * i)}</TimeItem>
      );
    }
    return result;
  }

  // 时间刻度
  renderScaleItem = () => {
    const { axisItemWidth } = this.state;
    const result = [];
    for (let i = 0; i <= AXIS; i += 1) {
      result.push(<ScalePItem left={axisItemWidth * i} key={i} />);
    }
    return result;
  }

  // 渲染最底层图片
  renderBaseImgs = () => {
    const { imgCounts } = this.state;
    const { videoInfo, videoPlayerEl } = this.props;
    const { id, cover } = videoInfo;
    const { thumb } = videoPlayerEl;
    const result = [];
    // const thumbSize = Math.ceil(length / PER_IMG_SECONDS);
    for (let i = 0; i < imgCounts; i += 1) {
      // const iThumb = 1 + i / counts * thumbSize;
      let coverImg = `${cover}?x-oss-process=image/resize,m_pad,w_100,h_56,color_000000`;
      if (thumb > 0) coverImg = `https://image.clip.cn/thumbseq/single_edit_${id}_${Math.floor(i + 1)}.png?x-oss-process=image/resize,m_pad,w_100,h_56,color_000000`;
      result.push(<BaseImg url={coverImg} key={i} />);
    }
    return result;
  }

  render() {
    const { pxWith1s } = this.state;
    const { effectVideo, videoPlayerEl } = this.props;
    const { currentTime } = videoPlayerEl;
    const { startTime, endTime } = effectVideo;
    return (
      <Wrap>
        <PointerAxis>
          <Pointer
            style={{ left: `${Math.round((currentTime + startTime) * pxWith1s) + 16}px` }}
            onMouseDown={(e) => this.handleMouseDown(e, 4)}
            innerRef={(ele) => { this.pointerEle = ele; }}
          >
            <PointerCursorImgDiv src={imgPointerRuler} />
          </Pointer>
        </PointerAxis>
        <TimeAxis innerRef={(ele) => { this.axisEle = ele; }} onClick={this.handleClickPointer}>
          <TimeP>{this.renderTimeItem()}</TimeP>
          <ScaleP>{this.renderScaleItem()}</ScaleP>
        </TimeAxis>
        <DragAxis>
          <DragWrap>
            <BaseContainer>{this.renderBaseImgs()}</BaseContainer>
            <DragContainer>
              <DragMaskLeft
                style={{ width: Math.round(pxWith1s * startTime) }}
                // width={pxWith1s * start}
                innerRef={(ele) => { this.maskLeft = ele; }}
              />
              <DragEle
                style={{ width: Math.round(pxWith1s * (endTime - startTime)) }}
                // width={pxWith1s * (end - start)}
                onMouseDown={(e) => this.handleMouseDown(e, 2)}
                innerRef={(ele) => { this.dragCon = ele; }}
              >
                <DragIconL onMouseDown={(e) => this.handleMouseDown(e, 1)} />
                <DragIconR onMouseDown={(e) => this.handleMouseDown(e, 3)} innerRef={(ele) => { this.dragRight = ele; }} />
              </DragEle >
              <DragMaskRight innerRef={(ele) => { this.maskRight = ele; }} />
            </DragContainer>
          </DragWrap>
        </DragAxis>
      </Wrap>
    );
  }
}

Track.propTypes = {
  videoInfo: PropTypes.object.isRequired,
  effectVideo: PropTypes.object.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  // trackInfo: PropTypes.object,

  onChangeEffectVideo: PropTypes.func,
  onChangeVideoPlay: PropTypes.func,
  onFetchThumbNb: PropTypes.func,
};

export default Track;
