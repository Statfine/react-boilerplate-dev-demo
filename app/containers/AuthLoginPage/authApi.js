/*
 * Auth request staff
 */

// import { API_BASE_V2 } from 'common/constants';
// import request from 'utils/request';
// import sha1 from 'sha1';

const localStorage = global.window.localStorage;

const auth = {
  // login(username, password) {
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: username,
  //       password: sha1(password),
  //     }),
  //   };
  //   return request(`${API_BASE_V2}/auth/login`, options)
  //     .then((body) => {
  //       localStorage.access_token = body.data.access_token;
  //       localStorage.expires_in = Date.now() + (body.data.expires_in * 1000);
  //       localStorage.refresh_token = body.data.refresh_token;
  //       return true;
  //     })
  //     .catch((err) => {
  //       throw new Error(err.data.code);
  //     });
  // },
  login() {
    localStorage.access_token = 'access_token';
    localStorage.expires_in = Date.now() + (3600 * 1000 * 12);
    localStorage.refresh_token = 'refresh_token';
    return true;
  },
};

export default auth;
