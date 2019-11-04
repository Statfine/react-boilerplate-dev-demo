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

export const getCaretPosition = (editableDiv) => {
  let caretPos = 0;
  let sel;
  let range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode === editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() === editableDiv) {
      const tempEl = document.createElement('span');
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      const tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint('EndToEnd', range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
};

export const setCaret = (el, pos) => {
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(el.childNodes[0], pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
};

// 设置光标到指定位置
export const setCaretPosition = (el, len) => {
  const El = el;
  if (document.selection) {
    const sel = El.createTextRange();
    sel.moveStart('character', len);
    sel.collapse();
    sel.select();
  } else if (typeof El.selectionStart === 'number' && typeof El.selectionEnd === 'number') {
    El.selectionStart = len;
    El.selectionEnd = len;
  }
};
