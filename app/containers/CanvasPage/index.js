import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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

const SCALE = 1.4;

export default class CnavasPage extends PureComponent {
  state = {
    base64Img: '',
    fontSize: 30,
    canvasHeight: 100,
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
       * textAlign
       *  left 的时候原点再文字的左下角
       *  center  的时候原点再下居中
       * 因为文字有默认高度上的间距所以计算居中会麻烦
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
  render() {
    const { base64Img } = this.state;
    return (
      <div>
        {/* <div style={{ border: '1px solid red', width: 400, height: 200, overflow: 'hidden' }}>
          <div style={{ border: '1px solid yellow', width: 400, height: 200 }}>
            <DivInput contentEditable="true"></DivInput>
            <textarea contentEditable="true" style={{ border: '1px solid #4885ed', cursor: 'text', width: 200, height: 100, marginLeft: '300px', wordWrap: 'break-word' }}></textarea>
          </div>
        </div> */}
        <Div>
          <Button type="primary" onClick={this.drawText}>简单文字</Button>
        </Div>
        <canvas id="myCanvas" width="400px" height="300px" style={{ border: '1px solid red', display: 'block' }} />
        <img src={base64Img} alt="" />
      </div>
    );
  }
}