import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const DIV = styled.div`
  width: 1100px;
  height: 618px;
  border: 1px solid #999;
  position: relative;
`;

const moveIn = keyframes`
  from {
    opacity: 0;
    left: 0;
  }
  to {
    opacity: 1;
  }
`;

const moveOut = keyframes`
  from {
    left: 0;
  }
  to {
    left: -618px;
  }
`;

const InfoDiv = styled.div`
  width: 400px;
  height: 618px;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${(props) => props.move ? `0.45s ${moveIn} ease` : `0.45s ${moveOut} ease forwards`};
`;

export default class MoveCom extends PureComponent {
  state = {
    isHover: false,
    isOut: true,
  };
  render() {
    const { isHover, isOut } = this.state;
    console.log('isHover', this.state.isHover, isOut);
    return (
      <DIV
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false, isOut: true })}
      >
        {isHover && <InfoDiv move={isOut} onClick={() => this.setState({ isOut: false })}>123123</InfoDiv>}
      </DIV>
    );
  }
}
