import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

const Container = styled.div`
  width: 640px;
  height: 480px;
  background: #000;
  position: relative;
  overflow: hidden;
`;

const Text = styled.p`
  color: #fff;
  position: absolute;
  bottom: ${({ bottom }) => `${bottom}px`};
  border: ${({ choose }) => choose ? '1px solid #4885ed' : 'null'};
  border-bottom: ${({ choose }) => choose ? 'null' : '1px solid #4885ed'};
  font-size: 24px;
  text-align: center;
  width: 100%;
  word-break: break-all;
  cursor: pointer;
  padding: 0 10px;
`;

export default class BottomText extends PureComponent {
  state = {
    value: '测试',
    bottom: 0,
    choose: false,
  };

  onMouseDown = (e) => {
    this.setState({ choose: true });
    this.currentBottom = this.state.bottom;
    this.downPositionY = e.pageY;
    console.log('onMouseDown', this.downPositionY);
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  currentBottom = 0; // 鼠标落下 当前元素坐标
  downPositionY = 0; // 鼠标落下y轴

  handleMouseMove = (ev) => {
    const y = ev.clientY;
    const moveY = this.downPositionY - ev.clientY;
    console.log(y, moveY);
    this.setState({ bottom: this.currentBottom + moveY });
  }

  handleMouseUp = () => {
    this.setState({ choose: false });
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    const { value, bottom, choose } = this.state;
    return (
      <div>
        <Container>
          <Text bottom={bottom} choose={choose} onMouseDown={this.onMouseDown}>{value}</Text>
        </Container>
        <Input
          value={value}
          type="text"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
      </div>
    );
  }
}
