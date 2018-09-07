import React, { PureComponent } from 'react';
import { Button } from 'antd';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';

// import CssPage from './cssPage';

export default class CanvasHtmlpage extends PureComponent {
  state = {
    cover: '',
  }

  handleClick = () => {
    html2canvas(document.body, { useCORS: true }).then((canvas) => {
      document.getElementById('pi').appendChild(canvas);
      console.log(canvas.toDataURL());
    });
  }

  // useCORS allowTaint 不能同时添加
  handleClickTwo = () => {
    const _this = this;
    html2canvas(document.getElementById('imageCover'), { useCORS: true }).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      _this.setState({ cover: image });
    });
  }
  render() {
    return (
      <div>
        <Helmet title="Canvas HTML2" />
        <div id="imageCover" style={{ position: 'relative', borderRadius: '50%', overflow: 'hidden', width: 160, height: 120 }}>
          <img crossOrigin="Anonymous" src={'http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png'} alt="logo" width="160" height="120" />
          <img crossOrigin="Anonymous" style={{ position: 'absolute', left: '10px', width: '120px' }} src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/jAxzQcSeRGpZ.png" alt="" />
          <p style={{ position: 'absolute', top: '100px', color: 'red' }}>img</p>
        </div>
        <Button type="primary" onClick={this.handleClick} style={{ display: 'none' }}>body</Button>
        <Button type="primary" onClick={this.handleClickTwo}>pic</Button>
        <div id="pi"></div>
        <img src={this.state.cover} alt="logo" />
      </div>
    );
  }
}
