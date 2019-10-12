/**
 * Created by easub on 2019/8/7.
 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Transformable from 'components/TransPercent';
import { Helmet } from 'react-helmet';
import guid from 'utils/guid';

import { Select } from 'antd';

// const DIV = styled.div`
//   position: relative;
//   width: 652px;
//   height: 480px;
//   display: flex;
//   flex-wrap: wrap;
// `;

const PercentDiv = styled.div`
  position: relative;
  width: 10%;
  height: 10%;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const LIST = new Array(100);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < LIST.length; i++) {
  LIST[i] = i;
}

const DEFAULT_ITEM = {
  x: 10, // 百分比
  y: 10, // 百分比
  w: 20, // 百分比
  h: 20, // 百分比
  scale: 1, // 小数
};

const RESOLUTION = [
  { key: '1', w: 16, h: 9 },
  { key: '2', w: 9, h: 16 },
  { key: '3', w: 1, h: 1 },
  { key: '4', w: 4, h: 5 },
];
const RESOLUTION_SIZE = {
  1: { key: '1', w: 16, h: 9 },
  2: { key: '2', w: 9, h: 16 },
  3: { key: '3', w: 1, h: 1 },
  4: { key: '4', w: 4, h: 5 },
};

const { Option } = Select;
export default class TransfromPage extends PureComponent {

  state = {
    transFromList: [],
    resolutionSize: '3',
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
  }

  getStyle = (el) => {
    let style = null;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    } else {
      style = el.currentStyle;
    }
    return style;
  };

  formatStyle = (ele, props) => {
    const str = this.getStyle(ele)[props];
    return parseFloat(str.substring(0, str.length - 2));
  };

  // 添加拖动
  handleAdd = () => {
    const transFromList = [...this.state.transFromList];
    const canvasEl = this.canvasEl;
    const elw = this.formatStyle(canvasEl, 'width');
    const elh = this.formatStyle(canvasEl, 'height');
    console.log(elw, elh);
    const { w } = DEFAULT_ITEM;
    const setH = (((w / 100 * elw) / DEFAULT_ITEM.scale) / elh) * 100;
    const defaultItem = {
      x: DEFAULT_ITEM.x, // 百分比
      y: DEFAULT_ITEM.y, // 百分比
      w: DEFAULT_ITEM.w, // 百分比
      h: setH, // 百分比
      effectId: guid(),
    };
    transFromList.push(defaultItem);
    this.setState({ transFromList });
  }

  handleChangeConfig = (val) => {
    const transFromList = [...this.state.transFromList];
    transFromList[0] = val;
    this.setState({ transFromList });
  }

  handleChangeResolution = (value) => {
    this.setState({ resolutionSize: value, transFromList: [] });
  }

  render() {
    const { transFromList, resolutionSize } = this.state;
    const paddingPercent = RESOLUTION_SIZE[resolutionSize].h / RESOLUTION_SIZE[resolutionSize].w * 100;
    return (
      <div style={{ height: '100vh' }}>
        <Helmet title="拖动" />
        {
          transFromList.map((item) => <div>
            宽{item.w}(单位百分比);
            高{item.h}(单位百分比);
            x边距{item.x}(单位百分比);
            y边距{item.y}(单位百分比);
        </div>)
        }
        <Select value={resolutionSize} onChange={this.handleChangeResolution} style={{ width: 200 }}>
          {RESOLUTION.map((item) => <Option key={item.key}>{item.w} / {item.h}</Option>)}
        </Select>
        {/* <DIV style={{ width: '60%', height: '60%' }}>
          {
            LIST.map((item) => <PercentDiv>{item}</PercentDiv>)
          }
          <Transformable
            onChange={this.handleChangeConfig}
            translate
            drag
            defaultPosition={{ w: item.w, h: item.h, x: item.x, y: item.y }}
            // isTransScale
            // transScale={1}
          >
            <div style={{ background: '#f7671d' }}></div>
          </Transformable>
        </DIV> */}
        <div onClick={this.handleAdd} >add</div>
        <div style={{ width: '60%', overflow: 'hidden' }} ref={(ref) => this.canvasEl = ref} onClick={() => console.log('click')}>
          <div style={{ width: '100%', paddingTop: `${paddingPercent}%`, background: '#f7671d', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', top: '0', letf: '0', position: 'absolute' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}>
                {
                  LIST.map((item) => <PercentDiv key={item} />)
                }
              </div>
            </div>
            {
              transFromList.map((item) => (
                <Transformable
                  onChange={this.handleChangeConfig}
                  drag
                  defaultPosition={{ w: item.w, h: item.h, x: item.x, y: item.y /* , rotate: 50 */ }}
                  effectId={item.effectId}
                  // deg={50}
                  // isTransScale
                >
                  <div style={{ background: '#f7671d' }}></div>
                </Transformable>
                  ))
            }
          </div>
        </div>
      </div>
    );
  }
}
