import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRefreshTokenRequesting } from './selectors';
import { refreshToken } from './actions';

const localStorage = global.window.localStorage;
export default function Authentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.refreshTokenRequesting);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.refreshTokenRequesting);
    }

    checkAuth = (refreshTokenRequesting) => {
      const { onRrefreshToken } = this.props;
      if (this.ownUser()) return true;
      if (!localStorage.refresh_token) return this.props.history.push('/login');
      if (!refreshTokenRequesting) onRrefreshToken();
      return false;
    }

    ownUser = () => localStorage.access_token && Date.now() < localStorage.expires_in - (1000 * 60 * 60);

    render() {
      const { refreshTokenRequesting } = this.props;
      return (
        <div>
          {!refreshTokenRequesting && this.ownUser() ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    history: PropTypes.object,
    refreshTokenRequesting: PropTypes.bool,
    onRrefreshToken: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    refreshTokenRequesting: selectRefreshTokenRequesting(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      onRrefreshToken: () => dispatch(refreshToken()),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
