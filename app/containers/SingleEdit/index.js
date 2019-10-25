/**
 *
 * SingleEdit 单视频编辑
 *  HeaderCom 顶部栏
 *  ToolCom 工具栏
 *  VideoPlayer 播放器  播放器的事件(播放，暂停，seek，更新)都在reducer->videoPlayer.videoEl
 *  ControlCom 控制栏
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Spin } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import { makeSelectProjectInfo, makeSelectVideoInfo, makeSelectVideoPlayer, makeSelectEffectVideo, makeSelectEffectImage, makeSelectTrackInfo } from './selectors';
import { changeVideoPlayer, changeEffectVideo } from './actions';

import { formatStyle } from './commom/tool';
import { RESOLUTION_RATIO, PREVIEWDIV_SINGLE_MINMARGIN } from './commom/config';

import HeaderCom from './Header';
import ToolCom from './ToolCom';
import VideoPlayer from './VideoPlayer';
import TransVideo from './TransCom/TransVideo';
import ControlCom from './ControlCom';
import { Page, Content, MiddleContent, BottomContent,
  TopContent, TopLeft, TopRight, PreviewDiv, DevInfo } from './styled';
import TrackCom from './TrackCom/index';

import TransChartlet from './TransCom/TransChartlet';

export class SingleEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    canvasStyle: { // 画布大小
      width: 0,
      height: 0,
    },
    isResizeIng: false, // 尺寸变化 canvas需要从新渲染
    isShowBaseLineX: false,
    isShowBaseLineY: false,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleDebounce());
  }

  // eslint-disable-next-line react/sort-comp
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleDebounce);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projectInfo.resolutionRatio !== this.props.projectInfo.resolutionRatio) {
      // this.handleResize(nextProps.projectInfo.resolutionRatio);
      this.handleResize(false, true, nextProps); // 重置视频
    }
  }

  timeout;
  // 设置防抖
  handleDebounce() {
    this.setState({ isResizeIng: true });
    if (this.timeout !== null) clearTimeout(this.timeout);
    this.timeout = setTimeout(this.handleResize, 500);
  }

  /**
   *  浏览器窗口变化监听 修改画布区域大小 rRatio 当前分辨率
   *  resolutionRatio 为0的时候表示取原始分辨率，此时为原始视频的宽高比
   *  TopRight区域宽高比和当前画布的分辨率做比较， 取短边减去间距设置，另一边通过宽高比计算
   *      const LeftEl = this.rightCom.getBoundingClientRect();
   *      const LeftElW = LeftEl.width;
   *      const LeftElH = LeftEl.height;
   *
   *      const LeftElW = document.body.clientWidth - 382;
   *      const LeftElH = document.body.clientHeight - 48 - 40 - 132;
   *
   * isWindowsResize  区分窗口变动还是分辨率调整 true-窗口变动 false-分辨率调整
   * initVideo 是否重置视频
  */
  handleResize = (isWindowsResize = true, initVideo = false, nextProps) => {
    this.setState({ isResizeIng: true });
    const videoInfo = isWindowsResize ? this.props.videoInfo : nextProps.videoInfo;
    const projectInfo = isWindowsResize ? this.props.projectInfo : nextProps.projectInfo;
    const resolutionRatio = Number(projectInfo.resolutionRatio);
    let ratio = RESOLUTION_RATIO[resolutionRatio].w / RESOLUTION_RATIO[resolutionRatio].h; // 获取宽高比
    if (Number(resolutionRatio) === 0) ratio = videoInfo.media_info.width / videoInfo.media_info.height;

    const LeftElW = formatStyle(this.rightCom, 'width');
    const LeftElH = formatStyle(this.rightCom, 'height');
    let setWidth = 0;
    let setHeight = 0;
    if (ratio > (LeftElW / LeftElH)) {
      setWidth = LeftElW - PREVIEWDIV_SINGLE_MINMARGIN * 2; // 左右所以是最小单边距的2倍
      setHeight = setWidth / ratio;
    } else {
      setHeight = LeftElH - PREVIEWDIV_SINGLE_MINMARGIN * 2; // 上下所以是最小单边距的2倍
      setWidth = setHeight * ratio;
    }
    this.setState({ canvasStyle: { width: setWidth, height: setHeight } });
    if (initVideo) this.handleResizeVideo(ratio, setWidth, setHeight); // 分辨率变化 需要计算视频的位置 视频的比例原始比例不变
    setTimeout(() => this.setState({ isResizeIng: false }), 500);
  }

  /**
   * 根据分辨率 初始化画布中的视频大小（初始化获取视频真实位置）
   *  rRatio 当前分辨率
   *  previeWidth 预览区域(画布)宽
   *  previeHeight 预览区域(画布)高
   *
   * 分辨率比<视频原始宽高比 取当前画布宽度，计算高度
   * 分辨率比>视频原始宽高比 取当前画布高度，计算宽度
  */
  handleResizeVideo = (rRatio, previeWidth, previeHeight) => {
    const { videoInfo, projectInfo } = this.props;
    const resolutionRatio = rRatio === null ? projectInfo.resolutionRatio : rRatio;
    const videoRatio = videoInfo.media_info.width / videoInfo.media_info.height;
    let vWidth = 0; // 视频宽
    let vHight = 0;
    if (resolutionRatio < videoRatio) { // 取画布宽为基准 计算高度
      vWidth = previeWidth;
      vHight = vWidth / videoRatio;
    } else { // 取画布高为基准 计算宽度
      vHight = previeHeight;
      vWidth = vHight * videoRatio;
    }
    const videoPosition = {
      w: vWidth / previeWidth * 100,
      h: vHight / previeHeight * 100,
      x: (100 - (vWidth / previeWidth * 100)) / 2,
      y: (100 - (vHight / previeHeight * 100)) / 2,
    };
    console.log('handleResizeVideo', vWidth, vHight, videoPosition);
    this.props.actionChangeEffectVideo({ position: videoPosition });
  }

  // 用于调试测试
  renderShowTestPosition = () => {
    const { videoInfo, videoPlayerEl } = this.props;
    const { resolutionRatio } = this.props.projectInfo;
    if (!window.show) return null;
    return (
      <DevInfo>
        <p onClick={() => videoPlayerEl.videoEl.play()}>当前比例:{RESOLUTION_RATIO[resolutionRatio].value};</p>
        <p>视频原始分辨率:{videoInfo.media_info.width};{videoInfo.media_info.height}</p>
        <p>当前区域宽高:{canvasStyle.width};{canvasStyle.height}; </p>
      </DevInfo>
    );
  }

  render() {
    const { canvasStyle, isResizeIng } = this.state;
    const { trackInfo, videoInfo, actionChangeVideoPlayer, videoPlayerEl, effectVideo, actionChangeEffectVideo, effectImage } = this.props;
    return (
      <Page>
        <Helmet title="视频编辑" />
        <HeaderCom />
        {this.renderShowTestPosition()}
        <Content>
          <TopContent>
            <TopLeft><ToolCom /></TopLeft>
            <TopRight innerRef={(ref) => (this.rightCom = ref)}>
              {
                isResizeIng ? <Spin size="large" /> : (
                  <PreviewDiv
                    style={canvasStyle}
                    showBaseLineX={this.state.isShowBaseLineX}
                    showBaseLineY={this.state.isShowBaseLineY}
                  >
                    {
                      canvasStyle.width &&
                        <VideoPlayer
                          width={canvasStyle.width}
                          height={canvasStyle.height}
                          effectVideo={effectVideo}
                          effectImage={effectImage}
                          reducerCurrentTime={videoPlayerEl.currentTime}
                          cbHandleTime={(currentTime) => actionChangeVideoPlayer({ currentTime })}
                          handleInitVideo={(params) => actionChangeVideoPlayer({ videoEl: params })}
                          handleVideoState={(state) => actionChangeVideoPlayer({ state })}
                        />
                    }
                    <TransVideo
                      handleShowBaseLine={(lineParams) => {
                        this.setState({
                          isShowBaseLineX: lineParams.showLineX,
                          isShowBaseLineY: lineParams.showLineY,
                        });
                      }}
                    />
                    <TransChartlet
                      handleShowBaseLine={(lineParams) => console.log('TransChartlet', lineParams)}
                    />
                  </PreviewDiv>
                )
              }
            </TopRight>
          </TopContent>
          <MiddleContent>
            <ControlCom />
          </MiddleContent>
          <BottomContent>
            <TrackCom
              effectVideo={effectVideo}
              trackInfo={trackInfo}
              videoInfo={videoInfo}
              videoPlayerEl={videoPlayerEl}
              onChangeEffectVideo={actionChangeEffectVideo}
              onChangeVideoPlay={actionChangeVideoPlayer}
            />
          </BottomContent>
        </Content>
      </Page>
    );
  }
}

