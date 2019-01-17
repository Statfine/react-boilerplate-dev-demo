import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';
import TestVideoOne from './test.mp4';
import TestVideoTwo from './nba.mp4';

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
    const playRate = 1; // 0.5 2
    this.ctx.playbackRate = playRate;
    const node1 = this.ctx.video(TestVideoOne, 0, 4, { volume: 0.8, loop: false, playbackRate: playRate });
    node1.startAt(0);
    node1.stopAt(10);

    const node2 = this.ctx.video(TestVideoTwo, 0, 4, { volume: 0.8, loop: false, playbackRate: playRate });
    node2.startAt(7);
    node2.stopAt(17);
    console.log(`Duration: ${this.ctx.duration}`);

    const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE); // 渐显
    const crossFade1 = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE); // 渐显
    const crossFade2 = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE); // 渐显

    /**
     * 中间转场
     *
     * 视频1链接特效
     * 视频2链接特效
     * 特效链接videocontext
     * 特效链接设置时间和效果
     */
    if (false) {
      node1.connect(crossFade);
      node2.connect(crossFade);
      crossFade.connect(this.ctx.destination);
      crossFade.transition(7, 10, 0.0, 1.0);
    }

    /**
     * 开始渐显+中间转场
     *
     * 视频1链接特效
     * 特效链接设置时间和效果 （渐显）
     * 特效链接特效1
     * 视频2链接特效1
     * 特效链接videocontext
     * 特效链接设置时间和效果
     *
     */
    if (false) {
      node1.connect(crossFade); // connect to input of crossfade2 rather than destination.
      crossFade.transition(0, 2, 1.0, 0.0);  // 渐显

      crossFade.connect(crossFade1);
      node2.connect(crossFade1);
      crossFade1.connect(this.ctx.destination);
      crossFade1.transition(7, 10, 0.0, 1.0);
    }

    /**
     * 开始渐显+中间转场+结束渐隐
     *
     * 视频1链接特效
     * 特效链接设置时间和效果 （渐显）
     *
     * 特效链接特效1
     * 视频2链接特效1
     * 特效1链接设置时间和效果 （渐显）
     *
     * 特效1链接特效2
     * 特效2链接videocontext
     * 特效2链接设置时间和效果
     *
     */
    if (true) {
      node1.connect(crossFade); // connect to input of crossfade2 rather than destination.
      crossFade.transition(0, 2, 1.0, 0.0);  // 渐显

      crossFade.connect(crossFade1);
      node2.connect(crossFade1);
      crossFade1.transition(7, 10, 0.0, 1.0);

      crossFade1.connect(crossFade2);
      crossFade2.connect(this.ctx.destination);
      crossFade2.transition(15, 17, 0.0, 1.0);  // 渐隐
    }


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
