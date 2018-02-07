/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { BasePage } from 'containers/BasePage';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import 'particles.js';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { json } from './particlesJson';

const Container = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const Title = styled.p`
text-align: center;
font-size: 60px;
cursor: pointer;
position: absolute;
width: 100%;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
&:hover {
  color: #f7671d;
}
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    particlesJS('particles-js', json); // eslint-disable-line
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Statfine</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div id="particles-js" style={{ wdith: '100%', height: '100vh' }}></div>
        <Title onClick={() => this.context.history.push('/dashboard')}>
          <FormattedMessage {...messages.hello} />
        </Title>
        <div style={{ display: 'none' }}>
          <Header />
          <Container>
            <CenteredSection>
              <H2>
                <FormattedMessage {...messages.startProjectHeader} />
              </H2>
              <p>
                <FormattedMessage {...messages.startProjectMessage} />
              </p>
            </CenteredSection>
            <Section>
              <H2>
                <FormattedMessage {...messages.trymeHeader} />
              </H2>
              <Form onSubmit={this.props.onSubmitForm}>
                <label htmlFor="username">
                  <FormattedMessage {...messages.trymeMessage} />
                  <AtPrefix>
                    <FormattedMessage {...messages.trymeAtPrefix} />
                  </AtPrefix>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                  />
                </label>
              </Form>
              <ReposList {...reposListProps} />
            </Section>
          </Container>
        </div>
        <div style={{ display: 'none' }}><Footer /></div>
      </article>
    );
  }
}
HomePage.contextTypes = {
  history: PropTypes.object,
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BasePage(HomePage));
