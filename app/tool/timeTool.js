/**
 * Created by easub on 2017/1/11.
 */
import { isNaN, isUndefined } from 'lodash';

const Tool = {

  /*
   *  字符串转时间格式分钟:秒
   *  01:54
   */
  stringToMinSec(timeLength) {
    const Ttime = Number(timeLength);
    let min;
    let sec;

    if (Ttime < 60) {
      min = '00';
      sec = Ttime < 10 ? `0${Ttime}` : Ttime;
    } else if (Ttime === 60) {
      min = '01';
      sec = '00';
    } else if (Ttime > 60 && Ttime < 3600) {
      const timeMin = parseInt(Ttime / 60);
      const timeS = parseInt(Ttime % 60);
      min = timeMin < 10 ? `0${timeMin}` : timeMin;
      sec = timeS < 10 ? `0${timeS}` : timeS;
      return `${min}:${sec}`;
    } else {
      const timeHour = parseInt(Ttime / 3600);
      const timeMins = parseInt((Ttime % 3600) / 60);
      const timeS = parseInt((Ttime % 3600) % 60);
      const hour = timeHour < 10 ? `0${timeHour}` : timeHour;
      min = timeMins < 10 ? `0${timeMins}` : timeMins;
      sec = timeS < 10 ? `0${timeS}` : timeS;
      return `${hour}:${min}:${sec}`;
    }
    return `${min}:${sec}`;
  },

  /*
   *  字符串转时间格式 小时:分钟:秒
   *  01:01:54.123
   */
  stringToHourMinSec(timeLength, toFiexedFlag = true) {
    if (isNaN(timeLength) || isUndefined(timeLength) || timeLength === '') {
      return '';
    }
    let Ttime = Number(String(timeLength).split('.')[0]);
    const timeMS = toFiexedFlag ? Number((Number(timeLength) - Number(Ttime)).toFixed(3)) : 0;
    let min;
    let sec;

    if (Ttime < 60) {
      Ttime = toFiexedFlag ? (Ttime + timeMS).toFixed(3) : Ttime + timeMS;
      min = '00';
      sec = Ttime < 10 ? `0${Ttime}` : Ttime;
      return `${min}:${sec}`;
    } else if (Ttime === 60) {
      min = '01';
      sec = '00';
      return `${min}:${sec}`;
    } else if (Ttime > 60 && Ttime < 3600) {
      const timeMin = parseInt(Ttime / 60);
      const timeS = toFiexedFlag ? (parseInt(Ttime % 60) + timeMS).toFixed(3) : parseInt(Ttime % 60) + timeMS;
      min = timeMin < 10 ? `0${timeMin}` : timeMin;
      sec = timeS < 10 ? `0${timeS}` : timeS;
      return `${min}:${sec}`;
    }
    const timeHour = parseInt(Ttime / 3600);
    const timeMins = parseInt((Ttime % 3600) / 60);
    const timeS = toFiexedFlag ? (parseInt(Ttime % 3600 % 60) + timeMS).toFixed(3) : parseInt(Ttime % 3600 % 60) + timeMS;
    const hour = timeHour < 10 ? `0${timeHour}` : timeHour;
    min = timeMins < 10 ? `0${timeMins}` : timeMins;
    sec = timeS < 10 ? `0${timeS}` : timeS;
    return `${hour}:${min}:${sec}`;
  },
  /*
 *  时间戳(13位)转换 月-日 小时:分之
 *  09-01 24:01
 */
  dataMonthDayHoursMin(time, flag) {
    const setData = new Date(time);
    let month = setData.getMonth() + 1;
    month = this.zeroFill(month);
    let day = setData.getDate();
    day = this.zeroFill(day);
    let hours = setData.getHours();
    hours = this.zeroFill(hours);
    let min = setData.getMinutes();
    min = this.zeroFill(min);
    let sec = setData.getSeconds();
    sec = this.zeroFill(sec);
    if (flag) return `${month}-${day} ${hours}:${min}:${sec}`;
    return `${month}-${day} ${hours}:${min}`;
  },

  getQueryString(name) {
    const regExp = `(^|&)${name}=([^&]*)(&|$)`;
    const reg = new RegExp(regExp, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r !== null) return decodeURIComponent(r[2]); return null;
  },

  /*
   *  时间戳转换 年：月：日
   *  2017年12月25日
   */

  dataYearMonthDay(time) {
    const setData = new Date(time * 1000);
    const year = setData.getFullYear();
    let month = setData.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = setData.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}年${month}月${day}日`;
  },

  dataYearMonthDayByType(time, type) {
    const setData = new Date(time * 1000);
    const year = setData.getFullYear();
    let month = setData.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = setData.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}${type}${month}${type}${day}`;
  },

  /*
   *  字符串转时间格式 分钟:秒
   *  01:54.12
   */
  formatTime(t) {
    const m = parseInt(t / 60);
    const s = Number(t - (m * 60)).toFixed(2);
    return `${this.zeroFill(m)}:${this.zeroFill(s)}`;
  },

  /*
   *  前后日期转时间格式 年：月：日 时:分:秒
   *  gj
   */
  changeDate(timeStamp, start) {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 >= 10 ? (date.getMonth() + 1) : `0${(date.getMonth() + 1)}`;
    const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
    if (start) {
      return `${year}-${month}-${day} 00:00:01`;
    }
    return `${year}-${month}-${day} 23:59:59`;
  },

  /*
   *  字符串转时间格式 年：月：日 时:分
   *  01:54.12
   */
  getFullTime(params) {
    const time = new Date(params);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const newM = m < 10 ? `0${m}` : m;
    const d = time.getDate();
    const newD = d < 10 ? `0${d}` : d;
    const h = time.getHours();
    const newH = h < 10 ? `0${h}` : h;
    const mm = time.getMinutes();
    const newMM = mm < 10 ? `0${mm}` : mm;
    return `${y}-${newM}-${newD} ${newH}:${newMM}`;
  },

  formatTimeNoMinsec(t) {
    const m = parseInt(t / 60);
    const s = parseInt(t - (m * 60));
    return `${this.zeroFill(m)}:${this.zeroFill(s)}`;
  },

  formatHourMinSec(t) {
    const h = parseInt(t / 3600);
    const m = parseInt((t - (h * 3600)) / 60);
    const s = parseInt(t - ((h * 3600) + (m * 60)));
    return `${this.zeroFill(h)}:${this.zeroFill(m)}:${this.zeroFill(s)}`;
  },

  zeroFill(s) {
    if (s < 10 && s >= 0) return `0${s}`;
    return s;
  },

  // 循环引用的错误示例
  // import { TestC } from './testC';
  // getTest(title, flag = false) {
  //   if (flag) return;
  //   console.log(title);
  //   TestC.getTestTwo(title);
  // },
};

export { Tool };
