import React, { PureComponent } from 'react';
import styled from 'styled-components';
// import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #FFF;
`;

const DIV = styled.div`
  width: 400px;
  height: 400px;
  background: #FFF;
  margin: 20px;
  position: relative;
  overflow: hidden;
  & img {
    height: 100%;
  }
`;

const IrregularOnePicOne = styled.div`
  width: 60%;
  height: 60%;
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0px 0px, 98% 0px, 96% 94%, 0px 67%);
`;

const IrregularOnePicTwo = styled.div`
  width: 40%;
  height: 80%;
  position: absolute;
  right: 0;
  top: 0;
  clip-path: polygon(0px 0px, 100% 0px, 100% 85%, 0px 71%);
`;

const IrregularOnePicThree = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  bottom: 0;
  clip-path: polygon(0 3%, 100% 49%, 100% 100%, 0% 100%);
`;

const IrregularTwoPic = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const IrregularTwoPicOne = styled(IrregularTwoPic)`
  clip-path: polygon(0 0, 59% 0%, 56% 56.5%, 0% 40%);
`;

const IrregularTwoPicTwo = styled(IrregularTwoPic)`
  clip-path: polygon(60% 0, 100% 0%, 100% 70%, 57% 57%);
`;

const IrregularTwoPicThree = styled(IrregularTwoPic)`
  clip-path: polygon(0% 41.5%, 100% 71.5%, 100% 100%, 0% 100%);
`;

const CircleDiv = styled(DIV)`
  border-radius: 50%;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: #FFF;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  z-index: 1001;
`;

const IrregularThreePicOne = styled(IrregularTwoPic)`
  clip-path: polygon(0 1%, 49% 49.5%, 0% 49.5%);
`;

const IrregularThreePicTwo = styled(IrregularTwoPic)`
  clip-path: polygon(1% 0, 99% 0%, 50% 49.5%);
`;

const IrregularThreePicThree = styled(IrregularTwoPic)`
  clip-path: polygon(100% 1%, 100% 49.5%, 51% 49.5%);
`;

const IrregularThreePicFour = styled(IrregularTwoPic)`
  clip-path: polygon(51% 50.5%, 100% 50.5%, 100% 99%);
`;

const IrregularThreePicFive = styled(IrregularTwoPic)`
  clip-path: polygon(50% 50.5%, 99% 100%, 1% 100%);
`;

const IrregularThreePicSix = styled(IrregularTwoPic)`
  clip-path: polygon(0% 50.5%, 49% 50.5%, 0% 99%);
`;

const Line = styled.div`
  width: 100%;
  height: 1%;
  position: absolute;
  background: red;
  z-index: 1000;
  top: 50%;
  margin-top: -0.5%;
  left: 0;
`;

const LineTop = styled.div`
  width: 100%;
  height: 1%;
  position: absolute;
  background: red;
  z-index: 1000;
  top: 50%;
  margin-top: -1%;
  left: 0;
  transform: rotate(44.5deg);
`;

const LineBottom = styled.div`
  width: 100%;
  height: 1%;
  position: absolute;
  background: red;
  z-index: 1000;
  top: 50%;
  margin-top: -1%;
  left: 0;
  transform: rotate(-44.5deg);
  display: none;
`;

export default class ClipPath extends PureComponent {
  state = {
    show: false,
  }
  handleClick = () => {
    // const _this = this;
    // this.setState({ show: true });
    // html2canvas(document.getElementById('imageCover'), { useCORS: true }).then((canvas) => {
    //   const image = canvas.toDataURL('image/png');
    //   _this.setState({ cover: image });
    //   this.setState({ show: false });
    // });

    // domtoimage.toPng(document.getElementById('imageCover')).then((dataUrl) => {
    //   this.setState({ cover: dataUrl });
    // })
    // .catch((error) => {
    //   console.error('oops, something went wrong!', error);
    // });
    domtoimage.toSvg(document.getElementById('imageCover'))
    .then((dataUrl) => {
      /* do something */
      console.log(dataUrl);
      this.setState({ cover: dataUrl });
    });
  }
  filter = (node) => node.tagName !== 'i';
  render() {
    const { show } = this.state;
    return (
      <Container>
        <DIV id="imageCover">
          <IrregularOnePicOne><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/EcYrRKRtEydM.png" alt="" /></IrregularOnePicOne>
          <IrregularOnePicTwo><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png" alt="" /></IrregularOnePicTwo>
          <IrregularOnePicThree><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/napFbsCN2Gt3.png" alt="" /></IrregularOnePicThree>
        </DIV>
        <DIV >
          <IrregularTwoPicOne><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/EcYrRKRtEydM.png" alt="" /></IrregularTwoPicOne>
          <IrregularTwoPicTwo><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png" alt="" /></IrregularTwoPicTwo>
          <IrregularTwoPicThree><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/napFbsCN2Gt3.png" alt="" /></IrregularTwoPicThree>
        </DIV>
        <CircleDiv onClick={this.handleClick}>
          <Circle></Circle>
          <IrregularThreePicOne><img src="http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png" alt="" /></IrregularThreePicOne>
          <IrregularThreePicTwo><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png" alt="" /></IrregularThreePicTwo>
          <IrregularThreePicThree><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/napFbsCN2Gt3.png" alt="" /></IrregularThreePicThree>
          <IrregularThreePicFour><img src="http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png" alt="" /></IrregularThreePicFour>
          <IrregularThreePicFive><img src="http://clip-worldcup.oss-cn-beijing.aliyuncs.com//test/videoImage/HpXxHSPkZp5s.png" alt="" /></IrregularThreePicFive>
          <IrregularThreePicSix><img src="http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png" alt="" /></IrregularThreePicSix>
          {show && <Line />}
          {show && <LineTop />}
          {show && <LineBottom />}
        </CircleDiv>
        <img src={this.state.cover} alt="" />
      </Container>
    );
  }
}
