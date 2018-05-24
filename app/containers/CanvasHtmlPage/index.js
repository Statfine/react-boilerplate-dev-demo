import React, { PureComponent } from 'react';
import { Button } from 'antd';
import html2canvas from 'html2canvas';

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
    console.log('start');
    html2canvas(document.getElementById('imageCover'), { useCORS: true }).then((canvas) => {
      console.log('get');
      const image = canvas.toDataURL('image/png');
      _this.setState({ cover: image });
    });
    console.log('end');
  }
  render() {
    return (
      <div>
        <div id="imageCover" style={{ position: 'relative', width: 160, height: 120 }}>
          <img crossOrigin="Anonymous" src={'http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png'} alt="logo" width="160" height="120" />
          <img crossOrigin="Anonymous" style={{ position: 'absolute', left: '10px', width: '120px' }} src="https://image.clip.cn/cover/9f550d30-bf4b-492c-9c49-4d4aae09b1b1.jpg" alt="" />
          <p style={{ position: 'absolute', top: '100px', color: 'red' }}>img</p>
        </div>
        <Button type="primary" onClick={this.handleClick}>body</Button>
        <Button type="primary" onClick={this.handleClickTwo}>pic</Button>
        <div id="pi"></div>
        <img src={this.state.cover} alt="logo" />
      </div>
    );
  }
}
