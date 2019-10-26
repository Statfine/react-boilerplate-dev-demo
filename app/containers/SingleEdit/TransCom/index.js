/**
 * 拖拽
 *  加载所有拖动特效
 */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import TransVideo from './TransVideo';
import TransChartlet from './TransChartlet';

export const TransCtrl = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    display: ${({ showBaseLineX }) => showBaseLineX ? 'block' : 'none'};
    width: 100%;
    height: 2px;
    border-top: 1px dashed #FF8140;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1px;
    z-index: 99;
  }
  &:after {
    content: '';
    display: ${({ showBaseLineY }) => showBaseLineY ? 'block' : 'none'};
    width: 2px;
    height: 100%;
    border-left: 1px dashed #FF8140;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1px;
    z-index: 99;
  }
`;

class TransDiv extends PureComponent {
  state = {
    isShowBaseLineX: false,
    isShowBaseLineY: false,
  }

  render() {
    const { isShowBaseLineX, isShowBaseLineY } = this.state;
    return (
      <TransCtrl
        showBaseLineX={isShowBaseLineX}
        showBaseLineY={isShowBaseLineY}
      >
        <TransVideo
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
        />
        <TransChartlet
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
        />
      </TransCtrl>
    );
  }
}

export default TransDiv;
