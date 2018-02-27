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
import AuthLoginPage from 'containers/AuthLoginPage/Loadable';
import WeiChatPage from '../WeiChatPage';

import Authentication from './Authentication';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends React.Component {
  getChildContext() {
    return { history: this.props.history }; // history  依赖withRouter
  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Authentication(HomePage)} />
          <Route path="/dashboard" component={Authentication(Dashboard)} />
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
