import React from 'react';
import styled from 'styled-components';

import { Input, InputNumber, Button } from 'antd';

const Each = styled.div`
  display: felx;
  align-items: center;
`;

const EachTitle = styled.div`
  width: 100px;
`;

const EachRight = styled.div`
  flex: 1;
`;

export default class CanvasText extends React.PureComponent {
  state = {
    text: 'Hello 世界',
    x: 0,
    y: 0,
    fontSize: 14,
    base64Img: '',
  };

  componentDidMount() {
    // this.handleCanvas();
  }

  handleChangetext = (e) => this.setState({ text: e.target.value }, () => this.handleCanvas());

  /**
   *  画布中绘制文本
  */
  handleCanvas = () => {
    const { x, y, text, fontSize } = this.state;
    const canvas = this.canvas;

    // 获取对应的CanvasRenderingContext2D对象(画笔)
    const context = canvas.getContext('2d');
    context.fillStyle = '#4885ed'; // 设置画布背景
    // context.fillStyle = 'transparent'; // 透明
    context.fillRect(0, 0, 800, 450); // 画布

    context.font = ` ${fontSize}px arial`;
    // context.font = `${fontStyle} normal ${fontWeight} ${_fontsize}px ${fontFamily}`; // https://www.w3school.com.cn/html5/canvas_font.asp
    context.fillStyle = '#DF5326';
    context.textBaseline = 'top';
    // 阴影
    // context.shadowOffsetX = 2;
    // context.shadowOffsetY = 2;
    // context.shadowBlur = 1;
    // context.shadowColor = '#F67107';

    const txtw = context.measureText(text).width; // 获取文本宽度

    context.fillText(text, x, y); // https://www.w3school.com.cn/tags/canvas_textbaseline.asp

    this.handleNewCanvas(txtw, fontSize);
  }

  /**
   *  绘制单文本
   *    txtw文本宽度 txtH文本高
  */
  handleNewCanvas = (txtw, txtH) => {
    const { text, fontSize } = this.state;
    const inlineCanvas = document.createElement('canvas');
    const context = inlineCanvas.getContext('2d');
    context.fillRect(0, 0, txtw, txtH);
    inlineCanvas.setAttribute('width', txtw);
    inlineCanvas.setAttribute('height', txtH);

    context.font = ` ${fontSize}px arial`;
    context.fillStyle = '#DF5326';
    context.textBaseline = 'top';
    context.fillText(text, 0, 0);

    const base64 = inlineCanvas.toDataURL('image/png', 1);
    this.setState({ base64Img: base64 });
  }

  render() {
    const { text, x, y, base64Img, fontSize } = this.state;
    return (
      <div>
        <Each>
          <EachTitle>文本</EachTitle>
          <EachRight><Input onChange={this.handleChangetext} value={text} /></EachRight>
        </Each>
        <Each>
          <EachTitle>X轴</EachTitle>
          <EachRight><InputNumber min={0} max={800} value={x} onChange={(x) => this.setState({ x })} /></EachRight>
        </Each>
        <Each>
          <EachTitle>Y轴</EachTitle>
          <EachRight><InputNumber min={0} max={450} value={y} onChange={(y) => this.setState({ y })} /></EachRight>
        </Each>
        <Each>
          <EachTitle>FontSize</EachTitle>
          <EachRight><InputNumber min={8} max={450} value={fontSize} onChange={(fontSize) => this.setState({ fontSize })} /></EachRight>
        </Each>
        <Each><Button type="primary" onClick={this.handleCanvas}>Canvas</Button></Each>
        <Each><canvas ref={(ref) => this.canvas = ref} width="800px" height="450px" /></Each>
        <Each><img src={base64Img} alt="canvas" /></Each>
      </div>
    );
  }
}
