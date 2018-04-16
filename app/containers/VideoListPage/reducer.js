/*
 *
 * VideoListPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DELETE_VIDEO } from './api';
import { CHANGE_FILTER_PARAMS, CHANGE_PAGINATION, RETRY_VIDEOS_SUCCESS, RETRY_VIDEOS_FAILURE, FETCH_VIDEO_STATE_SUCCESS, FETCH_VIDEO_STATE_FAILURE,
  FETCH_VIDEO, FETCH_VIDEO_SUCCESS, FETCH_VIDEO_FAILURE } from './constants';

const initialState = fromJS({
  videoList: [],
  videoListRequesting: false,
  pagination: {
    current: 0,
    total: 0,
  },
  error: '',
  filterParams: {
    timeOrder: '0',
    title: '',
    sourceType: '-1',
    mediaState: '-1',
    shareProcess: '-1',
  },
});

// eturn state.update('shareList', (list) => list.filter((item) => action.paylaod.indexOf(item.get('id')) === -1));
function videoListPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO:
      return state.set('videoListRequesting', true);
    case FETCH_VIDEO_SUCCESS:
      return state.set('videoListRequesting', false)
      .set('videoList', fromJS(action.payload.data))
      .setIn(['pagination', 'current'], action.payload.meta.pagination.current_page)
      .setIn(['pagination', 'total'], action.payload.meta.pagination.total);
    case FETCH_VIDEO_FAILURE:
      return state.set('videoListRequesting', false)
      .set('error', action.payload);
    case CHANGE_FILTER_PARAMS:
      return state.update('filterParams', (fp) => fp.mergeDeep(action.payload))
      .setIn(['pagination', 'current'], 1);
    case CHANGE_PAGINATION:
      return state.update('pagination', (p) => p.mergeDeep(action.payload));
    case DELETE_VIDEO.SUCCESS:
      return state.update('videoList', (videos) => videos.filter((v) => v.get('id') !== action.payload));
    case RETRY_VIDEOS_SUCCESS:
      return state.update('videoList', (videoList) => videoList.update(videoList.findIndex((item) => item.get('id') === action.payload),
      (item) => item.set('media_state', 1))
    );
    case RETRY_VIDEOS_FAILURE:
      return state.set('error', action.payload);
    case FETCH_VIDEO_STATE_SUCCESS:
      return state.update('videoList', (videoList) => videoList.update(videoList.findIndex((item) => item.get('id') === action.payload.id),
        (item) => item.mergeDeep(action.payload)));
    case FETCH_VIDEO_STATE_FAILURE:
      return state.update('videoList', (videoList) => videoList.update(videoList.findIndex((item) => item.get('id') === action.payload.id),
        (item) => item.mergeDeep(action.payload)));
    default:
      return state;
  }
}

export default videoListPageReducer;
