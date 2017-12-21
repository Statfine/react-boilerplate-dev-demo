/*
 * Auth saga
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import { REFRESH_TOKEM } from './constants';
import { refreshTokenCom } from './actions';
import auth from './appApi';

export function* watchRefreshToken() {
  yield takeLatest(REFRESH_TOKEM, function* () {
    try {
      yield call(auth.refreshToken);
      yield put(refreshTokenCom());
    } catch (e) {
      const localStorage = window.localStorage;
      localStorage.access_token = '';
      localStorage.refresh_token = '';
      localStorage.expires_in = '';
      yield put(refreshTokenCom());
    }
  });
}

export default [
  watchRefreshToken,
];
