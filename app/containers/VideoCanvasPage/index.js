import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
`;

const Video = styled.video`
  width: 600px;
  height: 450px;
`;

export default class VideoCanvaspage extends PureComponent {
  state = {
    src: '',
    srcTwo: '',
  };

  timer = '';
  handlePlay = () => {
    if (this.video.paused) {
      this.video.play();
      this.handleDrawVideo();
    } else {
      this.video.pause();
      this.handleCancelDrawVideo();
    }
  }
  handleDrawVideo = () => {
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    canvas.width = 600;
    canvas.height = 450;
    canvas.getContext('2d').drawImage(video, 0, 0, 600, 450);
    this.hangdleCutCover();
    this.hangdleCutChangeCover();
    this.timer = requestAnimationFrame(this.handleDrawVideo);
  }
  hangdleCutCover = () => {
    const canvas = document.createElement('canvas');
    const video = this.video;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    this.setState({ src: canvas.toDataURL() });
  }
  hangdleCutChangeCover = () => {
    const canvas = document.createElement('canvas');
    const video = this.video;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    // canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    const c = ctx.getImageData(0, 0, video.videoWidth, video.videoHeight);
    // chrome浏览器报错，ie浏览器报安全错误信息，原因往下看
    for (let i = 0; i < c.height; i += 1) {
      for (let j = 0; j < c.width; j += 1) {
        const x = ((i * 4) * c.width) + (4 * j);  // imagedata读取的像素数据存储在data属性里，是从上到下，从左到右的，每个像素需要占用4位数据，分别是r,g,b,alpha透明通道
        const r = c.data[x];
        const g = c.data[x + 1];
        const b = c.data[x + 2];
        c.data[x + 3] = 150;    // 透明度设置为150,0表示完全透明
        // 图片反相：
        c.data[x] = 255 - r;
        c.data[x + 1] = 255 - g;
        c.data[x + 2] = 255 - b;
      }
    }
    // ctx.putImageData(c, 40, 40);
    ctx.putImageData(c, 0, 0, 0, 0, video.videoWidth, video.videoHeight);    // 裁剪效果见图1

    this.setState({ srcTwo: canvas.toDataURL() });
  }
  handleCancelDrawVideo = () => {
    if (this.timer) cancelAnimationFrame(this.timer);
  }

  render() {
    const { src, srcTwo } = this.state;
    return (
      <Container>
        <Helmet title="Canvas 视频" />
        <div>
          <Button onClick={this.handlePlay}>requestAnimationFrame</Button>
          <Button onClick={this.handleCancelDrawVideo}>cancelAnimationFrame</Button>
        </div>
        <Video
          id="video"
          innerRef={(c) => { this.video = c; }}
          src="http://39.108.60.29/static/video/v1.mp4"
          controls
          crossOrigin="anonymous"
        />
        <canvas
          id="canvas"
          ref={(c) => { this.canvas = c; }}
          width="420"
          height="240"
        />
        <img src={src} alt="" />
        <img src={srcTwo} alt="" />
      </Container>
    );
  }
}
