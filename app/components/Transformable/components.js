import styled from 'styled-components';

export const TransCtrl = styled.div`
  border: 1px dashed #4885ed;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const TranContainer = styled.div`
  left: 0px;
  top: 0px;
  z-index: ${(props) => props.disabled ? 100 : 1000};
  min-width: 30px;
  min-height: 30px;
  position: absolute;
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
  width: 7px;
  height: 7px;
  border: 1px solid #4885ED;
  background-color: rgba(255,255,255,0.8);
  display: inline-block;
  position: absolute;
  z-index: 10000;
`;

export const ArrowLeft = styled(Arrow)`
  left: -3px;
  top: calc(50% - 3px);
  cursor: w-resize;
`;

export const ArrowRight = styled(Arrow)`
  right: -3px;
  top: calc(50% - 3px);
  cursor: e-resize;
`;

export const ArrowTop = styled(Arrow)`
  top: -3px;
  left: calc(50% - 3px);
  cursor: n-resize;
`;

export const ArrowBottom = styled(Arrow)`
  bottom: -3px;
  left: calc(50% - 3px);
  cursor: s-resize;
`;

export const ArrowLeftTop = styled(Arrow)`
  left: -3px;
  top: -3px;
  cursor: nw-resize;
  // border-left: 3px solid #FFF;
  // border-top: 3px solid #FFF;
`;

export const ArrowRightTop = styled(Arrow)`
  right: -3px;
  top: -3px;
  cursor: ne-resize;
  // border-right: 3px solid #FFF;
  // border-top: 3px solid #FFF;
`;

export const ArrowBottomLeft = styled(Arrow)`
  bottom: -3px;
  left: -3px;
  cursor: sw-resize;
  // border-bottom: 3px solid #FFF;
  // border-left: 3px solid #FFF;
`;

export const ArrowBottomRight = styled(Arrow)`
  bottom: -3px;
  right: -3px;
  cursor: se-resize;
  // border-bottom: 3px solid #FFF;
  // border-right: 3px solid #FFF;
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
