import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import RaisedButton from 'material-ui/RaisedButton';
import { Input, message } from 'antd';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AccessibilityIcon from 'material-ui/svg-icons/action/accessibility';

import Foot from 'components/Footer';
import { setLocal, getLocal } from '../../tool/localStorage';

import TimeLineDrag from '../CutPage/TimeLineDrag';

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

  componentWillMount() {
    setLocal('key', 'shaojia');
  }

  componentDidMount() {
    this.urlInput.focus();
    const KEY = getLocal('key');
    console.log('KEY', KEY);
    // alert(KEY);
    const SELF = window.self === window.top;
    console.log('SELF', SELF);
    // alert(SELF);
  }

  handleLogin = () => {
    const { name, password } = this.state;
    const { onUserLogin } = this.props;
    if (name.trim().length === 0) {
      message.error('用户名不得为空');
      return;
    }
    if (password.trim().length === 0) {
      message.error('密码不得为空');
      return;
    }
    if (password !== '309814872') {
      message.error('密码错误');
      return;
    }
    onUserLogin({ name, password });
  }

  renderOther = () => (
    <div>
      <TimeLineDrag />
      <Foot />
    </div>
  )

  render() {
    const { name, password } = this.state;
    const { requesting } = this.props;

    return (
      <Container>
        <AccessibilityIcon />
        <div style={{ display: 'block' }} id="login_from">
          <Input
            ref={(ref) => { this.urlInput = ref; }}
            placeholder="Basic usage"
            value={name}
            type="text"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <Input
            placeholder="Basic usage"
            value={password}
            type="password"
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <RaisedButton label="login登录" primary disabled={requesting} onClick={this.handleLogin} />
        </div>
        {/* {this.renderOther()} */}
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
