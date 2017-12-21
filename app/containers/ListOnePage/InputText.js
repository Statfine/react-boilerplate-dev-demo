import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class InputText extends PureComponent {

//   shouldComponentUpdate(nextProps, nextState) { // eslint-disable-line
//     return false;
//   }

  render() {
    // console.log('InputTextrender');
    return (
      <TextField
        id={this.props.id}
        value={this.props.value}
        onChange={(e, newValue) => this.props.onChange(e, newValue)}
      />
    );
  }
}

InputText.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
};
