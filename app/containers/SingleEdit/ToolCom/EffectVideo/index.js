/**
 *
 * EffectVideo 视频特效
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Slider, Popover, Progress, Icon } from 'antd';
import ToolTip from 'components/ToolTip';
import ColorPicker from 'components/ColorPicker';
import UploadBtn from 'components/UploadBtn';
import { colorToRGB, rgbToHexString } from 'utils/color';
import { createStructuredSelector } from 'reselect';
import { testFileNamePaster } from 'utils/verification';

import { makeSelectEffectVideo, makeSelectVideoPlayer } from '../../selectors';
import { changeEffectVideo, creatUploadBacImg, changeUplaodBacimgState } from '../../actions';
import './sliderstyle.css';

import { LeftRightOverSvg, UpDownOverSvg } from '../../images/icon/svg';
import { EffectList, EachEffectDiv, LeftTitle, RightDiv, RightInput, FlexDiv, ColorDiv, ColorBtn, OverDiv, UplaodingContent, ImgTitle } from './styled';

const STYLE = {
  slider: {
    width: 220,
  },
  progress: {
    width: 160,
    marginRight: 10,
  },
};

function getCaretPosition(editableDiv) {
  let caretPos = 0;
  let sel;
  let range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode === editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() === editableDiv) {
      const tempEl = document.createElement('span');
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      const tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint('EndToEnd', range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
}

function setCaret(el, pos) {
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(el.childNodes[0], pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

export class EffectVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    isOpenColorPick: false, // 是否打开颜色选择器
    recentLocalColor: [], //  最近使用
  }

  componentDidMount() {
    this.setAndGetLocalColor();
  }

  componentWillReceiveProps(nextProps) {
    if (
      (this.props.effectVideo.backgroundImg.src !== nextProps.effectVideo.backgroundImg.src)
    ) {
      this.props.videoPlayerEl.videoEl.updateVideo({ bgcImg: nextProps.effectVideo.backgroundImg.src });
    }
  }

  setAndGetLocalColor = (color) => { // 设置本地颜色缓存
    let recentlyColor = window.localStorage.getItem('recentColor');
    if (recentlyColor) {
      recentlyColor = JSON.parse(recentlyColor);
    } else {
      recentlyColor = [];
    }
    if (color) {
      if (color !== 'transparent') {
        const _c = rgbToHexString(colorToRGB(color));
        recentlyColor.unshift(_c);
      }
    }
    recentlyColor = [...new Set(recentlyColor)].slice(0, 6);
    this.setState({ recentLocalColor: recentlyColor });
    recentlyColor = JSON.stringify(recentlyColor);
    window.localStorage.setItem('recentColor', recentlyColor);
  }
  handleColorChange = (color, e) => {
    e.stopPropagation();
    this.props.actionChangeEffectVideo({ backgroundColor: color });
    this.props.videoPlayerEl.videoEl.updateVideo({ bgColor: color });
    this.setAndGetLocalColor(color);
  }
  handleVisibleChange = (isOpenColorPick) => {
    this.setState({ isOpenColorPick });
  };

  handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file || this.props.effectVideo.backgroundImg.isUploading) {
      return;
    }
    if (!testFileNamePaster(file.name)) {
      alert('文件格式不支持');
      return;
    }
    this.props.actionCreatUploadBacImg(file);
  };
  // 清空图片 video的更新再componentWillReceiveProps中
  handleClearImg = () => {
    this.props.actionChangeUplaodBacimgState();
  }

  // 翻转
  handleReversal = (reversal) => {
    const { effectVideo, actionChangeEffectVideo, videoPlayerEl } = this.props;
    const setReversal = effectVideo.reversal === reversal ? -1 : reversal;
    actionChangeEffectVideo({ reversal: setReversal });
    videoPlayerEl.videoEl.updateVideo({ hv: setReversal });
  }
  // 透明度
  handleChangeOpacity = (opacity) => {
    this.props.actionChangeEffectVideo({ opacity });
    this.props.videoPlayerEl.videoEl.updateVideo({ opacity });
  }
  // 音量
  handleChangeVolume = (volume) => {
    this.props.actionChangeEffectVideo({ volume });
    this.props.videoPlayerEl.videoEl.updateVideo({ volume });
  }

  // 透明度Input
  handleChangeOpacityInput = () => {
    let number = Number(this.eleOpacity.innerText) || 100;
    if (this.eleOpacity.innerText === '' || Number(this.eleOpacity.innerText) === 0) number = 0;
    number = number < 0 ? 0 : number > 100 ? 100 : number;

    let pos = getCaretPosition(this.eleOpacity) || 1;
    this.eleOpacity.innerText = number;
    this.handleChangeOpacity(number);

    pos = pos > this.eleOpacity.innerText.length ? this.eleOpacity.innerText.length : pos;
    setTimeout(() => setCaret(this.eleOpacity, pos), 10);
  }

  // 音量Input
  handleChangeVolumeInput = () => {
    let number = Number(this.eleVolume.innerText) || 100;
    if (this.eleVolume.innerText === '' || Number(this.eleVolume.innerText) === 0) number = 0;
    number = number < 0 ? 0 : number > 100 ? 100 : number;

    let pos = getCaretPosition(this.eleVolume) || 1;
    this.eleVolume.innerText = number;
    this.handleChangeVolume(number);

    pos = pos > this.eleVolume.innerText.length ? this.eleVolume.innerText.length : pos;
    setTimeout(() => setCaret(this.eleVolume, pos), 10); // 设置光标的位置， 因为props改变的，所以此处用了定时来处理
  }

  createMarkup = (el) =>
  // eslint-disable-line
   ({ __html: el });

  render() {
    const { isOpenColorPick, recentLocalColor } = this.state;
    const { effectVideo } = this.props;
    return (
      <EffectList>
        <div style={{ marginBottom: '32px' }}>
          <EachEffectDiv style={{ marginBottom: '0' }}>
            <LeftTitle>颜色</LeftTitle>
            <FlexDiv>
              <Popover
                content={<div>
                  <ColorPicker
                    containerStyle={{ margin: '-12px -16px' }}
                    onChange={(value, e) => this.handleColorChange(value, e)}
                    color={effectVideo.backgroundColor}
                    recentColor={recentLocalColor}
                    disableAlpha
                  />
                </div>}
                trigger="click"
                visible={isOpenColorPick}
                onVisibleChange={this.handleVisibleChange}
              >
                <ToolTip title="背景色">
                  <ColorBtn backgroundColor={effectVideo.backgroundColor} onClick={() => this.setState({ isOpenColorPick: true })}></ColorBtn>
                </ToolTip>
              </Popover>
              <UploadBtn
                getUpload={(el) => (this.upload = el)}
                onClick={() => this.upload.click()}
                onFileChange={this.handleFileChange}
                style={{ width: 108 }}
                button={(
                  <ColorDiv disabled={effectVideo.backgroundImg.isUploading}>选择图片</ColorDiv>
                )}
              />
            </FlexDiv>
          </EachEffectDiv>
          {
            effectVideo.backgroundImg.isUploading && <UplaodingContent>
              <p>{effectVideo.backgroundImg.progress}%</p>
              <Progress style={STYLE.progress} percent={effectVideo.backgroundImg.progress} showInfo={false} />
            </UplaodingContent>
          }
          {
            !effectVideo.backgroundImg.isUploading && effectVideo.backgroundImg.src && <UplaodingContent>
              <Icon style={{ cursor: 'pointer' }} onClick={this.handleClearImg} type="close" />
              <ImgTitle>{decodeURIComponent(effectVideo.backgroundImg.title)}</ImgTitle>
            </UplaodingContent>
          }
        </div>
        <EachEffectDiv>
          <LeftTitle>翻转</LeftTitle>
          <FlexDiv>
            <ToolTip title="左右翻转">
              <OverDiv
                choosed={effectVideo.reversal === 0}
                onClick={() => this.handleReversal(0)}
              >
                <LeftRightOverSvg style={{ width: 36, height: 36 }} viewBox="0 0 36 36" />
              </OverDiv>
            </ToolTip>
            <ToolTip title="上下翻转">
              <OverDiv
                choosed={effectVideo.reversal === 1}
                onClick={() => this.handleReversal(1)}
              >
                <UpDownOverSvg style={{ width: 36, height: 36 }} viewBox="0 0 36 36" />
              </OverDiv>
            </ToolTip>
          </FlexDiv>
        </EachEffectDiv>
        <EachEffectDiv>
          <LeftTitle>透明度</LeftTitle>
          <Slider style={STYLE.slider} value={effectVideo.opacity} onChange={this.handleChangeOpacity} />
          <RightDiv>
            <RightInput
              innerRef={(e) => { this.eleOpacity = e; }}
              contentEditable="true"
              edit={this.state.opacityEdit}
              dangerouslySetInnerHTML={this.createMarkup(effectVideo.opacity)}
              onInput={this.handleChangeOpacityInput}
              onFocus={() => this.setState({ opacityEdit: true })}
              onBlur={() => this.setState({ opacityEdit: false })}
            />
            %
          </RightDiv>
        </EachEffectDiv>
        <EachEffectDiv>
          <LeftTitle>音量</LeftTitle>
          <Slider style={STYLE.slider} value={effectVideo.volume} onChange={this.handleChangeVolume} />
          <RightDiv>
            <RightInput
              innerRef={(e) => { this.eleVolume = e; }}
              contentEditable="true"
              edit={this.state.volumeEdit}
              dangerouslySetInnerHTML={this.createMarkup(effectVideo.volume)}
              onInput={this.handleChangeVolumeInput}
              onFocus={() => this.setState({ volumeEdit: true })}
              onBlur={() => this.setState({ volumeEdit: false })}
            />
          </RightDiv>
        </EachEffectDiv>
      </EffectList>
    );
  }
}

/**
 *  effectVideo 视频特效信息
 *  actionChangeEffectVideo 视频特效修改方法
 *
 *  videoPlayerEl 视频实例
 *
 *  actionCreatUploadBacImg 上传
 *  actionChangeUplaodBacimgState 清空上传背景图
*/
EffectVideo.propTypes = {
  effectVideo: PropTypes.object.isRequired,
  actionChangeEffectVideo: PropTypes.func.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,

  actionCreatUploadBacImg: PropTypes.func.isRequired,
  actionChangeUplaodBacimgState: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectVideo: makeSelectEffectVideo(),
  videoPlayerEl: makeSelectVideoPlayer(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectVideo: (params) => dispatch(changeEffectVideo(params)),
    actionCreatUploadBacImg: (params) => dispatch(creatUploadBacImg(params)),
    actionChangeUplaodBacimgState: () => dispatch(changeUplaodBacimgState({
      src: '',
      title: '',
      progress: 0,
      isUploading: false,
      id: '',
      width: '',
      height: '',
    })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EffectVideo);
