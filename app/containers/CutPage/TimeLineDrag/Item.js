import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemChunk from './ItemChunk';
import ItemTypes from './ItemType';

const style = { // eslint-disable-line
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

const cardSource = {
  beginDrag(props) {
    console.log('beginDrag', props.id, props.index);
    return {
      id: props.id,
      index: props.index,
    };
  },
  endDrag(props) {
    props.handleDragHoverIndex(-1, '');
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      props.handleDragHoverIndex(-1, '');
      return;
    }
    // console.log('hoverIndex', hoverIndex, 'dragIndex', dragIndex);
    props.handleChoosed(dragIndex);

    // 判断炫富层拖动的底部视频的前面还是后面
    console.log(component);
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect(); // eslint-disable-line
    const clientOffset = monitor.getClientOffset(); // 鼠标ev
    const hoverClientY = clientOffset.x - hoverBoundingRect.left;
    // console.log('time', hoverClientY / props.baseWidth);
    let beforTotalTime = 0;
    for (let i = 0; i < props.index; i += 1) {
      const info = props.videoList[i];
      beforTotalTime += info.endTime - info.startTime;
    }
    // console.log('cuTime', (hoverClientY / props.baseWidth) - beforTotalTime);
    const videoCurrentTime = (hoverClientY / props.baseWidth) - beforTotalTime;
    const videoPlayLength = props.videoList[props.index].endTime - props.videoList[props.index].startTime;
    if (videoCurrentTime > (videoPlayLength / 2)) {
      console.log('after');
      props.handleDragHoverIndex(hoverIndex, 'right');
    } else {
      console.log('befor');
      props.handleDragHoverIndex(hoverIndex, 'left');
    }
  },
  drop(props, monitor, component) {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    /** */
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect(); // eslint-disable-line
    // const hoverMiddleY = (hoverBoundingRect.right - hoverBoundingRect.left) / 3;
    // const clientOffset = monitor.getClientOffset();
    // const hoverClientY = clientOffset.x - hoverBoundingRect.left;
    // console.log('===>', hoverMiddleY, hoverClientY);
    // if (true) {
    //   console.log(hoverBoundingRect, clientOffset);
    //   return;
    // }

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    if (dragIndex > hoverIndex) { // 左移
      props.moveCard(dragIndex, props.dragHoverIndexPosition === 'right' ? hoverIndex + 1 : hoverIndex);
    } else {
      props.moveCard(dragIndex, props.dragHoverIndexPosition === 'left' ? hoverIndex - 1 : hoverIndex);
    }

    props.handleChoosed(hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex; // eslint-disable-line
  },
};

class VideoItem extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    videoList: PropTypes.array.isRequired,
    isDragging: PropTypes.bool.isRequired,
    // id: PropTypes.any.isRequired,
    // text: PropTypes.string.isRequired,
    // moveCard: PropTypes.func.isRequired,
  };

  render() {
    const { isDragging, connectDragSource, connectDropTarget, index, videoList } = this.props; // eslint-disable-line
    // const opacity = isDragging ? 0 : 1;
    const opacity = 1;

    return connectDragSource(
      // connectDropTarget(<div style={{ ...style, opacity, width: `${videoList[index].length}px`, background: '#00dfb0' }}>{videoList[index].length}</div>),
      connectDropTarget(<div style={{ opacity }}><ItemChunk {...this.props} /></div>),
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

export default withDragSource(withDropTarget(VideoItem));
