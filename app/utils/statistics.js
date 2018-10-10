import { PageTitle } from 'common/PageTitle';

/**
 * https://developer.matomo.org/guides/tracking-javascript-guide#custom-variables-for-visits
 * BasePage 做页面进入的监听
 *
 * setUserId  设置userID， 执行一次，单页应用随页面一直保存  （登录页面saga） （_paq.push(['resetUserId']);）
 *
 * trackAllContentImpressions 跟踪页面内的所有内容印象  （九宫格页面）
 * 元素需要添加：data-track-content data-content-name="Name" data-content-piece="Piece"
 *
 * enableLinkTracking 下载|外链   （Antd样式页面）
 *
 * setCustomVariable(index, name, value, scope = "visit") 自定义变量   （deleteCustomVariable）
 * /

/* 点击事件
  * _paq.push(['trackEvent', category, action, name, value, {dimension1: 'DimensionValue'}]);
  * e_c — The event category. Must not be empty. (eg. Videos, Music, Games...)
  * e_a — The event action. Must not be empty. (eg. Play, Pause, Duration, Add Playlist, Downloaded, Clicked...)
  * e_n — The event name. (eg. a Movie name, or Song name, or File name...)
  * e_v — The event value. Must be a float or integer value (numeric), not a string.
 */
function eventsStatistics(eventsName, params = {}, eventsAction = 'click') {
  // sa.track(eventsName, params);
  const pageTitle = PageTitle[window.location.pathname] || '微博云剪';
  const value = JSON.stringify(params);
  console.log(pageTitle, eventsAction, eventsName, value, params);
  _paq.push(['trackEvent', pageTitle, eventsAction, eventsName, 1, params]);
}

/* 搜索事件
  * _paq.push(['trackSiteSearch', keyword, category, resultsCount, {dimension1: 'DimensionValue'}]);
 */
function eventStatisticsSearch(keyword) {
  const pageTitle = PageTitle[window.location.pathname] || '微博云剪';
  _paq.push([
    'trackSiteSearch',
    keyword,
    pageTitle,
    'resultsCount',
    { dimension1: 'DimensionValue' },
  ]);
}

export { eventsStatistics, eventStatisticsSearch };
