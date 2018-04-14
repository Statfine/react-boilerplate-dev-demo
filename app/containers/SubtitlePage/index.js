import React from 'react';
import { Container, VideoContent, SubtitleContent, ImgAd } from './styled';
import SubtitleItem from './SubtitleItem';
import Marquee from './Marquee';
// import { data } from './SubtitleItem/subtitle';
import data from './subtitle.json';

export default class SubtitlePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    src: 'http://123.206.18.31/static/video/sub_demo.mp4',
    currentTime: 0,
    subtitle: data.data.subtitles[0].subtitles,
    marqueeObj: {
      marqueeText: '',
      type: '',
    },
    showImg: '',
    showImgHref: '',
  }

  subtitleHight = [];
  scrilling = true;
  inter;

  // 回调行高
  handleSetHeight = (index, height) => {
    this.subtitleHight[index] = height;
  }
  // 跑马灯结束回调
  handleAnimalEnd = () => {
    this.setState({ marqueeObj: {
      marqueeText: '',
      type: '',
    } });
  }
  // 播放器时间改变监听
  handleChangeTime = () => {
    const currentTime = Number(this.video.currentTime);
    this.setState({ currentTime });
    this.handleChangeLine(currentTime);
  }
  handleSeek = (time) => {
    this.video.currentTime = time;
  }
  handleChangeLine = (currentTime) => {
    const { subtitle } = this.state;
    let number = 0;
    subtitle.map((item, index) => {
      if (item.st <= currentTime && currentTime <= item.et) {
        number = index;
        if (item.type === 'image-bottom-right') this.setState({ showImg: item.cover, showImgHref: item.ad });
        else this.setState({ showImg: '' });
      }
      return number;
    });
    // console.log(number);
    const itemData = subtitle[number];
    if (itemData.type && itemData.type.includes('text-')) this.handleSetHotKet(itemData);
    if (this.scrilling) this.handleScrollTo(number);
  }
  handleSetHotKet = (itemData) => this.setState({ marqueeObj: itemData });

  handleScrollTo = (number) => {
    if (number !== 0) {
      let height = 0;
      this.subtitleHight.map((item, index) => {
        if (index < number) height += this.subtitleHight[index];
        return height;
      });
      // console.log('subtitleHight', this.subtitleHight);
      $('#SubtitleContent').stop().animate({ scrollTop: height + 6 }, 200);
    }
  }
  // 主动滚动的时候，不做获取视频时间滚动到指定行目
  handleScroll = () => {
    // console.log('handleScroll');
    this.scrilling = false;
    if (this.inter) clearInterval(this.inter);
    this.inter = setInterval(() => {
      this.scrilling = true;
      // console.log('endScroll');
    }, 1000);
  }

  render() {
    const { src, subtitle, currentTime, marqueeObj, showImg, showImgHref } = this.state;
    return (
      <Container>
        <VideoContent>
          <video
            ref={(c) => { this.video = c; }}
            style={{ width: '100%', height: '100%' }}
            onTimeUpdate={this.handleChangeTime}
            src={src}
            controls="controls"
          />
          {marqueeObj.type !== '' && <Marquee marqueeObj={marqueeObj} handleAnimalEnd={this.handleAnimalEnd} />}
          <ImgAd src={showImg} onClick={() => window.open(showImgHref)} />
        </VideoContent>
        <SubtitleContent
          id="SubtitleContent"
          onScroll={this.handleScroll}
        >
          {
            subtitle.map((item, index) => (
              <SubtitleItem
                key={item.st}
                index={index}
                data={item}
                currentTime={currentTime}
                seek={this.handleSeek}
                handleSetHeight={this.handleSetHeight}
              />
            ))
          }
        </SubtitleContent>
      </Container>
    );
  }
}
