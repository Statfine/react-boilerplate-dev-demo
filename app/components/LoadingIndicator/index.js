import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
export const Loading = styled.div`
  disply: flex;
  align-items: center;
  margin-top: 60px;
  justify-content: center;
`;

const LoadingIndicator = () => (
  <Loading>
    <Spin />
  </Loading>
);

export default LoadingIndicator;
