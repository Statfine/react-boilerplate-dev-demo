import 'whatwg-fetch';
import _ from 'lodash';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json().catch(() => {
    const error = new Error('网络异常');
    throw error;
  });
}

function parseData(data) {
  // token失效时页面刷新
  if (data.code === 9001) {
    localStorage.refreshing_token = 0;
    localStorage.expires_in = Date.now();
    return location.reload();
  }

  if (data.code === 0 || (data.status_code >= 200 && data.status_code < 300)) {
    return data;
  }

  const error = new Error(data.message);
  error.data = data;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function requestNoSnack(url, options) {
  const defaultOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (global.window.localStorage.access_token) {
    // defaultOptions.headers.Authorization = `Bearer ${global.window.localStorage.access_token}`;
    defaultOptions.headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkMDY2YzA0ODliNGNlYzg0ZThiNTMzMzQ4NWUxN2RhNGQ1YWM0MWU4MTBlMWUyMDI0NzgxNGJmYjNjZjM1ZTBmOTBkNmE4OGIyZjJmNWIxIn0.eyJhdWQiOiIyIiwianRpIjoiM2QwNjZjMDQ4OWI0Y2VjODRlOGI1MzMzNDg1ZTE3ZGE0ZDVhYzQxZTgxMGUxZTIwMjQ3ODE0YmZiM2NmMzVlMGY5MGQ2YTg4YjJmMmY1YjEiLCJpYXQiOjE1MzA1NDAyMDYsIm5iZiI6MTUzMDU0MDIwNiwiZXhwIjoxNTMwNzEzMDA1LCJzdWIiOiIxOCIsInNjb3BlcyI6W119.hq_kVLXH3nrHCsTxY0pUzGKN3EWDjqFExi07SzZYnutD9E5FGJpI0T-Q5D9WvEIGL388xGMCyUyo10lvUQbOXsIqx168T9F3qnmm2izqL6GJGcSDwEaU--b3VPmwAwyQF6Dbs5VOcoKhaeEC9eMvj84TFd45FR2zycmubi7Wagra4jjiH4nElXSY2t1qU1PWjuj88eI5_47V-FMMStBNK1QFLdyQLqskPf3NYXlVouhAyf9fYLIV4E8X9ioO5JKrtm0VoS3A8ogQKc87ysm3sElJ6GKWO1rvg9nvCFq4klgowbv_-WEBzbUJk50L3jaZUCVDQdlRPG1B9r4nn_82SPdzWOGC8C2rE6qv9Qymq_jCh3odAl4XD81J_2rJVD_PPjbvlDUp_on5CjfikJrL3oEAw8iiZn6BH3OIyVJN9F23UMFd5ikQhHoRk96yMFC799vCTfsobBaAN_fQMBX4e_jRmL4HJgbUbwdUR-NFnIqaGuNaDI9vrmcT0B928EH2vsTuu5f-9sPi3zSFUVArLzd2VvwdbxlFgbLMM-AAGQSDyb1exewBoh0cGsNCOuXFJbkdqedVwJx2nwy38ChAB5It3g7MXJ6d6JwHVhn2_EZ53ThagCk0K1ONGryelV_beIafVS240-i6W_x5PgFLfSMb9VGr3RWoq5MXd4wgcWE';
  }

  const mergeOptions = _.merge({}, defaultOptions, options);
  return fetch(url, mergeOptions)
    .then(parseJSON)
    .then(parseData);
}

export default function request(url, options) {
  return requestNoSnack(url, options)
    .catch((error) => {
      if (url.indexOf('auth/refresh_token') < 0) {
        const msg = error.message ? error.message : error;
        alert(msg);
      }
      throw error;
    });
}

export function get(urlString, params = {}, option = {}) {
  const query = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  const options = { method: 'GET' };
  const mergeOptions = _.merge({}, options, option);
  if (query) {
    return request(`${urlString}?${query}`, mergeOptions);
  }
  return request(`${urlString}`, mergeOptions);
}


/* eslint-disable */
function mapKeysDeep(obj, func) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (_.isObject(obj[key])) {
      const value = mapKeysDeep(obj[key],func)
      delete obj[key];
      obj[func(key)] = value;
    } else {
      const value = obj[key];
      delete obj[key];
      obj[func(key)] = value;
    }
  })
  return obj;
}
/* eslint-enable  */

export function camelToSnake(obj) {
  return mapKeysDeep(obj, _.snakeCase);
}

// 下划线转驼峰
export function camelCase(obj) {
  return mapKeysDeep(obj, _.camelCase);
}
