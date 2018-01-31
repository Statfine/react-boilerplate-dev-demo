import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

const combineDecription = {
  title: 'Combine',
  description:
    'A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.',
  vertexShader:
    '\
      attribute vec2 a_position;\
      attribute vec2 a_texCoord;\
      varying vec2 v_texCoord;\
      void main() {\
          gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
          v_texCoord = a_texCoord;\
      }',
  fragmentShader:
    '\
      precision mediump float;\
      uniform sampler2D u_image;\
      varying vec2 v_texCoord;\
      varying float v_mix;\
      void main(){\
          vec4 color = texture2D(u_image, v_texCoord);\
          gl_FragColor = color;\
      }',
  properties: {},
  inputs: ['u_image'],
};
/*
  * 基础
*/
export default class BBCCompositingNode extends PureComponent {
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
  */
  init = () => {
    const videoNode1 = this.ctx.video('http://123.206.18.31/static/video/v1.mp4', 0, 4, { volume: 0.8, loop: false });
    // 再绝对时间是的 0秒开始  10秒结束
    videoNode1.startAt(0);
    videoNode1.stopAt(10);
    videoNode1.registerCallback('load', () => { console.log('====>video1 is loading'); });
    videoNode1.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    videoNode1.registerCallback('play', () => { console.log('====>video1 is playing'); });
    videoNode1.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    videoNode1.registerCallback('ended', () => { console.log('====>video1 has eneded'); });

    const videoNode2 = this.ctx.video('http://123.206.18.31/static/video/v2.mp4', 0, 4, { volume: 0.8, loop: false });
    videoNode2.start(10);
    videoNode2.stop(20);
    videoNode2.registerCallback('load', () => { console.log('====>video2 is loading'); });
    videoNode2.registerCallback('loaded', () => { console.log('====>video2 is loaded'); });
    videoNode2.registerCallback('play', () => { console.log('====>video2 is playing'); });
    videoNode2.registerCallback('durationchange', () => { console.log('====>video2 is durationchange'); });
    videoNode2.registerCallback('ended', () => { console.log('====>video2 has eneded'); });

    const combineEffect = this.ctx.compositor(combineDecription);
    videoNode1.connect(combineEffect);
    videoNode2.connect(combineEffect);

    combineEffect.connect(this.ctx.destination);

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
