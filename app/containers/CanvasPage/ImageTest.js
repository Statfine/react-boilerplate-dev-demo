import React, { PureComponent } from 'react';
import ImageJpg from './testimage.jpg';
import QRPng from './qrcode.png';

function image2base64(src, w, h) { // eslint-disable-line
  return new Promise(async (resolve, reject) => {
    try {
      let result = null;
      let base64 = src;
      if (base64 instanceof File) {
        base64 = await asyncFileReader(src);
      }
      // result = await asyncLoadImage(base64, w, h);
      result = base64;
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

function asyncLoadImage(src, w, h) { // eslint-disable-line
  return new Promise((resolve, reject) => {
    try {
      const image = new Image();
      image.onload = async () => {
        const result = await resize(image, w, h);
        resolve(result);
      };
      image.src = src;
    } catch (err) {
      reject(err);
    }
  });
}

const resize = (image, w, h, qrImage) => {
  let maxwidth = 960;
  let maxheight = 540;
  const clientX = document.body.clientWidth;
  if (clientX >= 1600) {
    maxwidth = 960;
    maxheight = 540;
  }
  if (clientX > 1440 && clientX < 1600) {
    maxwidth = 852;
    maxheight = 480;
  }
  if (clientX <= 1440) {
    maxwidth = 640;
    maxheight = 360;
  }
  let width = image.width;
  let height = image.height;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (width > height) {
    if (width > maxwidth) {
      height = (maxwidth / width) * height; // eslint-disable-line
      width = maxwidth;
    }
  } else if (height > width) {
    if (height > maxheight) {
      width = (maxheight / height) * width; // eslint-disable-line
      height = maxheight;
    }
  }
  canvas.width = w || width;
  canvas.height = h || height;
  ctx.drawImage(image, 0, 0, w || width, h || height);

  // 第二个canvas文字
  const SCALE = 1.4;
  const inlineCanvas = document.createElement('canvas');
  const inlineCtx = inlineCanvas.getContext('2d');
  inlineCanvas.width = 200;
  inlineCanvas.height = 200;
  inlineCtx.font = '24px katong';
  inlineCtx.fillStyle = 'transparent';
  inlineCtx.fillRect(0, 0, 200, 200);
  inlineCtx.fillStyle = '#ff8140';
  inlineCtx.textAlign = 'center';
  inlineCtx.textBaseline = 'top';
  inlineCtx.fillText('邵佳', (inlineCanvas.width / 2), ((200 - (24 * SCALE)) / 2));
  // inlineCtx.translate(inlineCanvas.width / 2, inlineCanvas.height / 2);
  // inlineCtx.rotate(0.5);
  // inlineCtx.fillText('邵佳', 0, 0);
  // inlineCtx.restore();
  ctx.drawImage(inlineCanvas, 0, 0);

  // ctx.drawImage(image, 200, 200, 100, 100);
  ctx.drawImage(qrImage, 200, 200, 100, 100);

  return {
    width,
    height,
    base64: canvas.toDataURL(),
  };
};

export default class ImageCanvas extends PureComponent {
  state = {
    src: '',
  };

  handleSrc = () => {
    // const result = resize(this.img, 100, 100);
    // const result2 = resize(this.img);
    // console.log(result, result2);
    // this.setState({ src: result2.base64 });
    image2base64(QRPng, 100, 100).then((response) => {
      console.log('Promise response', response);
      const image = new Image();
      image.src = response;
      image.onload = async () => {
        const result2 = resize(this.img, '', '', image);
        console.log('Promise result2', result2);
        this.setState({ src: result2.base64 });
      };
    }).catch((error) => {
      console.log(error);
    });

    // image2base64(ImageJpg, 100, 100).then((response) => {
    //   console.log('Promise response', response);
    // }).catch((error) => {
    //   reject(error);
    // });
  }
  render() {
    return (
      <div>
        <div onClick={this.handleSrc}>get</div>
        <img ref={(ref) => { this.img = ref; }} id="tulip" src={ImageJpg} alt="The Tulip" />
        <img src={this.state.src} alt="The Tulip" />
      </div>
    );
  }
}
