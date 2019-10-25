import React, { PureComponent } from 'react';

class IframePage extends PureComponent {
  state = {};

  handleGetIframe = () => {
    const x = document.getElementsByTagName('iframe')[0];
    const y = (x.contentWindow || x.contentDocument);
    y.body.style.backgroundColor = 'red';
  }

  renderIframe = () => (
    <div style={{ height: '100vh' }}>
      <div style={{ height: 'calc(100% - 80px)' }}>
        <iframe
          title="云剪"
          name="yunjian"
          width="100%"
          height="100%"
          src="https://te.clip.cn/"
        />
      </div>
      <div style={{ height: '80px', background: '#4885ed' }}>
        我是底部导航
      </div>
    </div>
  )

  render() {
    if (true) return this.renderIframe();
    return (
      <div style={{ height: '100vh' }}>
        {/* <div onClick={this.handleGetIframe}>Change</div> */}
        {/* <iframe title="iframe" name="myiframe" id="myrame-record-query" src="http://39.108.60.29/login" width="100%" height="700px" ></iframe> */}
        {/* <iframe title="iframe" name="myiframe" id="myrame-record-query" src="http://localhost:3001/" width="100%" height="700px" ></iframe> */}
        <iframe title="iframe" name="myiframe" id="myrame-record-query" src="https://te.clip.cn/" width="100%" height="100%" ></iframe>
        {/* <iframe name="myiframe"  id="myrame-record-query"  src="https://jian.weibo.com/company"  frameborder="0" align="middle"  width="100%"  height="700px" ></iframe> */}
      </div>
    );
  }
}

export default IframePage;

