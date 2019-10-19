const CSS_INTEGER = '[-\\+]?\\d+%?';

// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';

// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`;

// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
const PERMISSIVE_MATCH3 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`;
const PERMISSIVE_MATCH4 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`;

const matcher = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp(`rgb${PERMISSIVE_MATCH3}`),
  rgba: new RegExp(`rgba${PERMISSIVE_MATCH4}`),
  hsl: new RegExp(`hsl${PERMISSIVE_MATCH3}`),
  hsla: new RegExp(`hsla${PERMISSIVE_MATCH4}`),
  hsv: new RegExp(`hsv${PERMISSIVE_MATCH3}`),
  hsva: new RegExp(`hsva${PERMISSIVE_MATCH4}`),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};

const mathMin = Math.min;
const mathMax = Math.max;
const mathRound = Math.round;

// 验证颜色单位
function isValidCSSUnit(color) {
  return !!matcher.CSS_UNIT.exec(color);
}

function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}

function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}

function bound01(n, max) {
  let _n = n;
  if (isOnePointZero(_n)) { _n = '100%'; }

  const processPercent = isPercentage(_n);
  _n = mathMin(max, mathMax(0, parseFloat(_n)));

  // Automatically convert percentage into number
  if (processPercent) {
    // eslint-disable-next-line radix
    _n = parseInt(_n * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if ((Math.abs(_n - max) < 0.000001)) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return (_n % max) / parseFloat(max);
}
function pad2(c) {
  return c.length === 1 ? `0${c}` : `${c}`;
}

// 小数转百分比
function convertToPercentage(n) {
  return n <= 1 ? `${n * 100}%` : n;
}

function _rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}
function hsvToRgb(h, s, v) {
  let _h = h;
  let _s = s;
  let _v = v;
  _h = bound01(_h, 360) * 6;
  _s = bound01(_s, 100);
  _v = bound01(_v, 100);

  const i = Math.floor(_h);
  const f = _h - i;
  const p = _v * (1 - _s);
  const q = _v * (1 - f * _s);
  const t = _v * (1 - (1 - f) * _s);
  const mod = i % 6;
  const r = [_v, q, p, p, t, _v][mod];
  const g = [t, _v, _v, q, p, p][mod];
  const b = [p, p, t, _v, _v, q][mod];

  return { r: r * 255, g: g * 255, b: b * 255 };
}
function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;
  let _h = h;
  let _s = s;
  let _l = l;

  _h = bound01(_h, 360);
  _s = bound01(_s, 100);
  _l = bound01(l, 100);

  function hue2rgb(p, q, t) {
    let _t = t;
    if (_t < 0) _t += 1;
    if (_t > 1) _t -= 1;
    if (_t < 1 / 6) return p + (q - p) * 6 * _t;
    if (_t < 1 / 2) return q;
    if (_t < 2 / 3) return p + (q - p) * (2 / 3 - _t) * 6;
    return p;
  }

  if (_s === 0) {
    r = _l;
    g = _l;
    b = _l;
  } else {
    const q = _l < 0.5 ? _l * (1 + _s) : _l + _s - _l * _s;
    const p = 2 * _l - q;
    r = hue2rgb(p, q, _h + 1 / 3);
    g = hue2rgb(p, q, _h);
    b = hue2rgb(p, q, _h - 1 / 3);
  }

  return { r: r * 255, g: g * 255, b: b * 255 };
}

// 转换透明度的对应的浮点数
function boundAlpha(a) {
  const _a = parseFloat(a);
  return (isNaN(_a) || _a < 0 || _a > 1) ? 1 : _a;
}

// Converts a hex value to a decimal
function convertHexToDecimal(h) {
  return (parseIntFromHex(h) / 255);
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// 匹配对应的颜色，返回对应k-v
const stringColorToObj = (color) => {
  const _color = color.trim().toLowerCase();
  if (_color === 'transparent') {
    return { r: 0, g: 0, b: 0, a: 0, format: 'transparent' };
  }

  let match;
  if ((match = matcher.rgb.exec(_color))) { // eslint-disable-line
    return { r: match[1], g: match[2], b: match[3] };
  }
  if ((match = matcher.rgba.exec(_color))) { // eslint-disable-line
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  if ((match = matcher.hsl.exec(_color))) { // eslint-disable-line
    return { h: match[1], s: match[2], l: match[3] };
  }
  if ((match = matcher.hsla.exec(_color))) { // eslint-disable-line
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  if ((match = matcher.hsv.exec(_color))) { // eslint-disable-line
    return { h: match[1], s: match[2], v: match[3] };
  }
  if ((match = matcher.hsva.exec(_color))) { // eslint-disable-line
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  if ((match = matcher.hex8.exec(_color))) { // eslint-disable-line
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: 'hex8',
    };
  }
  if ((match = matcher.hex6.exec(_color))) { // eslint-disable-line
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: 'hex6',
    };
  }
  if ((match = matcher.hex4.exec(_color))) { // eslint-disable-line
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      a: convertHexToDecimal(`${match[4]}${match[4]}`),
      format: 'hex4',
    };
  }
  if ((match = matcher.hex3.exec(_color))) { // eslint-disable-line
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      format: 'hex3',
    };
  }

  return false;
};

