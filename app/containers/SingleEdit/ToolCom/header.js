/**
 *
 * ToolCom 工具箱
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeaderDiv, ToolHeaderBackIcon } from './styled';

export default function ToolHeader({ title, handleBack }) {
  return (
    <ToolHeaderDiv>
      <p>{title}</p>
      <ToolHeaderBackIcon type="arrow-left" onClick={handleBack} />
    </ToolHeaderDiv>
  );
}

ToolHeader.propTypes = {
  handleBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
