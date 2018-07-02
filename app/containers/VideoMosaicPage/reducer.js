/*
 *
 * VideoMosaicPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as con from './constants';

const initialState = fromJS({
  videoInfo: {
    projectId: '6c28bc7d-83e6-4e2b-bb45-ca6fd473287c',
    detailId: '14254',
    src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/d52270d2-be15-48ca-a9e2-497437486b67.mp4',
  },
  mediaInfo: {
    width: 1280,
    height: 720,
    duration: 17.8,
    size: 11604246,
  },
  requrestingBool: false,
  oriList: {},
  imgUrlList: [],
});

function videoMosaicPageReducer(state = initialState, action) {
  switch (action.type) {
    case con.DEFAULT_ACTION:
      return state;
    case con.REQUREST_VIDEO_ANALYSE:
      return state.set('requrestingBool', true);
    case con.REQUREST_VIDEO_ANALYSE_SUC:
      return state.set('requrestingBool', false)
        .set('oriList', fromJS(action.payload))
        .set('imgUrlList', fromJS(action.imgUrlList));
    case con.REQUREST_VIDEO_ANALYSE_ERROR:
      return state.set('requrestingBool', false);
    default:
      return state;
  }
}

export default videoMosaicPageReducer;
