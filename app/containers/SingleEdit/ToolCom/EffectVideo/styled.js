import styled from 'styled-components';

export const EffectList = styled.div`
  margin-top: 33px;
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
export const RightTitle = styled.p`
  color: #333333;
  width: 40px;
`;
export const RightDiv = styled.div`
  width: 40px;
`;
export const RightInput = styled.span`
  color: #333333;
  outline: none;
  cursor: text;
  border-bottom: ${({ edit }) => edit ? '1px solid #333' : 'none'};
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  .ant-popover-inner-content{
    padding: 0
  }
`;

export const OverDiv = styled(FlexDiv)`
  width:36px;
  height:36px;
  border-radius:4px;
  border: ${({ choosed }) => `1px solid ${choosed ? '#FF8140' : '#D9D9D9'}`};
  margin-left: 16px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #FF8140;  
  }
`;

export const ColorDiv = styled.div`
  width:78px;
  height:32px;
  margin-left: 25px;
  text-align: center;
  line-height: 30px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  border-radius:4px;
  border: ${({ choosed }) => `1px solid ${choosed ? '#FF8140' : '#D9D9D9'}`};
  &:hover {
    border: ${({ disabled }) => `1px solid ${disabled ? '#D9D9D9' : '#FF8140'}`};
    color: ${({ disabled }) => disabled ? '#838383' : '#FF8140'};;
  }
`;

export const ColorBtn = styled(ColorDiv)`
  background: ${({ backgroundColor }) => backgroundColor}
`;

export const UplaodingContent = styled(FlexDiv)`
  flex-direction: row-reverse;
  margin-top: 10px;
`;

export const ImgTitle = styled.p`
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
  text-align: right;
`;

