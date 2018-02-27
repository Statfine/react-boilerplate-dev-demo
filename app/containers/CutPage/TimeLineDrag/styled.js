import styled, { keyframes } from 'styled-components';
import { Icon } from 'antd';

export const Container = styled.div`
  width: 100%;
  background: rgb(51, 51, 51);
  padding: 0 10px;
`;

export const TimeContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TimeRow = styled.div`
  position: relative;
  height: 120px;
  padding-top: 33px;
  overflow: hidden;
`;

export const TimelineContainer = styled.div`
  position: relative;
  height: 60px;
`;

export const SecondsLine = styled.div`
  width: 100%;
  cursor: pointer;
  height: 12px;
  display: flex;
`;

export const Second = styled.div`
  position: relative;
  width: ${({ width }) => `${width}px`};
`;

export const SecondScale = styled.span`
content: " ";
height: 4px;
width: 1px;
background-color: rgb(102, 102, 102);
float: left;
transition: all .3s ease;
`;

export const SecondNumber = styled.span`
  margin-left: 2px;
  font-size: 10px;
  color: #999;
  position: absolute;
  top: -17px;
  left: -2px;
`;

export const SecondCurrentTime = styled.div`
  transform: ${({ transX }) => `translateX(${transX}px)`};
  position: absolute;
  height: 20px;
  line-height: 20px;
  background: #000;
  border-radius: 10px;
  padding: 0 5px;
  color: #00dfb0;
  top: 4px;
`;

export const SecondPointer = styled.div`
  position: absolute;
  height: 80px;
  width: 2px;
  background-color: #00dfb0;
  z-index: 10;
  margin-top: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: ${({ transX }) => `translateX(${transX}px)`};
  & > img {
    position: absolute;
    left: -4px;
    top: -16px;
    z-index: 99999;
    cursor: pointer;
  }
`;

const jumpA = keyframes`
  0% {top: -40px}
  20% {top: -25px}
  40% {top: -35px}
  60% {top: -25px}
  80% {top: -30px}
  100% {top: -25px}
`;
export const IconAnt = styled(Icon)`
  position: absolute;
  top: -40px;
  color: #00dfb0;
  animation: ${jumpA} 1.2s infinite ease-in-out both;
`;

export const VideoTime = styled.div`
  position: absolute;
  height: 20px;
  line-height: 20px;
  background: #000;
  border-radius: 10px;
  padding: 0 5px;
  color: #00dfb0;
  top: -26px;
`;

// transition: transform .5s ease,border .3s ease,width .5s ease,-webkit-transform .5s ease;
export const ItemVideo = styled.div`
  height: 60px;
  position: absolute;
  transition: ${({ dragDown }) => dragDown ? '' : 'transform .5s ease,border .3s ease,width .5s ease,-webkit-transform .5s ease'};
  border: 3px solid #000;
  width: ${({ width }) => `${width}px`};
  border-color: ${({ choosed, dragHover }) => dragHover ? '#00dfb0' : choosed ? '#FF8140' : '#D8D8D8'};
  border-radius: ${({ choosed }) => choosed ? '4px' : '4px'};
  transform: ${({ transformX }) => `translateX(${transformX}px)`};
`;

export const ItemCover = styled.div`
width: 100%;
height: 100%;
float: left;
background-size: auto 100%;
background-repeat: repeat-x;
position: relative;
overflow: hidden;
background-image: ${(props) => `url(${props.cover})`};
`;

export const ResizerSpan = styled.span`
  width: 9px;
  opacity: 1;
  cursor: col-resize;
  position: absolute;
  display: inline-block;
  height: 100%;
  background-color: #FF8140;
  transition: opacity .3s ease;
  z-index: 2;
  &::before {
    position: absolute;
    display: inline-block;
    content: " ";
    width: 1px;
    height: 10px;
    top: 22px;
    background-color: #fff;
    left: 3px;
  }
  &::after {
    position: absolute;
    display: inline-block;
    content: " ";
    width: 1px;
    height: 10px;
    top: 22px;
    background-color: #fff;
    right: 3px;
  }
`;

export const ResizerLeft = styled(ResizerSpan)`
  left: -3px;
  &::before {
    left: 3px;
  }
`;
export const ResizerRight = styled(ResizerSpan)`
  right: -3px;
  &::after {
    right: 3px;
  }
`;
