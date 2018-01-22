import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import { Slider, Button } from 'antd';

import styled from 'styled-components';

const Content = styled.div`
  width: 926px;
  height: 450px;
  box-sizing: border-box;
  background-color: #efefef;
  border-top: 1px solid transparent;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1420px) {
    width: 758px;
    height: 426px;
  }
  @media screen and (max-width: 1180px) {
    width: 900px;
    height: 450px;
  }
  @media screen and (max-width: 960px) {
    width: 440px;
    height: 250px;
  }
`;
const InnerContent = styled.div`
  height: 100%;
  width: 100%;
  background: #001830;
`;
const WaveBox = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
`;
const WaveDiv = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? '100%' : 'none')};
  box-sizing: border-box;
  overflow: hidden;
`;
const ControlBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  margin: 0 auto;
  position: relative;
`;
class Audio extends PureComponent {
  // eslint-disable-line
  state = {
    AudioPercent: '0%',
    volume: 1,
    currentTime: 0,
    durationTime: 0,
    playing: false,
    VoiceConShow: false,
    windowWidth: $(window).width(), // eslint-disable-line
    disabledPlay: true,
  };
  componentDidMount() {
    document.addEventListener('visibilitychange', this.handleShow);
    window.addEventListener('resize', this.resizeFn);
    this.initWavesurfer();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFn);
    window.removeEventListener('visibilitychange', this.handleShow);
    this.destroyWaveSurfer();
  }

  initWavesurfer = () => {
    this.wavesurferA = WaveSurfer.create({
      container: this.waveContainerA,
      scrollParent: false,
      waveColor: '#404040',
      progressColor: '#4285f4',
      height: 300,
      interact: false,
      cursorWidth: 3,
      cursorColor: '#ff8140',
      barWidth: 2,
      responsive: true,
    });
    this.wavesurferB = WaveSurfer.create({
      container: this.waveContainerB,
      scrollParent: false,
      waveColor: '#404040',
      progressColor: '#4285f4',
      height: 150,
      interact: false,
      cursorWidth: 3,
      cursorColor: '#ff8140',
      barWidth: 2,
      responsive: true,
    });
    this.wavesurferA.on('audioprocess', this.handleAudioProgress);
    this.wavesurferA.on('ready', this.handleAudioReady);
    this.wavesurferB.on('audioprocess', this.handleAudioProgress);
    this.wavesurferB.on('ready', this.handleAudioReady);

    const windowWidth = $(window).width(); // eslint-disable-line
    if (windowWidth >= 960) {
      this.wavesurferNow = this.wavesurferA;
    } else {
      this.wavesurferNow = this.wavesurferB;
    }

    this.wavesurferA.load(this.props.playUrl);
    this.wavesurferB.load(this.props.playUrl);
  }

  destroyWaveSurfer = () => {
    this.wavesurferA.un('audioprocess', this.handleAudioProgress);
    this.wavesurferA.un('ready', this.handleAudioReady);
    this.wavesurferB.un('audioprocess', this.handleAudioProgress);
    this.wavesurferB.un('ready', this.handleAudioReady);
    this.wavesurferA.destroy();
    this.wavesurferA.empty();
    this.wavesurferB.destroy();
    this.wavesurferB.empty();
  }

  wavesurferA;

  handleAudioProgress = (currentTime) => {
    this.setState({ currentTime });
  };

  handleAudioReady = () => {
    this.setState({
      durationTime: this.wavesurferNow.getDuration(),
      disabledPlay: false,
    });
  };

  resizeFn = () => {
    const windowWidth = $(window).width(); // eslint-disable-line
    this.setState({ windowWidth });

    if (windowWidth >= 960) {
      if (this.wavesurferNow === this.wavesurferA) {
        return;
      }
      this.wavesurferNow.seekTo(0);
      this.wavesurferNow.pause();
      this.wavesurferNow = this.wavesurferA;
    } else {
      if (this.wavesurferNow === this.wavesurferB) {
        return;
      }
      this.wavesurferNow.seekTo(0);
      this.wavesurferNow.pause();
      this.wavesurferNow = this.wavesurferB;
    }
    this.setState({
      currentTime: 0,
      playing: false,
    });
  };

  handleVolumeChange = (v) => {
    this.setState({
      volume: v,
    });
    this.wavesurferNow.setVolume(v);
  };

  handleShow = () => {
    if (document.visibilityState === 'hidden') {
      document.title = 'Leave';
      console.log('Leave', new Date());
      this.setState({ playing: false, disabledPlay: true, currentTime: 0 });
      this.destroyWaveSurfer();
    } else {
      document.title = 'Back';
      console.log('Back', new Date());
      this.initWavesurfer();
    }
  }

  render() {
    const { playing, windowWidth, disabledPlay } = this.state;
    return (
      <Content>
        <InnerContent>
          <WaveBox>
            <WaveDiv
              show={windowWidth >= 960}
              width={
                windowWidth > 1420 ? '758px' : windowWidth > 1180 ? '926px' : windowWidth >= 960 ? '900px' : '450px'
              }
              innerRef={(ref) => {
                this.waveContainerA = ref;
              }}
            />
            <WaveDiv
              show={windowWidth < 960}
              width="450px"
              innerRef={(ref) => {
                this.waveContainerB = ref;
              }}
            />
          </WaveBox>

          <ControlBox>
            <Slider
              style={{ width: `${windowWidth > 1420 ? '758px' : windowWidth > 1180 ? '926px' : windowWidth >= 960 ? '900px' : '450px'}` }}
              value={this.state.currentTime}
              max={this.state.durationTime}
              min={0}
              onChange={(time) => {
                this.wavesurferNow.seekTo(
                  time / this.wavesurferNow.getDuration()
                );
                this.setState({ currentTime: time });
              }}
            />
          </ControlBox>
        </InnerContent>
        <Button
          type="primary"
          disabled={disabledPlay}
          onClick={() => {
            if (playing) this.wavesurferNow.pause();
            else this.wavesurferNow.play();
            this.setState({ playing: !playing });
          }}
        >{playing ? 'Stop' : 'Play'}</Button>
      </Content>
    );
  }
}

Audio.propTypes = {
  playUrl: PropTypes.string,
};

export default Audio;
