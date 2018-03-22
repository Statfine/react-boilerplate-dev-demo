import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import BbcVideo from './VideoPage';
import BbcImage from './ImagePage';
import VideoAndVideo from './VideoAndVideo';
import VideotransVideo from './VideoTransVideo';
import VideoTransMoreVideo from './VideoTransMoreVideo';

import BBCEffectNode from './BBCEffectNode';
import BBCCompositingNode from './BBCCompositingNode';

const Btn = styled(Button)`
  background: ${({ choosed }) => choosed ? '#4885ed' : '#1DA57A'};
`;

class BbcPage extends PureComponent {
  state = {
    index: 1,
  };

  renderVideoContext = () => {
    const { index } = this.state;
    switch (index) {
      case 1:
        return (<BbcVideo />);
      case 2:
        return (<BbcImage />);
      case 3:
        return (<VideoAndVideo />);
      case 4:
        return (<VideotransVideo />);
      case 5:
        return (<VideoTransMoreVideo />);
      case 6:
        return (<BBCEffectNode />);
      case 7:
        return (<BBCCompositingNode />);
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <a href="http://123.206.18.31/static/video/v1.mp4" download="w3logo">download</a>
        <div>
          <Btn size="large" type="primary" choosed={this.state.index === 1} onClick={() => this.setState({ index: 1 })}>单个视频</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 2} onClick={() => this.setState({ index: 2 })}>单个图片</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 3} onClick={() => this.setState({ index: 3 })}>两个视频直接连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 4} onClick={() => this.setState({ index: 4 })}>两个视频特效连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 5} onClick={() => this.setState({ index: 5 })}>三个视频连续特效连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 6} onClick={() => this.setState({ index: 6 })}>BBCEffectNode</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 7} onClick={() => this.setState({ index: 7 })}>BBCCompositingNode</Btn>
        </div>
        {this.renderVideoContext()}
      </div>
    );
  }
}

export default BasePage(BbcPage);
