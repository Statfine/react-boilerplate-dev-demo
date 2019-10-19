import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorToRGB,
  rgbToHsv,
  // rbgToHslString,
} from 'utils/color';

const Container = styled.div`
  width: 200px;
  height: 150px;
  user-select: none;
`;

const RealBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background === 'white' ? (
    'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))'
  ) : (
    'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))'
  )};
`;

const Pointer = styled.div`
  position: absolute;
  &.mini_color_pointer_default {
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 5px #999;
    cursor: pointer;
  }
`;

export default class ColorPanel extends React.Component {
  constructor(props) {
    super(props);
    this.drag = false;
    this.state = {
      x: -5,
      y: -5,
    };
  }
  componentDidMount() {
    this.pointer.addEventListener('mousedown', this.handleDown);
    this.calculateColorToPosition(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.hsl.s !== this.props.hsl.s || nextProps.hsl.l !== this.props.hsl.l) {
      this.calculateColorToPosition(nextProps);
    }
  }
  componentWillUnmount() {
    this.pointer.removeEventListener('mousedown', this.handleDown);
  }
  setRgbColor = (color) => colorToRGB(color);
  calculateColorToPosition = (props) => { // 颜色转坐标
    const rgb = this.setRgbColor(props.hsl);
    const hsv = rgbToHsv(rgb);
    const rect = this.real.getBoundingClientRect();
    const { s, v } = hsv;

    const left = s * rect.width - 5;
    const top = (1 - v) * rect.height - 5;

    this.setState({ x: left, y: top });
  }
  transformPositionToColor = ({ posX, posY, e }) => { // 坐标转颜色
    const { hsl, onChange } = this.props;
    const rect = this.real.getBoundingClientRect();
    let left = posX - rect.left;
    let top = posY - rect.top;

    this.setState({
      x: left - 5,
      y: top - 5,
    });

    const rWidth = rect.width;
    const rHeight = rect.height;

    left = Math.max(0, left);
    left = Math.min(left, rWidth);
    top = Math.max(0, top);
    top = Math.min(top, rHeight);

    const saturation = left / rWidth;
    const brightless = (1 - top / rHeight);

    const l = 0.5 * brightless * (2 - saturation);
    const s = brightless * saturation / (1 - Math.abs(2 * l - 1));

    if (onChange) {
      onChange({ ...hsl, s, l }, e);
    }
  }
  handleClick = (e) => {
    e.stopPropagation();
    if (!this.drag && e.target !== this.pointer) {
      this.transformPositionToColor({ posX: e.clientX, posY: e.clientY, e });
    }
  }
  handleDown = (e) => {
    e.stopPropagation();
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.real.addEventListener('mousemove', this.handleMove);
    this.real.addEventListener('mouseup', this.handleUp);
    this.drag = true;
  }
  handleMove = (e) => {
    e.stopPropagation();
    if (this.drag) {
      this.transformPositionToColor({ posX: e.clientX, posY: e.clientY, e });
    }
  }
  handleUp = (e) => {
    e.stopPropagation();
    this.drag = false;
    this.startX = 0;
    this.startY = 0;
    this.real.removeEventListener('mousemove', this.handleMove);
    this.real.removeEventListener('mouseup', this.handleUp);
  }
  render() {
    const { className, style, pointer, hsl } = this.props;
    const { x, y } = this.state;
    return (
      <Container
        style={style}
        className={className}
      >
        <RealBackground
          onClick={this.handleClick}
          innerRef={(ref) => (this.real = ref)}
          style={{ background: `hsl(${hsl.h}, 100%, 50%)` }}
        >
          <Background background="white" />
          <Background background="black" />
          <Pointer
            style={{ left: x, top: y }}
            innerRef={(ref) => (this.pointer = ref)}
            className={!pointer && 'mini_color_pointer_default'}
          >
            {pointer}
          </Pointer>
        </RealBackground>
      </Container>
    );
  }
}

/**
 * hsl hsl类型颜色
 */
ColorPanel.propTypes = {
  hsl: PropTypes.object.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  // disableAlpha: PropTypes.bool,
  onChange: PropTypes.func,
  pointer: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};

ColorPanel.defaultProps = {
  style: null,
  className: '',
  // disableAlpha: false,
};
