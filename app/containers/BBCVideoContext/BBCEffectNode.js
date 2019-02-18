import React, { PureComponent } from 'react';
import { Button } from 'antd';
import VideoContext from 'videocontext';

/*
  * 基础
*/

const monochromeDescription = {
  title: 'Monochrome',
  description:
    'Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.',
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
      uniform vec3 inputMix;\
      uniform vec3 outputMix;\
      varying vec2 v_texCoord;\
      varying float v_mix;\
      void main(){\
          vec4 color = texture2D(u_image, v_texCoord);\
          float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\
          color[0] = mono * outputMix[0];\
          color[1] = mono * outputMix[1];\
          color[2] = mono * outputMix[2];\
          gl_FragColor = color;\
      }',
  properties: {
    inputMix: { type: 'uniform', value: [0.4, 0.6, 0.2] },
    outputMix: { type: 'uniform', value: [1.0, 1.0, 1.0] },
  },
  inputs: ['u_image'],
};
export default class BBCEffectNode extends PureComponent {
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
    const videoNode = this.ctx.video('http://39.108.60.29/static/video/v2.mp4', 0, 4, { volume: 0.8, loop: false });
    videoNode.startAt(0);
    videoNode.stopAt(60);
    videoNode.registerCallback('load', () => { console.log('====>video1 is loading'); });
    videoNode.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    videoNode.registerCallback('play', () => { console.log('====>video1 is playing'); });
    videoNode.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    videoNode.registerCallback('ended', () => { console.log('====>video1 has eneded'); });

    const sepiaEffect = this.ctx.effect(monochromeDescription);
    sepiaEffect.outputMix = [1.25, 1.18, 0.9];

    // node.connect(this.ctx.destination);
    videoNode.connect(sepiaEffect);
    sepiaEffect.connect(this.ctx.destination);

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
