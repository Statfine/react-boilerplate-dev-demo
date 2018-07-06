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
    defaultOptions.headers.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ4NzU0OGUwNWE2YThmYWUxOGYxMzg5ODc2OWUyOGJlNGVlNjY3Yzc1NjNhMzE2ZWFmMzE5NzlhOWU0ZmFkMGMxYTliYmQ4MjJjZjFkMGRiIn0.eyJhdWQiOiIyIiwianRpIjoiNDg3NTQ4ZTA1YTZhOGZhZTE4ZjEzODk4NzY5ZTI4YmU0ZWU2NjdjNzU2M2EzMTZlYWYzMTk3OWE5ZTRmYWQwYzFhOWJiZDgyMmNmMWQwZGIiLCJpYXQiOjE1MzA2ODI3NjMsIm5iZiI6MTUzMDY4Mjc2MywiZXhwIjoxNTMwODU1NTYzLCJzdWIiOiIxOCIsInNjb3BlcyI6W119.uGPMoRs8E-qp2MY2wHUaCiA3GBhpNL1AU2VJ1qNVn8NJ3m6GdW6ZJWWQSj_YcWMbdzg7WJATXw11JJB_k_fXMidb7Vwu35X-mneagmXHtxVSGWj2dG50z5RzJjVhSUYXBD_ea_ek8y-K1YAdKz4_gOX1wpm9M6aY-W4WKvRZYxtsZeq4d1YW28q-n4GM1Rx62NYaLcpCxa5NW5SwsAz1Zmi3oKr8z1Mw-78GHJYWXly2gaYUADwk5UqTgZFfsGh5d1q6P0bVFYLVEW8C_dCDGoZE0Hm7LeN8RChgHjsek4328xPI_hjyG88cLGd5X6NDm2jwZiRZDVZ0Or6L4KAIvlm7zM1x7wHcOiDA8nvnnRSpcfd8iR3VWK_vkixTpR7EH3gp3DZFhe_DsiaSCeZZ8jyh8TmYQ6XGMiXaYmDXRpOgtqy1hJrnyg4kCDq0Pmbtku7u_fdQn8NCVNU0ZgSPJfVVIMR8KQwezg_FHwNLY993__hZPVLLZ6sevKBjAVp8Q6qH8ougSvGYuKXvu0eJxY6l7Rh1L0Y4gnrSo48QZJKWlUuPSYqu9UqqKW3abURkpLUMb-7jre-hTHpBuS4OQJBQseGjIEsVbsNc098WuqoaZMdfRRgVG5L9NJFqnHaPzIWiaiBTrP3HHA0WwSg4jJJkDWgVYXmiwIs4e-HCFEY';
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
