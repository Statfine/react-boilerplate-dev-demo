/**
 * 常量
*/
// import { VideoSvg } from '../images/icon/svg';
import ToolVideoSvg from '../images/icon/视频.svg';
import ToolFilterSvg from '../images/icon/滤镜.svg';
import ToolMosaicSvg from '../images/icon/马赛克.svg';
import ToolPicSvg from '../images/icon/图片.svg';
import ToolTextSvg from '../images/icon/文字.svg';

import FilterDefaultImg from '../images/filter.png';

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
  { key: 'effectVideo', icon: ToolVideoSvg, text: '视频' },
  { key: 'effectFilter', icon: ToolFilterSvg, text: '滤镜' },
  { key: 'effectMosaic', icon: ToolMosaicSvg, text: '马赛克' },
  { key: 'effectChartlet', icon: ToolPicSvg, text: '加图片' },
  { key: 'effectText', icon: ToolTextSvg, text: '加文字' },
];

export const AXIS = 30; // 刻度值
export const PER_IMG_SECONDS = 8.5;
export const ADSORB_DISTANCE = 15; // 吸附距离

// 滤镜
export const filterTypePath = 'https://image.clip.cn/clip_website_images/effects/filter/';
export const FILTER_TYPE = [{
  key: 'none',
  title: '原视频',
  imgUrl: FilterDefaultImg,
  imgUrlLut: '',
}, {
  key: 'B&W',
  title: '黑白',
  imgUrl: 'https://image.clip.cn/clip_website_images/effects/filter/B&W.png',
  imgUrlLut: 'https://image.clip.cn/clip_website_images/effects/filter/B&W-lut.png',
}, {
  key: 'Saturated-warm',
  title: '温暖',
  imgUrl: 'https://image.clip.cn/clip_website_images/effects/filter/Saturated-warm.png',
  imgUrlLut: 'https://image.clip.cn/clip_website_images/effects/filter/Saturated-warm-lut.png',
},
// {
//   key: 'cool',
//   title: '柔和复古',
//   imgUrl: `${filterTypePath}cool.png`,
// },
{
  key: 'cool-mate',
  title: '电影',
  imgUrl: 'https://image.clip.cn/clip_website_images/effects/filter/cool-mate.png',
  imgUrlLut: 'https://image.clip.cn/clip_website_images/effects/filter/cool-mate-lut.png',
},
{
  key: 'Desert-sands',
  title: '沙漠',
  imgUrl: 'https://image.clip.cn/clip_website_images/effects/filter/Desert-sands.png',
  imgUrlLut: 'https://image.clip.cn/clip_website_images/effects/filter/Desert-sands-lut.png',
},
{
  key: 'Roman',
  title: '浪漫',
  imgUrl: 'https://image.clip.cn/clip_website_images/effects/filter/Roman.png',
  imgUrlLut: 'https://image.clip.cn/clip_website_images/effects/filter/Roman-lut.png',
}];
