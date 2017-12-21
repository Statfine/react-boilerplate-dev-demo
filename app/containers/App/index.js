/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from 'containers/Dashboard';
import AuthLoginPage from 'containers/AuthLoginPage/Loadable';

import Authentication from './Authentication';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Authentication(HomePage)} />
        <Route path="/dashboard" component={Authentication(Dashboard)} />
        <Route path="/login" component={AuthLoginPage} />
        <Route path="/features" component={Authentication(FeaturePage)} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
