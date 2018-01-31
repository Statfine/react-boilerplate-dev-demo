import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

/*
  * 基础
*/
export default class VideoTransVideo extends PureComponent {
  state = {
    duration: 0,
    currentTime: 0,
  };

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    this.ctx = new VideoContext(canvas);
    this.ctx.registerCallback('stalled', () => { console.log('====>Playback endedPlayback stalled'); });
    this.ctx.registerCallback('ended', () => { console.log('====>Playback ended'); clearInterval(this.timeIn); this.ctx.currentTime = 0; this.setState({ currentTime: 0 }); });
    this.ctx.registerTimelineCallback(15, () => { console.log('====>Playback registerTimelineCallback'); });
    this.init();
  }

  componentWillUnmount() {
    clearInterval(this.timeIn);
    this.ctx.reset();
  }

  ctx;
  timeIn;

  /*
  * 初始化node对象
  * 第一个参数为 资源
  * 第二个参数为 从视频的某个时间开始播放
  * 第三个参数为 提前缓冲时长
  *  startAt 再绝对时间的开始时间    stopAt再绝对时间的结束时间

  * transition   转场 开始时间 结束时间 开始强度 结束强度 类型
  */
  init = () => {
    const node = this.ctx.video('http://123.206.18.31/static/video/v2.mp4', 0, 4, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    node.startAt(0);
    node.stopAt(10);
    node.registerCallback('load', () => { console.log('====>video1 is loading'); });
    node.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    node.registerCallback('play', () => { console.log('====>video1 is playing'); });
    node.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    node.registerCallback('ended', () => { console.log('====>video1 has eneded'); });

    const videoNode2 = this.ctx.video('http://123.206.18.31/static/video/v1.mp4', 0, 4, { volume: 0.8, loop: false });
    videoNode2.start(6);
    videoNode2.stop(16);
    videoNode2.registerCallback('load', () => { console.log('====>video2 is loading'); });
    videoNode2.registerCallback('loaded', () => { console.log('====>video2 is loaded'); });
    videoNode2.registerCallback('play', () => { console.log('====>video2 is playing'); });
    videoNode2.registerCallback('durationchange', () => { console.log('====>video2 is durationchange'); });
    videoNode2.registerCallback('ended', () => { console.log('====>video2 has eneded'); });

    // node.connect(this.ctx.destination);
    // videoNode2.connect(this.ctx.destination);

    const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
    crossFade.transition(6, 10, 0.0, 1.0, 'mix');
    node.connect(crossFade);
    videoNode2.connect(crossFade);
    crossFade.connect(this.ctx.destination);

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

  render() {
    const { currentTime, duration } = this.state;
    return (
      <div>
        <canvas id="canvas" width="420" height="240"></canvas>
        <div>{currentTime}/{duration}</div>
        <div>
          <Button type="primary" size="large" onClick={this.handlePlay}>播放</Button>
          <Button type="primary" size="large" onClick={this.handlePause}>暂停</Button>
          <Button type="primary" size="large" onClick={this.handleSeek}>seek 5</Button>
        </div>
      </div>
    );
  }
}
