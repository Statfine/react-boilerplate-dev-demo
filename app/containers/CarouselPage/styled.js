import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ccc;
`;
export const SlideBox = styled.div`
  width: 50%;
  height: 15vw;
  margin: 0 auto;
  position: relative;
  background: #ccc;
`;
export const Slide = styled.div`
position: absolute;
transition: all 0.5s ease-in-out;
user-select: none;
&:hover{
  cursor: pointer;
}
& img {
  width: 100%;
}
`;
export const Masking = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  // transition: all 0.3s 0.2s linear;
`;
