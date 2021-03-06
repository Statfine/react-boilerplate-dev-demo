/**
 *
 * 视频拖动组件
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectVideoPlayer, makeSelectEffectVideo, makeSelectChooseEffect } from '../selectors';
import { changeEffectVideo, changeEffectCom } from '../actions';

import Transformable from './index';

export class TransVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  // 鼠标抬起回调位置
  handleDragMouseUp = (val) => {
    console.log('handleDragMouseUp', val);
    this.props.handleIsDraging(false);
    this.props.actionChangeEffectVideo({ position: {
      w: val.w, // 百分比
      h: val.h,
      x: val.x,
      y: val.y,
    } });
  }
  handleActualTime = (val) => {
    console.log('handleActualTime', val);
    this.props.handleIsDraging(true);
    this.props.videoPlayerEl.videoEl.updateVideo({ rect: [val.x / 100, val.y / 100, val.w / 100, val.h / 100] });
  }

  render() {
    const { effectVideo: { position }, chooseEffect, handleShowBaseLine, handleIsDraging } = this.props;
    return (
      <Transformable
        onChange={this.handleDragMouseUp}
        drag
        defaultPosition={{ w: position.w, h: position.h, x: position.x, y: position.y }}
        dragKey={'videoTrans'}
        dragType={'video'}
        // isTransScale // 等比
        handleActualTime={this.handleActualTime} // 实时
        disabled={chooseEffect.dragKey !== 'videoTrans'}
        handleShowBaseLine={handleShowBaseLine}
        handleIsDraging={handleIsDraging}
      >
      </Transformable>
    );
  }
}

/**
 *  handleShowBaseLine  是否显示基准线
 *
 *  videoPlayerEl 视频实例
 *  effectVideo 视频特效
 *  chooseEffect 特效工具和key
 *
 *  actionChangeEffectVideo 修改视频特效
 *  actionChangeEffectCom 设置被选中的工具和拖动组件
*/
TransVideo.propTypes = {
  handleShowBaseLine: PropTypes.func,

  videoPlayerEl: PropTypes.object.isRequired,
  effectVideo: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,

  actionChangeEffectVideo: PropTypes.func.isRequired,
  // actionChangeEffectCom: PropTypes.func.isRequired,
  handleIsDraging: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoPlayerEl: makeSelectVideoPlayer(),
  effectVideo: makeSelectEffectVideo(),
  chooseEffect: makeSelectChooseEffect(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectVideo: (...arg) => dispatch(changeEffectVideo(...arg)),
    actionChangeEffectCom: (...arg) => dispatch(changeEffectCom(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransVideo);
