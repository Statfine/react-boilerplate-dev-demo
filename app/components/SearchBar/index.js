/**
*
* SearchBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionSearch from 'material-ui/svg-icons/action/search';

const SearchBarContainer = styled.div`
  position: relative;
  height: 32px;
  ${({ dark }) =>
  dark
    ? 'background: #1c2849;'
    : 'background: #f5f5f5;'}
  
  border-radius: 2px;
`;

const SearchInput = styled.input`
  width: 100%;
  ${({ dark }) =>
    dark
      ? 'color:#8790a7'
      : 'border: 1px solid #E3E3E3;color: #454545;'} border-radius: 1px;
  height: 32px;
  padding: 0 35px 0 8px;
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2px;
  &:focus {
    border-color: #0081ff;
    transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
`;
const SearchIcon = styled.span`
  position: absolute;
  left: calc(100% - 32px);
  right: 0;
  text-align: center;
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  top: 0px;
`;

function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder,
  className,
  width,
  dark,
}) {
  return (
    <SearchBarContainer dark={dark} className={className} style={width}>
      <SearchInput
        dark={dark}
        placeholder={
          placeholder === undefined || placeholder === null ? '搜索' : placeholder
        }
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch();
          }
        }}
      />
      <SearchIcon onClick={onSearch}>
        <ActionSearch
          color={dark ? '#8790a7' : '#B8C2CC'}
          hoverColor={'#454545'}
        />
      </SearchIcon>
    </SearchBarContainer>
  );
}

SearchBar.propTypes = {
  dark: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.object,
};

SearchBar.defaultProps = {
  width: {
    width: '180px',
  },
};

export default SearchBar;
