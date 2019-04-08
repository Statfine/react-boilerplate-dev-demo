import React from 'react';
import styled from 'styled-components';

const ContainerOne = styled.div`
  width: 960px;
  border: 1px solid #e8e8e8;
  margin: 20px;
  column-count: 2;
`;

const Item = styled.div`
  width: 450px;
  margin-bottom: 10px;
  background: #4885ed;
`;

const ItemTop = styled.div`
  height: 210px;
`;

const ItemBottom = styled.div`
  height: 100px;
  background: red;
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1200px;
`;

const LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Waterfall extends React.PureComponent {

  state = {
    open: '',
  }

  renderOne = () => (
    <ContainerOne>
      {
        LIST.map((item) => (
          <Item key={item}>
            <ItemTop onClick={() => this.setState({ open: item === this.state.open ? '' : item })}>{item}</ItemTop>
            {item === this.state.open && <ItemBottom />}
          </Item>
        ))
      }
    </ContainerOne>
  )

  renderTwo = () => (
    <ContainerTwo>
      {
        LIST.map((item) => (
          <Item key={item} style={{ margin: '10px' }}>
            <ItemTop onClick={() => this.setState({ open: item === this.state.open ? '' : item })}>{item}</ItemTop>
            {item === this.state.open && <ItemBottom />}
          </Item>
        ))
      }
    </ContainerTwo>
  )

  render() {
    return (
      <div>
        {/* {this.renderOne()} */}
        {this.renderTwo()}
      </div>
    );
  }
}
