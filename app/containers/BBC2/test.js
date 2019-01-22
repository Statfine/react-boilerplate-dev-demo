import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import VideoContext from './plugin/videocontext.commonjs2';

/*
* 视频链接
* 集成-转场（无中间转场）
*/
const Option = Select.Option;
export default class SimpleConnect extends PureComponent {
  state = {
    duration: 0,
    currentTime: 0,

    sourceList: [
      // { type: 'transition', position: 'left', duration: 2 }, // 前转场 渐显
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 },
      { type: 'transition', position: 'middle', duration: 3 }, // 中转场
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/49908875-9691-422a-ac80-bd3de781753f/102822e2-5270-499d-8672-0ae0d943c267.mp4', w: '852', h: '480', length: 10, end: 10, start: 0 },
      // { type: 'transition', position: 'right', duration: 2 }, // 后转场
      // { type: 'transition', position: 'left', duration: 2 }, // 前转场
      // { type: 'transition', position: 'middle', duration: 3 }, // 中转场
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 },
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/49908875-9691-422a-ac80-bd3de781753f/102822e2-5270-499d-8672-0ae0d943c267.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 },
      // { type: 'transition', position: 'middle', duration: 3 }, // 中转场
      // { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '852', h: '480', length: 10, end: 10, start: 0 },
    ],

    canvasIndex: 0, // 尺寸
    canvasSize: [[576, 326], [183, 326]],
  };

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    this.ctx = new VideoContext(canvas);
    this.clearRegister();
  }

  // 销毁
  componentWillUnmount() {
    clearInterval(this.timeIn);
    this.ctx.reset();
  }

  // 注册初始化
  clearRegister = () => {
    const { canvasIndex, canvasSize } = this.state;
    this.ctx.width = canvasSize[canvasIndex][0];
    this.ctx.height = canvasSize[canvasIndex][1];
    this.ctx.reset();
    this.ctx.registerCallback('stalled', () => { console.log('====>Playback endedPlayback stalled'); });
    this.ctx.registerCallback('ended', () => { console.log('====>Playback ended'); clearInterval(this.timeIn); this.ctx.currentTime = 0; this.setState({ currentTime: 0 }); });
    this.ctx.registerTimelineCallback(15, () => { console.log('====>Playback registerTimelineCallback'); });
    this.init();
  }

  ctx;
  timeIn;

  /*
  * 初始化node对象
  * 判断转场，如果是完结转场直接链接（1-无后转场，2中转场之后不是后转场或中转场）
  */
  init = () => {
    const {
      sourceList, // 资源
      canvasSize, canvasIndex,
    } = this.state;

    let lastEt = 0; // 叠加的绝对时间，用作下次设置开始时间
    let middleFade; //  中间转场 middleFade不用清空， 是因为和middle同时存在的
    sourceList.map((source, courceIndex) => {
      if (source.type === 'transition') {
        return '';
      }
      const node = this.ctx.video(source.src, 0, lastEt === 0 ? 0 : 3, { volume: 1, loop: true });
      const nodePadding = this.nodePadding(node, sourceList[courceIndex]); // 补边添加

      const upSource = sourceList[courceIndex - 1];
      const nextSource = sourceList[courceIndex + 1];
      let upCrossFade;
      let isNeedConnect = true;

      /*
      * 判断视频是否有前转场或者中转场
      *
      * 有中转场 视频链接中转场(之前的中转场)
      *   判断是否有后转场（后转场|中转场）
      *     有-提取转场（upCrossFade用于后转场拼接）
      *     无-直接链接完成
      * 无中转场 链接前转场
      *   判断是否有后转场（后转场|中转场）
      *     有-提取转场（upCrossFade用于后转场拼接）
      *     无-直接链接完成
      */
      if (upSource && upSource.type === 'transition' && (upSource.position === 'left' || upSource.position === 'middle')) {
        if (upSource.position === 'middle' && middleFade) {
          // 之前有中转场-视频链接-判断接下来是否有转场
          middleFade.transition(lastEt - upSource.duration, lastEt, 0.0, 1.0, 'progress');  // 之前的中转场设置
          console.log(`中转场: st:${lastEt - upSource.duration}; et:${lastEt}`);
          nodePadding.connect(middleFade); // 视频链接中转场
          node.startAt(lastEt - upSource.duration);
          node.stopAt((lastEt - upSource.duration) + (source.end - source.start));
          console.log(`中转场-后视频: st:${lastEt - upSource.duration}; et:${(lastEt - upSource.duration) + (source.end - source.start)}`);
          lastEt += ((source.end - source.start)) - upSource.duration;

          if (nextSource && nextSource.type === 'transition' && (nextSource.position === 'right' || nextSource.position === 'middle')) {
            upCrossFade = middleFade; // 中转场传递下去
          } else {
            middleFade.connect(this.ctx.destination); // 链接ctx完结 - 接下来没有需要链接的
            isNeedConnect = false;
          }
        } else {
          // 前无中转场-视频链接前转场-判断接下来是否有转场
          const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE); // 前转场
          crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
          nodePadding.connect(crossFade); // connect to input of crossfade2 rather than destination.
          crossFade.transition(lastEt, lastEt + upSource.duration, 1.0, 0.0);  // 添加转场 设置时间
          console.log(`前转场: st:${lastEt}; et:${lastEt + upSource.duration}`);

          node.startAt(lastEt);
          node.stopAt(lastEt + (source.end - source.start));
          lastEt += source.end - source.start;

          if (nextSource && nextSource.type === 'transition' && (nextSource.position === 'right' || nextSource.position === 'middle')) {
            upCrossFade = crossFade; // 前转场传递下去
          } else {
            crossFade.connect(this.ctx.destination); // 链接ctx完结 - 接下来没有需要链接的
            isNeedConnect = false;
          }
        }
      }

      /*
      * 判断视频是否有后转场或者中转场
      *
      * 有中转场
      *   判断之前是否有中转场（如果有已交给upCrossFade）
      *     有-（upCrossFade链接转场，交给middleFade，用户上面判断）
      *     无- 视频直接链接完成
      * 无中转场
      *   判断是否有前转场
      *   有-前转场upCrossFade链接后转场, 然后完成链接
      *   无-直接链接完成
      */
      if (nextSource && nextSource.type === 'transition' && (nextSource.position === 'right' || nextSource.position === 'middle')) {
        if (nextSource.position === 'middle') {
          if (upCrossFade) {
            // 前面有中转场-upCrossFade链接转场-交给middleFade
            const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
            crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
            upCrossFade.connect(crossFade);
            middleFade = crossFade;
            isNeedConnect = false;
            upCrossFade = '';
          } else {
            // 后面有中转场-开始添加中转场
            node.startAt(lastEt); // 之前没转场，(前视频)首次添加中转场， middleFade抛到上面链接
            node.stopAt(lastEt + (source.end - source.start));
            console.log(`中转场-前视频: st:${lastEt}; et:${lastEt + (source.end - source.start)}`);
            lastEt += source.end - source.start;
            const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
            crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
            nodePadding.connect(crossFade);
            middleFade = crossFade;
            isNeedConnect = false;
          }
        } else if (upCrossFade) {
          // 后面无中转场-前面有转场，后转场链接前转场-链接ctx
          const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
          crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
          crossFade.transition(lastEt - nextSource.duration, lastEt, 0.0, 1.0);  // 渐显
          console.log(`1后转场: st:${lastEt - nextSource.duration}; et:${lastEt}`);
          upCrossFade.connect(crossFade);
          crossFade.connect(this.ctx.destination);
          upCrossFade = '';
        } else {
          // 后面无中转场-(前面无转场)直接链接后转场-链接ctx
          const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
          crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
          node.startAt(lastEt);
          node.stopAt(lastEt + (source.end - source.start));
          lastEt += source.end - source.start;
          crossFade.transition(lastEt - nextSource.duration, lastEt, 0.0, 1.0);  // 渐显
          console.log(`2后转场: st:${lastEt - nextSource.duration}; et:${lastEt}`);
          nodePadding.connect(crossFade);
          crossFade.connect(this.ctx.destination);
        }
        isNeedConnect = false;
      }

      // 没转场，直接链接完成
      if (isNeedConnect) {
        node.startAt(lastEt);
        node.stopAt((lastEt + source.end) - source.start);
        console.log(`直接视频: st:${lastEt}; et:${(lastEt + source.end) - source.start}`);
        lastEt += source.end - source.start;
        nodePadding.connect(this.ctx.destination);
      }
      return '';
    });

    this.setState({ duration: this.ctx.duration });
  }

  /**
  * 补边
  * ow - canvas宽
  * oh - canvas高
  * vw - 资源（视频）元素宽
  * vh - 资源（视频）元素高
  */
  nodePadding = (videoNode, videoInfo) => {
    const { canvasIndex, canvasSize } = this.state;
    const paddingOpts = {
      ow: canvasSize[canvasIndex][0],
      oh: canvasSize[canvasIndex][1],
      vw: videoInfo.w, // 视频真实尺寸宽
      vh: videoInfo.h, // 视频真实尺寸高
    };
    const nodePadding = this.ctx.paddingNode(videoNode, paddingOpts);
    return nodePadding;
  }

  handlePlay = () => {
    this.ctx.play();
    this.timeIn = setInterval(this.drawVideo, 200);
  }

  drawVideo = () => {
    this.setState({ currentTime: this.ctx.currentTime.toFixed(2) });
  }

  handlePause = () => {
    this.ctx.pause();
    clearInterval(this.timeIn);
  }

  handleSeek = () => {
    this.ctx.currentTime = 5;
  }

  // 尺寸修改
  handleChangeCanvasSize = (canvasIndex) => {
    this.setState({ canvasIndex }, () => this.clearRegister());
  }

  render() {
    const { currentTime, duration, canvasSize, canvasIndex } = this.state;
    return (
      <div>
        <canvas id="canvas" width={canvasSize[canvasIndex][0]} height={canvasSize[canvasIndex][1]}></canvas>
        <div>{currentTime}/{duration}</div>
        <div>
          <Button type="primary" size="large" onClick={this.handlePlay}>播放</Button>
          <Button type="primary" size="large" onClick={this.handlePause}>暂停</Button>
          <Button type="primary" size="large" onClick={this.handleSeek}>seek 5</Button>
        </div>
        <Select value={canvasIndex} style={{ width: 120 }} onChange={this.handleChangeCanvasSize}>
          <Option value={0}>横屏</Option>
          <Option value={1}>竖屏</Option>
        </Select>
      </div>
    );
  }
}
