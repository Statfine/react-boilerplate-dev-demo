/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import styled from 'styled-components';

const Btn = styled.button`
  width: auto;
  padding: 0 20px;
  height: 30px;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  border-radius: 2px;
  display: block;
  text-align: center;
  background: ${(props) => (props.disabled ? '#fbbd9e' : '#ff8140')};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    background: ${(props) => (props.disabled ? '#fbbd9e' : '#f7671d')};
  }
`;

const WhiteBtn = styled.button`
  width: auto;
  padding: 0 20px;
  height: 30px;
  color: ${(props) => (props.disabled ? '#808080' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  border-radius: 2px;
  display: block;
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    border: 1px solid #cccccc;
  }
`;

const DefaultButton = ({ label, theme, className, disabled, ...ohter }) =>
  theme === 'white' ? (
    <WhiteBtn
      className={className}
      theme={theme}
      disabled={disabled}
      {...ohter}
    >
      {label}
    </WhiteBtn>
  ) : (
    <Btn className={className} theme={theme} disabled={disabled} {...ohter}>
      {label}
    </Btn>
  );

DefaultButton.propTypes = {
  label: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default pure(DefaultButton);
