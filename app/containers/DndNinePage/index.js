import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import update from 'immutability-helper';

import Item from './Item';

const Container = styled.div`
  width: 656px;
  height: 656px;
  background: #f0f0f0;
  border: 1px solid #d9d9d9;
  padding: 9px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Card = styled.div`
  margin: 6px;
`;

class DndNinePage extends PureComponent {
  state = {
    cards: [
      {
        id: 1,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/ea9b20c2-8339-4592-ae20-e0042a49887d.jpg',
        text: '1',
      },
      {
        id: 2,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/f8236f0d-f0bb-4897-9f6a-1a85894fef24.jpg',
        text: '2',
      },
      {
        id: 3,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/90b297ff-6d2f-46b6-851c-571cda3bd2b0.jpg',
        text: '3',
      },
      {
        id: 4,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/d5a539f8-b652-405f-b3fd-3964bbe68b3e.jpg',
        text: '4',
      },
      {
        id: 5,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/ed77d850-23a2-4c2e-84e9-a23fdefec764.jpg',
        text: '5',
      },
      {
        id: 6,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/3247d04c-fa25-4e64-9001-1c616f803ea6.jpg',
        text: '6',
      },
      {
        id: 7,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/95eba921-02cc-4b3b-ab91-1cbb8a09951a.jpg',
        text: '7',
      },
      {
        id: 8,
        type: 'upload',
        src: '',
        text: 'upload',
      },
      {
        id: 9,
        src:
          'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/copyright/6a6ba2b8-c18c-465d-94dc-5446e6ec2a4c/photograph/088e437c-7a61-4db8-8981-66be28e7b48c.jpg',
        text: '9',
      },
    ],
  };

  componentDidMount() {
    // window.onbeforeunload = () => {
    //   // if (!this.state.flag) {
    //   //   // return '未保存';
    //   //   alter(1);
    //   //   this.setState({ show: '1' });
    //   // }
    //   this.setState({ show: '1' });
    //   return 'null';
    // };
    this.drawCanvas();
    this.drawCanvasTwo();
  }

  drawCanvas = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - (51 * i)}, 255)`;
        ctx.translate(10 + (j * 50), 10 + (i * 50));
        ctx.fillRect(0, 0, 25, 25);
        ctx.restore();
      }
    }
  };
  drawCanvasTwo = () => {
    const ctx = document.getElementById('canvasTwo').getContext('2d');
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        // ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - (51 * i)}, 255)`;
        ctx.translate(10 + (j * 50), 10 + (i * 50));
        ctx.fillRect(0, 0, 25, 25);
        // ctx.restore();
      }
    }
  };

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    // const dragCard = cards[dragIndex];
    // console.log(dragIndex, hoverIndex, dragCard);

    const list = [];
    const flag = dragIndex > hoverIndex;
    for (let i = 0; i < cards.length; i += 1) {
      // if (flag) { // 由大向小移动
      //   if (i > dragIndex || i < hoverIndex) list.push(cards[i]); // 区间外的保持不变
      //   if (dragIndex > i && i > hoverIndex) list.push(cards[i - 1]); // 区间内的向后移动（-1）
      //   if (i === hoverIndex) list[hoverIndex] = cards[dragIndex]; // 当前悬浮的位置因该是选中托起的
      //   if (i === dragIndex) list[i] = cards[i - 1]; // 选中托起的区域因该是他的前一个（前一个后移）
      // }
      // if (!flag) { // 由小向大移动
      //   if (i < dragIndex || i > hoverIndex) list.push(cards[i]); // 区间外的保持不变
      //   if (hoverIndex > i && i > dragIndex) list.push(cards[i + 1]); // 区间内的向前移动（+1）
      //   if (i === hoverIndex) list[hoverIndex] = cards[dragIndex];  // 当前悬浮的位置因该是选中托起的
      //   if (i === dragIndex) list[i] = cards[i + 1]; // 选中托起的区域因该是他的后一个(后一个前移)
      // }

      if (
        (flag && (i > dragIndex || i < hoverIndex)) ||
        (!flag && (i < dragIndex || i > hoverIndex))
      ) { list.push(cards[i]); } // 区间外的保持不变
      if (
        (flag && (dragIndex > i && i > hoverIndex)) ||
        (!flag && (hoverIndex > i && i > dragIndex))
      ) { list.push(cards[flag ? i - 1 : i + 1]); } // 区间内移动判断flag（+1）
      if (i === hoverIndex) list[hoverIndex] = cards[dragIndex]; // 当前悬浮的位置因该是选中托起的
      if (i === dragIndex) list[i] = cards[flag ? i - 1 : i + 1]; // 选中托起的区域因该是他的true前一个或者false后一个
    }
    this.setState({ cards: list });

    // this.setState(
    //   update(this.state, {
    //     cards: {
    //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
    //     },
    //   }),
    // );
  };

  render() {
    const { cards } = this.state;
    return (
      <div data-track-content data-content-name="九格宫Name" data-content-piece="九格宫Piece">
        <Helmet title="九格宫" />
        <p>九格宫{this.state.show}</p>
        <Container>
          {cards.map((item, i) => (
            <Card key={item.id}>
              <Item
                item={item}
                id={item.id}
                index={i}
                moveCard={this.moveCard}
              />
            </Card>
          ))}
        </Container>
        <canvas id="canvas" />
        <canvas id="canvasTwo" width="600" height="600" />
      </div>
    );
  }
}

// 页面中多个拖拽组件， 不能分别DragDropContext， 只能在最上层添加
const withReactDnd = DragDropContext(HTML5Backend);
export default withReactDnd(BasePage(DndNinePage));
