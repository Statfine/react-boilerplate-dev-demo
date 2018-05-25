import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 160px;
  height: 120px;
  background: #4885ed;
  background: linear-gradient(-45deg, transparent 15px, #58a 0);
`;

const DivImg = styled.div`
  width: 160px;
  height: 120px;
  background: url(http://image.clip.easub.com/snapshot/b04eb631-5a50-4d21-9b40-7acfdc2c4a68-245684.png);
`;

export default class CssPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Div></Div>
        <DivImg />
      </div>
    );
  }
}
