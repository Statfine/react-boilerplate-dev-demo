import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import styled from 'styled-components';
import VideoContext from './plugin2/videocontext.commonjs2';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

/*
* 马赛克
*/
const Option = Select.Option;
export default class Mosaic extends PureComponent {
  state = {
    duration: 0,
    currentTime: 0,

    sourceIndex: 0, // 视频
    source: [
      { src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/0589613e-a77b-4680-8505-8b86a5a12b58.mp4', w: '480', h: '480' }, // 左右补边
      { src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/60225ef0-820c-451c-9334-62056e09a71c.mp4', w: '480', h: '360' }, // 左右补边
      { src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/42ce2e5c-199f-4c45-b79b-ca8fdf7ba3ce.mp4', w: '3072', h: '768' }, // 上下补边
      { src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/14abd6e4-a302-4729-8a53-2ae1cbab440c.mp4', w: '1280', h: '720' }, // 水平正常
      { src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640' }, // 垂直正常
    ],

    canvasIndex: 0, // 尺寸
    canvasSize: [[576, 326], [183, 326]],

    cropIndex: 0, // 裁剪
    cropSize: [
      [0, 0, 1, 1], // 不做裁剪
      [0.5, 0.5, 0.5, 0.5],  // 右下角1/4
      [0, 0, 1, 0.5], // 顶部一半 1/2
      [0, 0, 0.5, 1], // 左侧一半 1/2
    ],

    mosaicTpye: 1, // 1 2马赛克类型
    mosaicIndex: 0, // 马赛克
    mosaicSize: [
      [0.0, 0.0, 0, 0], // 无
      [0.0, 0.0, 0.5, 0.5], // 左上角1/4
      [0.5, 0.5, 0.5, 0.5],  // 右下角1/4
      [0, 0, 1, 0.5], // 顶部一半 1/2
      [0, 0, 0.5, 1], // 左侧一半 1/2
    ],
  };

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    this.ctx = new VideoContext(canvas);
    this.clearRegister();
  }

  // 销毁
  componentWillUnmount() {
    clearInterval(this.timeIn);
    this.ctx.reset();
  }

  // 注册初始化
  clearRegister = () => {
    const { canvasIndex, canvasSize } = this.state;
    this.ctx.width = canvasSize[canvasIndex][0];
    this.ctx.height = canvasSize[canvasIndex][1];
    this.ctx.reset();
    this.ctx.registerCallback('stalled', () => { console.log('====>Playback endedPlayback stalled'); });
    this.ctx.registerCallback('ended', () => { console.log('====>Playback ended'); clearInterval(this.timeIn); this.ctx.currentTime = 0; this.setState({ currentTime: 0 }); });
    // this.ctx.registerCallback('update', () => { console.log('====>Playback update'); });
    this.ctx.registerTimelineCallback(15, () => { console.log('====>Playback registerTimelineCallback'); });
    this.init();
  }

  ctx;
  timeIn;

  /*
  * 初始化node对象
  * 当尺寸不等于  16：9 的时候需要添加模糊变((16 / 9).toFixed(2) !== (width / height).toFixed(2))
  */
  init = () => {
    const {
      source, sourceIndex,  // 资源
      mosaicSize, mosaicIndex, // 马赛克
      canvasSize, canvasIndex, // 裁剪尺寸
      cropSize, cropIndex, // 裁剪
    } = this.state;
    const obj = source[sourceIndex];
    const node = this.ctx.video(obj.src, 0, 0, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    node.startAt(0);
    node.stopAt(10);
    node.registerCallback('load', () => { console.log('====>video1 is loading'); });
    node.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    node.registerCallback('play', () => { console.log('====>video1 is playing'); });
    node.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    node.registerCallback('ended', () => { console.log('====>video1 has eneded'); });
    node.registerCallback('error', () => { console.log('====>video1 has error'); });
    // node.registerCallback('render', () => { console.log('====>video1 has render', this.ctx.state, VideoContext.STATE.STALLED); });

    /**
    * 马赛克
    * mode - 类型  1  2
    * vw - 原始视频宽度
    * vh - 原始视频高度
    * rects -  [0.0, 0.0, 0.5, 0.5] 百分比
    */
    const mosaicOpts = {
      mode: this.state.mosaicTpye,
      vw: obj.w,
      vh: obj.h,
      // rects: [
      //   [0.0, 0.0, 0.5, 0.5],
      // ],
      rects: [mosaicSize[mosaicIndex]],
    };
    const mosaicNode = this.ctx.mosaicNode(node, mosaicOpts);

    /**
    * 裁剪 （单位百分占比）
    * 1 - 水平偏移（百分占比）
    * 2 - 垂直偏移（百分占比）
    * 3 - 资源（视频）元素宽（百分占比）
    * 4 - 资源（视频）元素高（百分占比）
    */
    const cropFade = this.ctx.transition(VideoContext.DEFINITIONS.CROP); // 渐显
    // cropFade.rect = [0, 0, 1, 1];
    cropFade.rect = cropSize[cropIndex];
    mosaicNode.connect(cropFade);

    /**
    * 补边   如果有裁剪，资源的宽高需要随裁剪的变化
    * ow - canvas宽
    * oh - canvas高
    * vw - 资源（视频）元素宽
    * vh - 资源（视频）元素高
    */
    const paddingOpts = {
      ow: canvasSize[canvasIndex][0],
      oh: canvasSize[canvasIndex][1],
      vw: obj.w * (cropSize[cropIndex][2] || 1), // 视频真实尺寸宽  默认为1 没有裁剪
      vh: obj.h * (cropSize[cropIndex][3] || 1), // 视频真实尺寸高  默认为1 没有裁剪
    };
    const padding = this.ctx.paddingNode(cropFade, paddingOpts);
    padding.connect(this.ctx.destination);

    this.setState({ duration: this.ctx.duration });
  }

  handlePlay = () => {
    this.ctx.play();
    this.videoPlayer.play();
    this.timeIn = setInterval(this.drawVideo, 200);
  }

  drawVideo = () => {
    this.setState({ currentTime: this.ctx.currentTime.toFixed(2) });
  }

  handlePause = () => {
    this.ctx.pause();
    this.videoPlayer.pause();
    clearInterval(this.timeIn);
  }

  handleSeek = () => {
    this.ctx.currentTime = 5;
    this.videoPlayer.currentTime = 5;
  }

  //  尺寸修改
  handleChangeCanvasSize = (canvasIndex) => this.setState({ canvasIndex }, () => this.clearRegister());
  //  视频修改
  handleChangeSrc = (sourceIndex) => this.setState({ sourceIndex }, () => this.clearRegister());
  //  裁边修改
  handleChangeCrop = (cropIndex) => this.setState({ cropIndex }, () => this.clearRegister());
  //  马赛克类型
  handleMosaicType = (mosaicTpye) => this.setState({ mosaicTpye }, () => this.clearRegister());
  handleMosaicSize = (mosaicIndex) => this.setState({ mosaicIndex }, () => this.clearRegister());

  renderSelect = () => (
    <div>
      <FlexDiv>
        <p>横竖屏切换:</p>
        <Select value={this.state.canvasIndex} style={{ width: 150 }} onChange={this.handleChangeCanvasSize}>
          <Option value={0}>横屏</Option>
          <Option value={1}>竖屏</Option>
        </Select>
      </FlexDiv>
      <FlexDiv>
        <p>添加补边(切换视频尺寸):</p>
        <Select value={this.state.sourceIndex} style={{ width: 150 }} onChange={this.handleChangeSrc}>
          <Option value={0}>水平补边</Option>
          <Option value={1}>水平补边</Option>
          <Option value={2}>垂直补边</Option>
          <Option value={3}>水平正常视频</Option>
          <Option value={4}>垂直正常视频</Option>
        </Select>
      </FlexDiv>
      <FlexDiv>
        <p>设置裁剪:</p>
        <Select value={this.state.cropIndex} style={{ width: 150 }} onChange={this.handleChangeCrop}>
          <Option value={0}>不做裁剪</Option>
          <Option value={1}>右下角1/4</Option>
          <Option value={2}>顶部一半 1/2</Option>
          <Option value={3}>左侧一半 1/2</Option>
        </Select>
      </FlexDiv>
      <FlexDiv>
        <p>马赛克类型:</p>
        <Select value={this.state.mosaicTpye} style={{ width: 150 }} onChange={this.handleMosaicType}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
        </Select>
        <p>马赛克位置:</p>
        <Select value={this.state.mosaicIndex} style={{ width: 150 }} onChange={this.handleMosaicSize}>
          <Option value={0}>无马赛克</Option>
          <Option value={1}>左上角1/4</Option>
          <Option value={2}>右下角1/4</Option>
          <Option value={3}>顶部一半 1/2</Option>
          <Option value={4}>左侧一半 1/2</Option>
        </Select>
      </FlexDiv>
    </div>
  )

  render() {
    const { currentTime, duration, source, sourceIndex, canvasSize, canvasIndex } = this.state;
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>绘画CANVAS</p>
            <canvas
              id="canvas"
              width={canvasSize[canvasIndex][0]}
              height={canvasSize[canvasIndex][1]}
            />
          </div>
          <div>
            <p style={{ textAlign: 'center', fontSize: '24px' }}>原始video</p>
            <video
              ref={(el) => (this.videoPlayer = el)}
              width={canvasSize[canvasIndex][0]}
              height={canvasSize[canvasIndex][1]}
              src={source[sourceIndex].src}
            />
          </div>
        </div>
        <div>时间:{currentTime}/{duration}</div>
        {this.renderSelect()}
        <div>
          <Button type="primary" size="large" onClick={this.handlePlay}>播放</Button>
          <Button type="primary" size="large" onClick={this.handlePause}>暂停</Button>
          <Button type="primary" size="large" onClick={this.handleSeek}>seek 5</Button>
        </div>
      </div>
    );
  }
}
