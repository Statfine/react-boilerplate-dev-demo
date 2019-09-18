import React, { PureComponent } from 'react';
import { Icon, Slider } from 'antd';
import { Tool } from 'tool/timeTool';
import styled from 'styled-components';

import MusicSrc from './410288837.mp3';

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const IconPlay = styled(Icon)`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    color: #ff8140;
  }
`;

const TimeP = styled.p`
  margin: 0 20px 0 10px;
`;

export default class DefaultAudio extends PureComponent {
  state = {
    playing: false,
    currentTime: 0,
    durationTime: 0,
  };

  componentDidMount() {
    this.audioEl.addEventListener('ended', () => {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
      this.setState({ playing: false });
    });
    this.audioEl.addEventListener('canplaythrough', () => {
      console.log(Tool.stringToMinSec(this.audioEl.duration), this.audioEl.duration);
      this.setState({ durationTime: parseInt(this.audioEl.duration) });
    });
    this.audioEl.addEventListener('timeupdate', () => {
      this.setState({ currentTime: parseInt(this.audioEl.currentTime) });
    });
  }

  handelChangeAudioStatus = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
    if (playing) this.audioEl.pause();
    else this.audioEl.play();
  }

  render() {
    const { playing, currentTime, durationTime } = this.state;
    return (
      <Content>
        <IconPlay onClick={this.handelChangeAudioStatus} type={playing ? 'pause-circle' : 'play-circle'} />
        <TimeP>{Tool.stringToMinSec(currentTime)} / {Tool.stringToMinSec(durationTime)}</TimeP>
        <Slider
          style={{ flex: 1, margin: 0 }}
          value={currentTime}
          max={durationTime}
          min={0}
          tipFormatter={(time) => Tool.stringToMinSec(time)}
          onChange={(time) => {
            this.audioEl.currentTime = time;
            this.audioEl.play();
            this.setState({ currentTime: time, playing: true });
          }}
        />
        <audio
          style={{ display: 'none' }}
          src={MusicSrc}
          ref={(ref) => {
            this.audioEl = ref;
          }}
        />
      </Content>
    );
  }
}
