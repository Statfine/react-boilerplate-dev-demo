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

export const DivP = styled.div`
  display: flex;
  flex-wrap: wrap;
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
