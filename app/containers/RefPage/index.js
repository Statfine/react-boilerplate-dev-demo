import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { BasePage } from 'containers/BasePage';
import styled from 'styled-components';

import RefCom from './RefCom';
import VideoListPage from '../VideoListPage';

const ListPage = styled(VideoListPage)`

`;

class RefPage extends PureComponent {
  state = {};
  handleClickListCom = () => {
    const a = this.listCom;
    const b = this.listComStyled;
    console.log(a, b);
  }
  render() {
    return (
      <div>
        <p>RefPage</p>
        <Button onClick={() => this.refCom.publickSetState('父元素设置了标题')}>点击设置RefCom title</Button>
        <Button onClick={() => this.refCom.publickClickBtn()}>点击RefCom的按钮</Button>
        <Button onClick={() => alert(JSON.stringify(this.refCom.publickGetState()))}>点击获取RefCom的state</Button>
        <Button onClick={this.handleClickListCom}>点击获取ListCOm</Button>
        <RefCom ref={(ref) => { this.refCom = ref; }} />
        <VideoListPage ref={(ref) => { this.listCom = ref; }} />
        <ListPage innerRef={(ref) => { this.listComStyled = ref; }} />
      </div>
    );
  }
}

export default BasePage(RefPage);
