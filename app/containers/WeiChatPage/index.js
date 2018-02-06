import React, { PureComponent } from 'react';

function utilGetQueryString(name) {
  const regExp = `(^|&)${name}=([^&]*)(&|$)`;
  const reg = new RegExp(regExp, 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) return decodeURIComponent(r[2]);
  return null;
}

/*
* https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
* http://qydev.weixin.qq.com/wiki/index.php?title=微信JS-SDK接口
*/

export default class WeiChatPage extends PureComponent {
  state = {};
  componentWillMount() {
    const code = utilGetQueryString('code');
    alert(code);
  }
  handleJump = () => {
    const APPID = 'wxa123542bd9f4825f';
    const SCOPE = 'snsapi_userinfo'; // snsapi_base 静默授权  snsapi_userinfo  弹框授权
    const REDIRECT_URI = encodeURI('http://123.206.18.31/weichat');
    const url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=STATE#wechat_redirect`;
    // const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=' + SCOPE + '&state=STATE#wechat_redirect';
    // window.open(url);
    window.location.href = url;
  }
  render() {
    return (
      <div onClick={this.handleJump}>CLick</div>
    );
  }
}
