import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const CoverContaier = styled.div`
  width: 300px;
`;

export const CoverContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 250px;
  margin-top: 8px;
  overflow-y: auto;
`;

export const CoverPic = styled.div`
  width: 52px;
  height: 52px;
  border: ${({ choosed }) => `1px solid ${choosed ? '#ff8140' : ''}`};
  text-indent: 10px;
  line-height: 20px;
  margin: 5px 10px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  cursor: pointer;
`;

export const MosaicPicContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const ImgContent = styled.div`
  position: relative;
  cursor: pointer;
  > img {
    width: 114px;
    height: 60px;
    margin: 0 10px;
  }
`;

export const VideoContent = styled.div`
  width: 424px;
  height: 326px;
  margin: 0 20px;
  display: block;
  position: relative;
`;

export const Video = styled.video`
  width: 424px;
  height: 326px;
`;

export const Select = styled.div`
  left: ${({ item }) => `${item.x}px`};
  top: ${({ item }) => `${item.y}px`};
  width: ${({ item }) => `${item.w}px`};
  height: ${({ item }) => `${item.h}px`};
  background: rgba(0, 0, 0, 1);
  position: absolute;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const DataList = styled.div`
  width: 300px;
  border: 1px soild #e9e9e9;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
  border-radius: 1px;
`;

export const TopAction = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
`;

export const DataListHeader = styled.div`
  display: flex;
  background: #EFEFEF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
  border-radius: 1px 1px 0 0;
  height: 30px;
  align-items: center;
  padding: 0 5px;
`;

export const Item = styled.div`
  width: ${({ width }) => `${width}px`}
`;

export const ListContent = styled.div`
  height: 330px;
  overflow-y: auto;;
`;

export const List = styled.div`
display: flex;
height: 40px;
justify-content: center;
align-items: center;
padding: 0 5px;
cursor: pointer;
border: ${({ choosed }) => `1px solid ${choosed ? '#ff8140' : '#E9E9E9'}`};
&:last-child {
  border: 1px solid transparent;
}
`;

export const DeleteP = styled.div`
  cursor: pointer;
  &:hover{
    color: #ff8140;
  }
`;
