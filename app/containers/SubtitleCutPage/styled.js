import styled from 'styled-components';

export const Container = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
`;

export const VideoContent = styled.div`
  width: 777px;
  height: 525px;
  position: relative;
  background-color: #000000;
`;

export const SubtitleContent = styled.div`
  width: 383px;
  height: 525px;
  background: #bdc3c7;
  overflow-y: scroll;
  position: relative;
  padding: 10px 16px;
`;

//   background-image: ${({ src }) => `url(${src});`};
export const ImgAd = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 20px;
  width: 160px;
  height: auto;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Item = styled.div`
  line-height: 24px;
  list-style: none;
  color: #515151;
  cursor: pointer;
  position: relative;
  background: ${({ choosed }) => choosed ? '#a4adb0' : '#bdc3c7'};
  & a{
    color: #4885ed;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  user-select: none;
`;

export const WordDiv = styled.div`
  position: relative;
  user-select: none;
`;
export const WordP = styled.div`
  user-select: none;
  ${({ choosed }) => choosed ? (
    `
      background: #c5dcf5;
    `
  ) : (
    `
      background: transparent;
    `
  )}
`;
export const Pointer = styled.div`
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #ff8140;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 0;
  cursor: pointer;
  z-index: 999;

  &::after {
    top: 0;
    position: absolute;
    border-radius: 50%;
    content: '';
    height: 8px;
    width: 8px;
    left: -3px;
  }
`;
export const StartPoint = styled(Pointer)`
  background-color: #ff8140;
  left: 0;

  &::after {
    background-color: #ff8140;
  }
`;

export const EndPoint = styled(Pointer)`
  background-color: #4885ed;
  right: 0;

  &::after {
    background-color: #4885ed;
  }
`;

export const Popover = styled.div`
  position: absolute;
  top: ${({ second }) => second ? '52px' : '28px'};
  width: 177px;
`;

export const PopoverArrow = styled.div`
  background: #fff;
  width: 7.07106781px;
  height: 7.07106781px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  display: block;
  border-color: transparent;
  border-style: solid;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  top: -4px;
  box-shadow: 3px 3px 7px rgba(0,0,0,.07);
  z-index: 99;
`;

//   background-image: ${({ cover }) => `url(${cover});`};
export const PopoverCover = styled.img`
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.15);
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  width: 177px;
  height: auto;
  position: absolute;
  z-index: 999;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SubtitleDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px 0;
`;

export const EachDiv = styled.div`
  flex: ${({ flex }) => flex};
`;
