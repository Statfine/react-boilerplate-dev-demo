
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { Page, HeaderConotent, Content, BottomContent,
  DataContent, EffectContent, CanvasContent, CanvasDiv } from './styled';

const RESOLUTION_SIZE = {
  1: { key: '1', w: 16, h: 9 },
  2: { key: '2', w: 9, h: 16 },
  3: { key: '3', w: 1, h: 1 },
  4: { key: '4', w: 4, h: 5 },
};

class PageSize extends PureComponent {
  state = {
    size: 3,
    canvasStyle: {
      width: 0,
      height: 0,
    },
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.handleResize);
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

  handleResize = () => {
    // const LeftEl = this.hueBox.getBoundingClientRect();
    // const LeftElW = LeftEl.width;
    // const LeftElH = LeftEl.height;
    // console.log('resize', LeftEl.width, LeftEl.height);
    const LeftElW = this.formatStyle(this.hueBox, 'width');
    const LeftElH = this.formatStyle(this.hueBox, 'height');
    console.log('LeftElW', LeftElW, LeftElH);
    const { size } = this.state;
    const ratio = RESOLUTION_SIZE[size].w / RESOLUTION_SIZE[size].h;
    let setWidth = 0;
    let setHeight = 0;
    if (ratio > (LeftElW / LeftElH)) {
      setWidth = LeftElW - 80;
      setHeight = setWidth / ratio;
    } else {
      setHeight = LeftElH - 80;
      setWidth = setHeight * ratio;
    }
    this.setState({ canvasStyle: { width: setWidth, height: setHeight } });
  }

  render() {
    const { canvasStyle, size } = this.state;
    return (
      <Page>
        <Helmet title="宽高" />
        <HeaderConotent>
          {this.hueBox && <p>父区域宽高:{this.formatStyle(this.hueBox, 'width')};{this.formatStyle(this.hueBox, 'height')}</p>}
          <p>子区域宽高:{canvasStyle.width};{canvasStyle.height}; 比例{RESOLUTION_SIZE[size].w / RESOLUTION_SIZE[size].h};</p>
        </HeaderConotent>
        <Content>
          <DataContent>
            <EffectContent></EffectContent>
            <CanvasContent innerRef={(ref) => (this.hueBox = ref)}>
              <CanvasDiv style={canvasStyle}>1</CanvasDiv>
            </CanvasContent>
          </DataContent>
          <BottomContent />
        </Content>
      </Page>
    );
  }
}

export default PageSize;
