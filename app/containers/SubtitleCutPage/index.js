import React from 'react';

import { Container, VideoContent, SubtitleContent } from './styled';

import SubtitleItem from './SubtitleItem';
import SubtitleJson from './subtitleJson';
import data from './subtitle.json';

export default class SubtitleCutPage extends React.PureComponent {
  state = {
    src: 'http://filetrans-raw-1255353254.cos.ap-guangzhou.myqcloud.com/videoplayback2.m4a',
    currentTime: 0,
    subtitle: data.subtitles,
    startCutTime: 19.260,
    endCutTime: 26.010,
    cutFlag: false, // true-start false-end
    cutting: false, // 剪切中
  }
  subtitleHight = [];
  scrilling = true;
  inter;

  // 播放器时间改变监听
  handleChangeTime = () => {
    const currentTime = Number(this.video.currentTime);
    this.setState({ currentTime });
    this.handleChangeLine(currentTime);
  }
  handleChangeLine = (currentTime) => {
    console.log('currentTime', currentTime);
    // const { subtitle } = this.state;
    // let number = 0;
    // subtitle.map((item, index) => {
    //   if (item.st <= currentTime && currentTime <= item.et) {
    //     number = index;
    //   }
    //   return number;
    // });
    // console.log(number);
    // if (this.scrilling) this.handleScrollTo(number);
  }
  handleSeek = (time) => {
    this.video.currentTime = time;
  }

  // 回调行高
  handleSetHeight = (index, height) => {
    this.subtitleHight[index] = height;
  }

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
    this.scrilling = false;
    if (this.inter) clearInterval(this.inter);
    this.inter = setInterval(() => {
      this.scrilling = true;
    }, 1000);
  }

  // 拖拽开始
  handleChangeCuting = (cutting) => this.setState({ cutting });
  // 拖拽标签前点|后点 flag-ture开始点
  handleChangeCutFlag = (cutFlag) => this.setState({ cutFlag })
  // 时间调整
  handleChangeCutTime = (time) => {
    const { cutFlag, startCutTime, endCutTime } = this.state;
    if (cutFlag) { // 拖动开始点
      if (time > endCutTime) this.setState({ startCutTime: time, endCutTime: time, cutFlag: false });
      else this.setState({ startCutTime: time });
    }
    if (!cutFlag) { // 拖动结束点
      if (time < startCutTime) this.setState({ startCutTime: time, endCutTime: time, cutFlag: true });
      else this.setState({ endCutTime: time });
    }
  }
  render() {
    const { src, subtitle, currentTime, startCutTime, endCutTime, cutting } = this.state;
    console.log(startCutTime, endCutTime);
    return (
      <div>
        <p>剪切开始时间：{startCutTime},结束时间：{endCutTime}</p>
        <Container>
          <VideoContent>
            <video
              ref={(c) => { this.video = c; }}
              style={{ width: '100%', height: '100%' }}
              onTimeUpdate={this.handleChangeTime}
              src={src}
              controls="controls"
            />
          </VideoContent>
          <SubtitleContent
            id="SubtitleContent"
            onScroll={this.handleScroll}
            onMouseUp={() => this.setState({ cutting: false })}
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
                  cutTime={{ startCutTime, endCutTime }}
                  onChangeCutTime={this.handleChangeCutTime}
                  handleChangeCutFlag={this.handleChangeCutFlag}
                  cutting={cutting}
                  onChangeCutting={this.handleChangeCuting}
                />
              ))
            }
          </SubtitleContent>
        </Container>
        <SubtitleJson />
      </div>
    );
  }
}
