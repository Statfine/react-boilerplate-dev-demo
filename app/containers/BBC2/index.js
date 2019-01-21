
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

const Btn = styled(Button)`
  background: ${({ checked }) => checked ? '#4885ed' : '#1DA57A'};
`;

class Bbc2Page extends PureComponent {
  state = {
    index: 2,
  };

  renderVideoContext = () => {
    const { index } = this.state;
    switch (index) {
      case 1:
        return (<AcrossVerticalBlur />);
      case 2:
        return (<Crop />);
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
        </div>
        {this.renderVideoContext()}
      </div>
    );
  }
}

export default BasePage(Bbc2Page);
