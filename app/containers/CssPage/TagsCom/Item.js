import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  border-bottom: ${({ zIndex }) => zIndex === 0 ? '1px solid red' : zIndex === 1 ? '1px solid #4885ed' : '1px solid #e9e9e9'}
`;

export default class TagsCom extends PureComponent {
  state = {};
  render() {
    const { data, zIndex } = this.props;
    return (
      <Container zIndex={zIndex}>
        <div>{data.title}</div>
        <div style={{ display: (data.childs && data.childs.length > 0) ? 'block' : 'flex' }}>
          {(data.childs && data.childs.length > 0) &&
            data.childs.map((item) => (<TagsCom key={item.key} data={item} zIndex={zIndex + 1} />))}
        </div>
      </Container>
    );
  }
}

TagsCom.propTypes = {
  data: PropTypes.object,
  zIndex: PropTypes.number,
};

