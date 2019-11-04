/**
 *
 * EffectVideo 视频特效
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Checkbox, InputNumber } from 'antd';
import { createStructuredSelector } from 'reselect';
// import guid from 'utils/guid';

import { makeSelectEffectMosaic, makeSelectVideoPlayer, makeSelectVideoInfo, makeSelectChooseEffect } from '../../selectors';
import { changeEffectMosaic } from '../../actions';

import { ToolChartletDiv, EffectList,
  EachListDiv, ChartLetTop, ChartLetBottom, NumberP, ImgNameP } from '../EffectChartlet/styled';
import '../EffectChartlet/numberinput.css';

export class EffectMosaic extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  handleAdd = (e) => {
    e.preventDefault();
    this.props.videoPlayerEl.videoEl.updateChartlet(
      '', 'add', chartlet,
    );
    this.props.actionChangeEffectMosaic(
      'add',
      chartlet,
    );
  };

  handleChangeAlwaysShow = (item) => {
    const { videoInfo, actionChangeEffectMosaic, videoPlayerEl } = this.props;
    const isAlwaysShow = !item.isAlwaysShow;
    const setTime = { start: item.start, end: item.end };
    if (isAlwaysShow) {
      setTime.start = 0;
      setTime.end = videoInfo.length;
    }
    actionChangeEffectMosaic(
      'edit',
      { dragKey: item.dragKey, isAlwaysShow },
    );

    videoPlayerEl.videoEl.updateChartlet(
      // item.dragKey, 'changeBaseInfo', setTime,
    );
  }

  handleChangeStart = (value, item) => {
    console.log('handleChangeStart', value);
    const start = value || 0;
    this.props.actionChangeEffectMosaic(
      'edit',
      { dragKey: item.dragKey, start, end: item.end - item.start + start },
    );
    // this.props.videoPlayerEl.videoEl.updateChartlet(
    //   item.dragKey, 'changeBaseInfo', { start, end: item.end - item.start + start },
    // );
  }
  handleChangeContinue = (value, item) => {
    // console.log('handleChangeContinue', value);
    const end = value || 0;
    this.props.actionChangeEffectMosaic(
      'edit',
      { dragKey: item.dragKey, end: item.start + end },
    );
    // this.props.videoPlayerEl.videoEl.updateChartlet(
    //   item.dragKey, 'changeBaseInfo', { end: item.start + end },
    // );
  }

  render() {
    const { effectMosaic, chooseEffect } = this.props;
    return (
      <ToolChartletDiv>
        <EffectList>
          {
            effectMosaic.map((item, index) => (
              <EachListDiv key={item.dragKey}>
                <ChartLetTop>
                  <NumberP choosed={chooseEffect.dragKey === item.dragKey}>{index + 1}</NumberP>
                  <ImgNameP title={decodeURIComponent(item.mosaicMode)}>{item.mosaicMode}</ImgNameP>
                  <Checkbox
                    checked={item.isAlwaysShow}
                    onChange={() => this.handleChangeAlwaysShow(item)}
                  >
                      全程出现
                  </Checkbox>
                </ChartLetTop>
                <ChartLetBottom>
                  <p>开始时间</p>
                  <InputNumber disabled={item.isAlwaysShow} min={0} max={10} value={item.start} onChange={(value) => this.handleChangeStart(value, item)} />
                  <p style={{ marginLeft: '30px' }}>持续时间</p>
                  <InputNumber disabled={item.isAlwaysShow} min={0} max={10} value={item.end - item.start} onChange={(value) => this.handleChangeContinue(value, item)} />
                </ChartLetBottom>
              </EachListDiv>
            ))
          }
        </EffectList>
      </ToolChartletDiv>
    );
  }
}

/**
 *  effectMosaic 马赛克特效信息
 *  videoPlayerEl 视频实例
 *  videoInfo 视频信息
 *  chooseEffect 选中特效
 *
 *  actionChangeEffectChartLet  修改马赛克特效
*/
EffectMosaic.propTypes = {
  effectMosaic: PropTypes.array.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  videoInfo: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,

  actionChangeEffectMosaic: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectMosaic: makeSelectEffectMosaic(),
  videoPlayerEl: makeSelectVideoPlayer(),
  videoInfo: makeSelectVideoInfo(),
  chooseEffect: makeSelectChooseEffect(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectMosaic: (actionType, ...arg) => dispatch(changeEffectMosaic(actionType, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EffectMosaic);
