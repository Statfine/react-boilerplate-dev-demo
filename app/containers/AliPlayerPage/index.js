import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import Player from './player';

class AliPlayerPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Player playId="palyOne" url="http://vod.gslb.cmvideo.cn/depository/asset/zhengshi/3011/173/928/3011173928/media/3011173928_5001598454_55.mp4.m3u8?msisdn=300001_300001&mdspid=&timestamp=20180412163744&Channel_ID=10290001088&ParentNodeID=-99&client_ip=10.151.129.83&ProgramID=800278835&assertID=3011173928&chargePhone=&SecurityKey=20180412163744&encrypt=cce50bdd445dec7570bc7994924162a0" />
        <Player playId="palyTwo" url="http://alcdn.hls.xiaoka.tv/20171226/298/b36/KhW9oREcf_BTjYpZ/index.m3u8" />
      </div>
    );
  }
}

export default BasePage(AliPlayerPage);
