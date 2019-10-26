/*
 *
 * SingleEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as cons from './constants';

const PROJECTINFO = {
  resolutionRatio: '0', // 分辨率 RESOLUTION_RATIO
  name: '', // 项目名称
};
export const VIDEOINFO = {
  media_info: { width: 848, height: 620, duration: 15, size: 1479243 },
  play_url: 'http://39.108.60.29/static/videoedit/s.mp4',
  cover: 'http://39.108.60.29/static/videoedit/s.jpg',
  detail_id: 32199,
  id: '7da13b63-e761-4e02-b54c-546745e2d6e7',
  length: 15,
};
const EFFECTVIDEO = {
  position: {
    w: 100, // 百分比
    h: 100,
    x: 0,
    y: 0,
  },
  opacity: 100, // 透明度
  volume: 100, // 音量
  backgroundColor: '#000', // 背景色
  backgroundImg: { // 背景图
    src: 'http://39.108.60.29/static/videoedit/test_video_cover.jpeg',
    title: 'test_video_cover.png',
    progress: 0,
    isUploading: false,
    id: 'e1882dbe-4b22-496e-9e35-7275b90b39cf',
    width: '400',
    height: '299',
  },
  reversal: -1, // 翻转 -1-无 1-左右翻转 0-上下翻转
  startTime: 0,
  endTime: 11,
};
export const EFFECTIMAGE = [
  {
    zIndex: '1', // 层级（考虑到还有其他类型特效，当前特效依次增加层级）
    effectKey: 'image_1', // 特效标识
    type: 'image', // 特效类型
    image: { // 图片信息
      src: 'http://39.108.60.29/static/videoedit/test1.jpg',
      title: '94.png',
      id: 'abc-hts13-231',
      width: '248',
      height: '510',
    },
    position: { // 图片位置
      w: 40, // 百分比
      h: 40,
      x: 0,
      y: 0,
    },
    alpha: 100, // 图片透明度
    startT: 0, // 图片开始时间点
    endT: 5, // 图片结束时间点
  },
  {
    zIndex: '2', // 层级（考虑到还有其他类型特效，当前特效依次增加层级）
    effectKey: 'image_2', // 特效标识
    type: 'image', // 特效类型
    image: {
      src: 'http://39.108.60.29/static/videoedit/test2.jpg',
      title: '94.png',
      id: 'abc-hts13-231',
      width: '400',
      height: '300',
    },
    position: {
      w: 10, // 百分比
      h: 40,
      x: 50,
      y: 50,
    },
    alpha: 100,
    startT: 0,
    endT: 11,
  },
];

const initialState = fromJS({
  videoInfo: VIDEOINFO, // 单视频详情信息

  projectInfo: PROJECTINFO, // 项目信息 - 触发保存
  effectVideo: EFFECTVIDEO, // 视频特效 - 触发保存
  effectImage: EFFECTIMAGE, // 贴图特效 - 触发保存

  videoPlayer: { // 播放器数据
    currentTime: 0, // 当前时间
    state: 0, // 状态 0-暂停 1-播放
    videoEl: { // 调用播放器内事件
      play: () => console.log('播放事件'), // 播放事件
      pause: () => console.log('暂停事件'), // 暂停事件
      seek: () => console.log('修改时间点'), // 修改时间点
      updateVideo: () => console.log('更新属性'), // 更新属性 具体参数看播放器内
      updateChartlet: () => console.log('更新贴图'), // 更新属性 具体参数看播放器内
    }, // 实例对象
  },
  chooseEffect: {
    effectKey: '', // 选中的特效key （effectVideo,...）
    dragKey: '', // 选中的拖动组件key
  },
  trackInfo: { // 播放轨道参数
    curTime: 0, // 轨道播放指针时间
    state: 0, // 0: videoPlayer currentTime变化的时候，curTime跟随着变化
  },
});

function singleEditReducer(state = initialState, action) {
  switch (action.type) {
    case cons.DEFAULT_ACTION:
      return state;
    case cons.CHANGE_BASE_VIDEO:
      return state.set('videoInfo', fromJS(action.payload));
    case cons.CHANGE_PROJECT_INFO:
      return state.update('projectInfo', (p) => p.mergeDeep(action.payload));
    case cons.CHANGE_EFFECT_VIDEO:
      return state.update('effectVideo', (p) => p.mergeDeep(action.payload));
    case cons.CHANGE_VIDEO_PLAYER:
      return state
        .update('videoPlayer', (p) => p.mergeDeep(action.payload))
        .update('trackInfo', (p) => {
          if ('currentTime' in action.payload) {
            return p.mergeDeep({ curTime: action.payload.currentTime + state.getIn(['effectVideo', 'startTime']) });
          }
          return p;
        });
    case cons.CHANGE_EFFECT_COM:
      return state.update('chooseEffect', (p) => p.mergeDeep(action.payload));
    case cons.CREATE_UPLOAD_BAC_IMG:
      return state.update('effectVideo', (p) => p.mergeDeep({ backgroundImg: { progress: 0, isUploading: true } }));
    case cons.CHANGE_UPLOAD_BAC_IMG_STATE:
      return state.update('effectVideo', (p) => p.mergeDeep({ backgroundImg: action.payload }));
    case cons.CHANGE_EFFECT_CHARTLET: {
      // 修改 edit。    actionType edit-修改 delete-删除 add-新增
      if (action.actionType === 'edit') {
        const index = state.get('effectImage')
          .findIndex((v) => v.get('effectKey') === action.payload.effectKey);
        return state.updateIn(['effectImage', index], (item) =>
          item.merge(fromJS(action.payload))
        );
      }
      // 删除 delete
      if (action.actionType === 'delete') {
        return state.update('effectImage', (list) =>
          list.filter((v) => v.get('effectKey') !== action.payload.effectKey)
        );
      }
      // 添加 add
      return state.update('effectImage', (list) => list.push(fromJS(action.payload)));
    }
    default:
      return state;
  }
}

export default singleEditReducer;
