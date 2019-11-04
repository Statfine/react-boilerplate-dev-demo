/**
 *
 * EffectVideo 视频特效
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Slider, Popover, Progress, Icon, Button } from 'antd';
import ToolTip from 'components/ToolTip';
import ColorPicker from 'components/ColorPicker';
import UploadBtn from 'components/UploadBtn';
import { colorToRGB, rgbToHexString } from 'utils/color';
import { createStructuredSelector } from 'reselect';
import { testFileNamePaster } from 'utils/verification';
import guid from 'utils/guid';

import { makeSelectEffectVideo, makeSelectVideoPlayer } from '../../selectors';
import { changeEffectVideo, creatUploadBacImg, changeUplaodBacimgState, changeBaseVideo } from '../../actions';
import './sliderstyle.css';
import { getCaretPosition, setCaret } from '../../commom/tool';

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

export class EffectVideo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  state = {
    isOpenColorPick: false, // 是否打开颜色选择器
    recentLocalColor: [], //  最近使用

    opacityEdit: false,
    volumeEdit: false,
    localVideoSrc: '',
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

    const request = false; // 不执行异步上传，本地获取
    if (request) this.props.actionCreatUploadBacImg(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (theFile) => {
      const image = new Image();
      image.src = theFile.target.result;
      image.onload = () => {
        // alert("图片的宽度为"+image.width+",长度为"+image.height);
        this.props.actionChangeEffectVideo({
          backgroundImg: { // 背景图
            src: theFile.target.result,
            title: encodeURIComponent(file.name),
            progress: 0,
            isUploading: false,
            id: guid(),
            width: image.width,
            height: image.height,
          },
        });
      };
    };
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

  // 更换视频
  handleVideoFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    // if (!testFileMp4(file.name)) {
    //   alert('文件格式不支持');
    //   return;
    // }
    this.setState({ localVideoSrc: URL.createObjectURL(file) });
  }

  // 视频可播放
  handleCanPlay = () => {
    console.log(this.localVideoEl.duration, this.localVideoEl.videoWidth, this.localVideoEl.videoHeight);
    const videoInfo = {
      media_info: {
        width: this.localVideoEl.videoWidth,
        height: this.localVideoEl.videoHeight,
        duration: this.localVideoEl.duration,
        size: 0,
      },
      play_url: this.state.localVideoSrc,
      cover: 'http://39.108.60.29/static/videoedit/cover.png',
      detail_id: 'local',
      id: guid(),
      length: this.localVideoEl.duration,
    };
    this.props.actionChangeBaseVideo(videoInfo);
    this.props.actionChangeEffectVideo({ startTime: 0, endTime: this.localVideoEl.duration });
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
                choosed={effectVideo.reversal === 1}
                onClick={() => this.handleReversal(1)}
              >
                <LeftRightOverSvg style={{ width: 36, height: 36 }} viewBox="0 0 36 36" />
              </OverDiv>
            </ToolTip>
            <ToolTip title="上下翻转">
              <OverDiv
                choosed={effectVideo.reversal === 0}
                onClick={() => this.handleReversal(0)}
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
        <div>
          <Button onClick={() => this.fileVideoInputEl.click()}>更换视频(本地视频只支持mp4)</Button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={(el) => this.fileVideoInputEl = el}
            onChange={(...v) => {
              this.handleVideoFileChange(...v);
              this.fileVideoInputEl.value = '';
            }}
          />
          <video
            ref={(el) => this.localVideoEl = el}
            src={this.state.localVideoSrc}
            style={{ display: 'none' }}
            controls="controls"
            onCanPlayThrough={this.handleCanPlay}
            onError={() => {
              if (this.state.localVideoSrc) alert('视频播放不了');
            }}
          />
        </div>
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
 *  actionChangeBaseVideo  修改本地视频
*/
EffectVideo.propTypes = {
  effectVideo: PropTypes.object.isRequired,
  actionChangeEffectVideo: PropTypes.func.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,

  actionCreatUploadBacImg: PropTypes.func.isRequired,
  actionChangeUplaodBacimgState: PropTypes.func.isRequired,
  actionChangeBaseVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectVideo: makeSelectEffectVideo(),
  videoPlayerEl: makeSelectVideoPlayer(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeEffectVideo: (params) => dispatch(changeEffectVideo(params)),
    actionCreatUploadBacImg: (params) => dispatch(creatUploadBacImg(params)),
    actionChangeBaseVideo: (...arg) => dispatch(changeBaseVideo(...arg)),
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
