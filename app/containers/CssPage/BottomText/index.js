import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

const Container = styled.div`
  width: 320px;
  height: 240px;
  background: #000;
  position: relative;
  overflow: hidden;
`;

const Text = styled.p`
  color: #fff;
  position: absolute;
  bottom: ${({ bottom }) => `${bottom}px`};
  border: ${({ choose }) => (choose ? '1px solid #4885ed' : 'null')};
  border-bottom: ${({ choose }) => (choose ? 'null' : '1px solid #4885ed')};
  font-size: 24px;
  text-align: center;
  width: 100%;
  word-break: break-all;
  cursor: pointer;
  padding: 0 10px;
`;

const Div = styled.div`
  width: 1000px;
  height: 1000px;
  background: #000;
  margin: 20px;
  position: relative;
`;

const AbsDiv = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: #fff;
  top: 10%;
  z-index: 99;
`;
const AbsDivTwo = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: red;
  top: 10%;
  z-index: 98;
  transform: scale(2);
`;

const SCALE = 1.5;
export default class BottomText extends PureComponent {
  state = {
    value: '测试',
    bottom: 0,
    choose: false,
  };

  onMouseDown = (e, s) => {
    this.setState({ choose: true });
    this.currentBottom = this.state.bottom;
    this.downPositionY = e.pageY;
    console.log('onMouseDown', this.downPositionY);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    this.scale = s;
  };

  scale = 1;
  currentBottom = 0; // 鼠标落下 当前元素坐标
  downPositionY = 0; // 鼠标落下y轴

  handleMouseMove = (ev) => {
    const y = ev.clientY;
    const moveY = this.downPositionY - ev.clientY;
    console.log(y, moveY, this.currentBottom + moveY);
    this.setState({ bottom: this.currentBottom + moveY / this.scale });
  };

  handleMouseUp = () => {
    this.setState({ choose: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
  };

  render() {
    const { value, bottom, choose } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', marginBottom: 100, padding: 100 }}>
          <Container>
            <Text bottom={bottom} choose={choose} onMouseDown={(e) => this.onMouseDown(e, 1)}>
              {value}
            </Text>
          </Container>
          <Container style={{ transform: `scale(${SCALE})`, marginLeft: 100 }}>
            <Text bottom={bottom} choose={choose} onMouseDown={(e) => this.onMouseDown(e, SCALE)}>
              {value}
            </Text>
          </Container>
        </div>
        <Input
          value={value}
          type="text"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <Div>
          <AbsDiv>1</AbsDiv>
          <AbsDivTwo>2</AbsDivTwo></Div>
      </div>
    );
  }
}
