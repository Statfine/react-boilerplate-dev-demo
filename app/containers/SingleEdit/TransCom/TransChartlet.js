/**
 *
 * 贴图+马赛克拖动组件
 *  贴图 移动效果已添加
 *  马赛克 移动效果未添加，同时渲染应链接到最后输出
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectVideoPlayer, makeSelectChooseEffect, makeSelectEffectList } from '../selectors';
import { changeEffectCom, changeEffectChartLet } from '../actions';

import Transformable from './index';

export class TransChartlet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  // 鼠标抬起回调位置
  handleDragMouseUp = (val) => {
    console.log('handleDragMouseUp', val);
    if (val.dragType === 'effectChartlet') { // 贴片
      this.props.actionChangeEffectChartlet(
        'edit',
        {
          dragKey: val.dragKey,
          position: {
            w: val.w, // 百分比
            h: val.h,
            x: val.x,
            y: val.y,
          },
        },
      );
    }
  }

  // 实时
  handleActualTime = (val) => {
    console.log('handleActualTime', val);
    if (val.dragType === 'effectChartlet') { // 贴片
      this.props.videoPlayerEl.videoEl.updateChartlet(
        val.dragKey,
        'changeBaseInfo',
        { rect: [val.x / 100, val.y / 100, val.w / 100, val.h / 100] },
      );
    }
  }

  handleKeyDown = (obj) => {
    const ev = obj.ev;
    if (ev.keyCode === 8 || ev.keyCode === 46) { // 删除
      if (val.dragType === 'effectChartlet') { // 贴片
        this.props.videoPlayerEl.videoEl.updateChartlet(
          obj.dragKey,
          'delete',
        );
        this.props.actionChangeEffectCom({ dragKey: '' });
        this.props.actionChangeEffectChartlet(
          'delete',
          { dragKey: obj.dragKey },
        );
      }
    }
  }

  render() {
    const { chooseEffect, handleShowBaseLine, effectList, handleIsDraging } = this.props;
    return (
        effectList.map((item, i) => (
          <Transformable
            key={item.dragKey}
            onChange={this.handleDragMouseUp}
            drag
            defaultPosition={item.position}
            dragKey={item.dragKey}
            dragType={item.type}
            // isTransScale // 等比
            handleActualTime={this.handleActualTime} // 实时
            disabled={chooseEffect.dragKey !== item.dragKey}
            handleShowBaseLine={handleShowBaseLine}
            // zIndex={chooseEffect.dragKey !== '' ? 100 + i : i + 1}
            zIndex={i + 1}
            handleIsDraging={handleIsDraging}
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
 *  effectList 贴图+马赛克特效
 *  chooseEffect 特效工具和key
 *
 *  actionChangeEffectCom 设置被选中的工具和拖动组件
*/
TransChartlet.propTypes = {
  handleShowBaseLine: PropTypes.func,

  videoPlayerEl: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,
  effectList: PropTypes.array.isRequired,

  actionChangeEffectCom: PropTypes.func.isRequired,
  actionChangeEffectChartlet: PropTypes.func.isRequired,
  handleIsDraging: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoPlayerEl: makeSelectVideoPlayer(),
  chooseEffect: makeSelectChooseEffect(),
  effectList: makeSelectEffectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectCom: (...arg) => dispatch(changeEffectCom(...arg)),
    actionChangeEffectChartlet: (actionTpty, ...arg) => dispatch(changeEffectChartLet(actionTpty, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransChartlet);
