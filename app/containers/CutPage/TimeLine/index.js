import React, { PureComponent } from 'react';

import ItemChunk from './ItemChunk';

import { Container, TimeContainer,
  TimeRow, SecondCurrentTime,
  SecondsLine, Second, SecondScale, SecondNumber, SecondPointer,
  TimelineContainer } from './styled';

// const BaseWidth = 20;
const OneLineScaleNumber = 36;

function formatHourMinSec(t) {
  const h = parseInt(t / 3600);
  const m = parseInt((t - (h * 3600)) / 60);
  const s = parseInt(t - ((h * 3600) + (m * 60)));
  return `${zeroFill(h)}:${zeroFill(m)}:${zeroFill(s)}`;
}

function zeroFill(s) {
  if (s < 10 && s >= 0) return `0${s}`;
  return s;
}

export default class TimeLine extends PureComponent {
  state = {
    videoList: [
      { length: 180, startTime: 0, endTime: 180, cover: 'http://39.108.60.29/static/video/v1.png' },
      { length: 260, startTime: 0, endTime: 260, cover: 'http://39.108.60.29/static/video/v2.png' },
      { length: 300, startTime: 0, endTime: 40, cover: 'http://39.108.60.29/static/video/v1.png' },
    ],
    choosedIndex: -1,
    noTrans: false,
    baseWidth: 0,
    fatherObj: {},
    scaleCurrentTime: {
      showBool: true,
      transX: 0,
    },
    currentTime: 0,
  };
  componentDidMount() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }
  /**
   * 一行9分钟
   */
  onWindowResize = () => {
    const domRect = this.container.getBoundingClientRect();
    console.log(domRect, domRect.width / 540);
    this.setState({ baseWidth: domRect.width / 540, fatherObj: domRect });
  }
  //  时间修改
  handleChangeTime = (index, info) => {
    const videoList = this.state.videoList.concat();
    videoList[index] = info;
    console.log('handleChangeTime===>', index, info);
    this.setState({ videoList });
  }
  handeMouseClick = (ev) => {
    // console.log('handeMouseClick');
    const x = ev.clientX;
    const domRect = this.container.getBoundingClientRect();
    const transX = x - domRect.x;
    this.setState({ currentTime: transX / this.state.baseWidth });
  }
  handleOnMouseMove = (ev) => {
    ev.stopPropagation();
    const x = ev.clientX;
    const domRect = this.container.getBoundingClientRect();
    const transX = x - domRect.x;
    // console.log('handleOnMouseMove', domRect.x, x, transX);
    this.setState({ scaleCurrentTime: { showBool: true, transX } });
  }
  handleOnMouseLeave = () => {
    this.setState({ scaleCurrentTime: { showBool: false, transX: 0 } });
  }
  renderScale = () => {
    const list = [];
    for (let i = 0; i < OneLineScaleNumber; i += 1) {
      list.push(<Second key={i} width={this.state.baseWidth * 15}>
        <SecondScale />
        { (i % 12) === 0 && <SecondNumber>{formatHourMinSec(i * 15)}</SecondNumber>}
      </Second>);
    }
    return list;
  }
  render() {
    const { videoList, choosedIndex, noTrans, baseWidth, fatherObj, scaleCurrentTime, currentTime } = this.state;
    return (
      <Container>
        <TimeContainer innerRef={(c) => { this.container = c; }}>
          { /* 单行 */}
          <TimeRow
            onClick={this.handeMouseClick}
            onMouseMove={this.handleOnMouseMove}
            onMouseLeave={this.handleOnMouseLeave}
          >
            <SecondPointer transX={currentTime * baseWidth}>
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLDIuMDA1OTQ3MiBDMCwwLjg5ODA5MzE1NSAwLjg4NzQzMzI5LDAgMS45OTk2MTQ5OCwwIEw4LjAwMDM4NTAyLDAgQzkuMTA0NzQxODgsMCAxMCwwLjg4Nzc0NjY0NiAxMCwyLjAwNTk0NzIgTDEwLDkuMDcwOTc1ODcgQzEwLDEwLjE3ODgyOTkgOS40MzUzODE0NywxMS43NzE4MzgyIDguNzM0Mzc1LDEyLjYzNDYxNTQgTDYsMTYgTDQsMTYgTDEuMjY1NjI1LDEyLjYzNDYxNTQgQzAuNTY2NjM5NjE0LDExLjc3NDMyNTcgMCwxMC4xODkxNzY0IDAsOS4wNzA5NzU4NyBMMCwyLjAwNTk0NzIgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiMwMERGQjAiIHN0cm9rZS13aWR0aD0iMSIgZD0iTTUuNzYyMDE0NzUsMTUuNSBMNC4yMzc5ODUyNSwxNS41IEwxLjY1MzY4MiwxMi4zMTkzMTkxIEMxLjAyNDc2NzE4LDExLjU0NTI3MDEgMC41LDEwLjA3MDYzODQgMC41LDkuMDcwOTc1ODcgTDAuNSwyLjAwNTk0NzIgQzAuNSwxLjE3MDg2MjQ1IDEuMTY2OTM3MSwwLjUgMS45OTk2MTQ5OCwwLjUgTDguMDAwMzg1MDIsMC41IEM4LjgzMjIxOTk1LDAuNSA5LjUsMS4xNjc1MDgwMyA5LjUsMi4wMDU5NDcyIEw5LjUsOS4wNzA5NzU4NyBDOS41LDEwLjA2NTExOTYgOC45NzQyMDEwNSwxMS41NDY1Mzk5IDguMzQ2MzE4LDEyLjMxOTMxOTEgTDUuNzYyMDE0NzUsMTUuNSBaIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="" />
            </SecondPointer>
            { scaleCurrentTime.showBool && <SecondCurrentTime transX={scaleCurrentTime.transX}>{formatHourMinSec(scaleCurrentTime.transX / baseWidth)}</SecondCurrentTime> }
            <SecondsLine>
              {this.renderScale()}
            </SecondsLine>
            <TimelineContainer>
              {
                baseWidth !== 0 && videoList.map((item, index) => (
                  <ItemChunk
                    key={index}
                    index={index}
                    choosedIndex={choosedIndex}
                    baseWidth={baseWidth}
                    fatherObj={fatherObj}
                    videoList={videoList}
                    handleChoosed={(index) => {
                      this.setState({ choosedIndex: index });
                      console.log('choose', index);
                    }}
                    handleChangeTime={this.handleChangeTime}
                    noTrans={noTrans}
                    hanldeTrans={(noTrans) => this.setState({ noTrans })}
                  />
                ))
              }
            </TimelineContainer>
          </TimeRow>
          { /* 单行 */}
        </TimeContainer>
      </Container>
    );
  }
}
