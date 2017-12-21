import {
  LOHIN_REQUEST,
  LOHIN_REQUEST_SUC,
  LOHIN_REQUEST_ERROR,
} from './constants';

export function userLogin(payload) {
  return {
    type: LOHIN_REQUEST,
    payload,
  };
}

export function userLoginSuc(payload) {
  return {
    type: LOHIN_REQUEST_SUC,
    payload,
  };
}

export function userLoginError(payload) {
  return {
    type: LOHIN_REQUEST_ERROR,
    payload,
  };
}
