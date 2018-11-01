import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import AutoText from './AutoText';
import ClipPath from './ClipPath';
import RagsCom from './TagsCom';
import WidthCom from './widthCom.js';
import AutoTags from './AutoTagCom';

const Div = styled.div`
  width: 100px;
  height: 100px;
  font-size: 14px;
  margin-bottom: 10px;
  background: #4885ed;
`;

const DivTwo = styled(Div) `
  width: 200px;
  width: 200px;
`;

const Tog = styled.div`
  position: relative;
`;

const List = styled.div`
overflow: hidden;
height: 0;
`;

const OverFlowDiv = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #e3e3e3;
`;

const Iner = styled.div`
  height: 100px;
  border-bottom: 1px solid #4885ed;
`;

// const HeaderJump = styled.div`
//   margin-left: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: ${({ color }) => color === undefined ? 'rgba(0, 0, 0, 0.7)' : color};
//   cursor: pointer;
//   & > .defaultSvg {
//     display: block;
//     margin-top: -2px;
//     svg {
//       color: #888!important;
//     }
//   }
//   & > .hoverSvg {
//     display: none;
//     margin-top: -2px;
//   }
//   &:hover > .defaultSvg {
//     display: none;
//   }
//   &:hover > .hoverSvg {
//     display: block;
//   }
//   &:hover p {
//     color: #ff8140;
//   }
// `;

class CssPage extends PureComponent {
  state = {
    anim: false,
    animTwo: false,
  }

  handeToggle = () => {
    const { anim } = this.state;
    if (!anim) {
      $('#demo').animate({ maxHeight: '1000px' }, 1000); // eslint-disable-line
      this.setState({ anim: true });
    } else {
      $('#demo').animate({ maxHeight: '0' }, 500); // eslint-disable-line
      this.setState({ anim: false });
    }
  }

  handeToggleTwo = () => {
    const { animTwo } = this.state;
    if (!animTwo) {
      $('#demoTwo').animate({ height: '100%' }, 1000); // eslint-disable-line
      this.setState({ animTwo: true });
    } else {
      $('#demoTwo').animate({ height: '0' }, 1000); // eslint-disable-line
      this.setState({ animTwo: false });
    }
  }

  handleOnWhell = (e) => {
    console.log(e.deltaX);
  }

  renderTest = () => (
    <div>
      <Div>cssPage</Div>
      <DivTwo>cssPage</DivTwo>
      <button onClick={this.handeToggle}>Toggle</button>
      <div id="demo" style={{ background: 'red', maxHeight: 0, margin: 0, overflow: 'hidden' }}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <Tog>
        <button onClick={this.handeToggleTwo}>Toggle</button>
        <List id="demoTwo">
          <div style={{ height: 200, background: '#4885ed' }}></div>
        </List>
      </Tog>
      <p style={{ fontSize: '28px', color: 'red' }}>文本大小自适应容器</p>
      <AutoText text="123213" />
      <AutoText text="hello word hello word hello word hello word hello word hello word hello word hello word hello word" />
      <AutoText text="123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213" />
      <AutoText text="Hello , I am Mofei. Hello , I am Mofei Hello , I am Mofei Hello , I am Mofei Hello , I am Mofei Hello , I am Mofei Hello , I am Mofei" />
      <p style={{ fontSize: '28px', color: 'red' }}> clip-pathn裁剪属性</p>
      <ClipPath />
    </div>
  )

  renderTags = () => <div><RagsCom /></div>;

  renderOverFloss = () => <OverFlowDiv id="content" onWheel={this.handleOnWhell}>
    <Iner>1</Iner>
    <Iner>2</Iner>
    <Iner>3</Iner>
    <Iner>4</Iner>
    <Iner>5</Iner>
    <Iner>6</Iner>
  </OverFlowDiv>

  renderAutoTags = () => <div><AutoTags /></div>;

  render() {
    return (
      <div>
        <Helmet title="样式demo" />
        {/* {this.renderTags()} */}
        {/* {this.renderOverFloss()} */}
        {this.renderAutoTags()}
        <WidthCom text={'hahah我是谁'} />
      </div>
    );
  }
}

export default BasePage(CssPage);
