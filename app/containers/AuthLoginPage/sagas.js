/*
 * Auth saga
 */
import { push } from 'react-router-redux';
import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { LOHIN_REQUEST } from './constants';
import { userLoginSuc, userLoginError } from './actions';
import auth from './authApi';

export function* watchAuthLogin() {
  yield takeLatest(LOHIN_REQUEST, function* (data) {
    try {
      const { name, password } = data.payload;
      const res = yield call(auth.login, name, password);
      // 设置用户id， 获取用户信息设置一次
      _paq.push(['setUserId', 'abc']);
      _paq.push(['trackPageView']);
      yield put(userLoginSuc(res));
      yield put(push('/dashboard'));
    } catch (e) {
      yield put(userLoginError(e));
    }
  });
}

// export default [
//   watchAuthLogin,
// ];

export function* root() {
  yield fork(watchAuthLogin);
}

export default root;

// export default function* githubData() {
//     // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//     // By using `takeLatest` only the result of the latest API call is applied.
//     // It returns task descriptor (just like fork) so we can continue execution
//     // It will be cancelled automatically on component unmount
//     // yield takeLatest(LOAD_REPOS, getRepos);
//   yield fork(watchAuthLogin);
// }
