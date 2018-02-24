import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  background: rgb(51, 51, 51);
`;

export const TimeContainer = styled.div`
  position: relative;
  height: 100px;
  padding: 20px 0;
`;

export const TimelineContainer = styled.div`
  position: relative;
  height: 60px;
  overflow: hidden;
`;

// transition: transform .5s ease,border .3s ease,width .5s ease,-webkit-transform .5s ease;
export const Item = styled.div`
  height: 60px;
  position: absolute;
  transition: ${({ dragDown }) => dragDown ? '' : 'transform .5s ease,border .3s ease,width .5s ease,-webkit-transform .5s ease'};
  border: 3px solid #000;
  width: ${({ width }) => `${width}px`};
  border-color: ${({ choosed }) => choosed ? '#00dfb0' : 'transparent'};
  border-radius: ${({ choosed }) => choosed ? '5px' : '0'};
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
  background-color: #00dfb0;
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
