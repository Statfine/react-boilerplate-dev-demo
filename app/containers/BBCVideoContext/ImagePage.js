import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

/*
  * 图片播放基础
*/
export default class BbcImage extends PureComponent {
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

  init = () => {
    const node = this.ctx.image('http://123.206.18.31/static/video/v1.png', 4);
    node.startAt(0);
    node.stopAt(10);
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
