/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import DashboardError from 'containers/DashboardError/Loadable';
import AuthLoginPage from 'containers/AuthLoginPage/Loadable';
import WeiChatPage from '../WeiChatPage';

import Authentication from './Authentication';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: repeat;
`;

const SCALE = 1.4;
class App extends React.Component {
  state = {
    pavedSrc: '',
  }
  getChildContext() {
    return { history: this.props.history }; // history  依赖withRouter
  }
  componentWillMount() {
    // this.pavedText();
  }

  pavedText = () => {
    const inlineCanvas = document.createElement('canvas');
    const inlineCtx = inlineCanvas.getContext('2d');

    inlineCanvas.width = 200;
    inlineCanvas.height = 200;

    inlineCtx.font = '24px katong';
    inlineCtx.fillStyle = '#e9e9e9';
    inlineCtx.fillRect(0, 0, 200, 200);

    inlineCtx.fillStyle = '#fff';
    inlineCtx.textAlign = 'center';
    inlineCtx.textBaseline = 'top';
    inlineCtx.fillText('水印水印', (inlineCanvas.width / 2), ((200 - (24 * SCALE)) / 2));

    inlineCtx.translate(inlineCanvas.width / 2, inlineCanvas.height / 2);
    inlineCtx.rotate(0.5);
    inlineCtx.drawImage(
      inlineCanvas,
      -(inlineCanvas.width / 2),
      -(inlineCanvas.height / 2)
    );
    inlineCtx.translate(0, 0);
    inlineCtx.restore();

    const base64 = inlineCanvas.toDataURL('image/png', 1);
    console.log(base64);
    this.setState({ pavedSrc: base64 });
  }

  render() {
    const { pavedSrc } = this.state;
    return (
      <AppWrapper src={pavedSrc}>
        <Helmet
          titleTemplate="%s - React.js"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Authentication(HomePage)} />
          <Route path="/dashboard" component={Authentication(Dashboard)} />
          <Route path="/dashboardError" component={Authentication(DashboardError)} />
          <Route path="/login" component={AuthLoginPage} />
          <Route path="/features" component={Authentication(FeaturePage)} />
          <Route path="/weichat" component={WeiChatPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    );
  }
}

App.childContextTypes = {
  history: PropTypes.object,
};
App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
