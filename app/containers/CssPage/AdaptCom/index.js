import React, { PureComponent } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #999999;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  @media screen and (max-width: 1420px) {
    border: 1px solid #4885ed;
    padding: 20px;
  }
  @media screen and (max-width: 1180px) {
    border: 1px solid #ff8140;
    padding: 10px;
  }
`;

const Item = styled.div`
  // width: 18%;
  // margin: 10px 2.5% 0 0;
  width: calc(100% / 5 - 15px);
  margin: 0 7.5px 15px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 8px 0px rgba(0,0,0,0.05);
  border-radius:4px;
  &:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  }
  &:nth-child(5n) {
    margin-right: 0px;
  }
`;

const Image = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: #ff8140;
`;

/**
 *
 *
 * @export
 * @class AdaptCom
 * @extends {PureComponent}
 *
 * 自适应，图片等比显示
 */
export default class AdaptCom extends PureComponent {
  renderList = () => {
    const length = new Array(13);
    const list = [];
    for (let i = 0; i < length.length; i += 1) {
      list.push(<Item key={i}>
        <Image />
        <p>AdaptCom{i}</p>
      </Item>);
    }
    return list;
  }
  render() {
    return (
      <Container>
        {this.renderList()}
      </Container>
    );
  }
}

