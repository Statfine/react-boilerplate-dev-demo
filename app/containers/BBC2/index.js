
/*
*  自封装videocontext
*/

import React, { PureComponent } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';

import AcrossVerticalBlur from './AcrossVerticalBlur'; // 横竖屏+补模糊边
import Crop from './Crop'; // 裁剪
import SimpleConnect from './SimpleConnect'; // 视频链接 - 简单的视屏拼接
import SimpleConnect2 from './SimpleConnect2'; // 视频链接 - 添加转场
import SimpleConnect3 from './SimpleConnect3'; // 视频链接 - 添加转场
import SimpleConnect4 from './SimpleConnect4'; // 集成视频链接

const Btn = styled(Button)`
  background: ${({ checked }) => checked ? '#4885ed' : '#1DA57A'};
`;

class Bbc2Page extends PureComponent {
  state = {
    index: 6,
  };

  renderVideoContext = () => {
    const { index } = this.state;
    switch (index) {
      case 1:
        return (<AcrossVerticalBlur />);
      case 2:
        return (<Crop />);
      case 3:
        return (<SimpleConnect />);
      case 4:
        return (<SimpleConnect2 />);
      case 5:
        return (<SimpleConnect3 />);
      case 6:
        return (<SimpleConnect4 />);
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Videocontext页面" />
        <div>
          <Btn size="large" type="primary" checked={this.state.index === 1} onClick={() => this.setState({ index: 1 })}>横竖屏+补模糊边</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 2} onClick={() => this.setState({ index: 2 })}>横竖屏+补模糊边+裁剪</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 3} onClick={() => this.setState({ index: 3 })}>集成视频链接</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 4} onClick={() => this.setState({ index: 4 })}>视频链接-简单转场</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 5} onClick={() => this.setState({ index: 5 })}>视频链接-集成转场(无中间转场)</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 6} onClick={() => this.setState({ index: 6 })}>视频链接-集成转场</Btn>
        </div>
        {this.renderVideoContext()}
      </div>
    );
  }
}

export default BasePage(Bbc2Page);
