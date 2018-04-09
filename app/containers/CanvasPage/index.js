import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Div = styled.div`
  display: flex;
`;

const SCALE = 1.4;

export default class CnavasPage extends PureComponent {
  state = {
    base64Img: '',
  };
  drawText = () => {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      // 获取对应的CanvasRenderingContext2D对象(画笔)
      const ctx = canvas.getContext('2d');

      // 设置字体样式
      ctx.font = '30px katong';
      // 设置字体填充颜色
      ctx.fillStyle = '#388cf8';
      ctx.fillRect(0, 0, 200, 100);
      /**
       * 开始绘制文字
       * 坐标点(text, x, y)
       * textAlign
       *  left 的时候原点再文字的左下角
       *  center  的时候原点再下居中
       * 因为文字有默认高度上的间距所以计算居中会麻烦
       */
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.fillText('CodePlayer+中文测试1', 0, 30);
      if (true) {
        ctx.shadowOffsetX = 0 * SCALE;
        ctx.shadowOffsetY = 0.7 * SCALE;
        ctx.shadowBlur = 1 * SCALE;
        ctx.shadowColor = 'rgba(0,0,0,0.50)';
      }
      ctx.fillText('CodePlayer+中文测试2', 0, 60);
    }

    const canvas1 = document.createElement('canvas');
    const ctx1 = canvas1.getContext('2d');
    canvas1.width = 1280;
    canvas1.height = 720;
    ctx1.drawImage(canvas, 100, 200);

    const base64 = canvas1.toDataURL('image/png', 1);
    this.setState({ base64Img: base64 });
  }
  render() {
    const { base64Img } = this.state;
    return (
      <div>
        <Div>
          <Button type="primary" onClick={this.drawText}>简单文字</Button>
        </Div>
        <canvas id="myCanvas" width="400px" height="300px" style={{ border: '1px solid red', display: 'block' }} />
        <img src={base64Img} alt="" />
      </div>
    );
  }
}
