/*
 * App request
 */

import { API_BASE_V2 } from 'common/constants';
import request, { get, camelToSnake } from 'utils/request';
import { createRequestTypes, createRequstActionCreator, createRequestSaga } from 'utils/uitl';
import axios from 'axios';
import * as CONS from './constants';

export function fetchUserVideos(payload) {
  return get(`${API_BASE_V2}/videos`, camelToSnake(payload))
    .then((data) => data)
    .catch(() => {
      throw new Error('获取失败');
    });
}

// export function fetchJson(url) {
//   return get(url)
//     .then((data) => data)
//     .catch(() => {
//       throw new Error('获取失败');
//     });
// }

export function fetchVideoStateApi(id) {
  return get(`${API_BASE_V2}/videos/checkmediastatus`, { id })
    .then((data) => data)
    .catch(() => {
      throw new Error('获取失败');
    });
}

export function deleteVideo(id) {
  return request(`${API_BASE_V2}/videos/${id}`, {
    method: 'DELETE',
  });
}

export function retryVideos(data) {
  const option = {
    method: 'PUT',
    body: JSON.stringify(data),
  };
  return request(`${API_BASE_V2}/videos/extract/retry`, option)
    .then((result) => result.data)
    .catch(() => {
      throw new Error('获取失败');
    });
}

export const FETCH_USER_VIDEOS = createRequestTypes(CONS.FETCH_VIDEOS);
export const fetchUserVideosActions = createRequstActionCreator(FETCH_USER_VIDEOS);
export const fetchUserVideosSaga = createRequestSaga(fetchUserVideosActions, fetchUserVideos);

export const DELETE_VIDEO = createRequestTypes(CONS.DELETE_VIDEO);
export const deleteVideoActions = createRequstActionCreator(DELETE_VIDEO);
export const deleteVideoSaga = createRequestSaga(deleteVideoActions, deleteVideo);

export function fetchJson(url) {
  return getJson(url)
    .then((data) => data)
    .catch(() => {
      throw new Error('获取失败');
    });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    try {
      const test = new XMLHttpRequest();
      test.open('GET', url, true);
      test.send(null);
      test.onreadystatechange = function () {
        if (test.readyState === 4 && test.status === 200) {
          const obj = JSON.parse(test.responseText);
          // console.log(test.responseText);
          // console.log(obj);
          resolve(obj);
        }
      };
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchJsonTwo(url) {
  return axios.get(url)
  .then((response) => {
    console.log('response', response);
    return (response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}
