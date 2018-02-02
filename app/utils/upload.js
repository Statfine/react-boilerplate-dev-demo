/**
 * Created by easub on 2016/10/31.
 */
import axios from 'axios';
import { API_BASE_V2 } from 'common/constants';

// resourceType 0视频  1普通图片  2全景图
function uploadVideo(file, startBackState, callBackState, callBackError, resourceType, libId) {
  // state  -1失败  1开始   2进行中   3成功  4取消
  const fileName = file.name.substring(0, file.name.lastIndexOf('.'));
  const ext = file.name.substring(file.name.lastIndexOf('.') + 1);
  const fileSize = file.size / 1024 / 1024;
  const uploadState = {
    state: 1,
    callBackStep: 0,
    fileName,
    id: '',
    fileSize: fileSize.toFixed(2),
    cancelUpload: abort,
  };

  const uploadingXhr = new XMLHttpRequest();

  function abort() {
    if (uploadState.state !== 2) {
      return false;
    }
    uploadState.state = 4;
    return uploadingXhr.abort();
  }

  function getUploadUrl() {
    const instance = axios.create({
      headers: { Authorization: `Bearer ${global.window.localStorage.access_token}` },
    });
    if (resourceType === 0) return instance.get(`${API_BASE_V2}/videos/createuploadurl?ext=mp4&filename=${fileName}&lib=${libId}`);
    return instance.get(`${API_BASE_V2}/images/upload?ext=${ext}&title=${fileName}&panoramic=${resourceType === 1 ? 0 : 1}&lib=${libId}`);
  }

  function uploadUrling(url, callback) {
    const promise = new Promise(function (resolve, reject) { // eslint-disable-line prefer-arrow-callback
      const handleProgress = function (progressEvent) {
        const progress = parseInt((progressEvent.loaded / progressEvent.total) * 100, 0);
        uploadState.progress = progress;
        callBackState({ [uploadState.id]: uploadState });
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
      uploadingXhr.open('PUT', url);
      if (resourceType === 0) uploadingXhr.setRequestHeader('Content-Type', 'mp4');
      else uploadingXhr.setRequestHeader('Content-Type', `image/${ext.toLowerCase()}`);
      uploadingXhr.send(file);
    });

    return promise;
  }

  function oosCallBack(callback) {
    const instance = axios.create({
      headers: { Authorization: `Bearer ${global.window.localStorage.access_token}` },
    });
    instance.post(callback).then(() => {
      uploadState.state = 3;
      callBackState({ [uploadState.id]: uploadState });
    }).catch((err) => {
      if (uploadState.callBackStep < 3) {
        oosCallBack(callback);
        uploadState.callBackStep++; // eslint-disable-line no-plusplus
      } else {
        uploadState.state = -1;
        callBackError(uploadState, err.response.data.message);
      }
    });
  }

  getUploadUrl().then((response) => { // eslint-disable-line arrow-body-style
    uploadState.id = response.data.data.video_id;
    uploadState.state = 2;
    uploadState.resourceType = resourceType;
    if (resourceType === 1 || resourceType === 2) uploadState.cover = response.data.data.src;
    startBackState(response.data.data.video_id, fileName);
    return uploadUrling(response.data.data.url, response.data.data.callback);
  }).then((response) => { // eslint-disable-line arrow-body-style
    return oosCallBack(response.callback);
  }).catch(() => { // eslint-disable-line arrow-body-style
    const error = uploadState.state !== 4 ? uploadState : '';
    return callBackError(uploadState, error);
  });

  return {
    cancelUpload: abort,
  };
}

export default uploadVideo;
