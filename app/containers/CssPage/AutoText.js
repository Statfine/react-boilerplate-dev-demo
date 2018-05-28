import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DIV = styled.div`
  font-size: ${({ size }) => size};
  word-wrap: break-word;
`;

export default class AutoText extends PureComponent {
  state = {
    size: '12px',
  };
  componentDidMount() {
    const maxHeight = 200;
    // let size;
    for (let i = 12; i < 200; i += 1) {
      // 实时变换做监听，所以此处不能用setState
      if (this.text.offsetHeight > maxHeight) {
        // if it's height heighter than thhe maxHeight
        // size = `${i - 2}px`;
        this.text.style.fontSize = `${i - 2}px`;
        break;
      } else {
        // if it's height less then the maxHeight
        // size = `${i}px`;
        this.text.style.fontSize = `${i}px`;
      }
    }
    // this.setState({ size }); // eslint-disable-line
  }
  render() {
    const { size } = this.state;
    const { text } = this.props;
    return (
      <div
        style={{ height: '200px', border: '1px solid #ccc' }}
      >
        <DIV
          innerRef={(ref) => { this.text = ref; }}
          size={size}
        >
          {text}
        </DIV>
      </div>
    );
  }
}

AutoText.propTypes = {
  text: PropTypes.string,
};
