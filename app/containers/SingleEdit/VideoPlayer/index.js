/**
 * VideoContext 播放器
 * https://github.com/bbc/VideoContext
 *
 * 实例  effctFilterFanZhuan-翻转特效  effctFilterVideoAdjust-视频特效 filterHsv-滤镜参数 filterHsvImageNode-冷暖色
 *  node.connect(filterFlipFanZhuan);
 *  filterFlipFanZhuan.connect(effctFilterVideoAdjust)
 *  effctFilterVideoAdjust.connect(chartlet1)
 *  chartlet1.connect(chartlet2)
 *  chartlet3.connect(chartlet3)
 *  chartlet3.connect(chartlet4)
 *  chartlet4.connect(this.ctx.destination)
 *    以此为基础修改
 *    修改chartlet1之后，需要执行chartlet1.connect(chartlet2) 以此类推
 *    删除chartlet1之后需要 effctFilterVideoAdjust.connect(chartlet2) 以此类推
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Spin, Button } from 'antd';
import _ from 'lodash';
import { detectOS } from 'utils/utils';
import { colorToRGB } from 'utils/color';
// import VideoContext from './videocontext.commonjs2(image-time)';
// import VideoContext from './videocontext.commonjs2';
import VideoContext from './videocontext.commonjs2(lut)';

// import LookupBlackPng from '../images/lookup-black.png';
import { LoadingDiv, VideoContent, BtnContent, NoContent } from './styled';

import InitVisualisations from './utils';
import { FILTER_TYPE } from '../commom/config';

// import { EFFECTIMAGE } from '../reducer';

export default class VideoContextComponent extends PureComponent {
  state = {
    duration: 0,
    currentTime: 0,
    laoding: false,
    pause: true,
  };

  componentDidMount() {
    this.canvas = document.getElementById('dialog-canvas');
    this.canvas.width = this.props.width;
    this.canvas.height = this.props.height;
    this.ctx = new VideoContext(this.canvas, () => {
      const result = detectOS();
      if (result === 'WinXP') {
        alert('XP系统不支持在线剪辑页，请升级系统或更换电脑剪辑');
      } else {
        alert('当前浏览器不支持在线剪辑页，请升级/更换为Chrome浏览器');
      }
    }); // eslint-disable-line no-alert
    this.ctx.registerCallback('ended', this.videoContextEnded);
    this.ctx.registerCallback('content', this.videoContextContent);
    this.ctx.registerCallback('nocontent', this.videoContextNoContent);
    this.resize(this.props.videoInfo, this.props.effectVideo, this.props.effectFilter);
  }

  componentWillReceiveProps(nextProps) {
    // 时间裁剪 滤镜效果 需要重新绘制
    const isTimeChange = (this.props.effectVideo.startTime !== nextProps.effectVideo.startTime) || (this.props.effectVideo.endTime !== nextProps.effectVideo.endTime);
    const isFilterChange = (this.props.effectFilter.lookupValue !== nextProps.effectFilter.lookupValue);
    if (isTimeChange || isFilterChange) {
      this.setState({ pause: true }, () => this.props.handleVideoState(0));
      this.resize(nextProps.videoInfo, nextProps.effectVideo, nextProps.effectFilter);
    }
    // 视频资源修改需要重新绘制
    // if (
    //   !isEqual(nextProps.videoInfo, this.props.videoInfo) ||
    //   nextProps.videoInfo !== this.props.videoInfo
    // ) {
    //   this.setState({ pause: true }, () => this.props.handleVideoState(0));
    //   this.resize(nextProps.videoInfo, nextProps.effectVideo, nextProps.effectFilter);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pause !== this.state.pause &&
      this.props.handleVideoState
    ) {
      this.props.handleVideoState(this.state.pause ? 0 : 1);
    }
  }

  componentWillUnmount() {
    this.clearConnect();
    this.unmount = true;
    window.cancelAnimationFrame(this.currentTimeAnimation);
  }

  ctx;
  canvas;

  ctxClearAndRegister = () => {
    this.clearConnect();
    this.ctx.registerCallback('ended', this.videoContextEnded);
    this.ctx.registerCallback('content', this.videoContextContent);
    this.ctx.registerCallback('nocontent', this.videoContextNoContent);
  };

  // 清理
  clearConnect = () => {
    this.ctx.reset();
  };

  effctFilterVideoAdjust; // 用于尺寸和背景色修改是update用的filter
  effctFilterFanZhuan; // 翻转
  videoNode; // 视频节点

  resize = (videoInfo, effectVideo, effectFilter) => {
    this.ctxClearAndRegister();

    const url = videoInfo.play_url;
    const node = this.ctx.video(url, effectVideo.startTime, 1, {
      volume: effectVideo.volume * 0.01,
      loop: false,
      playbackRate: 1, // 播放速度
    });

    node.startAt(0);
    node.stopAt(effectVideo.endTime - effectVideo.startTime);

    node.registerCallback('load', this.videoNodeStateLoad);
    node.registerCallback('loaded', this.videoNodeStateLoaded);
    node.registerCallback('play', () => this.videoNodeStatePlay());
    node.registerCallback('ended', this.videoNodeStateEnded);
    node.registerCallback('error', this.videoNodeStateError);
    this.videoNode = node; // 定义对象用于update直接更新

    // 背景图filter
    const bacImageNode = this.initBackImgNode(effectVideo, effectVideo.backgroundImg.src);

    // 翻转特效
    const filterFlipFanZhuan = this.ctx.effect(VideoContext.DEFINITIONS.FLIP);
    filterFlipFanZhuan.u_hv = effectVideo.reversal; // 0.0垂直翻转，1.0是水平翻转
    this.effctFilterFanZhuan = filterFlipFanZhuan; // 定义对象用于update直接更新

    // 视频大小，背景色，背景图片，透明度
    const filterVideoAdjust = this.ctx.effect(VideoContext.DEFINITIONS.BGADJUST);
    this.effctFilterVideoAdjust = filterVideoAdjust; // 定义对象用于update直接更新
    // 视频位置 [x轴边距，y轴边距，w宽，h高] （小数百分比）
    const { x, y, w, h } = effectVideo.position;
    filterVideoAdjust.u_rect = [x / 100, y / 100, w / 100, h / 100]; // 前景位置(视频)
    const rgb = colorToRGB(effectVideo.backgroundColor);
    filterVideoAdjust.u_bgColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255]; // 背景色
    filterVideoAdjust.u_alpha = effectVideo.opacity * 0.01; // 前景透明度
    filterVideoAdjust.u_width_view = this.props.width; // 画布宽
    filterVideoAdjust.u_height_view = this.props.height; // 画布高
    const mediaInfo = this.props.videoInfo.media_info;
    filterVideoAdjust.u_width_image = mediaInfo.width; // 前景宽(视频)
    filterVideoAdjust.u_height_image = mediaInfo.height; // 前景高（视频）
    filterVideoAdjust.u_image_b_valid = bacImageNode ? 1.0 : 0.0; // 当前的背景是否显示(图片) 1-显示 0-不显示

    // 滤镜参数  mac下有问题
    const filterHsv = this.ctx.effect(VideoContext.DEFINITIONS.HSVC);
    filterHsv.u_hue = 0.0; // 色调
    filterHsv.u_saturation = 1.0; // 饱和度 1为正常值（0.0~1+）
    filterHsv.u_value = 1.0; // 亮度  1为正常值（0.0~1+）
    filterHsv.u_contrast = 0.0; // 对比度 0为正常值（-1~0+）

    // 滤镜(暖色，冷色)
    const backPng = _.filter(FILTER_TYPE, (item) => item.key === effectFilter.lookupValue)[0].imgUrlLut;
    const filterHsvImageNode = this.ctx.image(backPng);
    filterHsvImageNode.startAt(0);
    filterHsvImageNode.stopAt(effectVideo.endTime - effectVideo.startTime);
    const filterHsvLookup = this.ctx.effect(VideoContext.DEFINITIONS.LOOKUP);
    filterHsvLookup.intensity = 1.0;

    // 马赛克
    // const mosaicOpts = {
    //   mode: 1,
    //   vw: this.props.width,
    //   vh: this.props.height,
    //   rects: [
    //     {
    //       rect: [0.1, 0.1, 0.5, 0.5],
    //       start: 0.0,
    //       end: 5.0,
    //     },
    //     {
    //       rect: [0.5, 0.5, 0.5, 0.3],
    //       start: 3.0,
    //       end: 5.0,
    //     },
    //   ],
    // };
    // const mosaicNode = this.ctx.mosaicNode(node, mosaicOpts);

    if (effectFilter.lookupValue === 'none') {
      // 翻转+滤镜参数+视频基本
      node.connect(filterFlipFanZhuan);
      filterFlipFanZhuan.connect(filterHsv);
      filterHsv.connect(filterVideoAdjust);
    } else {
      // 滤镜+翻转+滤镜参数+视频基本  黑白作用视频
      node.connect(filterHsvLookup);
      filterHsvImageNode.connect(filterHsvLookup);
      filterHsvLookup.connect(filterFlipFanZhuan);
      filterFlipFanZhuan.connect(filterHsv);
      filterHsv.connect(filterVideoAdjust);
    }

    // 滤镜+翻转+滤镜参数+视频基本  黑白作用视频
    // node.connect(filterHsvLookup);
    // filterHsvImageNode.connect(filterHsvLookup);
    // filterHsvLookup.connect(filterFlipFanZhuan);
    // filterFlipFanZhuan.connect(filterHsv);
    // filterHsv.connect(filterVideoAdjust);

    // 翻转+滤镜参数+视频基本
    // node.connect(filterFlipFanZhuan);
    // filterFlipFanZhuan.connect(filterHsv);
    // filterHsv.connect(filterVideoAdjust);

    // 翻转+视频基本
    // node.connect(filterFlipFanZhuan);
    // filterFlipFanZhuan.connect(filterVideoAdjust);

    if (bacImageNode) bacImageNode.connect(filterVideoAdjust);

    // todo - 图片特效 效果同上(注意背景和前景的区别)
    // 贴图特效
    // const finaleNode = this.addChartletDemo(filterVideoAdjust);
    // finaleNode.connect(this.ctx.destination);

    // 多个特效
    this.filterList = []; // 清空贴图特效
    const finaleNode = this.addChartlet(filterVideoAdjust, 0);
    finaleNode.connect(this.ctx.destination);

    // filterVideoAdjust.connect(this.ctx.destination);

    // 黑白作用全局
    // finaleNode.connect(filterHsvLookup);
    // filterHsvImageNode.connect(filterHsvLookup);
    // filterHsvLookup.connect(filterHsv);
    // filterHsv.connect(this.ctx.destination);

    const { cbHandleTime, handleInitVideo } = this.props;
    this.ctx.currentTime = (this.props.reducerCurrentTime < 0.00001 || this.props.reducerCurrentTime > this.ctx.duration) ? 0.00001 : this.props.reducerCurrentTime; // 设置封面，不然是黑屏
    this.setState({
      duration: this.ctx.duration,
      currentTime: this.ctx.currentTime,
    });
    if (cbHandleTime && !this.state.pause) cbHandleTime(this.ctx.currentTime);
    handleInitVideo({
      play: this.publicPlay, // 播放
      pause: this.publicPause, // 暂停
      seek: this.publicSeek, // 设置时间
      updateVideo: this.publickUpdateVideo, // 更新大小和背景
      updateChartlet: this.publickUpdateChartlet, // 更新贴图
    });
    this.detailFilterConnect();
  };

  detailFilterConnect = () => {
    InitVisualisations(this.ctx, 'graph-canvas', 'dialog-canvas');
  }

  // 贴图迭代器
  filterList = [];
  addChartlet = (filter, i) => {
    if (i < this.props.effectImage.length) {
      const chartFilter = this.addChartletSingle(filter, this.props.effectImage[i]);
      return this.addChartlet(chartFilter, i + 1);
    }
    return filter;
  }

  // 同上(贴图迭代器)
  addChartletMap = (beforeFilter) => {
    let afterNode = beforeFilter;
    this.props.effectImage.map((item) => afterNode = this.addChartletSingle(afterNode, item));
    return afterNode;
  }

  // 设置贴图
  addChartletSingle = (beforeFilter, imageObj) => {
    const chartletNode = this.ctx.image(imageObj.image.src);
    chartletNode.startAt(0);
    chartletNode.stopAt(imageObj.end);

    const adjustChartlet = this.ctx.effect(VideoContext.DEFINITIONS.BGADJUST);
    // 定义节点特效
    this.filterList[imageObj.dragKey] = adjustChartlet;

    adjustChartlet.u_rect = [imageObj.position.x / 100, imageObj.position.y / 100, imageObj.position.w / 100, imageObj.position.h / 100]; // 前景位置(第二张图片)
    adjustChartlet.u_bgColor = [0.2, 0.5, 0.1]; // 前景背景(背景色)
    adjustChartlet.u_alpha = imageObj.alpha / 100; // 前景透明度（第二张图片）
    adjustChartlet.u_width_view = this.props.width; // 画布
    adjustChartlet.u_height_view = this.props.height; // 画布
    adjustChartlet.u_width_image = Number(imageObj.image.width); // 前景宽（第二张图片）
    adjustChartlet.u_height_image = Number(imageObj.image.height); // 前景高（第二张图片）
    adjustChartlet.u_image_b_valid = 1.0; // 当前effect的背景是否显示（当前背景是视频）
    adjustChartlet.start = imageObj.start;
    adjustChartlet.end = imageObj.end;
    chartletNode.connect(adjustChartlet);

    beforeFilter.connect(adjustChartlet);

    return adjustChartlet;
  }

  // 设置贴图 测试
  addChartletDemo = (beforeFilter) => {
    const chartletNode = this.ctx.image(this.props.effectVideo.backgroundImg.src);
    chartletNode.startAt(0);
    // chartletNode.stopAt(5);

    const adjustChartlet = this.ctx.effect(VideoContext.DEFINITIONS.BGADJUST);
    adjustChartlet.u_rect = [0.5, 0.5, 0.4, 0.1]; // 前景位置(第二张图片)
    adjustChartlet.u_bgColor = [0.2, 0.5, 0.1]; // 前景背景(背景色)
    adjustChartlet.u_alpha = 1.0; // 前景透明度（第二张图片）
    adjustChartlet.u_width_view = this.props.width; // 画布
    adjustChartlet.u_height_view = this.props.height; // 画布
    adjustChartlet.u_width_image = 248; // 前景宽（第二张图片）
    adjustChartlet.u_height_image = 510; // 前景高（第二张图片）
    adjustChartlet.u_image_b_valid = 1.0; // 当前effect的背景是否显示（当前背景是视频）
    chartletNode.connect(adjustChartlet);

    const chartletNode2 = this.ctx.image(this.props.effectVideo.backgroundImg.src);
    chartletNode2.startAt(0);
    // chartletNode.stopAt(5);

    const adjustChartlet2 = this.ctx.effect(VideoContext.DEFINITIONS.BGADJUST);
    adjustChartlet2.u_rect = [0.0, 0.0, 0.1, 0.4]; // 前景位置(第二张图片)
    adjustChartlet2.u_bgColor = [0.2, 0.5, 0.1]; // 前景背景(背景色)
    adjustChartlet2.u_alpha = 1.0; // 前景透明度（第二张图片）
    adjustChartlet2.u_width_view = this.props.width; // 画布
    adjustChartlet2.u_height_view = this.props.height; // 画布
    adjustChartlet2.u_width_image = 248; // 前景宽（第二张图片）
    adjustChartlet2.u_height_image = 510; // 前景高（第二张图片）
    adjustChartlet2.u_image_b_valid = 1.0; // 当前effect的背景是否显示（当前背景是视频）
    chartletNode2.connect(adjustChartlet2);

    beforeFilter.connect(adjustChartlet);
    adjustChartlet.connect(adjustChartlet2);

    return adjustChartlet2;
    // adjustChartlet2.connect(this.ctx.destination);
  }

  // 背景图node节点
  effectBacImageNode;
  initBackImgNode = (effectVideo, bacImgSrc) => {
    let bacImageNode = null;
    if (bacImgSrc) {
      bacImageNode = this.ctx.image(bacImgSrc);
      bacImageNode.startAt(0);
      bacImageNode.stopAt(effectVideo.endTime - effectVideo.startTime);
    }
    this.effectBacImageNode = bacImageNode;
    return bacImageNode;
  }

  /** videoNode * */
  videoNodeStateLoad = () => this.setState({ laoding: true });
  videoNodeStateLoaded = () => this.setState({ laoding: false, noContent: false });
  videoNodeStatePlay = () => console.log('videoNodeStatePlay');
  videoNodeStateEnded = () => {};
  videoNodeStateError = () => console.log('Error with node');
  /** videoNode * */

  /** videoContext * */
  videoContextContent = () => this.setState({ noContent: false });
  videoContextNoContent = () => this.setState({ noContent: true });
  videoContextEnded = () => {
    if (this.ctx.currentTime > this.ctx.duration) {
      this.ctx.currentTime = this.ctx.duration;
      const { cbHandleTime } = this.props;
      if (cbHandleTime) cbHandleTime(this.ctx.duration);
      this.setState({ currentTime: this.ctx.duration });
    }
    this.publicPause();
  };
  /** videoContext * */

  // 进度条定时 state 0:全部可播; 1:暂停; 2:一个或多个源不可播; 3:所有播放完毕; 4:损坏状态;
  currentTimeAnimation;
  drawVideo = () => {
    this.currentTimeAnimation = requestAnimationFrame(this.drawVideo);
    const { cbHandleTime } = this.props;
    if (cbHandleTime) cbHandleTime(this.ctx.currentTime);
    this.setState({ currentTime: this.ctx.currentTime });
  };

  // 开始播放（对外）
  publicPlay = () => {
    if (this.ctx.currentTime >= this.ctx.duration) this.ctx.currentTime = 0;
    this.ctx.play();
    this.setState({ pause: false }, () => {
      this.props.handleVideoState(1);
      if (this.currentTimeAnimation) window.cancelAnimationFrame(this.currentTimeAnimation);
      this.drawVideo();
    });
  };

  // 暂停播放（对外）
  publicPause = () => {
    this.ctx.pause();
    this.setState({ pause: true });
    this.props.handleVideoState(0);
    if (this.currentTimeAnimation) window.cancelAnimationFrame(this.currentTimeAnimation);
  };

  // seek事件（对外）
  publicSeek = (time, cb) => {
    this.ctx.currentTime = time;
    this.setState({ currentTime: time });
    this.props.cbHandleTime(time);
    if (typeof cb === 'function') cb();
  };

  // demo更新位置和背景色
  /**
   * params
   *  rect-修改大小
   *  bgColor-背景色
   *  opacity-透明度
   *  volume-音量
   *  hv-翻转
   *  bgcImg-背景图片
  */
  publickUpdateVideo = (params) => {
    if ('rect' in params) {
      this.effctFilterVideoAdjust.u_rect = params.rect;
    }
    if ('bgColor' in params) {
      const rgb = colorToRGB(params.bgColor);
      this.effctFilterVideoAdjust.u_bgColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
    }
    if ('opacity' in params) {
      this.effctFilterVideoAdjust.u_alpha = params.opacity * 0.01;
    }
    if ('volume' in params) {
      this.videoNode.volume = params.volume * 0.01;
    }
    if ('hv' in params) {
      this.effctFilterFanZhuan.u_hv = params.hv; // 0.0垂直翻转，1.0是水平翻转
    }
    if ('bgcImg' in params) {
      this.effectBacImageNode.disconnect();
      if (!params.bgcImg) {
        this.effctFilterVideoAdjust.u_image_b_valid = 0.0; // 当前的背景是否显示(图片) 1-显示 0-不显示
      } else {
        this.effctFilterVideoAdjust.u_image_b_valid = 1.0;
        const bacImageNode = this.initBackImgNode(this.props.effectVideo, params.bgcImg);
        bacImageNode.connect(this.effctFilterVideoAdjust);
      }
    }
    const oldTime = this.ctx.currentTime;
    this.ctx.update();
    this.ctx.currentTime = oldTime;
    if (!this.state.pause) this.ctx.play();
  }

  /**
   * 更新贴图
   *  actionType-操作类型
   *    changeBaseInfo-修改信息（位置）
   *    delete-删除
   *    add-添加
  */
  publickUpdateChartlet = (dragKey, actionType, params = {}) => {
    console.log('publickUpdateChartlet', params, dragKey, this.filterList);
    // 修改基本信息
    if (actionType === 'changeBaseInfo') {
      // 清空
      // this.filterList.map((item) => item.disconnect());
      // this.effctFilterVideoAdjust.connect(this.ctx.destination); // 重新连接

      this.filterList[dragKey].disconnect();

      if ('rect' in params) {
        this.filterList[dragKey].u_rect = params.rect;
      }

      if ('start' in params) {
        this.filterList[dragKey].start = params.start;
      }
      if ('end' in params) {
        this.filterList[dragKey].end = params.end;
      }

      /**
       * 修改最后一个的时候， 使用当前filter链接context
       * 修改最后一个的时候， 使用当前当前filter链接下一个filter
      */
      const index = _.findIndex(this.props.effectImage, (item) => item.dragKey === dragKey); // 获取当前位置
      if (index === this.props.effectImage.length - 1) {
        this.filterList[dragKey].connect(this.ctx.destination);
      } else this.filterList[dragKey].connect(this.filterList[this.props.effectImage[index + 1].dragKey]);
    }

    if (actionType === 'delete') {
      this.filterList[dragKey].disconnect();

      /**
       * 只有一个的时候，删除之后使用最上层的filter(effctFilterVideoAdjust)链接context
       * 删除最后一个的时候， 使用当前filter的上一个(up)filter链接context
       * 删除第一个的时候(并非只有一个) 使用使用最上层的filter(effctFilterVideoAdjust)链接当前的下一个(next)filter
       * 删除中间的时候 使用当前filter的上一个(up)filter链接当前(next)filter的下一个filter
      */
      const index = _.findIndex(this.props.effectImage, (item) => item.dragKey === dragKey); // 获取当前位置
      if (this.props.effectImage.length === 1) this.effctFilterVideoAdjust.connect(this.ctx.destination);
      else if (index === this.props.effectImage.length - 1) {
        this.filterList[this.props.effectImage[index - 1].dragKey].connect(this.ctx.destination);
      } else if (index === 0) this.effctFilterVideoAdjust.connect(this.filterList[this.props.effectImage[index + 1].dragKey]);
      else this.filterList[this.props.effectImage[index - 1].dragKey].connect(this.filterList[this.props.effectImage[index + 1].dragKey]);
    }

    if (actionType === 'add') {
      const length = this.props.effectImage.length;
      if (length === 0) {
        this.effctFilterVideoAdjust.disconnect();
        const addFilter = this.addChartletSingle(this.effctFilterVideoAdjust, params);
        addFilter.connect(this.ctx.destination);
      } else {
        const beforeFilter = this.filterList[this.props.effectImage[length - 1].dragKey];
        beforeFilter.disconnect();
        const addFilter = this.addChartletSingle(beforeFilter, params);
        addFilter.connect(this.ctx.destination);
      }
    }

    const oldTime = this.ctx.currentTime;
    this.ctx.update();
    this.ctx.currentTime = oldTime;
    if (!this.state.pause) this.ctx.play();
  }

  render() {
    const { className, style } = this.props;
    const { laoding, duration, currentTime, noContent } = this.state;
    return (
      <VideoContent className={className} style={style} onContextMenu={(e) => e.preventDefault()}>
        <canvas id="dialog-canvas" style={{ width: '100%', height: '100%' }} />
        {laoding && <LoadingDiv><Spin /></LoadingDiv>}
        {noContent && <NoContent>无内容</NoContent>}
        <BtnContent>
          <Button onClick={this.publicPlay}>paly</Button>
          <Button onClick={this.publicPause}>pause</Button>
          {/* <Button onClick={() => this.publickUpdateVideo({ rect: [0, 0, 0.5, 0.5], bgColor: '#fff' })}>update测试(白色，顶点50%)</Button>
          <Button onClick={() => this.publickUpdateChartlet('image_1')}>update贴图</Button> */}
          <Button onClick={() => this.publicSeek(5)}>seek 5</Button>
          <p>{duration}/{currentTime}</p>
        </BtnContent>
      </VideoContent>
    );
  }
}

