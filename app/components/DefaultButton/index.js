/**
 * Button
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  width: 136px;
  height: 46px;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  display: block;
  text-align: center;
  background: ${(props) => props.disabled ? '#bdbdbd' : '#4885ed'};
`;

const DefaultButton =
  ({ label, className, disabled, ...ohter }) =>
    (<Btn className={className} disabled={disabled} {...ohter}>
      {label}
    </Btn>);

DefaultButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default DefaultButton;
