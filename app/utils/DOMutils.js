import Colr from 'colr';

export function disabledUserSelect() {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.msUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
}

export function enableUserSelect() {
  document.body.style.userSelect = '';
  document.body.style.webkitUserSelect = '';
  document.body.style.msUserSelect = '';
  document.body.style.mozUserSelect = '';
}

export function getElementOffset(ele) {
  if (ele && ele.getBoundingClientRect) {
    return ele.getBoundingClientRect();
  }
  return {};
}

/**
 * @param {*} ele
 */
export function getElementCurrentStyle(ele) {
  return (prop) => {
    let style = null;
    if (window.getComputedStyle) {
      style = window.getComputedStyle(ele, null);
    } else {
      style = ele.currentStyle;
    }
    return style[prop].substring(0, style[prop].length - 2);
  };
}

export function getElementStyle(ele) {
  let style = null;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(ele, null);
  } else {
    style = ele.currentStyle;
  }
  return style;
}

/**
 * @param {*} ele
 * 全屏
 */
export function launchFullscreen(ele) {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  } else if (ele.oRequestFullscreen) {
    ele.oRequestFullscreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullScreen();
  }
}

/**
 * 退出全屏
 */

export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.oRequestFullscreen) {
    document.oCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

export function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

export function addEventListener(dom, type, listener) {
  dom.addEventListener(type, listener);
  return () => {
    dom.removeEventListener(type, listener);
  };
}

export function hexToRGBarray(hex) {
  return Colr.fromHex(hex).toRgbArray();
}

export function isParent(obj, parentObj) {
  let element = obj;
  while (
    element !== undefined &&
    element !== null &&
    element.tagName.toUpperCase() !== 'BODY'
  ) {
    if (element === parentObj) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}

export function getTransX(matrix) {
  const matrixArr = matrix.substring(7).split(',');
  // eslint-disable-next-line radix
  return parseInt(matrixArr[4], 10);
}

export function getTransY(matrix) {
  const matrixArr = matrix.substring(7).split(',');
  // eslint-disable-next-line radix
  return parseInt(matrixArr[5], 10);
}

/**
 * getChildElementByInnerText
 * @param {obj} parent 父元素
 * @param {string} text 文字
 */
export function getChildElementByInnerText(parent, text) {
  const elements = parent.children;
  let result;
  for (let i = 0; i <= elements.length; i += 1) {
    if (!!elements[i] && elements[i].children.length > 0) {
      const ele = getChildElementByInnerText(elements[i], text);
      if (ele !== undefined) {
        result = ele;
      }
    } else if (!!elements[i] && elements[i].innerText && elements[i].innerText.startsWith(text)) {
      result = elements[i];
    }
  }
  return result;
}

export function getClientPos(e) {
  let pageX;
  let pageY;

  if (e.touches) {
    pageX = e.touches[0].pageX;
    pageY = e.touches[0].pageY;
  } else {
    pageX = e.pageX;
    pageY = e.pageY;
  }

  return {
    x: pageX,
    y: pageY,
  };
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
