/**
 *
 * EffectVideo 视频特效
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Checkbox, InputNumber } from 'antd';
import UploadBtn from 'components/UploadBtn';
import { createStructuredSelector } from 'reselect';
import { testFileNamePaster } from 'utils/verification';
import guid from 'utils/guid';

import { makeSelectEffectImage, makeSelectVideoPlayer, makeSelectVideoInfo, makeSelectChooseEffect } from '../../selectors';
import { changeEffectChartLet } from '../../actions';

import { ToolChartletDiv, AddPicDiv, EffectList,
  EachListDiv, ChartLetTop, ChartLetBottom, NumberP, ImgNameP } from './styled';
import './numberinput.css';

export class EffectChartlet extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {}

  handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!testFileNamePaster(file.name)) {
      alert('文件格式不支持');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (theFile) => {
      const image = new Image();
      image.src = theFile.target.result;
      image.onload = () => {
        console.log(theFile.target.result, file.name, image.width, image.height);
        const chartlet = {
          zIndex: this.props.effectChartlet.length + 1, // 层级（考虑到还有其他类型特效，当前特效依次增加层级）
          dragKey: guid(), // 特效标识
          type: 'effectChartlet', // 特效类型
          image: {
            src: theFile.target.result,
            title: encodeURIComponent(file.name),
            id: guid(),
            width: image.width,
            height: image.height,
          },
          position: {
            w: 20, // 百分比
            h: 20 * image.height / image.width,
            x: 0,
            y: 0,
          },
          alpha: 100,
          start: 0,
          end: this.props.videoInfo.length,
          isAlwaysShow: false,
        };
        this.props.videoPlayerEl.videoEl.updateChartlet(
          '', 'add', chartlet,
        );
        this.props.actionChangeEffectChartLet(
          'add',
          chartlet,
        );
      };
    };
  };

  handleChangeAlwaysShow = (item) => {
    const { videoInfo, actionChangeEffectChartLet, videoPlayerEl } = this.props;
    const isAlwaysShow = !item.isAlwaysShow;
    const setTime = { start: item.start, end: item.end };
    if (isAlwaysShow) {
      setTime.start = 0;
      setTime.end = videoInfo.length;
    }
    actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, isAlwaysShow },
    );

    videoPlayerEl.videoEl.updateChartlet(
      item.dragKey, 'changeBaseInfo', setTime,
    );
  }

  handleChangeStart = (value, item) => {
    // console.log('handleChangeStart', value);
    // console.log(item.end - item.start + value);
    this.props.actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, start: value, end: item.end - item.start + value },
    );
    this.props.videoPlayerEl.videoEl.updateChartlet(
      item.dragKey, 'changeBaseInfo', { start: value, end: item.end - item.start + value },
    );
  }
  handleChangeContinue = (value, item) => {
    // console.log('handleChangeContinue', value);
    this.props.actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, end: item.start + value },
    );
    this.props.videoPlayerEl.videoEl.updateChartlet(
      item.dragKey, 'changeBaseInfo', { end: item.start + value },
    );
  }

  render() {
    const { effectChartlet, chooseEffect } = this.props;
    return (
      <ToolChartletDiv>
        <AddPicDiv>
          <UploadBtn
            getUpload={(el) => (this.upload = el)}
            onClick={() => this.upload.click()}
            onFileChange={this.handleFileChange}
            button={(
              <Button type="primary" size="large">
                添加图片
              </Button>
            )}
          />
        </AddPicDiv>
        <EffectList>
          {
            effectChartlet.map((item, index) => (
              <EachListDiv key={item.dragKey}>
                <ChartLetTop>
                  <NumberP choosed={chooseEffect.dragKey === item.dragKey}>{index + 1}</NumberP>
                  <ImgNameP title={decodeURIComponent(item.image.title)}>{decodeURIComponent(item.image.title)}</ImgNameP>
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
 *  effectChartlet 贴图特效信息
 *  videoPlayerEl 视频实例
 *  videoInfo 视频信息
 *  chooseEffect 选中特效
 *
 *  actionChangeEffectChartLet  修改贴图特效
*/
EffectChartlet.propTypes = {
  effectChartlet: PropTypes.array.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  videoInfo: PropTypes.object.isRequired,
  chooseEffect: PropTypes.object.isRequired,

  actionChangeEffectChartLet: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectChartlet: makeSelectEffectImage(),
  videoPlayerEl: makeSelectVideoPlayer(),
  videoInfo: makeSelectVideoInfo(),
  chooseEffect: makeSelectChooseEffect(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectChartLet: (actionType, ...arg) => dispatch(changeEffectChartLet(actionType, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EffectChartlet);
