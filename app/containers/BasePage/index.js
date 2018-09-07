import React, { PureComponent } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const BasePage = (ComposedComponent) => class extends PureComponent {
  saStartTime = 0;

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentWillMount() {
    NProgress.start();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate:', document.title);
  }

  componentDidMount() {
    NProgress.done();
    this.saStartTime = new Date();

    console.log('componentDidMount:', document.title);
    // _paq.push(['setCustomUrl', window.location.href]);
    // _paq.push(['setDocumentTitle', document.title]);
    // _paq.push(['trackPageView']);
  }

  componentWillUnmount() {
    const end = new Date();
    const duration = (end.getTime() - this.saStartTime.getTime()) / 1000;
    console.log('stay', duration);
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
