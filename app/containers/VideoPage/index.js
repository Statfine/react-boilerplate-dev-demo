import React, { PureComponent } from 'react';
// import 'jsmpeg';

export default class VideLivePage extends PureComponent {

  componentDidMount() {
    let hasFlash = false;
    try {
      hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash')); // eslint-disable-line
    } catch (exception) {
      hasFlash = (typeof navigator.mimeTypes['application/x-shockwave-flash'] !== 'undefined');
    }

    if (!hasFlash) alert('安装flash');

    this.playerRtmp = videojs('exampleVideo', { // eslint-disable-line
      controls: true,
      autoplay: true,
      preload: 'metadata',
      sources: [
        {
          src: 'rtmp://120.26.6.217/live/livestream',
          type: 'rtmp/flv',
        },
      ],
      height: 300,
      width: 300,
      poster: 'https://s3-sa-east-1.amazonaws.com/v2share-s3/logo-v2tech.jpg',
    });
    this.playerRtmp.load();
    this.playerRtmp.play();
    this.setVidelHls();

    // const canvas = document.getElementById('videoCanvas');
    // const player = new jsmpeg.Player('https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/c2286c03-ec84-44bf-8707-93b34bc6d0db.mp4', { canvas, autoplay: true, loop: true });
    // player.play();
  }

  componentWillUnmount() {
    this.playerRtmp.pause();
    this.playerRtmp.dispose();
    this.playerRtmp = undefined;
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  }

  setVidelHls = () => {
    // http://121.196.234.120/records/0f66c605-0fdc-490f-81e6-b350dde772fc/b1e4345b-8ba8-4f5f-ba99-a49e5287f714.m3u8
    // http://rm03.wscdn.hls.xiaoka.tv/live/srYpykdxcmhj0cTr/playlist.m3u8
    // https://example.com/index.m3u8
    // http://r02.wscdn.hls.xiaoka.tv/live/l5QhSffXUu3FIrvm/playlist.m3u8
    // http://acm.gg/jade.m3u8
    this.player = videojs('phonelivevideo', { controls: true }); // eslint-disable-line
    this.player.src({
      src: 'http://120.26.6.217/records/90cebee2-51ce-4fa8-ab6b-9163fd2dec8b/c452d133-dab0-4073-8bc8-dc8102734743.m3u8',
      type: 'application/x-mpegURL',
      // withCredentials: true,
    });
    this.player.load();
    this.player.play();

    this.playLive = new Aliplayer({ // eslint-disable-line
      id: 'video', // 容器id
      autoplay: true,      // 自动播放
      source: 'http://acm.gg/jade.m3u8',         // 视频url 支持互联网可直接访问的视频地址
      width: '560px',       // 播放器宽度
      height: '316px',      // 播放器高度
    });
  };

  hideVideo = () => {
    this.player.pause();
    this.player.dispose();
    this.player = undefined;
  };

  render() {
    return (
      <div>
        <div id="video"></div>
        <video
          id="phonelivevideo"
          width="240"
          height="180"
          className="video-js vjs-default-skin"
          controls
        />
        <video
          id="exampleVideo"
          width="240"
          height="180"
          className="video-js vjs-default-skin"
          controls
        />
        <canvas id="videoCanvas" style={{ width: 600, height: 400 }} />
        <div className="jsmpeg" data-url="https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/c2286c03-ec84-44bf-8707-93b34bc6d0db.mp4"></div>
      </div>
    );
  }
}
