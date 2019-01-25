import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import VideoContext from './plugin2/videocontext.commonjs2';

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
      { type: 'transition', position: 'left', duration: 2 },
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 }, // 垂直正常
      { type: 'transition', position: 'right', duration: 2 },
      { type: 'transition', position: 'left', duration: 2 },
      { type: 'video', src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/bea5ab75-9671-49bb-80cf-f86ced08a492.mp4', w: '368', h: '640', length: 10, end: 10, start: 0 }, // 垂直正常
      { type: 'transition', position: 'right', duration: 2 },
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
  * 当尺寸不等于  16：9 的时候需要添加模糊变((16 / 9).toFixed(2) !== (width / height).toFixed(2))
  */
  init = () => {
    const {
      sourceList, // 资源
      canvasSize, canvasIndex,
    } = this.state;

    let lastEt = 0; // 叠加的绝对时间，用作下次设置开始时间
    sourceList.map((source, courceIndex) => {
      if (source.type === 'transition') {
        return '';
      }
      const node = this.ctx.video(source.src, 0, 0, { volume: 1, loop: true });
      // node.registerCallback('load', () => { console.log('====>video1 is loading'); });
      // node.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
      // node.registerCallback('play', () => { console.log('====>video1 is playing'); });
      // node.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
      // node.registerCallback('ended', () => { console.log('====>video1 has eneded'); });
      const nodePadding = this.nodePadding(node, sourceList[courceIndex]); // 补边添加

      const upSource = sourceList[courceIndex - 1];
      const nextSource = sourceList[courceIndex + 1];
      let upCrossFade;
      let isNeedConnect = true;

      /*
      * 判断视频是否有前转场
      *
      * 判断是否有后转场链接前转场（right）
      *   有-提取转场（upCrossFade用于后转场拼接）
      *   无-直接链接完成
      */
      if (upSource && upSource.type === 'transition' && upSource.position === 'left') {
        const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
        crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
        nodePadding.connect(crossFade); // connect to input of crossfade2 rather than destination.
        crossFade.transition(lastEt, lastEt + upSource.duration, 1.0, 0.0);  // 添加转场 设置时间
        console.log(`前转场: st:${lastEt}; et:${lastEt + upSource.duration}`);

        node.startAt(lastEt);
        node.stopAt(lastEt + (source.end - source.start));
        lastEt += source.end - source.start;

        if (nextSource && nextSource.type === 'transition' && nextSource.position === 'right') {
          upCrossFade = crossFade;
        } else {
          crossFade.connect(this.ctx.destination);
          isNeedConnect = false;
        }
      }

      /*
      * 判断视频是否有后转场
      *
      * 判断是否有前转场
      *   有-前转场upCrossFade链接后转场, 然后完成链接
      *   无-直接链接完成
      */
      if (nextSource && nextSource.type === 'transition' && nextSource.position === 'right') {
        const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
        crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];

        if (upCrossFade) {
          crossFade.transition(lastEt - nextSource.duration, lastEt, 0.0, 1.0);  // 渐显
          console.log(`1后转场: st:${lastEt - nextSource.duration}; et:${lastEt}`);
          upCrossFade.connect(crossFade);
          crossFade.connect(this.ctx.destination);
          upCrossFade = '';
        } else {
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

    // const obj1 = sourceList[0];
    // const node1 = this.ctx.video(obj1.src, 0, 1, { volume: 0.8, loop: false });
    // // 再绝对时间是的 0秒开始  10秒结束
    // node1.startAt(0);
    // node1.stopAt(10);
    // node1.registerCallback('load', () => { console.log('====>video1 is loading'); });
    // node1.registerCallback('loaded', () => { console.log('====>video1 is loaded'); });
    // node1.registerCallback('play', () => { console.log('====>video1 is playing'); });
    // node1.registerCallback('durationchange', () => { console.log('====>video1 is durationchange'); });
    // node1.registerCallback('ended', () => { console.log('====>video1 has eneded'); });
    // const nodePadding1 = this.nodePadding(node1, sourceList[0]); // 补边添加

    // // 特效一   开始转场
    // const crossFade = this.ctx.transition(VideoContext.DEFINITIONS.CROSSFADE);
    // crossFade.resolution = [canvasSize[canvasIndex][0], canvasSize[canvasIndex][1]];
    // nodePadding1.connect(crossFade); // connect to input of crossfade2 rather than destination.
    // crossFade.transition(0, 2, 1.0, 0.0);  // 渐显
    // crossFade.connect(this.ctx.destination);

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
