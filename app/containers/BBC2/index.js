
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
import Mosaic from './Mosaic'; // 马赛克
import SimpleConnect from './SimpleConnect'; // 集成视频链接
import SimpleConnect2 from './SimpleConnect2'; // 视频链接-简单转场
import SimpleConnect3 from './SimpleConnect3'; // 视频链接-集成转场(无中间转场)
import SimpleConnect4 from './SimpleConnect4'; // 集成视频转场链接

const Btn = styled(Button)`
  background: ${({ checked }) => checked ? '#4885ed' : '#1DA57A'};
`;

/*
* videoContext 事件  "stalled", "update", "ended", "content", "nocontent"
*   ended 结束会触发
*   content 有node节点会触发
*   nocontent 无node节点会触发
*   stalled  播放中修改播放时间点会触发
*
* videoNode 事件 "load", "destroy", "seek", "pause", "play", "ended", "durationchange", "loaded", "error"
*   load 加载中会触发
*   loaded 已加载可播放会触发
*   play 播放中会触发
*   durationchange
*   ended 结束会触发
*   error 加载失败会触发
*   render 渲染，持续进行 （可判断状态）
*
*
* 特效添加
*   马赛克(原始视频的基础上进行) + 裁剪(原始视频的基础上进行) + 补边(如有裁剪，裁剪后视频)
*/
class Bbc2Page extends PureComponent {
  state = {
    index: 3,
  };

  renderVideoContext = () => {
    const { index } = this.state;
    switch (index) {
      case 1:
        return (<AcrossVerticalBlur />);
      case 2:
        return (<Crop />);
      case 3:
        return (<Mosaic />);
      case 4:
        return (<SimpleConnect />);
      case 5:
        return (<SimpleConnect2 />);
      case 6:
        return (<SimpleConnect3 />);
      case 7:
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
          <Btn size="large" type="primary" checked={this.state.index === 3} onClick={() => this.setState({ index: 3 })}>马赛克</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 4} onClick={() => this.setState({ index: 4 })}>集成视频链接</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 5} onClick={() => this.setState({ index: 5 })}>视频链接-简单转场</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 6} onClick={() => this.setState({ index: 6 })}>视频链接-集成转场(无中间转场)</Btn>
          <Btn size="large" type="primary" checked={this.state.index === 7} onClick={() => this.setState({ index: 7 })}>视频链接-集成转场</Btn>
        </div>
        {this.renderVideoContext()}
      </div>
    );
  }
}

export default BasePage(Bbc2Page);
