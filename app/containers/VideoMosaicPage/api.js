/**
 * Created by easub on 2017/1/12.
 */
import { API_BASE_V2 } from 'common/constants';
import request, { get } from 'utils/request';
import axios from 'axios';

const videoLiveApi = {

  editLive(projectId, detailId) {
    const option = {
      method: 'post',
      body: JSON.stringify({}),
    };
    return request(`${API_BASE_V2}/trackanalysis/projects/${projectId}/details/${detailId}`, option)
      .then((data) => data.data);
  },
  pollingReq(url) {
    return get(url)
      .then((data) => data.data)
      .catch(() => {
        throw new Error('获取失败');
      });
  },
  fetchJson(url) {
    return axios.get(url)
    .then((response) => {
      console.log('response', response);
      return (response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },
};

export default videoLiveApi;
