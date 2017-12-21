import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AccessibilityIcon from 'material-ui/svg-icons/action/accessibility';

import { userLogin } from './actions';
import { selectRequesting } from './selectors';
import reducer from './reducer';
import saga from './sagas';

const Container = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class AuthLoginPage extends PureComponent {
  state = {
    name: '',
    password: '',
  }

  render() {
    const { name, password } = this.state;
    const { onUserLogin, requesting } = this.props;

    // if (false) return 'list';
    // if (true) return [
    //   <li key="A">First item</li>,
    //   <li key="B">Second item</li>,
    //   <li key="C">Third item</li>,
    // ];

    return (
      <Container>
        <AccessibilityIcon />
        <TextField
          id="login_name"
          value={name}
          type="text"
          onChange={(e, newValue) => this.setState({ name: newValue })}
        />
        <TextField
          id="login_possword"
          value={password}
          type="password"
          onChange={(e, newValue) => this.setState({ password: newValue })}
        />
        <RaisedButton label="login登录" primary disabled={requesting} onClick={() => onUserLogin({ name, password })} />
      </Container>
    );
  }
}

AuthLoginPage.propTypes = {
  onUserLogin: PropTypes.func,
  requesting: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    onUserLogin: (...arg) => dispatch(userLogin(...arg)),
  };
}

const mapStateToProps = createStructuredSelector({
  requesting: selectRequesting(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthLoginPage);
