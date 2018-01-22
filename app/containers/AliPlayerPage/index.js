import React, { PureComponent } from 'react';
import Player from './player';

export default class AliPlayerPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Player playId="palyOne" url="http://alcdn.hls.xiaoka.tv/20171226/298/b36/KhW9oREcf_BTjYpZ/index.m3u8" />
        <Player playId="palyTwo" url="http://alcdn.hls.xiaoka.tv/20171226/298/b36/KhW9oREcf_BTjYpZ/index.m3u8" />
      </div>
    );
  }
}
