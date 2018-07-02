import { fork, call, put, select, takeLatest } from 'redux-saga/effects';

import Api from './api';
import * as con from './constants';
import { makeSelectVideoInfo } from './selectors';
import { fetchVideoAnalyseSuc, fetchVideoAnalyseError } from './actions';

const JobState = {
  NONE: '-1',
  COMPLETE: '0',
  FAILED: '1',
  ACTIVE: '2',
  DELAYED: '3',
  PENDING: '4',
};

export function* fetchVideoAnalyseSaga() {
  yield takeLatest(con.REQUREST_VIDEO_ANALYSE, function* () {
    try {
      const { projectId, detailId } = yield select(makeSelectVideoInfo());
      const data = yield call(Api.editLive, projectId, detailId);
      while (true) {
        const result = yield call(Api.pollingReq, data.check_state_url);
        if (result.state === JobState.COMPLETE) {
          yield [
            call(downLoadJson, result.json_url),
          ];
          break;
        } else if (result.state === JobState.NONE || result.state === JobState.FAILED) {
          yield put(fetchVideoAnalyseError());
          break;
        }
        yield delay(5000);
      }
    } catch (error) {
      yield put(fetchVideoAnalyseError());
    }
  });
}

export function* downLoadJson(url) {
  try {
    const json = yield call(Api.fetchJson, url);
    console.log(json);
    const list = url.split('/');
    list.splice(list.length - 1, 1);
    const baseImgUrl = list.join('/');
    const imgList = [];
    Object.keys(json).forEach((key) => {
      imgList.push(`${baseImgUrl}/${key}.jpg`);
    });
    yield put(fetchVideoAnalyseSuc(json, imgList));
  } catch (error) {
    yield put(fetchVideoAnalyseError());
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fork(fetchVideoAnalyseSaga);
}
