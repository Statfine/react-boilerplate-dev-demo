import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Item, DivP, Popover, PopoverArrow, PopoverCover } from '../styled';

export default class SubtitleItem extends PureComponent {
  state = {};
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
  // createMarkup = (text) => { // eslint-disable-line
  //   return { __html: this.changeWrap(text, '<br />') };
  // }
  // changeWrap = (text, str) => {
  //   const arr = text.split('||');
  //   if (arr.length === 1) {
  //     return text;
  //   }
  //   let changeText = '';
  //   for (let i = 0; i < arr.length; i += 1) {
  //     if (i < text.length - 1) {
  //       changeText += arr[i] + str;
  //     }
  //   }
  //   return changeText;
  // }
  creatMark = (text, data) => { // eslint-disable-line
    if (data.adword && text.includes(data.adword)) return { __html: this.repleaseText(text, data) };
    return { __html: text };
  }
  repleaseText = (text, data) => text.replace(data.adword, this.renderDiv(data));
  renderDiv = (data) => `<a href="${data.ad}" target="_blank">${data.adword}</a>`;
  render() {
    const { data, currentTime } = this.props;
    return (
      <Item
        innerRef={(c) => { this.Item = c; }}
        choosed={data.st <= currentTime && currentTime <= data.et}
        onClick={this.handleSeek}
      >
        {
          data.text.split('||').map((item) => (
            <DivP key={item} dangerouslySetInnerHTML={this.creatMark(item, data)} />
          ))
        }
        {
          (data.ad && data.st <= currentTime && currentTime <= data.et) && <Popover second={data.second}>
            <PopoverArrow />
            <PopoverCover onClick={this.handleJump} src={data.cover} />
          </Popover>
        }
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
};
