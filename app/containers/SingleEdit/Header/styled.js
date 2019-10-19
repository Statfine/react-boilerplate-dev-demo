import styled from 'styled-components';
import DefaultButton from 'components/DefaultButton';

export const HeaderConotent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  width: 100%;
  padding: 0 24px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 6px 0px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectNameContent = styled(FlexDiv)`
  justify-content: center;
  width: 50%;
`;

export const ProjectNameP = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
`;

export const SaveBtn = styled(DefaultButton)`
  width: 70px;
  border-width: 0;
  box-shadow: none;
  color: #666666;
  padding: 0;
  margin-right: 24px;
`;
export const ShareBtn = styled(DefaultButton)`
  border-radius: 100px;
  transition: all .3s;
  padding: 0 20px;
`;
