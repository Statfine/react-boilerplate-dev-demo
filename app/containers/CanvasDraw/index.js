/**
 *
 * CanvasDraw
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Tesseract from 'tesseract.js';

const CanvasStyle = {
  border: '1px solid red',
  // background: '#fff',
  width: 800,
  height: 600,
};

const Btn = {
  cursor: 'pointer',
  margin: 10,
};

export class CanvasDraw extends React.PureComponent {

  state = {
    img: '',
    text: '',
  }

  componentDidMount() {
    this.initCanvas();

    // 为了避免UI过度绘制
    const requestAnimationFrame = window.requestAnimationFrame;
    const optimizedMove = requestAnimationFrame ? (e) => {
      requestAnimationFrame(() => {
        this.handleMove(e);
      });
    } : this.handleMove;

    // 事件绑定
    this.canvas.addEventListener('mousedown', this.handleStart);
    this.canvas.addEventListener('mousemove', optimizedMove);
    ['mouseup', 'mouseleave'].forEach((event) => {
      this.canvas.addEventListener(event, () => {
        this.pressed = false;
      });
    });
  }
  canvas;
  context;
  pressed = false; // 标示是否发生鼠标按下或者手指按下事件
  point = {}; // 当前点

  initCanvas = () => {
    this.canvas = this.canvasDraw;
    let { width, height } = window.getComputedStyle(this.canvas, null);
    width = width.replace('px', '');
    height = height.replace('px', '');
    this.canvas.width = width;
    this.canvas.height = height; // canvas 设置画布尺寸
    this.context = this.canvas.getContext('2d'); // 获取画笔

    this.context.fillStyle = '#fff'; // 设置画布背景 生成图片不需设置
    this.context.fillRect(0, 0, width, height);

    this.initPoint(this.context);
  }

  initPoint = () => {
    this.context.lineWidth = 1;         // 直线宽度
    this.context.strokeStyle = 'black';     // 路径的颜色
    this.context.lineCap = 'round';         // 直线首尾端圆滑
    this.context.lineJoin = 'round';     // 当两条线条交汇时，创建圆形边角

    const isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
    // 移动端性能太弱, 去掉模糊以提高手写渲染速度
    if (!isMobile) {
      this.context.shadowBlur = 1;
      this.context.shadowColor = 'black';
    }
  }

  handleStart = (event) => this.handleCreat(event, 1);
  handleMove = (event) => this.handleCreat(event, 2);

  // 获取绘制坐标
  handleCreat = (e, signal) => {
    e.preventDefault();
    if (signal === 1) {
      this.pressed = true;
    }
    if (signal === 1 || this.pressed) {
      const { left, top } = this.canvas.getBoundingClientRect();
      // e = isMobile ? e.touches[0] : e;
      console.log('handleCreat', e.clientX, left);
      this.point.x = (e.clientX - left) + 0.5; // 不加0.5，整数坐标处绘制直线，直线宽度将会多1px(不理解的不妨谷歌下)
      this.point.y = (e.clientY - top) + 0.5;
      this.handlePaint(signal);
    }
  }

  // 绘制
  handlePaint = (signal) => {
    const point = this.point;
    console.log(point, this.context);
    switch (signal) { // eslint-disable-line
      case 1: // 开始路径
        this.context.beginPath();
        this.context.moveTo(point.x, point.y);
      case 2: // eslint-disable-line
        this.context.lineTo(point.x, point.y); // 前面之所以没有break语句，是为了点击时就能描画出一个点
        this.context.stroke();
        break;
    }
  }

  handleTest = () => {
    this.context.beginPath();
    this.context.moveTo(10, 10);
    this.context.lineTo(10, 100);
    this.context.stroke();
  }

  // 重置
  handleReset = () => {
    let { width, height } = window.getComputedStyle(this.canvas, null);
    width = width.replace('px', '');
    height = height.replace('px', '');
    this.context.clearRect(0, 0, width, height);
  }

  // 获取图片
  handleGetPNGImage = (canvas) => {
    this.setState({ img: canvas.toDataURL('image/png') }, () => {
      // 实现下载
      const dom = document.createElement('a');
      dom.href = this.state.img;
      dom.download = `${new Date().getTime()}.png`;
      // dom.click();

      // ?? 重置
      this.context = this.canvas.getContext('2d');

      // ?? 文字识别
      Tesseract.recognize('http://tesseract.projectnaptha.com/img/chi_sim.png')
      // Tesseract.recognize(this.state.img)
        .then(result => {
          console.log('result', result);
          this.setState({ text: result });
        })
    });
  }
  handleGetJPGImage = () => {
    // this.setState({ img: canvas.toDataURL('image/jpeg', 0.5) });
  }

  render() {
    return (
      <div>
        <canvas ref={(el) => (this.canvasDraw = el)} style={CanvasStyle} />
        <div style={Btn} onClick={this.handleReset}>重置</div>
        <div style={Btn} onClick={() => this.handleGetPNGImage(this.canvas)}>PNG</div>
        <div>{this.state.text}</div>
        <img src={this.state.img} alt="" ref={(el) => (this.imageTest = el)} />
      </div>
    );
  }
}

CanvasDraw.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(CanvasDraw);
