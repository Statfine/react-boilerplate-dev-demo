/*
 * App request
 */
import axios from 'axios';

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
