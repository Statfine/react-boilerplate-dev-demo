import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Sonpage extends PureComponent {

  shouldComponentUpdate() {
    return false;
  }

  componentDidUpdate() {
    console.log('renderSom componentDidUpdate');
  }

  render() {
    const { index, name, aaa } = this.props;
    console.log(`${name} - renderSom`);
    return (
      <div>{index + aaa}</div>
    );
  }
}
Sonpage.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  aaa: PropTypes.string,
};
