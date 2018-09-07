import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import Player from './player';
import DefaultPlayer from './defaultPlayer';

class AliPlayerPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Helmet title="阿里播放器" />
        <Player playId="palyOne" url="http://vod.hcs.cmvideo.cn/depository_yf/asset/zhengshi/5102/006/318/5102006318/media/5102006318_5002748331_54.mp4.m3u8?msisdn=300001_300001&mdspid=&timestamp=20180413164418&Channel_ID=10290001088&ParentNodeID=-99&client_ip=10.151.129.82&ProgramID=801000170&assertID=5102006318&chargePhone=&SecurityKey=20180413164418&encrypt=39dc0307f0cef5a33df106d838e53624" />
        <Player playId="palyTwo" url="http://alcdn.hls.xiaoka.tv/20171226/298/b36/KhW9oREcf_BTjYpZ/index.m3u8" />
        <DefaultPlayer playId="palyThree" />
      </div>
    );
  }
}

export default BasePage(AliPlayerPage);
