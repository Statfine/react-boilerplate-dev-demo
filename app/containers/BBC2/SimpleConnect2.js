import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import VideoContext from './plugin2/videocontext.commonjs2';

/*
* 视频链接
* 简单的视屏拼接
*/
const Option = Select.Option;
export default class SimpleConnect extends PureComponent {
  state = {
    duration: 0,
    currentTime: 0,

    sourceList: [
      // { type: 'transition', position: 'right', duration: 3 },
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/49908875-9691-422a-ac80-bd3de781753f/e350c026-7a39-48d5-a17f-6a3878fb1ca6.mp4', w: '852', h: '480', length: 10, end: 10, start: 0 }, // bna
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/49908875-9691-422a-ac80-bd3de781753f/102822e2-5270-499d-8672-0ae0d943c267.mp4', w: '852', h: '480', length: 10, end: 10, start: 0 }, // 垂直正常
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 }, // 垂直正常
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 }, // 垂直正常
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/60225ef0-820c-451c-9334-62056e09a71c.mp4', w: '480', h: '360', length: 10, end: 10, start: 0 }, // 左右补边
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/42ce2e5c-199f-4c45-b79b-ca8fdf7ba3ce.mp4', w: '3072', h: '768', length: 10, end: 10, start: 0 }, // 上下补边
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/14abd6e4-a302-4729-8a53-2ae1cbab440c.mp4', w: '1280', h: '720', length: 10, end: 10, start: 0 }, // 水平正常
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/0589613e-a77b-4680-8505-8b86a5a12b58.mp4', w: '480', h: '480', length: 10, end: 10, start: 0 }, // 左右补边
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
    const {
      sourceList, // 资源
      canvasSize, canvasIndex,
    } = this.state;

    const obj1 = sourceList[0];
    const node1 = this.ctx.video(obj1.src, 0, 0, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    node1.startAt(0);
    node1.stopAt(10);
    node1.registerCallback('load', () => { console.log('====>video1 is loading'); });
    node1.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    node1.registerCallback('play', () => { console.log('====>video1 is playing'); });
    node1.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    node1.registerCallback('ended', () => { console.log('====>video1 has eneded'); });
    const nodePadding1 = this.nodePadding(node1, sourceList[0]); // 补边添加

    // 特效一   开始转场
    // const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
    // crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
    // nodePadding1.connect(crossFade); // connect to input of crossfade2 rather than destination.
    // crossFade.transition(0, 2, 1.0, 0.0);  // 渐显
    // crossFade.connect(this.ctx.destination);

    // 特效二   中间转场
    const obj2 = sourceList[0];
    const node2 = this.ctx.video(obj2.src, 0, 3, { volume: 0.8, loop: false });
    node2.startAt(7);
    node2.stopAt(17);
    node2.registerCallback('load', () => { console.log('====>video1 is loading'); });
    node2.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    node2.registerCallback('play', () => { console.log('====>video1 is playing'); });
    node2.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    node2.registerCallback('ended', () => { console.log('====>video1 has eneded'); });
    const nodePadding2 = this.nodePadding(node2, sourceList[1]); // 补边添加

    const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.FADE);
    crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
    nodePadding1.connect(crossFade);
    nodePadding2.connect(crossFade);

    crossFade.connect(this.ctx.destination);
    crossFade.transition(7, 10, 0.0, 1.0, 'progress');

    this.setState({ duration: this.ctx.duration });
  }

  /**
  * 补边
  * ow - canvas宽
  * oh - canvas高
  * vw - 资源（视频）元素宽
  * vh - 资源（视频）元素高
  */
  nodePadding = (videoNode, videoInfo) => {
    const { canvasIndex, canvasSize } = this.state;
    const paddingOpts = {
      ow: canvasSize[canvasIndex][0],
      oh: canvasSize[canvasIndex][1],
      vw: videoInfo.w, // 视频真实尺寸宽
      vh: videoInfo.h, // 视频真实尺寸高
    };
    const nodePadding = this.ctx.paddingNode(videoNode, paddingOpts);
    return nodePadding;
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

  render() {
    const { currentTime, duration, canvasSize, canvasIndex } = this.state;
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
      </div>
    );
  }
}
