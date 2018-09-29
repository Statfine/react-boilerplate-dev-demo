import React, { PureComponent } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PageTitle } from 'common/PageTitle';

// const PageTitle = {
//   '/dashboard/one': '一个列表',
//   '/dashboard/two': '两个列表',
//   '/dashboard/antd': 'antd样式',
//   '/dashboard/live': 'antd样式',
//   '/dashboard/videolist': '直播页面',
//   '/dashboard/cut': '时间轴拖动',
//   '/dashboard/bbc': 'Videocontext页面',
//   '/dashboard/css': '样式demo',
//   '/dashboard/ref': 'ref',
//   '/dashboard/ali': 'ali播放器',
//   '/dashboard/echart': 'Echart',
//   '/dashboard/wavesurefer': '水波纹',
//   '/dashboard/dnd': 'dnd拖动',
//   '/dashboard/dragnine': '九格宫',
//   '/dashboard/comPage': '子组件',
//   '/dashboard/canvas': 'Canvas Demo',
//   '/dashboard/canvasCut': 'Canvas裁剪',
//   '/dashboard/canvasHtml': 'Canvas Html',
//   '/dashboard/subtitle': '走字',
//   '/dashboard/rich': '富文本',
//   '/dashboard/clipboard': '剪切板',
//   '/dashboard/videoCnavas': 'Canavs视频',
//   '/dashboard/carouse': '轮播图',
//   '/': '首页',
// };

export const BasePage = (ComposedComponent) => class extends PureComponent {
  saStartTime = 0;

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentWillMount() {
    NProgress.start();
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate:', document.title);
  }

  componentDidMount() {
    NProgress.done();
    this.saStartTime = new Date();

    const title = PageTitle[window.location.pathname] || '微博云剪';
    console.log('componentDidMount:', title);
    _paq.push(['setCustomUrl', window.location.href]);
    _paq.push(['setDocumentTitle', title]);
    _paq.push(['addDownloadExtensions', 'mp4']);
    _paq.push(['trackPageView']);
  }

  componentWillUnmount() {
    const end = new Date();
    const duration = (end.getTime() - this.saStartTime.getTime()) / 1000;
    console.log('stay', duration);
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
