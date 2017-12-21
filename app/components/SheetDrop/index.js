import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const inlineStyle = {
  dropStyle: {
    minWidth: '80px',
    height: '36px',
    lineHeight: '36px',
    color: '#444444',
    fontSize: '14px',
    borderRadius: '2px',
  },
  dropBorderStyle: {
    minWidth: '80px',
    height: '36px',
    lineHeight: '36px',
    color: '#444444',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '2px',
  },
  underlineStyle: {
    border: 'none',
  },
  labelStyle: {
    lineHeight: '36px',
    color: '#444444',
    overflow: 'hidden',
  },
  iconStyle: {
    marginTop: '-10px',
    fill: '#999999',
  },
  none: {
    display: 'none',
  },
};

class SheetDrop extends Component {   // eslint-disable-line    react/prefer-stateless-function

  handleChangeValue = (e, index, value) => this.props.onChange(value);

  renderMenuItem = (menuItem) =>
    menuItem.map((item) =>
      <MenuItem title={item.text} key={item.value} value={item.value} primaryText={item.text} />
    );

  render() {
    const { value, menuItem, defaultValue, defaultLabel, labelStyle, dropStyle, iconStyle, disabled, className } = this.props;
    return (
      <DropDownMenu
        className={className}
        value={value !== undefined ? value : defaultValue}
        style={Object.assign({}, inlineStyle.dropStyle, dropStyle)}
        underlineStyle={inlineStyle.underlineStyle}
        labelStyle={Object.assign({}, inlineStyle.labelStyle, labelStyle)}
        iconStyle={Object.assign({}, inlineStyle.iconStyle, iconStyle)}
        onChange={this.handleChangeValue}
        disabled={disabled}
      >
        {
          defaultLabel && <MenuItem value={defaultValue} primaryText={defaultLabel} style={inlineStyle.none} />
        }
        {this.renderMenuItem(menuItem)}
      </DropDownMenu>
    );
  }
}

SheetDrop.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]
  ),
  defaultValue: PropTypes.string,
  defaultLabel: PropTypes.string,
  menuItem: PropTypes.array,
  onChange: PropTypes.func,
  labelStyle: PropTypes.object,
  dropStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default SheetDrop;
