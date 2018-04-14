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
      useFlashPrism: true,
      source: url,         // 视频url 支持互联网可直接访问的视频地址
      width: '420px',       // 播放器宽度
      height: '260px',      // 播放器高度
      skinLayout: [ // 空数组则没有control
        { name: 'controlBar',
          align: 'blabs',
          x: 0,
          y: 0,
          children: [
            { name: 'progress', align: 'tlabs', x: 0, y: 0 },
            { name: 'playButton', align: 'tl', x: 15, y: 26 },
            { name: 'fullScreenButton', align: 'tr', x: 20, y: 25 },
            { name: 'timeDisplay', align: 'tl', x: 10, y: 24 },
            { name: 'setButton', align: 'tr', x: 20, y: 25 },
            { name: 'speedButton', align: 'tr', x: 10, y: 23 },
            { name: 'volume', align: 'tr', x: 20, y: 25 },
          ],
        },
      ],
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
