import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import styled from 'styled-components';
import ItemTypes from './ItemType';

const ItemContianer = styled.div`
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  cursor: move;
  background-image: ${({ src }) => `url(${src});`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.12);
`;

const UploadContianer = styled.div`
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.12);
`;

const cardSource = {
  canDrag(props) {
    return props.item.type !== 'upload';
  },
  // commit one
  // conmmit two
  beginDrag(props) { // 用于hover第二个参数的getItem方法取值
    return {
      id: props.id,
      index: props.index,
    };
  },
};

/**
 * monitor.getItem() 为 beginDrag的返回
 * monitor 当前Dom
 * component Hover Dom
 */
const cardTarget = {
  hover(props, monitor, component) { // eslint-disable-line
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex || props.item.type === 'upload') {
      return;
    }

    // Determine rectangle on screen
    // const hoverBoundingRect = findDOMNode(component).getBoundingClientRect(); // eslint-disable-line

    // // Get vertical middle
    // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // // Determine mouse position
    // const clientOffset = monitor.getClientOffset();

    // // Get pixels to the top
    // const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // // Only perform the move when the mouse has crossed half of the items height
    // // When dragging downwards, only move when the cursor is below 50%
    // // When dragging upwards, only move when the cursor is above 50%

    // // Dragging downwards
    // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //   return;
    // }

    // // Dragging upwards
    // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //   return;
    // }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex; // eslint-disable-line
  },
};

/**
 *  isDragging 当前是否移动中
 *  item 数据对象
 *  index 标识位置
 *  moveCard 回调事件
 *  disabled 是否可以拖拽canDrag  是否可以改变位置hover return
 */
class Card extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    // index: PropTypes.number.isRequired,
    // id: PropTypes.any.isRequired,
    // moveCard: PropTypes.func.isRequired,
  };

  render() {
    const { item, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      connectDropTarget(<div style={{ opacity }}>
        {
          item.type === 'upload' ? <UploadContianer>Image Uploading</UploadContianer> : <ItemContianer src={item.src} />
        }
      </div>),
    );
  }
}

const withDropTarget = DropTarget(
  ItemTypes.CARD,
  cardTarget,
  (connect) => ({
    connectDropTarget: connect.dropTarget(),
  })
);

const withDragSource = DragSource(
  ItemTypes.CARD,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
);

export default withDragSource(withDropTarget(Card));
