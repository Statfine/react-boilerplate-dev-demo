import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { BasePage } from 'containers/BasePage';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import RefCom from './RefCom';
import VideoListPage from '../VideoListPage';

const ListPage = styled(VideoListPage)`

`;

// const REF_COM = 'videoListPageCom';

// withRef
class RefPage extends PureComponent {
  state = {};
  handleClickListCom = () => {
    const a = this.listCom;
    const b = this.listComStyled;
    // const ab = this.refs['VideoListPage'].getWrappedInstance();
    const aa = this.RefComContext;
    const bb = this.refCom;
    console.log(a, b);
    console.log(aa, bb);
  }

  handleRefContext = (context) => {
    this.RefComContext = context;
  }

  render() {
    return (
      <div>
        <Helmet title="Ref demo" />
        <p>RefPage</p>
        <Button onClick={() => this.refCom.publickSetState('父元素设置了标题')}>点击设置RefCom title</Button>
        <Button onClick={() => this.refCom.publickClickBtn()}>点击RefCom的按钮</Button>
        <Button onClick={() => alert(JSON.stringify(this.refCom.publickGetState()))}>点击获取RefCom的state</Button>
        <Button onClick={this.handleClickListCom}>点击获取ListCOm</Button>
        <RefCom ref={(ref) => { this.refCom = ref; }} handleContext={this.handleRefContext} />
        <VideoListPage ref={(ref) => { this.listCom = ref; }} />
        <ListPage innerRef={(ref) => { this.listComStyled = ref; }} />
        {/* <VideoListPage ref={REF_COM} /> */}
      </div>
    );
  }
}

export default BasePage(RefPage);

