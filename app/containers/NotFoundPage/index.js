/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function NotFound() {
  return (
    <Container>
      <img src="http://39.108.60.29/static/image/404.jpg" alt="" />
    </Container>
  );
}
