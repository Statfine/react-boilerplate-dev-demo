import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ToolChartletDiv = styled.div`
  height: 100%;
`;

export const AddPicDiv = styled(FlexDiv)`
  justify-content: center;
  margin: 33px 0;
`;

export const EffectList = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0 24px 180px 24px;
`;

export const EachListDiv = styled.div`
  border-bottom: 1px solid #D9D9D9;
  padding: 16px 0;
`;

export const ChartLetTop = styled(FlexDiv)`
`;
export const ChartLetBottom = styled(FlexDiv)`
  margin-top: 12px;
`;

export const NumberP = styled.p`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  background: ${({ choosed }) => choosed ? '#FF8140' : '#fff'};
  border: ${({ choosed }) => choosed ? '1px solid #fff' : '1px solid rgba(51, 51, 51, 1)'};
  color: ${({ choosed }) => choosed ? '#fff' : '#000000'};
`;

export const ImgNameP = styled.p`
  width: 130px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