/*
 * className 样式
 * videoInfo: { 视频信息
      cover: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/snapshot/80046ef0-a925-4215-b4d5-1b4bebab6882-1000.jpg',
      video_thumb_nb: 2,
      detail_id: 32273,
      length: 15,
      id: '254767025149215744570',
      media_info: '{ width: 848, height: 620, duration: 15, size: 1479243 }',
      media_state: 2,
      play_url: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/80046ef0-a925-4215-b4d5-1b4bebab6882.mp4',
      quick_edit_thumb_nb: 5,
      source: 'mam',
      title: 'vcgall3',
      type: 'video',
    },
 *  effectVideo {
      position: {
          w: 100, // 百分比
          h: 100,
          x: 0,
          y: 0,
        },
      opacity: 100, // 透明度
      volume: 100, // 音量
      backgroundColor: '#000', // 背景色
      backgroundImg: { // 背景图
        src: '',
        title: '',
        progress: 0,
        isUploading: false,
      },
      reversal: 0, // 翻转 0-无 1-左右翻转 2-上下翻转
      startTime: 0,
      endTime: 11,
    }
 * cbHandleTime(currentTime) 时间回调
 *
 * 公开方法
 *  publicPlay，
 *  publicPause，
 *  publicSeek(time, callback),
 *  publicCanvas）
 *
 * width 画布宽
 * height 画布高
 * effectVideo 视频特效 （位置，音量，属性...）
 * effectVideo 贴图特效 （位置）
 * reducerCurrentTime reducer里面的当前时间，用于重绘的时候seek到当前点
 *
 * handleInitVideo 设置实例对象（播放，暂停，seek，更新）
 * handleVideoState 设置播放状态
 */
