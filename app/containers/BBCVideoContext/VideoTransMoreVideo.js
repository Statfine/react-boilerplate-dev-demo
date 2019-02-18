import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

/*
  * 基础
*/
export default class VideoTransMoreVideo extends PureComponent {
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
    const videoNode1 = this.ctx.video('http://39.108.60.29/static/video/v2.mp4', 0, 4, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    videoNode1.startAt(0);
    videoNode1.stopAt(10);
    videoNode1.registerCallback('load', () => { console.log('====>video1 is loading'); });
    videoNode1.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    videoNode1.registerCallback('play', () => { console.log('====>video1 is playing'); });
    videoNode1.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    videoNode1.registerCallback('ended', () => { console.log('====>video1 has eneded'); });

    const videoNode2 = this.ctx.video('http://39.108.60.29/static/video/v1.mp4', 0, 4, { volume: 0.8, loop: false });
    videoNode2.start(6);
    videoNode2.stop(16);
    videoNode2.registerCallback('load', () => { console.log('====>video2 is loading'); });
    videoNode2.registerCallback('loaded', () => { console.log('====>video2 is loaded'); });
    videoNode2.registerCallback('play', () => { console.log('====>video2 is playing'); });
    videoNode2.registerCallback('durationchange', () => { console.log('====>video2 is durationchange'); });
    videoNode2.registerCallback('ended', () => { console.log('====>video2 has eneded'); });

    const videoNode3 = this.ctx.video('http://39.108.60.29/static/video/v2.mp4', 8, 4, { volume: 0.8, loop: false });
    videoNode3.startAt(14);
    videoNode3.stopAt(24);
    videoNode3.registerCallback('load', () => { console.log('====>video3 is loading'); });
    videoNode3.registerCallback('loaded', () => { console.log('====>video3 is loaded'); });
    videoNode3.registerCallback('play', () => { console.log('====>video3 is playing'); });
    videoNode3.registerCallback('durationchange', () => { console.log('====>video3 is durationchange'); });
    videoNode3.registerCallback('ended', () => { console.log('====>video3 has eneded'); });

    const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
    crossFade.transition(6, 10, 0.0, 1.0, 'mix');
    videoNode1.connect(crossFade);
    videoNode2.connect(crossFade);

    const crossFade2 = this.ctx.transition(VideoContext.DEFINITIONS.HORIZONTAL_WIPE); // 渐显
    crossFade2.transition(14, 16, 0.0, 1.0, 'mix');
    crossFade.connect(crossFade2);
    videoNode3.connect(crossFade2);

    crossFade2.connect(this.ctx.destination);

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
    this.setState({ currentTime: 5 });
  }

  render() {
    const { currentTime, duration } = this.state;
    return (
      <div>
        <p>第三个视频的开始播放画面延续第一个视频的画面</p>
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
