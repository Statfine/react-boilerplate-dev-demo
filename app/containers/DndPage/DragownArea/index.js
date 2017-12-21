import React, { PureComponent } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';

import Dustbin from './Dustbin';
import Box from './Box';

class DragOwnArea extends PureComponent {
  state = {
    dustbins: [
      { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
      { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
      {
        accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
        lastDroppedItem: null,
      },
      { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
    ],
    boxes: [
      { name: 'Bottle', type: ItemTypes.GLASS },
      { name: 'Banana', type: ItemTypes.FOOD },
      { name: 'Magazine', type: ItemTypes.PAPER },
    ],
    droppedBoxNames: [],
  };

  isDropped(boxName) {
    const { droppedBoxNames } = this.state;
    return droppedBoxNames.findIndex((i) => i === boxName) > -1;
  }

  handleDrop = (index, item) => {
    const { name } = item;
    const droppedBoxNames = this.state.droppedBoxNames.concat([]);
    droppedBoxNames.push(name);
    const dustbins = this.state.dustbins.concat([]);
    dustbins[index].lastDroppedItem = item;
    this.setState({ dustbins, droppedBoxNames });
    // debugger;
    // this.setState(
    //   update(this.state, {
    //     dustbins: {
    //       [index]: {
    //         lastDroppedItem: {
    //           $set: item,
    //         },
    //       },
    //     },
    //     droppedBoxNames,
    //   })
    // );
  }

  render() {
    const { dustbins, boxes } = this.state;
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) => (
            <Dustbin
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => this.handleDrop(index, item)}
              key={index}
            />
          ))}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) => (
            <Box
              name={name}
              type={type}
              isDropped={this.isDropped(name)}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

// 页面中多个拖拽组件， 不能分别DragDropContext， 只能在最上层添加
// const withReactDnd = DragDropContext(HTML5Backend);
// export default withReactDnd(DragOwnArea);
export default DragOwnArea;
