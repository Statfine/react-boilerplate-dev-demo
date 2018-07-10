import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
`;

const Video = styled.video`
  width: 600px;
  height: 450px;
`;

export default class VideoCanvaspage extends PureComponent {
  state = {
    src: '',
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
  handleCancelDrawVideo = () => {
    if (this.timer) cancelAnimationFrame(this.timer);
  }

  render() {
    const { src } = this.state;
    return (
      <Container>
        <div>
          <Button onClick={this.handlePlay}>requestAnimationFrame</Button>
          <Button onClick={this.handleCancelDrawVideo}>cancelAnimationFrame</Button>
        </div>
        <Video
          id="video"
          innerRef={(c) => { this.video = c; }}
          src="http://123.206.18.31/static/video/v1.mp4"
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
      </Container>
    );
  }
}
