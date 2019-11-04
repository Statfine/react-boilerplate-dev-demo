/**
 *
 * ToolCom 工具箱
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { TOOL_LIST } from '../commom/config';

import { makeSelectChooseEffect } from '../selectors';
import { changeEffectCom } from '../actions';

import { ToolContent, EachTool, EachToolImg, EachToolP, EffectVideoContent } from './styled';

import ToolHeader from './header';
import EffectVideo from './EffectVideo';
import EffectChartlet from './EffectChartlet';
import EffectFilter from './EffectFilter';
import EffectMosaic from './EffectMosaic';

export class ToolCom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  renderEffectDetail = (effectKey) => {
    switch (effectKey) {
      case 'effectVideo':
        return (<EffectVideo />);
      case 'effectChartlet':
        return (<EffectChartlet />);
      case 'effectFilter':
        return (<EffectFilter />);
      case 'effectMosaic':
        return (<EffectMosaic />);
      default:
        return null;
    }
  }

  // effectKey 选中的工具
  render() {
    const { chooseEffect, actionChangeEffectCom } = this.props;
    const title = chooseEffect.effectKey === '' ? '' : _.filter(TOOL_LIST, { key: chooseEffect.effectKey })[0].text;
    if (chooseEffect.effectKey) {
      return (
        <EffectVideoContent>
          <ToolHeader
            handleBack={() => actionChangeEffectCom({ effectKey: '' })}
            title={title}
          />
          {this.renderEffectDetail(chooseEffect.effectKey)}
        </EffectVideoContent>
      );
    }
    return (
      <ToolContent>
        {
          TOOL_LIST.map((item) => (
            <EachTool
              key={item.key}
              onClick={() => actionChangeEffectCom({ effectKey: item.key })}
            >
              <EachToolImg src={item.icon} alt="video" />
              <EachToolP>{item.text}</EachToolP>
            </EachTool>
          ))
        }
      </ToolContent>
    );
  }
}

/**
 * chooseEffect 特效对象 特效和拖动组件
 *
 * actionChangeEffectCom 修改方法
*/
ToolCom.propTypes = {
  chooseEffect: PropTypes.object.isRequired,
  actionChangeEffectCom: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chooseEffect: makeSelectChooseEffect(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectCom: (...arg) => dispatch(changeEffectCom(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolCom);
