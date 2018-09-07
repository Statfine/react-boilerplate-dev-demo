import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';
import { BasePage } from 'containers/BasePage';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DragArea from './DragAre';
import DragOwnArea from './DragownArea';
import Sortable from './Sortable';

const ChooseBtn = styled(Button)`
  background: ${({ choosed }) => choosed === '1' ? '#4885ed' : '#1DA57A'};
`;

class DndPage extends PureComponent {
  state = {
    index: 1,
  };

  renderVideoContext = () => {
    const { index } = this.state;
    switch (index) {
      case 1:
        return (<DragArea />);
      case 2:
        return (<DragOwnArea />);
      default:
        return null;
    }
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <Helmet title="DND拖拽" />
        <p>页面中多个拖拽组件， 不能分别DragDropContext， 只能在最上层添加</p>
        <div>
          <ChooseBtn size="large" type="primary" choosed={index === 1 ? '1' : '0'} onClick={() => this.setState({ index: 1 })}>拖动到区域</ChooseBtn>
          <ChooseBtn size="large" type="primary" choosed={index === 2 ? '1' : '0'} onClick={() => this.setState({ index: 2 })}>拖动到制定区域</ChooseBtn>
        </div>
        {this.renderVideoContext()}
        <Sortable />
      </div>
    );
  }
}

// 页面中多个拖拽组件， 不能分别DragDropContext， 只能在最上层添加
const withReactDnd = DragDropContext(HTML5Backend);
export default withReactDnd(BasePage(DndPage));
