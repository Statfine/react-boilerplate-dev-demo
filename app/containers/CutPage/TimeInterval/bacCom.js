
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ImageRe = styled.div`
  background-image: url('${({ src }) => src}');
  background-repeat: repeat;
`;

function CoverBac(props) {
  return (
    <ImageRe className={props.className} src={props.src} alt="logo" />
  );
}

// class CoverBac extends React.PureComponent {

//   shouldComponentUpdate() {
//     return false;
//   }
//   render() {
//     const { className, src } = this.props;
//     return (
//       <ImageRe className={className} src={src} alt="logo" />
//     );
//   }
// }

CoverBac.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
};

export default CoverBac;
