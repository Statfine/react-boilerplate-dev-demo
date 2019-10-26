/**
 *
 * 贴图拖动组件
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectVideoPlayer, makeSelectChooseEffect, makeSelectEffectImage } from '../selectors';
import { changeEffectCom, changeEffectChartLet } from '../actions';

import Transformable from './ControlTransCom';

export class TransChartlet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  // 鼠标抬起回调位置
  handleDragMouseUp = (val) => {
    console.log('handleDragMouseUp', val);
    this.props.actionChangeEffectChartlet(
      'edit',
      {
        effectKey: val.dragKey,
        position: {
          w: val.w, // 百分比
          h: val.h,
          x: val.x,
          y: val.y,
        },
      },
    );
  }
  handleActualTime = (val) => {
    console.log('handleActualTime', val);
    this.props.videoPlayerEl.videoEl.updateChartlet(
      val.dragKey,
      'changeBaseInfo',
      { rect: [val.x / 100, val.y / 100, val.w / 100, val.h / 100] },
    );
  }

  handleKeyDown = (obj) => {
    const ev = obj.ev;
    if (ev.keyCode === 8 || ev.keyCode === 46) { // 删除
      this.props.videoPlayerEl.videoEl.updateChartlet(
        obj.dragKey,
        'delete',
      );
      this.props.actionChangeEffectCom({ dragKey: '' });
      this.props.actionChangeEffectChartlet(
        'delete',
        { effectKey: obj.dragKey },
      );
    }
  }

  // isChoosed true-选中  false-丢失
  handleChoosed = (isChoosed, params) => {
    console.log('handleChoosed', params);
    this.props.actionChangeEffectCom({ dragKey: isChoosed ? params.dragKey : '' });
  }

  render() {
    const { chooseEffect, handleShowBaseLine, effectImage } = this.props;
    return (
        effectImage.map((item, i) => (
          <Transformable
            key={item.effectKey}
            onChange={this.handleDragMouseUp}
            drag
            defaultPosition={item.position}
            dragKey={item.effectKey}
            dragType={item.type}
            // isTransScale // 等比
            handleActualTime={this.handleActualTime} // 实时
            disabled={chooseEffect.dragKey !== item.effectKey}
            handleClick={this.handleChoosed}
            handleShowBaseLine={handleShowBaseLine}
            onKeyDown={this.handleKeyDown}
            zIndex={chooseEffect.dragKey !== '' ? 100 + i : i + 1}
          >
          </Transformable>
        ))
    );
  }
}

/**
 *  handleShowBaseLine  是否显示基准线
 *
 *  videoPlayerEl 视频实例
 *  effectImage 贴图特效
 *  chooseEffect 特效工具和key
 *
 *  actionChangeEffectCom 设置被选中的工具和拖动组件
*/
TransChartlet.propTypes = {
  handleShowBaseLine: PropTypes.func,

  videoPlayerEl: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,
  effectImage: PropTypes.array.isRequired,

  actionChangeEffectCom: PropTypes.func.isRequired,
  actionChangeEffectChartlet: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoPlayerEl: makeSelectVideoPlayer(),
  chooseEffect: makeSelectChooseEffect(),
  effectImage: makeSelectEffectImage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectCom: (...arg) => dispatch(changeEffectCom(...arg)),
    actionChangeEffectChartlet: (actionTpty, ...arg) => dispatch(changeEffectChartLet(actionTpty, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransChartlet);
