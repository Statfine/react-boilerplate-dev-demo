/*
 *
 * VideoMosaicPage actions
 *
 */

import * as con from './constants';

export function defaultAction() {
  return {
    type: con.DEFAULT_ACTION,
  };
}

export function fetchVideoAnalyse() {
  return {
    type: con.REQUREST_VIDEO_ANALYSE,
  };
}

export function fetchVideoAnalyseSuc(payload, imgUrlList) {
  return {
    type: con.REQUREST_VIDEO_ANALYSE_SUC,
    payload,
    imgUrlList,
  };
}

export function fetchVideoAnalyseError() {
  return {
    type: con.REQUREST_VIDEO_ANALYSE_ERROR,
  };
}
