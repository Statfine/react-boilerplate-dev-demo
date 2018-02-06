const ToolStorage = {
  constructor() {
    this.ls = window.localStorage;
    this.ss = window.sessionStorage;
  },

  // -----------------cookie---------------------
  // 设置cookie
  setCookie(name, value, day) {
    const setting = arguments[0]; // eslint-disable-line
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (const i in setting) { // eslint-disable-line
        const oDate = new Date();
        oDate.setDate(oDate.getDate() + day);
        document.cookie = `${i}=${setting[i]};expires=${oDate}`;
      }
    } else {
      const oDate = new Date();
      oDate.setDate(oDate.getDate() + day);
      document.cookie = `${name}-${value};expires=${oDate}`;
    }
  },

  // 获取cookie
  getCookie(name) {
    const arr = document.cookie.split('; ');
    for (let i = 0; i < arr.length; i += 1) {
      const arr2 = arr[i].split('=');
      if (arr2[0] === name) {
        return arr2[1];
      }
    }
    return '';
  },

  // 删除cookie
  removeCookie(name) {
    this.setCookie(name, 1, -1);
  },


  // -----------------localStorage---------------------
  // 设置localStorage
  setLocal(key, val) {
    const setting = arguments[0]; // eslint-disable-line
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (const i in setting) { // eslint-disable-line
        this.ls.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ls.setItem(key, JSON.stringify(val));
    }
  },

  // 获取localStorage
  getLocal(key) {
    if (key) return JSON.parse(this.ls.getItem(key));
    return null;
  },

  // 移除localStorage
  removeLocal(key) {
    this.ls.removeItem(key);
  },

  // 移除所有localStorage
  clearLocal() {
    this.ls.clear();
  },

  // -----------------sessionStorage---------------------
  // 设置sessionStorage
  setSession(key, val) {
    const setting = arguments[0]; // eslint-disable-line
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (const i in setting) { // eslint-disable-line
        this.ss.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ss.setItem(key, JSON.stringify(val));
    }
  },

  // 获取sessionStorage
  getSession(key) {
    if (key) return JSON.parse(this.ss.getItem(key));
    return null;
  },

  // 移除sessionStorage
  removeSession(key) {
    this.ss.removeItem(key);
  },

  // 移除所有sessionStorage
  clearSession() {
    this.ss.clear();
  },
};

export { ToolStorage };
