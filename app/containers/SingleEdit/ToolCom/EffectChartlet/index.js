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
// import guid from 'utils/guid';

import { makeSelectEffectImage, makeSelectVideoPlayer } from '../../selectors';
import { changeEffectChartLet } from '../../actions';

import { ToolChartletDiv, AddPicDiv, EffectList,
  EachListDiv, ChartLetTop, ChartLetBottom } from './styled';
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
        alert(`图片的宽度为${image.width},长度为${image.height}`);
        // this.props.actionChangeEffectVideo({
        //   backgroundImg: { // 背景图
        //     src: theFile.target.result,
        //     title: encodeURIComponent(file.name),
        //     progress: 0,
        //     isUploading: false,
        //     id: guid(),
        //     width: image.width,
        //     height: image.height,
        //   },
        // });
      };
    };
  };

  handleChangeAlwaysShow = (item) => {
    console.log('handleChangeAlwaysShow', item);
    this.props.actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, isAlwaysShow: !item.isAlwaysShow },
    );
    // this.props.videoPlayerEl.videoEl.updateChartlet(
    //   item.dragKey, 'changeBaseInfo', { start: item.start, end: item.end },
    // );
  }

  handleChangeStart = (value, item) => {
    console.log('handleChangeStart', value);
    console.log(item.end - item.start + value);
    this.props.actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, start: value, end: item.end - item.start + value },
    );
    this.props.videoPlayerEl.videoEl.updateChartlet(
      item.dragKey, 'changeBaseInfo', { start: value, end: item.end - item.start + value },
    );
  }
  handleChangeContinue = (value, item) => {
    console.log('handleChangeContinue', value);
    this.props.actionChangeEffectChartLet(
      'edit',
      { dragKey: item.dragKey, end: item.start + value },
    );
    this.props.videoPlayerEl.videoEl.updateChartlet(
      item.dragKey, 'changeBaseInfo', { end: item.start + value },
    );
  }

  render() {
    const { effectChartlet } = this.props;
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
                  <p>{index + 1}</p>
                  <p>{decodeURIComponent(item.image.title)}</p>
                  <Checkbox
                    checked={item.isAlwaysShow}
                    onChange={(item) => this.handleChangeAlwaysShow(item)}
                  >
                      全程出现
                  </Checkbox>
                </ChartLetTop>
                <ChartLetBottom>
                  <p>开始时间</p>
                  <InputNumber min={0} max={10} value={item.start} onChange={(value) => this.handleChangeStart(value, item)} />
                  <p>持续时间</p>
                  <InputNumber min={0} max={10} value={item.end - item.start} onChange={(value) => this.handleChangeContinue(value, item)} />
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
 *
 *  actionChangeEffectChartLet  修改贴图特效
*/
EffectChartlet.propTypes = {
  effectChartlet: PropTypes.array.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,

  actionChangeEffectChartLet: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectChartlet: makeSelectEffectImage(),
  videoPlayerEl: makeSelectVideoPlayer(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectChartLet: (actionType, ...arg) => dispatch(changeEffectChartLet(actionType, ...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EffectChartlet);
