import styled from 'styled-components';

export const Wrap = styled.h4`
  border: 1px solid #ff8140;
  padding: 0 68px;
  @media screen and (max-width: 1280px) {
    border: 1px solid #4885ed;
    padding: 0 28px;
  }
  > .inputSearch input {
    border-radius: 20px;
  }
`;

export const ListCotainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: calc(100% / 5 - 24px);
  margin: 24px 12px 0;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 8px 0px rgba(0,0,0,0.05);
  border-radius:4px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const VideoCotent = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: #000;
  position: relative;
`;

export const CoverBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  display: none;
  transition: 800ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

export const TopTip = styled.div`
  width: 100%;
  position: absolute;
  padding: 8px;
  top: 0;
  left: 0;
  display: flex;
`;

export const ChoicenessDiv = styled.div`
  height:24px;
  line-height: 24px;
  padding: 0 8px;
  font-size:12px;
  color: #fff;
  background:rgba(255, 129, 64, 0.8);
  border-radius:2px;
  margin-right: 8px;
`;

export const BottomTop = styled.div`
  width: 100%;
  position: absolute;
  padding: 8px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between
`;

export const AddFolderPng = styled.img`
  width: 24px;
  height: 24px;
`;

export const DataContent = styled.div`
  width: 100%;
  height: 159px;
  padding: 12px;
`;

export const PriceContent = styled.div`
  display: flex;
`;

export const PriceP = styled.p`
  font-size:16px;
  color: #FF8140;
  > span {
    font-size:12px;
  }
`;

export const DefaultPrice = styled.p`
  font-size: 12px;
  color: #999;
  padding-top: 5px;
  margin: 0 9px;
  text-decoration: ${({ dislable }) => dislable ? 'line-through' : 'none'};
`;

export const PriceLimit = styled.div`
  font-size:12px;
  font-weight:400;
  width:40px;
  height:18px;
  line-height:18px;
  text-align: center;
  background:rgba(255,129,64,1);
  color:rgba(255,255,255,1);
  border-radius:11px;
`;

export const TitleP = styled.p`
  font-size:12px;
  font-weight:400;
  color:rgba(51,51,51,1);
  margin: 9px 0;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
`;

export const TimeAndTag = styled.div`
  display: flex;
  justify-content: space-between;
  color: #808080;
  padding-bottom: 9px;
  border-bottom: 1px solid #d9d9d9;
`;

export const TagsP = styled.p`
  flex: 1;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1; 
`;

export const TimeP = styled.p`
  max-width: 100px;
`;

export const BugAndShare = styled.div`
  display: flex;
  padding: 12px 0;
`;

export const ActionBtn = styled.div`
  display: flex;
  color: #333333;
  margin-right: 24px;
  & > .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-image: url(${(props) => props.background});
    background-size: contain;
    background-position: center;
  }
  &:hover > .icon {
    background-image: url(${(props) => props.backgroundHover});
  }
  &:hover {
    color: #ff8140;
  }
`;

export const AnasyContent = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border-top: 1px solid #D9D9D9;
  color: #999;
  > span {
    color: #333;
    margin-left: 8px;
  }
`;
