/**
 * 常量
*/
// import { VideoSvg } from '../images/icon/svg';
import VideoSvg from '../images/icon/视频.svg';

// 分辨率
export const RESOLUTION_RATIO = {
  1: { key: '1', value: '1:1', w: 1, h: 1 },
  2: { key: '2', value: '16:9', w: 16, h: 9 },
  3: { key: '3', value: '4:5', w: 4, h: 5 },
  4: { key: '4', value: '9:16', w: 9, h: 16 },
  0: { key: '0', value: '原始比例', w: 0, h: 0 }, // 原始比例的时候此处的w|h 为视频的原始宽高
};
export const ARRAY_RESOLUTION_RATIO = [
  { key: '1', value: '1:1', w: 1, h: 1 },
  { key: '2', value: '16:9', w: 16, h: 9 },
  { key: '3', value: '4:5', w: 4, h: 5 },
  { key: '4', value: '9:16', w: 9, h: 16 },
  { key: '0', value: '原始比例', w: 0, h: 0 }, // 原始比例的时候此处的w|h 为视频的原始宽高
];

// PreviewDiv预览区域 最小单边距
export const PREVIEWDIV_SINGLE_MINMARGIN = 40;

// 工具栏列表
export const TOOL_LIST = [
  { key: 'effectVideo', icon: VideoSvg, text: '视频' },
];

export const AXIS = 30; // 刻度值
export const PER_IMG_SECONDS = 8.5;
export const ADSORB_DISTANCE = 15; // 吸附距离
