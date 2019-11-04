import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolFilterDiv = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0 24px 80px 24px;
`;

export const TabItem = styled.div`
  width: 68px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 16px;
  background: ${({ choosed }) => choosed ? '#EBEEEF' : '#fff'};
  cursor: pointer;
  margin-right: 16px;
`;

export const FilterList = styled(FlexDiv)`
  flex-wrap: wrap;
  padding: 0 6px;
`;

export const FilterItem = styled.div`
  width: 151px;
  margin-bottom: 16px;
  position: relative;

  &:nth-of-type(2n-1) {
    margin-right: 16px;
  }

  > p {
    text-align: center;
    margin-top: 8px;
  }
`;

export const FilterItemCover = styled.img`
  width: 151px;
  height: 113px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ choosed }) => choosed ? '2px solid #FF8140' : '1px solid #fff'};
`;

export const EachEffectDiv = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTitle = styled.p`
  color: #878787;
  width: 46px;
`;

export const RightDiv = styled.div`
  width: 40px;
`;
export const RightInput = styled.span`
  color: #333;
  outline: none;
  cursor: text;
  border-bottom: ${({ edit }) => edit ? '1px solid #333' : 'none'};
`;
