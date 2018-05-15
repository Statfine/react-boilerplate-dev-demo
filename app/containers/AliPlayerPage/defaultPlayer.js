import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Player extends PureComponent {
  state = {};
  componentDidMount() {
    this.initPlayer(this.props.url);
  }
  initPlayer = () => {
    const coverSrc = 'http://ymz.api.tvmcloud.com/ymz?service=File.Getfile&url=atHvRm0cDovL3ZpZGVvLmNsb3VkLnR2bWluaW5nLmNvbS9UVk0vSlBHL0hlaUxvbmdKaWFuZ0hELzIwMTQvMDYvMjcvSGVpTG9uZ0ppYW5nSERfMjUwMDAwMF8yMDE0MDYyN184MDI1NTc3XzAuanBn';
    // const coverSrc = 'http://123.206.18.31/static/video/v1.png';
    this.playLiveOne = new Aliplayer({ // eslint-disable-line
      id: this.props.playId, // 容器id
      autoplay: false,
      isLive: false,
      playsinline: true,
      width: '100%',
      height: '400px',
      controlBarVisibility: 'always',
      useH5Prism: true,
      useFlashPrism: false,
      source: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/c3b9e742-518c-489d-9d06-805a51e7b8a7.mp4',
      cover: coverSrc,
    });
  };
  render() {
    console.log('id:', this.props.playId);
    return (
      <div>
        <div className="prism-player" id={this.props.playId} />
      </div>
    );
  }
}

Player.propTypes = {
  playId: PropTypes.string,
  url: PropTypes.string,
};

export default Player;
