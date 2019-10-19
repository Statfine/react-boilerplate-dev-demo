import styled from 'styled-components';

export const Page = styled.div`
  padding-top: 48px;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TopContent = styled.div`
  flex: 1;
  display: flex;
  min-height: 312px;
`;
export const TopLeft = styled.div`
  width: 382px;
  background: #fff;
  border-right: 1px solid rgba(217,217,217,1);
`;
export const TopRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
export const PreviewDiv = styled.div`
  background: #fff;
  box-shadow:0px 1px 10px 0px rgba(0,0,0,0.08);
  position: relative;
`;

export const MiddleContent = styled.div`
  height: 40px;
  min-height: 40px;
  background: #fff;
  display: flex;
  box-shadow:0px 1px 10px 0px rgba(0,0,0,0.08);
  z-index: 1;
`;

export const BottomContent = styled.div`
  height: 132px;
  min-height: 132px;
  display: flex;
  z-index: 1;
`;

export const DevInfo = styled.div`
  position: fixed;
  top: 48px;
  left: 382px;
  width: 100%;
`;
