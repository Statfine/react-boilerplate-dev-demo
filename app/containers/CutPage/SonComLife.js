import React from 'react';
import styled, { keyframes } from 'styled-components';

const showA = keyframes`
0% {opacity:0}
100% {opacity:1}
`;

const hiddenA = keyframes`
0% {opacity:1}
100% {opacity:0}
`;

const CutComtent = styled.div`
  animation: ${({ show }) => `${show ? showA : hiddenA} 1s linear forwards`};
`;

export default class SonComponents extends React.PureComponent {
  state = {
    show: true,
  };

  componentWillMount() {
    // TODO
    console.log('1===> componentWillMount');
  }

  componentDidMount() {
    // TODO
    console.log('2===> componentDidMount');
  }

  componentWillUnmount() {
    // TODO
    console.log('4===> componentWillUnmount');
  }

  componentWillLeave(callback) {
    console.log('3===> componentWillLeave');
    this.setState({ show: false });
    setTimeout(() => {
      console.log('3.1===> componentWillLeave');
      callback();
    }, 1000);
  }

  render() {
    const { show } = this.state;
    return <CutComtent show={show}>子元素</CutComtent>;
  }
}