/**
 *  projectInfo 项目信息(分辨率)
 *  videoInfo 视频详情（纯数据）
 *  videoPlayerEl 视频实例对象
 *  effectVideo 视频特效 （位置）
 *  effectImage 贴图特效 （位置）
 *
 *  actionChangeVideoPlayer 设置播放器实例 （时间，事件，状态）
 *  actionChangeEffectVideo 视频特效设置(位置)
*/
SingleEdit.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  videoInfo: PropTypes.object.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  effectVideo: PropTypes.object.isRequired,
  trackInfo: PropTypes.object.isRequired,
  effectImage: PropTypes.array.isRequired,

  actionChangeVideoPlayer: PropTypes.func.isRequired,
  actionChangeEffectVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectInfo: makeSelectProjectInfo(),
  videoInfo: makeSelectVideoInfo(),
  videoPlayerEl: makeSelectVideoPlayer(),
  effectVideo: makeSelectEffectVideo(),
  effectImage: makeSelectEffectImage(),
  trackInfo: makeSelectTrackInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeVideoPlayer: (...arg) => dispatch(changeVideoPlayer(...arg)),
    actionChangeEffectVideo: (...arg) => dispatch(changeEffectVideo(...arg)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'singleEdit', reducer });
const withSaga = injectSaga({ key: 'singleEdit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SingleEdit);
