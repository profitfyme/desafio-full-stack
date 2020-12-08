import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    width: 1440px;
    height: 100vh;
    background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%);
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
