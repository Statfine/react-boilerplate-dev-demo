/*
 *
 * SingleEdit actions
 *
 */

import * as cons from './constants';

export function defaultAction() {
  return {
    type: coms.DEFAULT_ACTION,
  };
}

// 修改项目信息
export function changeProjectInfo(payload) {
  return {
    type: cons.CHANGE_PROJECT_INFO,
    payload,
  };
}

// 修改视频特效
export function changeEffectVideo(payload) {
  return {
    type: cons.CHANGE_EFFECT_VIDEO,
    payload,
  };
}

// 修改播放器数据  时间 实例对象
export function changeVideoPlayer(payload) {
  return {
    type: cons.CHANGE_VIDEO_PLAYER,
    payload,
  };
}

// 修改选中特效和拖动组件
export function changeEffectCom(payload) {
  return {
    type: cons.CHANGE_EFFECT_COM,
    payload,
  };
}

// 上传视频背景图片
export function creatUploadBacImg(payload) {
  return {
    type: cons.CREATE_UPLOAD_BAC_IMG,
    payload,
  };
}
// 上传视频背景图片状态修改 （用于saga和页面修改状态）
export function changeUplaodBacimgState(payload) {
  return {
    type: cons.CHANGE_UPLOAD_BAC_IMG_STATE,
    payload,
  };
}

export function changeTrackInfo(payload) {
  return {
    type: cons.CHANGE_TRACK_INFO,
    payload,
  };
}

// 修改贴图特效 actionType： edit-修改 delete-删除 add-新增
export function changeEffectChartLet(actionType, payload) {
  return {
    type: cons.CHANGE_EFFECT_CHARTLET,
    actionType,
    payload,
  };
}
