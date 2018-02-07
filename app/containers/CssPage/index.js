import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';

const Div = styled.div`
  width: 100px;
  height: 100px;
  font-size: 14px;
  margin-bottom: 10px;
  background: #4885ed;
`;

const DivTwo = styled(Div)`
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

  render() {
    return (
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
      </div>
    );
  }
}

export default BasePage(CssPage);
