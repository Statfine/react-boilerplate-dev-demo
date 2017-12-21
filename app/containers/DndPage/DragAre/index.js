import React, { PureComponent } from 'react';
// import { DragDropContextProvider } from 'react-dnd';
// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import { remove } from 'lodash';
import styled from 'styled-components';

import Dustbin from './Dustbin';
import Box from './Box';

const Item = styled.div`
  width: 100px;
  display: flex;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #4885ed;
  }
`;

class DragArea extends PureComponent {
  state = {
    list: [],
    default_list: ['Glass', 'Banana', 'Paper', 'Apple'],
  }

  handleAdd = (item) => {
    const defaultList = this.state.default_list.concat([]);
    const list = this.state.list.concat([]);
    // const index = list.findIndex((i) => i === item);
    list.push(item);
    remove(defaultList, (n) => n === item);
    this.setState({ list, default_list: defaultList });
  }

  handelDeleteList = (item) => {
    const defaultList = this.state.default_list.concat([]);
    const list = this.state.list.concat([]);

    defaultList.push(item);
    remove(list, (n) => n === item);
    this.setState({ list, default_list: defaultList });
  }

  render() {
    const { list, default_list } = this.state;
    return (
      <div>
        {
          list.map((item) => <Item key={item} onClick={() => this.handelDeleteList(item)}>{item}</Item>)
        }
        {/* <DragDropContextProvider backend={HTML5Backend}> */}
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            {default_list.map((item) => <Box key={item} name={item} handleAdd={this.handleAdd} />)}
          </div>
        </div>
        {/* </DragDropContextProvider> */}
      </div>
    );
  }
}


// 页面中多个拖拽组件， 不能分别DragDropContext， 只能在最上层添加
// const withReactDnd = DragDropContext(HTML5Backend);
// export default withReactDnd(DragArea);
export default DragArea;
