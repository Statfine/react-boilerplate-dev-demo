import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorToRGB,
  rgbToHsl,
  rgbToHexString,
} from 'utils/color';
import colorpanel from 'common/Icon/colorpanel.svg';
import ColorPanel from '../ColorPanel';
import ColorHue from '../ColorHue';

const Container = styled.div`
  width: 201px;
  padding: 12px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.14), 0 3px 4px 0 rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  border-radius: 2px;
`;

const Title = styled.div`
  font-size: 12px;
  color: #B4B4B4;
  text-align: left;
  line-height: 16px;
  margin-bottom: 8px;
`;

const RecentColor = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const ColorCell = styled.div`
  background: ${(props) => props.color};
  width: 19px;
  height: 20px;
  margin: 0 6px 6px 0;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
`;

const Tab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Tabs = styled.div`
  font-size: 12px;
  color: ${(props) => props.selected ? '#ff8140' : '#B4B4B4'};
  text-align: left;
  line-height: 16px;
  cursor: pointer;
`;

const ColorWrap = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const ColorInnerWrap = styled.div`
  display: flex;
  align-items: center;
  height: 126px;
  width: 100%;
`;

const ColorInputWrap = styled.div`
  display: flex;
  align-items: center;
`;

const baseColor = ['#c00100', '#ff0100', '#ff5050', '#ffc001', '#FFFF06', '#92D050', '#01B050', '#50E3DE',
  '#5CC0FF', '#4A90E2', '#0045D1', '#A300C5', '#7030A0', '#5B21F3', '#000', '#4a4a4a', '#9b9b9b', '#fff'];
export default class ColorPicker extends React.Component {
  state = {
    tab: 0,
  }
  colorToHSL = (color) => {
    const _c = color || this.props.color;
    if (!_c) return { h: 0, s: 0, l: 0 };
    const rgb = colorToRGB(_c);
    const { h, s, l } = rgbToHsl(rgb);
    return { h, s, l };
  }
  handleChangeColor = (color, e) => {
    if (color !== 'transparent') {
      const rgb = colorToRGB(color);
      const c = rgbToHexString(rgb);
      this.props.onChange(c, e);
    } else {
      this.props.onChange('transparent', e);
    }
  }
  render() {
    const { color, recentColor, disableAlpha, containerStyle } = this.props;
    const { tab } = this.state;
    const { h, s, l } = this.colorToHSL();
    return (
      <Container style={containerStyle}>
        <Title>最近使用颜色</Title>
        <RecentColor>
          {!disableAlpha && (
            <ColorCell
              onClick={(e) => this.handleChangeColor('transparent', e)}
              style={{ marginBottom: 0 }}
              color="transparent"
            >
              <div style={{ marginTop: 8, width: '100%', height: 1, background: '#f00', transform: 'rotate(-45deg)' }} />
            </ColorCell>
          )}
          {recentColor.length !== 0 ? recentColor.map((v) => (
            v === 'transparent' ? null : (
              <ColorCell
                onClick={(e) => this.handleChangeColor(v, e)}
                style={{ marginBottom: 0 }}
                color={v}
                key={v}
              />
            )
          )) : null}
        </RecentColor>
        <Tab>
          <Tabs
            onClick={() => this.setState({ tab: 0 })}
            selected={tab === 0}
          >
            基本颜色
          </Tabs>
          <div style={{ width: 1, height: 20, background: '#d9d9d9', margin: '0 12px' }} />
          <Tabs
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ tab: 1 });
            }}
            selected={tab === 1}
            style={{ flex: 1, display: 'flex', alignItems: 'center' }}
          >
            <img style={{ width: 18, height: 18 }} src={colorpanel} alt="" />
            <span style={{ marginLeft: 4 }}>更多颜色...</span>
          </Tabs>
        </Tab>
        <ColorWrap>
          {
            tab === 0 ?
              (baseColor.map((v) => (
                <ColorCell
                  onClick={(e) => this.handleChangeColor(v, e)}
                  color={v}
                  key={v}
                />
              ))) : (
                <ColorInnerWrap>
                  <ColorPanel
                    onChange={this.handleChangeColor}
                    hsl={{ h, s, l }}
                    style={{ width: 147, height: 126, marginRight: 8 }}
                  />
                  <ColorHue
                    onChange={this.handleChangeColor}
                    hsl={{ h, s, l }}
                    style={{ width: 10, height: 126 }}
                    display="vertical"
                  />
                </ColorInnerWrap>
              )
          }
        </ColorWrap>
        <ColorInputWrap>
          <ColorCell color={color} style={{ marginRight: 16, marginBottom: 0 }}>
            {color === 'transparent' && <div style={{ marginTop: 8, width: '100%', height: 1, background: '#f00', transform: 'rotate(-45deg)' }} />}
          </ColorCell>
          <div
            style={{
              borderRadius: '4px',
              width: 100,
              height: 32,
              paddingLeft: 8,
              lineHeight: '32px',
              fontSize: '12px',
              color: '#333333',
            }}
          >
            {color === 'transparent' ? color : rgbToHexString(colorToRGB(color))}
          </div>
        </ColorInputWrap>
      </Container>
    );
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  recentColor: PropTypes.array,
  onChange: PropTypes.func,
  disableAlpha: PropTypes.bool,
  containerStyle: PropTypes.object,
};

ColorPicker.defaultProps = {
  disableAlpha: false,
};
