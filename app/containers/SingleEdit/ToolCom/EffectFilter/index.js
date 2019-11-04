/**
 *
 * EffectVideo 视频特效
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Slider, Icon } from 'antd';

import { makeSelectEffectFilter, makeSelectVideoPlayer } from '../../selectors';
import { changeEffectFilter } from '../../actions';

import { FILTER_TYPE } from '../../commom/config';
import { getCaretPosition, setCaret } from '../../commom/tool';

import { ToolFilterDiv, FlexDiv, TabItem,
  EachEffectDiv, LeftTitle, RightDiv, RightInput,
  FilterList, FilterItem, FilterItemCover } from './styled';

const STYLE = {
  slider: {
    width: 220,
  },
  cover_icon: {
    color: '#FF8140',
    position: 'absolute',
    right: '10px',
    top: '10px',
    fontSize: '24px',
  },
};
export class EffectFilter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    choosed: 1,
    intensityEdit: false,
  }

  // 强度
  handleChangeIntensity = (intensity) => {
    this.props.actionChangeEffectFilter({ intensity });
    // this.props.videoPlayerEl.videoEl.updateVideo({ opacity });
  }
  // 强度Input
  handleChangeIntensityInput = () => {
    let number = Number(this.eleIntensity.innerText) || 100;
    if (this.eleIntensity.innerText === '' || Number(this.eleIntensity.innerText) === 0) number = 0;
    number = number < 0 ? 0 : number > 100 ? 100 : number;

    let pos = getCaretPosition(this.eleIntensity) || 1;
    this.eleIntensity.innerText = number;
    this.handleChangeIntensity(number);

    pos = pos > this.eleIntensity.innerText.length ? this.eleIntensity.innerText.length : pos;
    setTimeout(() => setCaret(this.eleIntensity, pos), 10);
  }

  // 设置滤镜
  handleChangeFilter = (item) => {
    const { effectFilter, actionChangeEffectFilter } = this.props;
    if (effectFilter.lookupValue === item.key) return;
    actionChangeEffectFilter({ lookupValue: item.key });
  }

  // 亮度
  handleChangeUValue = (uValue) => {
    this.props.actionChangeEffectFilter({ uValue });
    // this.props.videoPlayerEl.videoEl.updateVideo({ opacity });
  }

  createMarkup = (el) =>
  // eslint-disable-line
   ({ __html: el });

  renderFilter = () => {
    const { effectFilter } = this.props;
    return (
      <div>
        <EachEffectDiv>
          <LeftTitle>强度</LeftTitle>
          <Slider style={STYLE.slider} value={effectFilter.intensity} onChange={this.handleChangeIntensity} />
          <RightDiv>
            <RightInput
              innerRef={(e) => { this.eleIntensity = e; }}
              contentEditable="true"
              edit={this.state.intensityEdit}
              dangerouslySetInnerHTML={this.createMarkup(effectFilter.intensity)}
              onInput={this.handleChangeIntensityInput}
              onFocus={() => this.setState({ intensityEdit: true })}
              onBlur={() => this.setState({ intensityEdit: false })}
            />
            %
          </RightDiv>
        </EachEffectDiv>
        <FilterList>
          {
            FILTER_TYPE.map((item) => (
              <FilterItem key={item.key}>
                <FilterItemCover
                  onClick={() => this.handleChangeFilter(item)}
                  choosed={item.key === effectFilter.lookupValue}
                  src={item.imgUrl}
                />
                <p>{item.title}</p>
                {item.key === effectFilter.lookupValue && <Icon type="check-circle" theme="filled" style={STYLE.cover_icon} />}
              </FilterItem>
            ))
          }
        </FilterList>
      </div>
    );
  }

  renderParams = () => {
    const { effectFilter } = this.props;
    return (
      <div>
        <EachEffectDiv>
          <LeftTitle>亮度</LeftTitle>
          <Slider style={STYLE.slider} value={effectFilter.uValue} onChange={this.handleChangeUValue} />
          <RightDiv>
            {effectFilter.uValue}
            %
          </RightDiv>
        </EachEffectDiv>
      </div>
    );
  }

  render() {
    const { choosed } = this.state;
    return (
      <ToolFilterDiv>
        <FlexDiv>
          <TabItem choosed={choosed === 1} onClick={() => this.setState({ choosed: 1 })}>滤镜</TabItem>
          <TabItem choosed={choosed === 2} onClick={() => this.setState({ choosed: 2 })}>参数</TabItem>
        </FlexDiv>
        {
          choosed === 1 ? this.renderFilter() : this.renderParams()
        }
      </ToolFilterDiv>
    );
  }
}

/**
 *  videoPlayerEl 视频实例
 *  effectFilter 滤镜特效
 *
 *  actionChangeEffectFilter  修改滤镜特效
*/
EffectFilter.propTypes = {
  // videoPlayerEl: PropTypes.object.isRequired,
  effectFilter: PropTypes.object.isRequired,

  actionChangeEffectFilter: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoPlayerEl: makeSelectVideoPlayer(),
  effectFilter: makeSelectEffectFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectFilter: (...arg) => dispatch(changeEffectFilter(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EffectFilter);
