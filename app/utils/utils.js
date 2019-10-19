const lengthTrim = (h) => {
  try {
    return h.replace(/^\s+|\s+$/g, '');
  } catch (j) {
    return h;
  }
};

const byteLength = (b) => {
  if (typeof b === 'undefined') {
    return 0;
  }
  const a = b.match(/[^\x00-\x80]/g);
  return b.length + (!a ? 0 : a.length);
};

// 分享标题获取标题长度， 取酷燃和看点计算较大的做限制
export const getRealLength = (value) => {
  const kuran = Math.ceil((byteLength(value)) / 2);
  const kandian = kandianGetLength(value);
  return Math.max(kuran, kandian);
};

export const getLength = (q, gg) => {
  let sum;
  const g = gg || {};
  g.max = g.max || 140;
  g.min = g.min || 41;
  g.surl = g.surl || 20;
  const p = lengthTrim(q).length;
  if (p > 0) {
    const j = g.min;
    const s = g.max;
    const b = g.surl;
    let n = q;
    const r =
      q.match(
        /(http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-A-Z0-9a-z\$\.\+\!\_\*\(\)\/\,\:;@&=\?~#%]*)*/gi // eslint-disable-line
      ) || [];
    let h = 0;
    for (let m = 0, len = r.length; m < len; m += 1) {
      const o = byteLength(r[m]);
      if (!/^(http:\/\/t.cn)/.test(r[m])) {
        const reTwo = /^(http:\/\/)+(weibo.com|weibo.cn)/;
        if (reTwo.test(r[m])) {
          const ternary = o <= s ? b : o - s + b;
          h += o <= j ? o : ternary;
        } else {
          h += o <= s ? b : o - s + b;
        }
      }
      n = n.replace(r[m], '');
    }
    sum = Math.ceil((h + byteLength(n)) / 2);
  } else {
    sum = 0;
  }
  return sum;
};

export const kandianGetLength = (str) => {
  let sum = 0;
  let strTemp = str.trim();
  strTemp = strTemp.replace(/[\u4e00-\u9fa5]/g, 'aa'); // 中文
  strTemp = strTemp.replace(/[\uff00-\uffff]|\u3000/g, 'aa'); // 全角
  sum = strTemp.length / 2;
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (char === 'A' || char === 'K') {
      sum += 0.125;
    } else if (char === 'B' || char === 'C' || char === 'R') {
      sum += 0.141;
    } else if (char === 'D' || char === 'G' || char === 'U') {
      sum += 0.172;
    } else if (char === 'E' || char === 'F' || char === 'J' || char === 'L') {
      sum += 0.047;
    } else if (char === 'H' || char === 'N' || char === 'Q') {
      sum += 0.203;
    } else if (char === 'M' || char === 'W') {
      sum += 0.147;
    } else if (char === 'Y' || char === 'X' || char === 'P' || char === 'V') {
      sum += 0.125;
    } else if (char === 'Z' || char === 'T') {
      sum += 0.094;
    } else if (char === 'M' || char === 'W') {
      sum += 0.359;
    } else if (char === 'I') {
      sum += -0.219;
    } else if (char === 'S') {
      sum += 0.109;
    }
  }
  return Math.ceil(sum);
};

export const detectOS = () => {
  const sUserAgent = navigator.userAgent;
  const isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
  const isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
  if (isMac) return 'Mac';
  const isUnix = (navigator.platform === 'X11') && !isWin && !isMac;
  if (isUnix) return 'Unix';
  const isLinux = (String(navigator.platform).indexOf('Linux') > -1);
  if (isLinux) return 'Linux';
  if (isWin) {
    const isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1;
    if (isWin2K) return 'Win2000';
    const isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1;
    if (isWinXP) return 'WinXP';
    const isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1;
    if (isWin2003) return 'Win2003';
    const WinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1;
    if (WinVista) return 'WinVista';
    const Win7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1;
    if (Win7) return 'Win7';
  }
  return 'None';
};

export const isIe = () => {
  const ua = navigator.userAgent.toLowerCase();
  const s = ua.match(/rv:([\d.]+)\) like gecko/);
  return s;
};

export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.match(/MicroMessenger/i) !== null) { // 微信内置浏览器
    return 'MicroMessenger';
  } else if (userAgent.match(/QQ/i) !== null) { // QQ内置浏览器
    return 'QQ';
  } else if (userAgent.match(/Chrome/i) !== null) { // Chrome
    return 'Chrome';
  } else if (userAgent.match(/Opera/i) !== null) { // Opera
    return 'Opera';
  } else if (userAgent.match(/Firefox/i) !== null) { // Firefox
    return 'Firefox';
  } else if (userAgent.match(/Safari/i) !== null) { // Safari
    return 'Safari';
  } else if (!!window.ActiveXObject || 'ActiveXObject' in window) { // IE
    return 'IE';
  }
  return userAgent;
};

// 复制到粘贴板
export function copyLink(text, cb) {
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    if (cb) cb();
  }
  document.body.removeChild(input);
}

// 处理特殊字符
export function htmlSpecialChars(text) {
  let str = text.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#039;');
  return str;
}