/**
 * 颜色值统一转换成rgb格式
 * @param {string} color 颜色值
 */
export const colorToRGB = (color) => {
  let rgb = { r: 0, g: 0, b: 0 };
  // hsl, hsla, hsv(b)，颜色类型
  let a = 1; // 透明度
  let s = null;
  let v = null;
  let l = null;
  let ok = false;
  let format = false;
  let _color = color;

  // 将字符串颜色拆解成对应的颜色格式
  if (typeof _color === 'string') {
    _color = stringColorToObj(_color);
  }

  if (typeof _color === 'object') {
    if (isValidCSSUnit(_color.r) && isValidCSSUnit(_color.g) && isValidCSSUnit(_color.b)) {
      rgb = _rgbToRgb(_color.r, _color.g, _color.b);
      ok = true;
      format = String(_color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(_color.h) && isValidCSSUnit(_color.s) && isValidCSSUnit(_color.v)) {
      s = convertToPercentage(_color.s);
      v = convertToPercentage(_color.v);
      rgb = hsvToRgb(_color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(_color.h) && isValidCSSUnit(_color.s) && isValidCSSUnit(_color.l)) {
      s = convertToPercentage(_color.s);
      l = convertToPercentage(_color.l);
      rgb = hslToRgb(_color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if ('a' in _color) {
      a = _color.a;
    }
  }

  a = boundAlpha(a);

  return {
    r: mathMin(255, mathMax(rgb.r, 0)),
    g: mathMin(255, mathMax(rgb.g, 0)),
    b: mathMin(255, mathMax(rgb.b, 0)),
    a,
    format,
    ok,
  };
};

export const rgbToRgb = (color) => color;
export const rgbToString = (color) => (color.a === 1) ?
  `rgb(${mathRound(color.r)}, ${mathRound(color.g)}, ${mathRound(color.b)})` :
  `rgba(${mathRound(color.r)}, ${mathRound(color.g)}, ${mathRound(color.b)}, ${color.a})`;
export function rgbToHsl(color) {
  const r = bound01(color.r, 255);
  const g = bound01(color.g, 255);
  const b = bound01(color.b, 255);

  const max = mathMax(r, g, b);
  const min = mathMin(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }

    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100, a: color.a };
}
export const rgbToHslString = (color) => {
  const _c = rgbToHsl(color);
  const h = mathRound(_c.h);
  const s = mathRound(_c.s);
  const l = mathRound(_c.l);
  return (_c.a === 1) ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${_c.a})`;
};
export const rgbToHex = (color, allow3Char) => {
  const hex = [
    pad2(mathRound(color.r).toString(16)),
    pad2(mathRound(color.g).toString(16)),
    pad2(mathRound(color.b).toString(16)),
  ];

  // Return a 3 character hex if possible
  if (allow3Char && hex[0].charAt(0) === hex[0].charAt(1) && hex[1].charAt(0) === hex[1].charAt(1) && hex[2].charAt(0) === hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }

  return hex.join('');
};
export const rgbToHexString = (color) => `#${rgbToHex(color)}`;
export const rgbToHsv = (color) => {
  const r = bound01(color.r, 255);
  const g = bound01(color.g, 255);
  const b = bound01(color.b, 255);

  const max = mathMax(r, g, b);
  const min = mathMin(r, g, b);
  let h;
  const v = max;

  const d = max - min;
  const s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s, v };
};
export const toHsvString = (color) => {
  const hsv = rgbToHsv(color.r, color.g, color.b);
  const h = mathRound(hsv.h * 360);
  const s = mathRound(hsv.s * 100);
  const v = mathRound(hsv.v * 100);
  return (color.a === 1) ?
    `hsv(${h}, ${s}, ${v})` :
    `hsv(${h}, ${s}, ${v}, ${color.a})`;
};
