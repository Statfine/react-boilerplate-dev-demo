// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery, delay, eventChannel, END } from 'redux-saga';
import { take, fork, call, put } from 'redux-saga/effects';
import Api from './api';

import * as cons from './constants';
import * as actions from './actions';

function* autoSaveSaga() { // 自动保存
  yield takeLatest(
    [
      cons.CHANGE_PROJECT_INFO, // 项目信息
      cons.CHANGE_EFFECT_VIDEO, // 视频特效
      cons.CHANGE_EFFECT_CHARTLET, // 贴图特效
      cons.CHANGE_EFFECT_FILTER, // 滤镜特效
    ],
    function* () {
      yield delay(1000);
      console.log('save');
    }
  );
}

// 上传背景图
function* uploadBacImgSaga({ payload }) {
  const channel = yield call(createUploadFileChannel, payload, 'chartlet');
  yield put(actions.changeUplaodBacimgState({ progress: 0 }));
  while (true) {
    const { progress = 0, err, success } = yield take(channel);
    const endingState = { isUploading: false };
    if (err) {
      yield put(actions.changeUplaodBacimgState(endingState));
      alert('上传失败');
      return;
    }
    if (success) {
      // yield put(actions.changeUplaodBacimgState({ ...endingState, ...success }));
      yield put(actions.changeEffectVideo({ backgroundImg: { ...endingState, ...success } })); // 触发保存
      alert('上传成功');
      return;
    }
    yield put(actions.changeUplaodBacimgState({ progress }));
  }
}
function createUploadFileChannel(file, type) {
  return eventChannel((emitter) => {
    const onProgress = (data) => {
      emitter({ progress: data.progress || data });
    };
    const onFailure = () => {
      emitter({ err: new Error('上传失败') });
      emitter(END);
    };

    const onSuccess = (_, res) => {
      emitter({ success: res ? res.data.data : _ });
      emitter(END);
    };
    let job;
    if (type === 'chartlet') {
      job = Api.uploadChartlet(
        file,
        onSuccess,
        onFailure,
        onProgress
      );
    }
    return () => {
      if (job) {
        job.cancel();
      }
    };
  });
}

// Individual exports for testing
export default function* defaultSaga() {
  yield fork(autoSaveSaga);
  yield takeEvery(cons.CREATE_UPLOAD_BAC_IMG, uploadBacImgSaga);
}
