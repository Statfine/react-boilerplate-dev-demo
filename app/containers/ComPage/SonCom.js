import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Sonpage extends PureComponent {
  render() {
    const { index } = this.props;
    console.log('renderSom');
    return (
      <div>{index}</div>
    );
  }
}
Sonpage.propTypes = {
  index: PropTypes.number,
};
