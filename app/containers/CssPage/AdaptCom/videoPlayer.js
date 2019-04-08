import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoCover = styled.img`
  width: 100%;
  height: 100%;
`;

const PlayerVideo = styled.video`
  width: 100%;
  height: 100%;
`;

const LoadingVideo = styled(PlayerContent)`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoProgressContent = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  backround: #000000;
  z-index: 999;
  &:after {
    content: '';
    width: ${({ progress }) => `${progress}%`};
    height:2px;
    background: #ff8140;
    position:absolute;
    left:0px;
    top:0;
  }
`;

const TimeP = styled.div`
  position:absolute;
  bottom: 8px;
  left: 8px;
  height:24px;
  line-height: 24px;
  padding: 0 8px;
  font-size:12px;
  color: #fff;
  background:rgba(41, 49, 51, 0.8);
  border-radius:2px;
  margin-right: 8px;
`;

class VideoPlayer extends PureComponent {
  state = {
    videoEnter: false,
    enter: false,
    loading: true,
    preogress: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.play !== this.props.play) {
      this.setState({ enter: nextProps.play, loading: true, preogress: 0 });
    }
  }

  componentDidUpdate() {
    const { enter, loading } = this.state;
    if (enter && !loading) {
      this.timer = setTimeout(() => {
        if (this.player) {
          this.player.play();
        }
      }, 500);
    }
  }


  handleVideoTimeUpdate = () => {
    const currentTime = this.player.currentTime;
    const duration = this.player.duration;
    this.setState({ preogress: ((currentTime / duration) * 100).toFixed(2) });
  }

  render() {
    const { enter, loading, preogress } = this.state;
    const { cover, playUrl } = this.props;
    return (
      <PlayerContent>
        {
          !enter ? <VideoCover src={cover} />
          : <PlayerVideo
            innerRef={(ref) => (this.player = ref)}
            src={playUrl}
            onLoadStart={() => this.setState({ loading: true })}
            onCanPlay={() => this.setState({ loading: false })}
            onTimeUpdate={this.handleVideoTimeUpdate}
          />
        }
        {(enter && loading) && <LoadingVideo><Spin /></LoadingVideo>}
        {enter && <VideoProgressContent progress={preogress} />}
        { enter && <TimeP>02:00</TimeP> }
      </PlayerContent>
    );
  }
}

/**
 * @class VideoPlayer
 * @extends {PureComponent}
 * play 是否开始播放
 * cover 封面
 * playUrl 播放地址
 */
VideoPlayer.propTypes = {
  play: PropTypes.bool,
  cover: PropTypes.string,
  playUrl: PropTypes.string,
};

export default VideoPlayer;
