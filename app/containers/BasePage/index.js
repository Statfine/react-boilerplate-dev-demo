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

    /*
     * Index, the number from 1 to 5 where this custom variable name is stored
     * Name, the name of the variable, for example: Gender, VisitorType
     * Value, for example: "Male", "Female" or "new", "engaged", "customer"
     * Scope of the custom variable, "visit" means the custom variable applies to the current visit
    */
    if (title === '首页') {
      _paq.push(['setCustomVariable', 3, 'Word', 'statfine', 'page']);
      _paq.push(['trackPageView']);
    }

    _paq.push(['setCustomUrl', window.location.href]);
    _paq.push(['setDocumentTitle', title]);
    // _paq.push(['setUserId', '321']);
    _paq.push(['trackPageView']);
    _paq.push(['trackAllContentImpressions']); // 跟踪页面内的所有内容印象
    _paq.push(['enableLinkTracking']); // It is recommended to add this line just after the first call to trackPageView or trackEvent.
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
