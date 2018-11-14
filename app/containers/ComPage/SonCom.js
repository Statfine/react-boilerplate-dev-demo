import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Sonpage extends PureComponent {

  render() {
    const { index, name } = this.props;
    console.log(`${name} - renderSom`);
    return (
      <div>{index}</div>
    );
  }
}
Sonpage.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
};

// const Sonpage = ({ index }) => <div>{index}</div>;

// Sonpage.propTypes = {
//   index: PropTypes.number,
// };

// export default Sonpage;
