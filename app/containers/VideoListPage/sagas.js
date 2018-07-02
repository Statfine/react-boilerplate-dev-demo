import { put, call, select, fork, takeLatest, takeEvery, take, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
// Individual exports for testing
import { CHANGE_PAGINATION, CHANGE_FILTER_PARAMS, RETRY_VIDEOS, FETCH_VIDEO_STATE, CANCEL_FETCH_VIDEO_STATE_ROOL, FETCH_VIDEO } from './constants';
import {
  retryVideosSuccessActions, retryVideosFailureActions,
  fetchVideoStateSuccess, fetchVideoStateFailure, fetchVideoState, cancelFetchVideoState,
  fetchVideoSuc, fetchVideoFail, fetchVideo,
} from './actions';
import { selectPagination, selectFilterParams, selectList } from './selectors';
import {
  fetchUserVideos, fetchUserVideosActions,
  DELETE_VIDEO, deleteVideo, deleteVideoActions, retryVideos, fetchVideoStateApi, fetchJson, fetchJsonTwo,
} from './api';

let cancelRool = {};

export function* fetchUserVideosWatcher() {
  yield takeLatest(FETCH_VIDEO, fetchJSON);
}

export function* fetchJSON() {
  try {
    const json = yield call(fetchJson, 'http://123.206.18.31/static/mock.json');
    console.log(json);
    const jsonTwo = yield call(fetchJsonTwo, 'http://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/tracking/edc4353f-055b-4ee0-9938-8780e9270daa/5a21b61c-9537-4a25-b6d7-790ef6e723d7.json');
    console.log(jsonTwo);
  } catch (error) {
    //
  }
}

export function* deleteVideoWatcher() {
  yield takeEvery(DELETE_VIDEO.REQUEST, function* ({ payload }) {
    try {
      yield call(deleteVideo, payload);
      yield put(deleteVideoActions.success(payload));
      const { videoList } = yield select(selectList());
      cancelRool[payload] = false;
      if (videoList.size === 0) yield put(fetchUserVideosActions.request());
    } catch (error) {
      const err = error.msg || error;
      yield put(deleteVideoActions.failure(err));
    }
  });
}

export function* fetchUserVideosSaga() {
  try {
    const filterParams = yield select(selectFilterParams());
    const pagination = yield select(selectPagination());
    yield put(cancelFetchVideoState());
    const res = yield call(fetchUserVideos, {
      ...filterParams,
      page: pagination.current,
    });
    yield put(fetchVideoSuc(res));

    // 轮询
    const list = res.data;
    const tasks = [];
    for (let index = 0; index < list.length; index += 1) {
      const element = list[index];
      const t = yield fork(roll, element);
      tasks.push(t);
    }
    yield take(LOCATION_CHANGE);
    yield tasks.map((v) => cancel(v));

    //  saga调用
    yield [call(takeSaga)];
  } catch (error) {
    const err = error.msg || error;
    yield put(fetchVideoFail(err));
  }
}

function* roll(payload) {
  try {
    while (true) {
      console.log(payload);
      yield call(delay, 5000);
    }
  } catch (e) {
    console.log(e);
  }
}

//  takeSaga 可以在其它saga中直接应用
export function* takeSaga() {
  console.log('haha');
}

export function* fetchVideoStateWatcher() {
  yield takeEvery(FETCH_VIDEO_STATE, function* ({ payload }) {
    cancelRool[payload] = true;
    while (true) {
      try {
        if (!cancelRool[payload]) {
          cancelRool[payload] = false;
          break;
        }
        const result = yield call(fetchVideoStateApi, payload);
        // 0|上传中, 1处理中, 2 处理成功 , 3 失败
        if (result.data.media_state === 2) {
          yield put(fetchVideoStateSuccess(result.data));
          break;
        }
        if (result.data.media_state === 3 || result.data.media_state === 4) {
          yield put(fetchVideoStateFailure(result.data));
          break;
        }
        yield delay(5000);
      } catch (error) {
        yield put(fetchVideoStateFailure(error));
        break;
      }
    }
  });
}

export function* cancelCancelRoolWather() {
  yield takeLatest(CANCEL_FETCH_VIDEO_STATE_ROOL, function* () {
    try {
      cancelRool = {};
    } catch (error) {
      throw new Error(error);
    }
  });
}


function* changeFilterParamsWatcher() {
  yield takeLatest(CHANGE_FILTER_PARAMS, function* () {
    // yield put(fetchVideo());
  });
}

function* changePaginationWatcher() {
  yield takeLatest(CHANGE_PAGINATION, function* () {
    yield put(fetchVideo());
  });
}

// 发起URL抓取
export function* retryVideosSagas() {
  yield takeLatest(RETRY_VIDEOS, function* ({ payload }) {
    try {
      yield call(retryVideos, payload);
      yield put(retryVideosSuccessActions(payload.id));
      yield put(fetchVideoState(payload.id));
    } catch (error) {
      yield put(retryVideosFailureActions(error));
    }
  });
}

function* retryVideosWatcher() {
  yield fork(fetchUserVideosWatcher);
  yield fork(fetchVideoStateWatcher);
  yield fork(cancelCancelRoolWather);
  yield fork(changeFilterParamsWatcher);
  yield fork(changePaginationWatcher);
  yield fork(deleteVideoWatcher);
}

export default retryVideosWatcher;
