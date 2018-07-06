/*
 *
 * VideoMosaicPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as con from './constants';

const initialState = fromJS({
  videoInfo: {
    projectId: '59d1f664-72a3-4cb4-ab99-0c65026b3c52',
    detailId: '14519',
    src: 'https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/vod-out/hd/d8a9128d-e2e7-454b-a112-a466f4c2ba89.mp4?_s=1530690690',
  },
  mediaInfo: {
    width: 464,
    height: 326,
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
