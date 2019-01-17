import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import BbcVideo from './VideoPage';
import BbcImage from './ImagePage';
import VideoAndVideo from './VideoAndVideo';
import VideotransVideo from './VideoTransVideo';
import VideoTransMoreVideo from './VideoTransMoreVideo';

import BBCEffectNode from './BBCEffectNode';
import BBCCompositingNode from './BBCCompositingNode';

import T1 from './Transition/T1';
import T2 from './Transition/T2';
import T3 from './Transition/T3';

const Btn = styled(Button)`
  background: ${({ choosed }) => choosed ? '#4885ed' : '#1DA57A'};
`;

class BbcPage extends PureComponent {
  state = {
    index: 10,
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
      case 8:
        return (<T1 />);
      case 9:
        return (<T2 />);
      case 10:
        return (<T3 />);
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Videocontext页面" />
        <a href="http://123.206.18.31/static/video/v1.mp4" download="w3logo">download</a>
        <div>
          <Btn size="large" type="primary" choosed={this.state.index === 1} onClick={() => this.setState({ index: 1 })}>单个视频</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 2} onClick={() => this.setState({ index: 2 })}>单个图片</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 3} onClick={() => this.setState({ index: 3 })}>两个视频直接连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 4} onClick={() => this.setState({ index: 4 })}>两个视频特效连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 5} onClick={() => this.setState({ index: 5 })}>三个视频连续特效连接</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 6} onClick={() => this.setState({ index: 6 })}>BBCEffectNode</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 7} onClick={() => this.setState({ index: 7 })}>BBCCompositingNode</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 8} onClick={() => this.setState({ index: 8 })}>单视频前后特效</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 9} onClick={() => this.setState({ index: 9 })}>两视频前特效+中间特效+结束特效</Btn>
          <Btn size="large" type="primary" choosed={this.state.index === 10} onClick={() => this.setState({ index: 10 })}>三视频</Btn>
        </div>
        {this.renderVideoContext()}
      </div>
    );
  }
}

export default BasePage(BbcPage);
