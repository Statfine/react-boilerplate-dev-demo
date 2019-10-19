/**
 * Created by easub on 2017/1/11.
 */
const axios = require('axios');

/*
 * callBackState  上传进度跟新回调
 * callBackError  上传失败回调
 * callBackSuc    上传成功回调
 */
function uploadImage(files, ext, url, callBackState, callBackError, callBackSuc, callback) {
  const uploadingXhr = new XMLHttpRequest();

  const getUploadUrl = () => {
    const instance = axios.create({ headers: { Authorization: `Bearer ${global.window.localStorage.access_token}` } });
    return instance.get(url, {
      params: { ext, type: 'project-image', filename: encodeURIComponent(files.name) },
    });
  };

  const uploadUrling = (uploadurl) => {
    const promise = new Promise((resolve, reject) => {
      const handleProgress = (progressEvent) => {
        const progress = parseInt((progressEvent.loaded / progressEvent.total) * 100, 0);
        callBackState(progress);
      };

      if (uploadingXhr.upload) {
        // 上传中
        uploadingXhr.upload.addEventListener('progress', handleProgress, false);
      }

      // 文件上传成功或是失败
      uploadingXhr.onreadystatechange = function () {
        if (uploadingXhr.readyState !== 4) {
          return;
        }

        if (uploadingXhr.status === 200) {
          resolve({ callback });
        } else {
          const error = new Error(this.statusText);
          if (!error.code) {
            error.code = 2000;
          }

          reject(error);
        }
      };
      // 开始上传
      uploadingXhr.open('PUT', uploadurl);
      uploadingXhr.setRequestHeader('Content-Type', `image/${ext.toLowerCase()}`);
      uploadingXhr.send(files);
    });

    return promise;
  };

  const getCallBack = (url, method) => { // eslint-disable-line
    const instance = axios.create({
      headers: { Authorization: `Bearer ${global.window.localStorage.access_token}` },
    });
    if (method === 'POST') return instance.post(url);
    return instance.put(url);
  };

  let cbUrl = '';
  getUploadUrl().then((response) => { // eslint-disable-line arrow-body-style
    if (response.data.data) {
      cbUrl = response.data.data.callback;
      return uploadUrling(response.data.data.url);
    }
    return uploadUrling(response.data.url, response.data.callback);
  }).then(() => { // eslint-disable-line arrow-body-style
    return getCallBack(cbUrl, 'POST');
  }).then((response) => { // eslint-disable-line arrow-body-style
    return callBackSuc(response.data.data);
  }).catch(() => {
    callBackError('上传失败');
  });
}

export default uploadImage;
