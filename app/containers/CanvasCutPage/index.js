/**
 * Created by easub on 2017/8/7.
 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
// import Transformable from 'components/Transformable';
import Transformable from 'components/TransPercent';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';
import T from './test1.jpg';

const DIV = styled.div`
  position: relative;
  width: 652px;
  height: 480px;
`;

export default class MosaicPage extends PureComponent {

  state = {
    srt: '',
    srtTwo: '',
    srtThree: '',
    srtFour: '',
    item: {
      x: 10,
      y: 10,
      w: 20,
      h: 30,
      deg: 0,
    },
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
  }

  canvasImgDiv = () => {
    const canvas = document.createElement('canvas');
    const image = document.getElementById('div1');
    /*
    原始裁剪为止（85， 498， 138， 165）
    缩小之后的裁剪位置  (57， 332， 92, 110)
    */
    console.log(`height:${image.naturalHeight};width:${image.naturalWidth}`);
    const widthScale = image.naturalWidth / 852;
    const heightScale = image.naturalHeight / 480;

    canvas.width = 92 * widthScale; // 画布宽度
    canvas.height = 110 * heightScale; //  画布高度
    /*
      1. 规定要使用的图像、画布或视频
      2. 开始剪切的 x 坐标位置
      3. 开始剪切的 y 坐标位置
      4. 被剪切图像的宽度
      5. 被剪切图像的高度
      6. 在画布上放置图像的 x 坐标位置
      7. 在画布上放置图像的 y 坐标位置
      8. 要使用的图像的宽度 （伸展或缩小图像）
      9. 要使用的图像的高度 （伸展或缩小图像）
     图片是比较大尺寸的图，而你需要的图标 尺寸是个小的且固定大小的。所以 就先需要对 大图的进行缩放，
     然后再执行步骤四 中的方法 直接 使用 drawImage(img,sx,sy,swidth,sheight,x,y,width,height) ，
     因此sx,sy,swidth,sheight 是需要 乘以缩放比例的
     */
    console.log(100 * widthScale);
    console.log(600 * heightScale);
    canvas.getContext('2d').drawImage(image, 57 * widthScale, 332 * heightScale, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    const cover = canvas.toDataURL();
    this.setState({ srt: cover });
  }

  canvasImageFour = () => {
    const img = new Image();
    img.src = T;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 852; // 画布宽度
      canvas.height = 480; //  画布高度
      canvas.getContext('2d').drawImage(img, 0, 0, 852, 480);
      const cover = canvas.toDataURL();
      alert(cover.length);
      this.setState({ srtFour: cover });
    };
  }

  handleChangeConfig = (val) => {
    console.log(val);
    const elWidth = 852;
    const elHeight = 480;
    const { w, h, x, y, deg } = val;
    const dragWidth = w * 0.01 * elWidth;
    const dragHeight = h * 0.01 * elHeight;
    const dragX = x * 0.01 * elWidth;
    const dragY = y * 0.01 * elHeight;
    this.setState({ item: val });

    console.log(deg);
    const canvas = document.createElement('canvas');
    const image = document.getElementById('div2');
    // 原始大小输出
    const widthScale = image.naturalWidth / elWidth;
    const heightScale = image.naturalHeight / elHeight;

    canvas.width = dragWidth * widthScale; // 画布宽度
    canvas.height = dragHeight * heightScale; //  画布高度

    canvas.getContext('2d').drawImage(image, dragX * widthScale, dragY * heightScale, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    const cover = canvas.toDataURL();
    this.setState({ srtThree: cover });
  }

  // 'http://39.108.60.29/static/video/v1.png'
  render() {
    const { srt, srtTwo, srtThree, srtFour, item } = this.state;
    return (
      <div>
        <Helmet title="Canvas 裁剪" />
        <DIV>
          <img crossOrigin="Anonymous" style={{ width: 852, height: 480 }} id="div1" src={T} alt="" />
        </DIV>
        <Button onClick={() => this.canvasImgDiv()} type="primary">等比获取截图</Button>
        <img src={srt} alt="" />
        <img src={srtTwo} alt="" />
        <DIV style={{ width: 852, height: 480 }}>
          <img style={{ width: 852, height: 480, position: 'absolute', top: 0, left: 0 }} id="div2" src={T} alt="" />
          <Transformable
            onChange={this.handleChangeConfig}
            translate
            drag
            defaultPosition={{ w: item.w, h: item.h, x: item.x, y: item.y, rotate: item.rotate }}
          >
            <div>1</div>
          </Transformable>
          <img src={srtThree} style={{ filter: 'blur(10px)', position: 'absolute', width: `${item.w * 0.01 * 852}px`, height: `${item.h * 0.01 * 480}px`, top: `${item.y * 0.01 * 480}px`, left: `${item.x * 0.01 * 852}px` }} alt="" />
        </DIV>
        <img src={srtThree} alt="" />
        <br />
        <Button onClick={() => this.canvasImageFour()} type="primary">画布填充图</Button>
        <br />
        <img src={srtFour} alt="" />
      </div>
    );
  }
}
