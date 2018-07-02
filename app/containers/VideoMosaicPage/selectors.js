import { createSelector } from 'reselect';

/**
 * Direct selector to the videoMosaicPage state domain
 */
const selectVideoMosaicPageDomain = (state) => state.get('videoMosaicPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VideoMosaicPage
 */

const makeSelectVideoMosaicPage = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.toJS()
);

const makeSelectVideoInfo = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.get('videoInfo').toJS()
);
const makeSelectRequrestingBool = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.get('requrestingBool')
);
const makeSelectMediaInfo = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.get('mediaInfo').toJS()
);

const makeSelectOriList = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.get('oriList').toJS()
);

const makeSelectImgUrlList = () => createSelector(
  selectVideoMosaicPageDomain,
  (substate) => substate.get('imgUrlList').toJS()
);

export default makeSelectVideoMosaicPage;
export {
  selectVideoMosaicPageDomain,
  makeSelectVideoInfo,
  makeSelectOriList,
  makeSelectImgUrlList,
  makeSelectRequrestingBool,
  makeSelectMediaInfo,
};
