import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';

import Audio from './Audio';
import MusicSrc from './410288837.mp3';
import DefaultAudio from './DefaultAudio';

const Content = styled.div`
  width: 926px;
  height: 450px;
  box-sizing: border-box;
  background-color: #efefef;
  border-top: 1px solid transparent;
  @media screen and (max-width: 1420px) {
    width: 758px;
    height: 426px;
  }
  @media screen and (max-width: 1180px) {
    width: 900px;
    height: 450px;
  }
  @media screen and (max-width: 960px) {
    width: 440px;
    height: 250px;
  }
`;

/*
 * fix DOMException:
 * Failed to construct 'AudioContext': The number of hardware contexts provided (6) is greater than or equal to the maximum bound (6)
*/

class WaveSurferPage extends PureComponent {
  // eslint-disable-line
  state = {};

  render() {
    return (
      <Content>
        <Helmet title="水波纹" />
        <DefaultAudio />
        <audio src={MusicSrc} controls="controls">
        您的浏览器不支持 audio 标签。
        </audio>
        <p>解决：Failed to construct AudioContext: The number of hardware contexts provided (6) is greater than or equal to the maximum bound (6)</p>
        <Audio playUrl={MusicSrc} />
      </Content>
    );
  }
}

export default BasePage(WaveSurferPage);
