import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
  position: relative;
  ${(props) => props.display === 'horizontal' ? (
    `
      width: 200px;
      height: 15px;
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
      background: -webkit-linear-gradient(to right, #f00 0%, #ff0
        17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
      .hue_pointer {
        left: -7px;
      }
    `
  ) : (
    `
      width: 15px;
      height: 150px;
      background: linear-gradient(to top, #f00 0%, #f0f 17%, #00f 33%,
        #0ff 50%, #0f0 67%, #ff0 83%, #f00 100%);
      background: -webkit-linear-gradient(to top, #f00 0%, #f0f 17%, #00f 33%,
        #0ff 50%, #0f0 67%, #ff0 83%, #f00 100%);
      .hue_pointer {
        bottom: -7px;
      }
    `
  )}
`;

const Pointer = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 0 5px #999;
  background: #fff;
  cursor: pointer;
`;

export default class ColorHue extends React.Component {
  constructor(props) {
    super(props);
    this.drag = false;
    this.state = {
      x: -5,
      y: -5,
    };
  }
  componentDidMount() {
    this.huePointer.addEventListener('mousedown', this.handleDown);
    this.setPosition(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.display !== nextProps.display || this.props.hsl.h !== nextProps.hsl.h) {
      this.setPosition(nextProps);
    }
  }
  setPosition = (props) => {
    const { display, hsl } = props;
    if (hsl == null) return;
    const rect = this.hueBox.getBoundingClientRect();
    if (display === 'vertical') {
      const top = hsl.h / 360 * rect.height - 5;
      this.setState({ y: top });
    }
  }
  pointMoveTo = ({ posX, posY, e }) => {
    const { display, hsl, onChange } = this.props;
    const rect = this.hueBox.getBoundingClientRect();
    let huePercent = 0;
    if (display === 'horizontal') {
      let left = posX - rect.left;

      const pointerLeft = left - 5;
      if (pointerLeft >= -5 && pointerLeft <= rect.width - 5) {
        this.setState({ x: pointerLeft });
      }

      left = Math.max(0, left);
      left = Math.min(left, rect.width);

      huePercent = left / rect.width;
    } else {
      let top = posY - rect.top;

      const pointerTop = top - 5;
      if (pointerTop >= -5 && pointerTop <= rect.height - 5) {
        this.setState({ y: pointerTop });
      }

      top = Math.max(0, top);
      top = Math.min(top, rect.height);

      huePercent = top / rect.height;
    }

    const hue = huePercent * 360;
    if (onChange) {
      onChange({ ...hsl, h: hue }, e);
    }
  }
  handleClick = (e) => {
    e.stopPropagation();
    if (!this.drag && e.target !== this.huePointer) {
      this.pointMoveTo({ posX: e.clientX, posY: e.clientY, e });
    }
  }
  handleDown = (e) => {
    e.stopPropagation();
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.hueBox.addEventListener('mousemove', this.handleMove);
    this.hueBox.addEventListener('mouseup', this.handleUp);
    this.drag = true;
  }
  handleMove = (e) => {
    e.stopPropagation();
    if (this.drag) {
      this.pointMoveTo({ posX: e.clientX, posY: e.clientY, e });
    }
  }
  handleUp = (e) => {
    e.stopPropagation();
    this.drag = false;
    this.startX = 0;
    this.startY = 0;
    this.hueBox.removeEventListener('mousemove', this.handleMove);
    this.hueBox.removeEventListener('mouseup', this.handleUp);
  }
  render() {
    const { style, className, display } = this.props;
    const { x, y } = this.state;
    const styles = { x, y };
    if (display === 'horizontal') {
      styles.y = 0;
    } else {
      styles.x = 0;
    }
    return (
      <Container
        onClick={this.handleClick}
        innerRef={(ref) => (this.hueBox = ref)}
        style={style}
        display={display}
        className={className}
      >
        <Pointer
          innerRef={(ref) => (this.huePointer = ref)}
          style={{ left: styles.x, top: styles.y }}
        />
      </Container>
    );
  }
}

/**
 * display 水平horizontal，垂直vertical
 */
ColorHue.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  hsl: PropTypes.object.isRequired,
  display: PropTypes.string,
  onChange: PropTypes.func,
};

ColorHue.defaultProps = {
  style: null,
  className: '',
  display: 'horizontal',
};
