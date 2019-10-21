import styled from 'styled-components';
import { Icon } from 'antd';

export const ToolContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px;
`;


export const EachTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:90px;
  height:90px;
  border-radius:8px;
  border:1px solid rgba(217,217,217,1);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border:1px solid #b4b4b4;
  }
`;

export const EachToolImg = styled.img`
  width: 36px;
  height: 36px;
`;
export const EachToolP = styled.p`
  color: #333333;
  font-szie: 12px;
  margin-top: 4px;
`;

export const EffectVideoContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ToolHeaderDiv = styled.div`
  height: 22px;
  text-align: center;
  position: relative;
  font-size: 16px;
  padding: 24px;
`;

export const ToolHeaderBackIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  left: 24px;
  top: 26px;
  font-size: 18px;
`;

export const EffectDiv = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0 24px 48px 24px;
`;
