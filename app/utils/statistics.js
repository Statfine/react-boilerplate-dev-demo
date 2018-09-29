import { PageTitle } from 'common/PageTitle';

// 点击事件
/*
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
  _paq.push(['trackEvent', pageTitle, eventsAction, eventsName, 0, params]);
}

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
