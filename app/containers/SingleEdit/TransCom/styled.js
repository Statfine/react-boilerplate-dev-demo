import styled from 'styled-components';
import { MIN_WIDTH } from './config';

export const TransCtrl = styled.div`
  border: 2px dashed #FF8140;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const TranContainer = styled.div`
  left: 0;
  top: 0;
  z-index: ${(props) => props.disabled ? props.zIndex : 100};
  min-width: ${MIN_WIDTH}px;
  min-height: ${({ transScale }) => transScale ? `${MIN_WIDTH / transScale}px` : `${MIN_WIDTH}px`};
  position: absolute;
  cursor: ${(props) => props.disabled ? 'pointer' : 'move'};

  &:focus {
    border: none;
    outline: none;
  }
`;

export const ContrlArrow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Arrow = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #FF8140;
  display: inline-block;
  position: absolute;
  z-index: 10000;
`;

export const ArrowLeft = styled(Arrow)`
  left: -7px;
  top: calc(50% - 7px);
  cursor: w-resize;
`;

export const ArrowRight = styled(Arrow)`
  right: -7px;
  top: calc(50% - 7px);
  cursor: e-resize;
`;

export const ArrowTop = styled(Arrow)`
  top: -7px;
  left: calc(50% - 8px);
  cursor: n-resize;
`;

export const ArrowBottom = styled(Arrow)`
  bottom: -7px;
  left: calc(50% - 8px);
  cursor: s-resize;
`;

export const ArrowLeftTop = styled(Arrow)`
  left: -7px;
  top: -7px;
  cursor: nw-resize;
`;

export const ArrowRightTop = styled(Arrow)`
  right: -7px;
  top: -7px;
  cursor: ne-resize;
`;

export const ArrowBottomLeft = styled(Arrow)`
  bottom: -7px;
  left: -7px;
  cursor: sw-resize;
`;

export const ArrowBottomRight = styled(Arrow)`
  bottom: -7px;
  right: -7px;
  cursor: se-resize;
`;

export const Rotate = styled.p`
  width: 8px;
  height: 25px;
  position: absolute;
  left: 50%;
  top: -25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoDrag = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  cursor: move;
  background-color: #FFF;
  border-radius: 50%;
`;

export const Line = styled.span`
  width: 1px;
  flex: 1;
  border: 1px dashed #FFF;
`;

export const BaseLineX = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px dashed #FF8140;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -1px;
  z-index: 99;
`;

export const BaseLineY = styled.div`
  width: 2px;
  height: 100%;
  border-left: 1px dashed #FF8140;
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -1px;
  z-index: 99;
`;

// {
//   position: relative;
//   &:before {
//     content: '';
//     width: 100%;
//     height: 2px;
//     border-top: 1px dashed #FF8140;
//     position: absolute;
//     left: 0;
//     top: 50%;
//     margin-top: -1px;
//     z-index: 99;
//   }
//   &:after {
//     content: '';
//     width: 2px;
//     height: 100%;
//     border-left: 1px dashed #FF8140;
//     position: absolute;
//     left: 50%;
//     top: 0;
//     margin-left: -1px;
//     z-index: 99;
//   }
// }
