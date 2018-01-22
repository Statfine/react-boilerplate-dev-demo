import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Player extends PureComponent {
  state = {};
  componentDidMount() {
    this.initPlayer(this.props.url);
  }
  initPlayer = (url) => {
    this.playLiveOne = new Aliplayer({ // eslint-disable-line
      id: this.props.playId, // 容器id
      isLive: false,
      autoplay: true,      // 自动播放
      useH5Prism: true,
      useFlashPrism: url.endsWith('flv'),
      source: url,         // 视频url 支持互联网可直接访问的视频地址
      width: '420px',       // 播放器宽度
      height: '260px',      // 播放器高度
    });
  };
  render() {
    console.log('id:', this.props.playId);
    return (
      <div>
        <div id={this.props.playId} />
      </div>
    );
  }
}

Player.propTypes = {
  playId: PropTypes.string,
  url: PropTypes.string,
};

export default Player;
