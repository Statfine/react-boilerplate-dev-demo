import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

/*
  * 基础
*/
export default class BbcVideo extends PureComponent {
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
  * 倍数
  *  const playRate = 1; // 0.5 2
  *  this.ctx.playbackRate = playRate;
  *  const node = this.ctx.video(src, 0, 4, { volume: 0.8, loop: false,   playbackRate: playRate });
  */
  init = () => {
    // 绝对时间是 0秒开始  10秒结束
    const playRate = 0.5; // 0.5 2
    this.ctx.playbackRate = playRate;
    const node = this.ctx.video('http://39.108.60.29/static/video/v2.mp4', 0, 4, { volume: 0.8, loop: false, playbackRate: playRate });
    node.startAt(0);
    node.stopAt(15);
    console.log(`Duration: ${this.ctx.duration}`);

    node.registerCallback('load', () => { console.log('====>video is loading'); });
    node.registerCallback('loaded', () => { console.log('====>video is loaded'); });
    node.registerCallback('play', () => { console.log('====>video is playing'); });
    node.registerCallback('durationchange', () => { console.log('====>video is durationchange'); });
    node.registerCallback('ended', () => { console.log('====>video has eneded'); });

    node.connect(this.ctx.destination);
    this.setState({ duration: this.ctx.duration });
  }

  handlePlay = () => {
    this.ctx.play();
    this.timeIn = setInterval(this.drawVideo, 60);
  }

  drawVideo = () => {
    console.log(this.ctx.currentTime, this.ctx.currentTime.toFixed(2));
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
