import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,body {
    height: 100%;
    width: 100%;
    padding: 0;  
    margin: 0; 
    font-size: 14px;
  }

  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto, Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  

  #app {
    background-color: #EBEFF2;
    height: 100%;
    width: 100%;
  }
  body,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form {
    margin: 0;
  }
  ol, li, ul {
    margin: 0;
    padding: 0;
  }
  input,
  button {
    outline: none;
  }
  hr {
    display: none;
  }
  span {
    -webkit-appearance: none !important;
  }
  li {
    list-style:none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
      -webkit-appearance: none !important;
      margin: 0; 
  }
  input[type="number"]{-moz-appearance:textfield;}
  .align-right {
    text-align: right !important;
  }
  .align-center {
    text-align: center !important;
  }
  .align-left {
    text-align: left !important;
  }
  .public-DraftStyleDefault-block {
    white-space: nowrap;
    overflow: hidden;
  }
`;
