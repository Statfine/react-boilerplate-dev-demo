import React, { PureComponent } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Button } from 'antd';

const Container = styled.div`
  dislay: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
`;

const PICTURE = [
  `http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/EcYrRKRtEydM.png?rand=${Math.random()}`,
  `http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png?rand=${Math.random()}`,
  `http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/napFbsCN2Gt3.png?rand=${Math.random()}`,
  `http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png?rand=${Math.random()}`,
];
export default class CrossOrigin extends PureComponent {
  state = {
    showPicture: [],
    src: '',
    imgSrc: '',
  };
  componentWillMount() {
    this.handleChangePic();
  }
  // 截取封面图
  handleCutCover = () => {
    let cover = '';
    try {
      const canvas = document.createElement('canvas');
      const video = this.video;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext('2d')
        .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      cover = canvas.toDataURL();
      alert(cover);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    this.setState({ imgSrc: cover });
  };
  handleChangePic = () => this.setState({ showPicture: _.shuffle(PICTURE).slice(0, 2) });
  render() {
    const { showPicture } = this.state;
    return (
      <Container>
        {
          showPicture.map((item) => (
            <Image crossOrigin="Anonymous" key={item} src={item} onClick={() => this.setState({ src: item })} />
          ))
        }
        <img crossOrigin="Anonymous" src={this.state.src} alt="" />
        <Button type="primary" onClick={this.handleChangePic}>修改显示图片</Button>
        <video
          ref={(c) => { this.video = c; }}
          controls
          id="video"
          src="http://39.108.60.29/static/video/v1.mp4"
          poster="http://39.108.60.29/static/video/v1.png"
          crossOrigin="*"
          playsInline
          // x5PlaysInline
          // webkitPlaysInline
          width="800px"
        />
        <img src={this.state.imgSrc} alt="" />
        <div onClick={this.handleCutCover}>Get src1</div>
      </Container>
    );
  }
}
