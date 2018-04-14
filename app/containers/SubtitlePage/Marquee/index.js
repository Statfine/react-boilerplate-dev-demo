import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 56px;
  overflow: hidden;
  position: absolute;
  left: 0;
  cursor: pointer;
`;

function ani(props) {
  return keyframes`
    from {
      transform: translateX(777px);
    }
    to {
      transform: translateX(-${props.width}px);
    }
  `;
}
// const ani = keyframes`
//   from {
//     transform: translateX(777px);
//   }
//   to {
//     transform: translateX(0px);
//   }
// `;

const TextP = styled.p`
  font-size: 32px;
  line-height: 56px;
  position: absolute;
  color: red;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 10px;
  animation: ${(props) => `${ani(props)} 10s linear`};
`;

export default class Marquee extends PureComponent {
  state = {
    width: 0,
  };
  componentDidMount() {
    this.setState({ width: this.TextP.getBoundingClientRect().width }); // eslint-disable-line
    this.TextP.addEventListener('webkitAnimationEnd', () => {
      this.props.handleAnimalEnd(this.props.marqueeObj.marqueeText);
    }, false);
  }
  render() {
    const { marqueeObj } = this.props;
    const { width } = this.state;
    const stylePosition = marqueeObj.type.includes('text-top') ? { top: '10px' } : { bottom: '10px' };
    return (
      <Content style={stylePosition} onClick={() => window.open(marqueeObj.ad)}>
        <TextP
          innerRef={(c) => { this.TextP = c; }}
          width={width}
          time={marqueeObj.et - marqueeObj.st}
        >
          {marqueeObj.marqueeText}
        </TextP>
      </Content>
    );
  }
}

Marquee.propTypes = {
  marqueeObj: PropTypes.object,
  handleAnimalEnd: PropTypes.func,
};
