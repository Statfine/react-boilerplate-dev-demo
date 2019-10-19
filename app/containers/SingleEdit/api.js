import request, { get } from 'utils/request';
import { API_BASE_V2 } from 'common/constants';
import uploadCoverCli from 'utils/uploadCoverCli';

export default {
  // 获取项目信息
  getProjectInfo(projectId) {
    return get(`${API_BASE_V2}/projects/${projectId}?include=using,video`)
      .then((data) => data.data)
      .then((data) => {
        if (data.config) {
          data.config = JSON.parse(data.config); // eslint-disable-line
        }
        return data;
      });
  },

  // 保存项目信息
  saveProjectConfig(projectId, config, width, height, title, step, cover, isSuperFansTong, length) {
    return request(`${API_BASE_V2}/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify({
        local_config: JSON.stringify(config),
        width,
        height,
        title,
        process: step,
        cover,
        is_super_fans_tong: isSuperFansTong,
        length,
        project_type: 3, // 剪辑工程类型标识
      }),
    });
  },

  // 上传背景图
  uploadChartlet(file, callBackSuc, callBackError, callBackProgress) {
    const ar = file.name.split('.');
    const ext = ar[ar.length - 1];
    return uploadCoverCli(
      file,
      ext,
      `${API_BASE_V2}/upload`,
      callBackProgress,
      callBackError,
      callBackSuc
    );
  },
};
