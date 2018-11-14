import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import ImageTest from './ImageTest';

const Div = styled.div`
  display: flex;
`;

// const DivInput = styled.div`
//   border: 1px solid #4885ed;
//   cursor: text;
//   width: 200px;
//   max-width: 200px;
//   height: 100px;
//   margin-left: 300px;
//   word-wrap: break-word;
// `;
const BacDiv = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid #4885ed;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: repeat;
`;

const SCALE = 1.4;

export default class CnavasPage extends PureComponent {
  state = {
    base64Img: '',
    fontSize: 30,
    canvasHeight: 100,
    pavedSrc: '',
  };
  drawText = () => {
    const { fontSize, canvasHeight } = this.state;
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      // 获取对应的CanvasRenderingContext2D对象(画笔)
      const ctx = canvas.getContext('2d');

      // 设置字体样式
      ctx.font = `${fontSize}px katong`;
      // 设置字体填充颜色
      ctx.fillStyle = '#388cf8';
      ctx.fillRect(0, 0, 200, canvasHeight);
      /**
       * 开始绘制文字
       * 坐标点(text, x, y)
       * 真正的行高是文字的1.4倍高度
       * textAlign  http://www.w3school.com.cn/tags/canvas_textalign.asp
       *  left 的时候原点再文字的左下角
       *  center  的时候原点再下居中
       * 因为文字有默认高度上的间距所以计算居中会麻烦
       *  ctx.shadowOffsetX = 2;     //X轴阴影距离，负值表示往上，正值表示往下
       *  ctx.shadowOffsetY = 2;     //Y轴阴影距离，负值表示往左，正值表示往右
       *  ctx.shadowBlur = 2;
       */
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top'; // 当前文本基线的属性  默认bottom 所以原点X轴再底部 （决定文字垂直方向的对齐方式）
      ctx.fillText('CodePlayer+中文测试1', 0, ((canvasHeight - (fontSize * SCALE)) / 2));
      if (true) {
        ctx.shadowOffsetX = 0 * SCALE;
        ctx.shadowOffsetY = 0.7 * SCALE;
        ctx.shadowBlur = 1 * SCALE;
        ctx.shadowColor = 'rgba(0,0,0,0.50)';
      }
      // ctx.fillText('CodePlayer+中文测试2', 0, 60);
    }

    const canvas1 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');
    canvas1.width = 1280;
    canvas1.height = 720;
    ctx1.fillStyle = '#ff8140';
    ctx1.fillRect(0, 0, 1280, 720);
    ctx1.drawImage(canvas, 100, 150);

    const base64 = canvas1.toDataURL('image/png', 1);
    this.setState({ base64Img: base64 });
  }
  pavedText = () => {
    const inlineCanvas = document.createElement('canvas');
    const inlineCtx = inlineCanvas.getContext('2d');

    inlineCanvas.width = 200;
    inlineCanvas.height = 200;

    inlineCtx.font = '24px katong';
    inlineCtx.fillStyle = '#ff8140';
    // inlineCtx.fillStyle = 'transparent';
    inlineCtx.fillRect(0, 0, 200, 200);

    inlineCtx.fillStyle = '#fff';
    // inlineCtx.fillStyle = '#ff8140';
    inlineCtx.textAlign = 'center';
    inlineCtx.textBaseline = 'top';

    inlineCtx.fillText('邵佳', (inlineCanvas.width / 2), ((200 - (24 * SCALE)) / 2));
    inlineCtx.save();
    inlineCtx.translate(inlineCanvas.width / 2, inlineCanvas.height / 2);
    inlineCtx.rotate(0.5);
    // inlineCtx.fillText('邵佳', 0, 0); // 此处单独旋转
    inlineCtx.drawImage(
      inlineCanvas,
      -(inlineCanvas.width / 2),
      -(inlineCanvas.height / 2)
    );
    // inlineCtx.translate(0, 0);
    inlineCtx.restore();

    // // 方法二 transparent
    // inlineCtx.save();
    // inlineCtx.translate(inlineCanvas.width / 2, inlineCanvas.height / 2);
    // inlineCtx.rotate(0.5);
    // inlineCtx.fillText('邵佳', 0, 0); // 此处单独旋转
    // inlineCtx.restore();

    const base64 = inlineCanvas.toDataURL('image/png', 1);
    console.log(base64);
    this.setState({ pavedSrc: base64 });
  }
  render() {
    const { base64Img, pavedSrc } = this.state;
    return (
      <div>
        <Helmet title="Canvas Demo" />
        <div style={{ display: 'block' }}>
          {/* <div style={{ border: '1px solid red', width: 400, height: 200, overflow: 'hidden' }}>
            <div style={{ border: '1px solid yellow', width: 400, height: 200 }}>
              <DivInput contentEditable="true"></DivInput>
              <textarea contentEditable="true" style={{ border: '1px solid #4885ed', cursor: 'text', width: 200, height: 100, marginLeft: '300px', wordWrap: 'break-word' }}></textarea>
            </div>
          </div> */}
          <Div>
            <Button type="primary" onClick={this.drawText}>简单文字</Button>
          </Div>
          <Div>
            <Button type="primary" onClick={this.pavedText}>平铺文字</Button>
          </Div>
          <canvas id="myCanvas" width="400px" height="300px" style={{ border: '1px solid red', display: 'block' }} />
          <img src={base64Img} alt="" />
          <img src={pavedSrc} alt="" />
          <BacDiv src={pavedSrc}></BacDiv>
        </div>
        <ImageTest />
      </div>
    );
  }
}
