import styled from 'styled-components';

export const VideoContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  cursor: default;
  canvas {
    cursor: pointer;
  }
`;

export const LoadingDiv = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  margin-top: -25px;
  margin-left: -25px;
`;

export const BtnContent = styled.div`
  position: absolute;
  left: 0;
  bottom: -30px;
  height: 30px;
  display: flex;
`;

export const NoContent = styled.div`
  color: #ff2b66;
  width: 200px;
  height: 42px;
  text-align: center;
  line-height: 40px;
  border: 2px #ff2b66 solid;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -21px;
  margin-left: -100px;
`;
