import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Item, DivLine, WordDiv, WordP, StartPoint, EndPoint } from './styled';

export default class SubtitleItem extends PureComponent {
  state = {
    lineSubtitle: [],
  };
  componentWillMount() {
    const { text, st, et } = this.props.data;
    const startTime = Number(st);
    const endTime = Number(et);
    const lineText = text.trim();
    const lineTextArray = lineText.split('');
    const lineTextLength = lineText.length;
    const lineTime = endTime - startTime;
    const tiemSpace = Number((lineTime / (lineTextLength - 1)).toFixed(2));
    const lineSubtitle = lineTextArray.map((item, index) => {
      let time = Number((startTime + (tiemSpace * index)).toFixed(3));
      if (index === (lineTextArray.length - 1) && time > endTime) {
        time = endTime; // 均分不够超出处理
      }
      return ({ text: item, time });
    });
    this.setState({ lineSubtitle });
  }
  componentDidMount() {
    this.props.handleSetHeight(this.props.index, this.Item.getBoundingClientRect().height);
  }
  handleJump = (e) => {
    e.stopPropagation();
    window.open(this.props.data.ad);
  }
  handleSeek = () => {
    const { data, seek } = this.props;
    seek(data.st);
  }
  handleHoverChange = (e, item) => {
    const { cutting } = this.props;
    console.log('handleHoverChange', item, cutting);
    if (cutting) this.props.onChangeCutTime(item.time);
  }
  verifyStart = (item, wordIndex) => {
    const { cutTime, data } = this.props;
    return (Number(cutTime.startCutTime) === Number(item.time) || (Number(cutTime.startCutTime) === Number(data.st) && wordIndex === 0));
  }
  verifyEnd = (item, wordIndex) => {
    const { cutTime, data } = this.props;
    const { lineSubtitle } = this.state;
    return (Number(cutTime.endCutTime) === Number(item.time) || (Number(cutTime.endCutTime) === Number(data.et) && wordIndex === (lineSubtitle.length - 1)));
  }
  verifyChoosed = (item) => {
    const { cutTime } = this.props;
    return (Number(cutTime.startCutTime) <= Number(item.time) && Number(cutTime.endCutTime) >= Number(item.time));
  }
  render() {
    const { data, currentTime, cutTime, onChangeCutting, handleChangeCutFlag } = this.props;
    const { lineSubtitle } = this.state;
    console.log('lineSubtitle', lineSubtitle, cutTime);
    return (
      <Item
        innerRef={(c) => { this.Item = c; }}
        choosed={data.st <= currentTime && currentTime <= data.et}
        onClick={this.handleSeek}
      >
        <DivLine key={data.st}>
          {
            lineSubtitle.map((item, wordIndex) => (
              <WordDiv
                onMouseEnter={(e) => this.handleHoverChange(e, item)}
              >
                { this.verifyStart(item, wordIndex) &&
                  <StartPoint
                    onMouseDown={() => {
                      onChangeCutting(true);
                      handleChangeCutFlag(true);
                    }}
                    onMouseUp={() => onChangeCutting(false)}
                  />
                }
                { this.verifyEnd(item, wordIndex) &&
                  <EndPoint
                    onMouseDown={() => {
                      onChangeCutting(true);
                      handleChangeCutFlag(false);
                    }}
                    onMouseUp={() => onChangeCutting(false)}
                  />
                }
                <WordP choosed={this.verifyChoosed(item)}>
                  {item.text}
                </WordP>
              </WordDiv>))
          }
        </DivLine>
      </Item>
    );
  }
}

SubtitleItem.propTypes = {
  data: PropTypes.object,
  currentTime: PropTypes.number,
  seek: PropTypes.func,
  index: PropTypes.number,
  handleSetHeight: PropTypes.func,
  cutTime: PropTypes.object,
  onChangeCutTime: PropTypes.func, // 修改时间
  handleChangeCutFlag: PropTypes.func, // 设置前后
  cutting: PropTypes.bool,
  onChangeCutting: PropTypes.func, // 正在剪切
};
