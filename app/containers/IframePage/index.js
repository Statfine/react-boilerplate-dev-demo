import React, { PureComponent } from 'react';

class IframePage extends PureComponent {
  state = {};

  handleGetIframe = () => {
    const x = document.getElementsByTagName('iframe')[0];
    const y = (x.contentWindow || x.contentDocument);
    y.body.style.backgroundColor = 'red';
  }

  render() {
    return (
      <div>
        IframePage
        <div onClick={this.handleGetIframe}>Change</div>
        <iframe title="iframe" name="myiframe" id="myrame-record-query" src="http://39.108.60.29/login" width="100%" height="700px" ></iframe>
        {/* <iframe title="iframe" name="myiframe" id="myrame-record-query" src="http://localhost:3001/" width="100%" height="700px" ></iframe> */}
        {/* <iframe name="myiframe"  id="myrame-record-query"  src="https://jian.weibo.com/company"  frameborder="0" align="middle"  width="100%"  height="700px" ></iframe> */}
      </div>
    );
  }
}

export default IframePage;

