import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Com = styled.div`
  position: relative;
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  border-radius: 2px;
`;

const OpenAction = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  height: 20px;
  displat: flex;
  align-items: center;
  font-size: 14px;
  color: #4285F4;
  cursor: pointer;
`;

export default class FoldCom extends PureComponent {
  state = {
    open: false,
  }

  componentWillMount() {
    this.setState({ open: this.props.open });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ open: this.props.open });
    }
  }

  render() {
    const { open } = this.state;
    const { className, HeaderNode, ContentNode } = this.props;
    return (
      <Com className={className}>
        { HeaderNode }
        <div style={{ display: open ? 'block' : 'none' }}>{ ContentNode }</div>
        <OpenAction onClick={() => this.setState({ open: !open })}>{open ? '收起' : '显示全部'}</OpenAction>
      </Com>
    );
  }
}

FoldCom.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  HeaderNode: PropTypes.node,
  ContentNode: PropTypes.node,
};
