import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const defaultContainer = document.body;

export default class Portal extends React.Component {
  componentDidMount() {
    this.setMountNode(this.props.container);

    // 没有禁用portal属性时，手动触发更新
    if (!this.props.disablePortal) {
      this.forceUpdate();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.container !== (this.props.container || this.mountNode) ||
      prevProps.disablePortal !== this.props.disablePortal
    ) {
      this.setMountNode(this.props.container);
    }
  }

  getContainer = (container) => {
    const getContainer = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(getContainer) || defaultContainer; // eslint-disable-line
  }

  setMountNode = (container) => {
    if (this.props.disablePortal) {
      this.mountNode = ReactDOM.findDOMNode(this).parentElement; // eslint-disable-line
      return;
    }
    this.mountNode = this.getContainer(container);
  }

  render() {
    const { children, disablePortal } = this.props;
    if (disablePortal) {
      return children;
    }
    return this.mountNode ? ReactDOM.createPortal(children, this.mountNode) : null;
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  disablePortal: PropTypes.bool,
};
