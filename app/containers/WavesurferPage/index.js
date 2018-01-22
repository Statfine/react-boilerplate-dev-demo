import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Audio from './Audio';

const Content = styled.div`
  width: 926px;
  height: 450px;
  box-sizing: border-box;
  background-color: #efefef;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
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

class WaveSurferPage extends PureComponent {
  // eslint-disable-line
  state = {};

  render() {
    return (
      <Content>
        <Audio playUrl={'https://vfine.oss-cn-beijing.aliyuncs.com/songs/7-50-908943bb4cd5fabee886b11b6f1e7098.mp3'} />
      </Content>
    );
  }
}

export default WaveSurferPage;
