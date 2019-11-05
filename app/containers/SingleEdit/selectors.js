import { createSelector } from 'reselect';
import _ from 'lodash';

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
// const makeSelectEffectImage = () => createSelector(
//   selectSingleEditDomain,
//   (substate) => substate.get('effectImage').toJS()
// );
const makeSelectEffectImage = () =>
  createSelector(
    createSelector(selectSingleEditDomain, (state) => state.get('effectImage')),
    (s) => s.toJS()
  );

// 滤镜特效
const makeSelectEffectFilter = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('effectFilter').toJS()
);

// 马赛克特效
// const makeSelectEffectMosaic = () => createSelector(
//   selectSingleEditDomain,
//   (substate) => substate.get('effectMosaic').toJS()
// );
const makeSelectEffectMosaic = () =>
  createSelector(
    createSelector(selectSingleEditDomain, (state) => state.get('effectMosaic')),
    (s) => s.toJS()
  );

export const makeSelectTrackInfo = () => createSelector(
  selectSingleEditDomain,
  (substate) => substate.get('trackInfo').toJS()
);

// Image Mosaic
const makeSelectEffectList = () => createSelector(
  makeSelectEffectImage(),
  makeSelectEffectMosaic(),
  (imageList, mosaicList) => {
    const effectList = _.sortBy(imageList.concat(mosaicList), (item) => Number(item.zIndex));
    return effectList;
  }
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
  makeSelectEffectFilter,
  makeSelectEffectMosaic,
  makeSelectEffectList,
};
