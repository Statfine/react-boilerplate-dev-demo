import styled from 'styled-components';

export const ToastContent = styled.div`
  position: relative;
  z-index: 9999;
  background-color: rgba(17, 17, 17, 0.267);
`;

export const ToastBox = styled.div`
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 13px;
  padding: 4px 5px;
  background-color: rgb(43, 43, 43);
  border-radius: 3px;
  opacity: 0.7;
  `;

// @-webkit-keyframes loading {
//   0% {
//     -webkit-transform: rotate3d(0, 0, 1, 0deg);
//     transform: rotate3d(0, 0, 1, 0deg);
//   }
//   100% {
//     -webkit-transform: rotate3d(0, 0, 1, 360deg);
//     transform: rotate3d(0, 0, 1, 360deg);
//   }
// }

// @keyframes loading {
//   0% {
//     -webkit-transform: rotate3d(0, 0, 1, 0deg);
//     transform: rotate3d(0, 0, 1, 0deg);
//   }
//   100% {
//     -webkit-transform: rotate3d(0, 0, 1, 360deg);
//     transform: rotate3d(0, 0, 1, 360deg);
//   }
// }

