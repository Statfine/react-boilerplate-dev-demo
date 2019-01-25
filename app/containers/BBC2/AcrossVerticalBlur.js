import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import VideoContext from './plugin2/videocontext.commonjs2';

/*
* 横竖屏+补模糊边
* 横屏 576  326
* 竖屏 183  326
*/
const Option = Select.Option;
export default class AcrossVerticalBlur extends PureComponent {
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
    const { source, sourceIndex, canvasIndex, canvasSize } = this.state;
    const obj = source[sourceIndex];
    const node = this.ctx.video(obj.src, 0, 4, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    node.startAt(0);
    node.stopAt(10);
    node.registerCallback('load', () => { console.log('====>video1 is loading'); });
    node.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    node.registerCallback('play', () => { console.log('====>video1 is playing'); });
    node.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    node.registerCallback('ended', () => { console.log('====>video1 has eneded'); });

    /**
    *
    * ow - canvas宽
    * oh - canvas高
    * vw - 资源（视频）元素宽
    * vh - 资源（视频）元素高
    */
    const paddingOpts = {
      ow: canvasSize[canvasIndex][0],
      oh: canvasSize[canvasIndex][1],
      vw: obj.w, // 视频真实尺寸宽
      vh: obj.h, // 视频真实尺寸高
    };
    const padding = this.ctx.paddingNode(node, paddingOpts);
    padding.connect(this.ctx.destination);

    this.setState({ duration: this.ctx.duration });
  }

  handlePlay = () => {
    this.ctx.play();
    this.timeIn = setInterval(this.drawVideo, 200);
  }

  drawVideo = () => {
    this.setState({ currentTime: this.ctx.currentTime.toFixed(2) });
  }

  handlePause = () => {
    this.ctx.pause();
    clearInterval(this.timeIn);
  }

  handleSeek = () => {
    this.ctx.currentTime = 5;
  }

  // 尺寸修改
  handleChangeCanvasSize = (canvasIndex) => {
    this.setState({ canvasIndex }, () => this.clearRegister());
  }
  //  视频修改
  handleChangeSrc = (sourceIndex) => {
    this.setState({ sourceIndex }, () => this.clearRegister());
  }

  render() {
    const { currentTime, duration, sourceIndex, canvasSize, canvasIndex } = this.state;
    return (
      <div>
        <canvas id="canvas" width={canvasSize[canvasIndex][0]} height={canvasSize[canvasIndex][1]}></canvas>
        <div>{currentTime}/{duration}</div>
        <div>
          <Button type="primary" size="large" onClick={this.handlePlay}>播放</Button>
          <Button type="primary" size="large" onClick={this.handlePause}>暂停</Button>
          <Button type="primary" size="large" onClick={this.handleSeek}>seek 5</Button>
        </div>
        <Select value={canvasIndex} style={{ width: 120 }} onChange={this.handleChangeCanvasSize}>
          <Option value={0}>横屏</Option>
          <Option value={1}>竖屏</Option>
        </Select>
        <Select value={sourceIndex} style={{ width: 120 }} onChange={this.handleChangeSrc}>
          <Option value={0}>水平补边</Option>
          <Option value={1}>水平补边</Option>
          <Option value={2}>垂直补边</Option>
          <Option value={3}>水平正常视频</Option>
          <Option value={4}>垂直正常视频</Option>
        </Select>
      </div>
    );
  }
}
