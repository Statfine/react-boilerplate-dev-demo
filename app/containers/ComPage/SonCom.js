import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Sonpage extends PureComponent {

  componentDidUpdate() {
    console.log('renderSom componentDidUpdate');
  }

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
