/**
 * 工具方法
*/

// 获取元素所有样式
export const getStyle = (el) => {
  let style = null;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  } else {
    style = el.currentStyle;
  }
  return style;
};

// 获取元素指定样式
export const formatStyle = (ele, props) => {
  const str = getStyle(ele)[props];
  return parseFloat(str.substring(0, str.length - 2));
};

// 把视频时间转化成 hh:mm:ss:mss  00:02:12:789
export const timeToMSecond = (time) => {
  const fixTime = time.toFixed(3);
  const [intTime, timeMSecs] = fixTime.split('.');
  const fTime = Number(intTime);
  const timeHour = Math.floor(fTime / 3600).toString().padStart(2, '0');
  const timeMins = Math.floor((fTime - timeHour * 60) / 60).toString().padStart(2, '0');
  const timeSecs = Math.floor(fTime - timeHour * 3600 - timeMins * 60).toString().padStart(2, '0');
  return `${timeHour}:${timeMins}:${timeSecs}:${timeMSecs}`;
};

