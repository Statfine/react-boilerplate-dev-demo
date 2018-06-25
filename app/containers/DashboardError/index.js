import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import CrossOrigin from './ErrorCrossOrigin/Loadable';

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const LeftNav = styled.div`
  width:180px;
  overflow-y: auto;
  position:fixed;
  height:100%;
  background:white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12);
  z-index:500;
  color:#364149;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const P = styled.div`
  height:48px;
  padding: 0 20px;
  line-height:48px;
  background:${({ selected }) => selected ? '#e9eef1' : 'unset'};
  border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #fff solid'};
  cursor:pointer;
  & svg {
    margin-right:10px;
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'} !important;
  }
  & div {npm i
    display: inline-block;
    color: ${({ selected }) => selected ? '#4885ed' : '#667485'};
  }
  &:hover {
    background: #e9eef1;
    border-right: ${({ selected }) => selected ? '4px #4885ed solid' : '4px #e9eef1 solid'};
  }
`;

const RightNav = styled.div`
  padding: 15px 20px 15px 200px;
  width: 100%;
`;

class DashboardError extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    imgSrc: '',
  }
  componentWillMount() {
    // TODO
  }

  onJump = (url) => {
    this.props.history.push(`${this.props.match.path}/${url}`);
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="SJ web"
        >
        </Helmet>
        <AppWrapper>
          <LeftNav>
            <P onClick={() => this.onJump('crossOrigin')} selected={location.pathname.startsWith('/dashboardError/crossOrigin')}>crossOrigin</P>
            <P onClick={() => this.props.history.push('/dashboardError')}>dashboard</P>
          </LeftNav>
          <RightNav>
            <Switch>
              <Route exact path={this.props.match.url} render={() => (<h3>Error</h3>)} />
              <Route path={`${this.props.match.path}/crossOrigin`} component={CrossOrigin} />
            </Switch>
          </RightNav>
        </AppWrapper>
      </div>
    );
  }
}

DashboardError.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default DashboardError;