VideoContextComponent.defaultProps = {
  videoInfo: {
    cover: 'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/snapshot/80046ef0-a925-4215-b4d5-1b4bebab6882-1000.jpg',
    video_thumb_nb: 2,
    detail_id: 32273,
    length: 15,
    id: '254767025149215744570',
    media_info: { width: 848, height: 620, duration: 15, size: 1479243 },
    media_state: 2,
    play_url: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/80046ef0-a925-4215-b4d5-1b4bebab6882.mp4',
    quick_edit_thumb_nb: 5,
    source: 'mam',
    title: 'vcgall3',
    type: 'video',
  },
  effectVideo: {
    position: {
      w: 100, // 百分比
      h: 100,
      x: 0,
      y: 0,
    },
    opacity: 100, // 透明度
    volume: 100, // 音量
    backgroundColor: '#000', // 背景色
    backgroundImg: { // 背景图
      src: '',
      title: '',
      progress: 0,
      isUploading: false,
    },
    reversal: 0, // 翻转 0-无 1-左右翻转 2-上下翻转
    startTime: 0,
    endTime: 11,
  },
};
VideoContextComponent.propTypes = {
  className: PropTypes.string,
  videoInfo: PropTypes.object,
  cbHandleTime: PropTypes.func,
  style: PropTypes.object,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  effectVideo: PropTypes.object.isRequired,
  effectImage: PropTypes.array.isRequired,
  effectFilter: PropTypes.array.isRequired,
  reducerCurrentTime: PropTypes.number.isRequired,

  handleInitVideo: PropTypes.func.isRequired,
  handleVideoState: PropTypes.func.isRequired,
};
