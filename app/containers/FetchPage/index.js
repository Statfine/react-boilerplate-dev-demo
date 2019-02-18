/**
 *
 * FetchPage
 * http://louiszhai.github.io/2016/11/02/fetch/#abort
 */

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

function PromiseTest(resolve, reject) { // eslint-disable-line
  // 做一些异步操作
  setTimeout(() => {
    console.log('执行完成');
    resolve({ value: 1 });
  }, 4000);
}

export class FetchPage extends React.PureComponent {

  handlePromise = () => {
    const p1 = new Promise(PromiseTest);
    p1.then((result) => {
      console.log('成功：', result);
    });
  }

  handleFetch = () => {
    // const word = '123';
    // const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+word+'&json=1&p=3';
    const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=123&json=1&p=3&sid=1443_21101_18559_28414_22157&req=2&csor=3&pwd=12&cb=jQuery110209364949438344683_1550461764901&_=1550461764904';
    return fetch(url, { mode: 'no-cors' }).then((response) => {
      console.log(response.headers);
      return response;
    }).then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log('Oops, error', e);
    });
  }

  /**
   * 超时设置
   *
   * @memberof _fetchTimeOut
   * new Promise((resolve, reject) => {
   *  _fetchTimeOut(myFetch, 30000)
   *    .then(response => {})
   *    .catch(error=>{})
   * })
   *
   * const result = await _fetchTimeOut(handleFetch);
   *
   * var p = _fetchAbort('https://www.baidu.com',{mode:'no-cors'});
   */
  _fetchTimeOutOne = (requestPromise, timeout = 3000) => {
    let timeoutAction = null;
    const timerPromise = new Promise((resolve, reject) => {
      timeoutAction = () => {
        reject('请求超时'); //  超时需要abort
      };
    });
    setTimeout(() => {
      timeoutAction();
    }, timeout);
    return Promise.race([requestPromise, timerPromise]);
  }
  _fetchTimeOut = (url, options, timeout = 3000) => {
    let timeoutAction = null;
    const timerPromise = new Promise((resolve, reject) => {
      timeoutAction = () => {
        reject('请求超时'); //  超时需要abort
      };
    });
    setTimeout(() => {
      timeoutAction();
    }, timeout);
    const promise = Promise.race([fetch(url, options), timerPromise]);
    return promise;
  }
  handleFetchTimeOut = () => {
    const p1 = new Promise(PromiseTest);
    const p = this._fetchTimeOutOne(p1);
    // const p = this._fetchTimeOut('https://www.baidu.com',{mode:'no-cors'});
    p.then((res) => {
      console.log('response:', res);
    }, (e) => {
      console.log('error:', e);
    });
  }

  /**
   * 取消设置
   *
   * @memberof _fetchAbort
   * var p = _fetchAbort('https://www.baidu.com',{mode:'no-cors'});
   * p.abort();
   */
  _fetchAbort = (url, options) => {
    let abort = null;
    const abortPromise = new Promise((resolve, reject) => {
      abort = () => {
        reject('abort.');
        console.info('abort done.');
      };
    });
    const promise = Promise.race([fetch(url, options), abortPromise]);
    promise.abort = abort;
    return promise;
  }
  handleFetchAbort = () => {
    const p = this._fetchAbort('https://www.baidu.com', { mode: 'no-cors' });
    p.then((res) => {
      console.log('response:', res);
    }, (e) => {
      console.log('error:', e);
    });
    p.abort();
  }

  _fetch = (url, options) => {
    let abort = null;
    let timeout = 0;
    const abortPromise = new Promise((resolve, reject) => {
      abort = () => {
        reject('timeout.');
        console.info('abort done.');
      };
    });
    const promise = Promise.race([
      fetch(url, options),
      abortPromise,
    ]);
    promise.abort = abort;
    Object.defineProperty(promise, 'timeout', {
      set(ts) {
        if ((ts = +ts)) { // eslint-disable-line
          timeout = ts;
          setTimeout(abort, ts);
        }
      },
      get() {
        return timeout;
      },
    });
    return promise;
  }

  render() {
    return (
      <div>
        <Button type="primary" size="large" onClick={this.handlePromise}>handlePromise</Button>
        <Button type="primary" size="large" onClick={this.handleFetch}>handleFetch</Button>
        <Button type="primary" size="large" onClick={this.handleFetchAbort}>handleAbort</Button>
        <Button type="primary" size="large" onClick={this.handleFetchTimeOut}>handleTimeOut</Button>
      </div>
    );
  }
}

FetchPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(FetchPage);
