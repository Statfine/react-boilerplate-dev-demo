const ToolDate = {
  /**
  * 格式化时间
  * @param  {time} 时间
  * @param  {cFormat} 格式
  * @return {String} 字符串
  * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
  */
  formatTime(timeString, cFormat) {
    let time = timeString;
    if (arguments.length === 0) return null;
    if (time.toString().length === 10) {
      time = +time * 1000;
    }

    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
      date = time;
    } else {
      date = new Date(time);
    }

    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    };
    const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key];
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
      if (result.length > 0 && value < 10) {
        value = `0${value}`;
      }
      return value || 0;
    });
    return timeStr;
  },


  /**
  * 返回指定长度的月份集合
  * @param  {time} 时间
  * @param  {len} 长度
  * @param  {directionP} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
  * @return {Array} 数组
  * @example   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
  */
  getMonths(time, len, directionP) {
    const mm = new Date(time).getMonth();
    const yy = new Date(time).getFullYear();
    const direction = isNaN(directionP) ? 3 : directionP;
    const index = mm;
    const cutMonth = function (index) {
      if (index <= len && index >= -len) {
        return direction === 1 ? formatPre(index).concat(cutMonth(index + 1)) :
          direction === 2 ? formatNext(index).concat(cutMonth(index + 1)) : formatCurr(index).concat(cutMonth(index + 1));
      }
      return [];
    };
    const formatNext = function (i) {
      const y = Math.floor(i / 12);
      const m = i % 12;
      return [`${yy + y}-${m + 1}`];
    };
    const formatPre = function (i) {
      const y = Math.ceil(i / 12);
      let m = i % 12;
      m = m === 0 ? 12 : m;
      return [`${yy - y}-${13 - m}`];
    };
    const formatCurr = function (i) {
      const y = Math.floor(i / 12);
      const yNext = Math.ceil(i / 12);
      const m = i % 12;
      const mNext = m === 0 ? 12 : m;
      return [`${yy - yNext}-${13 - mNext}`, `${yy + y}-${m + 1}`];
    };
    // 数组去重
    const unique = function (arr) {
      if (Array.hasOwnProperty('from')) { // eslint-disable-line
        return Array.from(new Set(arr));
      }
      const n = {};
      const r = [];
      for (let i = 0; i < arr.length; i += 1) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    };
    return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) { //eslint-disable-line
      return new Date(t1).getTime() - new Date(t2).getTime();
    }));
  },

  /**
  * 返回指定长度的天数集合
  * @param  {time} 时间
  * @param  {len} 长度
  * @param  {direction} 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
  * @return {Array} 数组
  * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
  */
  getDays(time, len, diretion) {
    const tt = new Date(time);
    const getDay = function (day) {
      const t = new Date(time);
      t.setDate(t.getDate() + day);
      const m = t.getMonth() + 1;
      return `${t.getFullYear()}-${m}-${t.getDate()}`;
    };
    const arr = [];
    if (diretion === 1) {
      for (let i = 1; i <= len; i += 1) {
        arr.unshift(getDay(-i));
      }
    } else if (diretion === 2) {
      for (let i = 1; i <= len; i += 1) {
        arr.push(getDay(i));
      }
    } else {
      for (let i = 1; i <= len; i += 1) {
        arr.unshift(getDay(-i));
      }
      arr.push(`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`);
      for (let i = 1; i <= len; i += 1) {
        arr.push(getDay(i));
      }
    }
    return diretion === 1 ? arr.concat([`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`]) :
      diretion === 2 ? [`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`].concat(arr) : arr;
  },


  /**
  * @param  {s} 秒数
  * @return {String} 字符串
  * @example formatHMS(3610) // -> 1h0m10s
  */
  formatHMS(s) {
    let str = '';
    if (s > 3600) {
      str = `${Math.floor(s / 3600)}h${Math.floor((s % 3600) / 60)}m${s % 60}s`;
    } else if (s > 60) {
      str = `${Math.floor(s / 60)}m${s % 60}s`;
    } else {
      str = `${s % 60}s`;
    }
    return str;
  },

  // 获取某月有多少天
  getMonthOfDay(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const mouth = date.getMonth() + 1;
    let days;

    // 当月份为二月时，根据闰年还是非闰年判断天数
    if (mouth === 2) {
      days = (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? 28 : 29;
    } else if (mouth === 1 || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
      // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
      days = 31;
    } else {
      // 其他月份，天数为：30.
      days = 30;
    }
    return days;
  },

  // 获取某年有多少天
  getYearOfDay(time) {
    const firstDayYear = this.getFirstDayOfYear(time);
    const lastDayYear = this.getLastDayOfYear(time);
    const numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  },

  // 获取某年的第一天
  getFirstDayOfYear(time) {
    const year = new Date(time).getFullYear();
    return `${year}-01-01 00:00:00`;
  },

  // 获取某年最后一天
  getLastDayOfYear(time) {
    const year = new Date(time).getFullYear();
    const dateString = `${year}-12-01 00:00:00`;
    const endDay = this.getMonthOfDay(dateString);
    return `${year}-12-${endDay} 23:59:59`;
  },

  // 获取某个日期是当年中的第几天
  getDayOfYear(time) {
    const firstDayYear = this.getFirstDayOfYear(time);
    const numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
    return Math.ceil(numSecond / (24 * 3600));
  },

  // 获取某个日期在这一年的第几周
  getDayOfYearWeek(time) {
    const numdays = this.getDayOfYear(time);
    return Math.ceil(numdays / 7);
  },
};

export { ToolDate };
