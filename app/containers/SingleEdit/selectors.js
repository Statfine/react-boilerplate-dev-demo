import { createSelector } from 'reselect';

/**
 * Direct selector to the singleEdit state domain
 */
const selectSingleEditDomain = (state) => state.get('singleEdit');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SingleEdit
 */

const makeSelectSingleEdit = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.toJS()
);

// 项目信息
const makeSelectProjectInfo = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('projectInfo').toJS()
);
// 单视频详情信息
const makeSelectVideoInfo = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('videoInfo').toJS()
);
// 视频特效
const makeSelectEffectVideo = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('effectVideo').toJS()
);
// 播放器数据
const makeSelectVideoPlayer = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('videoPlayer').toJS()
);
// 选中的特效
const makeSelectChooseEffect = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('chooseEffect').toJS()
);

// 贴图特效
const makeSelectEffectImage = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('effectImage').toJS()
);

export const makeSelectTrackInfo = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('trackInfo').toJS()
);

export default makeSelectSingleEdit;
export {
  selectSingleEditDomain,
  makeSelectProjectInfo,
  makeSelectVideoInfo,
  makeSelectEffectVideo,
  makeSelectVideoPlayer,
  makeSelectChooseEffect,
  makeSelectEffectImage,
};
