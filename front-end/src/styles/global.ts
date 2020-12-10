import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    min-width: 1440px;
    min-height: 1269px;
    background: linear-gradient(0deg, rgba(93, 199, 77, 0.8), rgba(93, 199, 77, 1));
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    font-family: 'Open Sans', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
