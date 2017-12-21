/*
 *
 * VideoListPage actions
 *
 */

import {
  CHANGE_FILTER_PARAMS,
  CHANGE_PAGINATION,
  RETRY_VIDEOS,
  RETRY_VIDEOS_SUCCESS,
  RETRY_VIDEOS_FAILURE,
  FETCH_VIDEO_STATE, FETCH_VIDEO_STATE_SUCCESS, FETCH_VIDEO_STATE_FAILURE,
  CANCEL_FETCH_VIDEO_STATE_ROOL,
  FETCH_VIDEO, FETCH_VIDEO_SUCCESS, FETCH_VIDEO_FAILURE,
} from './constants';
import { deleteVideo } from './api';

export function changeFilterParams(filterParams) {
  return {
    type: CHANGE_FILTER_PARAMS,
    payload: filterParams,
  };
}

export function changePagination(pagination) {
  return {
    type: CHANGE_PAGINATION,
    payload: pagination,
  };
}

export function retryVideosActions(params) {
  return {
    type: RETRY_VIDEOS,
    payload: params,
  };
}

export function retryVideosSuccessActions(params) {
  return {
    type: RETRY_VIDEOS_SUCCESS,
    payload: params,
  };
}

export function retryVideosFailureActions(params) {
  return {
    type: RETRY_VIDEOS_FAILURE,
    payload: params,
  };
}

export function fetchVideoState(id) {
  return {
    type: FETCH_VIDEO_STATE,
    payload: id,
  };
}

export function fetchVideoStateSuccess(params) {
  return {
    type: FETCH_VIDEO_STATE_SUCCESS,
    payload: params,
  };
}

export function fetchVideoStateFailure(params) {
  return {
    type: FETCH_VIDEO_STATE_FAILURE,
    payload: params,
  };
}

export function cancelFetchVideoState() {
  return {
    type: CANCEL_FETCH_VIDEO_STATE_ROOL,
  };
}

export function fetchVideo() {
  return {
    type: FETCH_VIDEO,
  };
}

export function fetchVideoSuc(payload) {
  return {
    type: FETCH_VIDEO_SUCCESS,
    payload,
  };
}

export function fetchVideoFail(payload) {
  return {
    type: FETCH_VIDEO_FAILURE,
    payload,
  };
}

export const deleteVideoRequest = deleteVideo.request;
