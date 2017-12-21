/*
 * Auth request staff
 */

import { API_BASE_V2 } from 'common/constants';
import request from 'utils/request';

const localStorage = global.window.localStorage;

const auth = {
  refreshToken() {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        refresh_token: localStorage.refresh_token,
      }),
    };
    return request(`${API_BASE_V2}/auth/refresh_token`, options)
      .then((body) => {
        localStorage.access_token = body.data.access_token;
        localStorage.expires_in = Date.now() + (body.data.expires_in * 1000);
        localStorage.refresh_token = body.data.refresh_token;
        return true;
      })
      .catch((err) => {
        throw new Error(err.data.code);
      });
  },
};

export default auth;
