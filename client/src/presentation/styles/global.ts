import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  body {  
    height: 100vh;
    background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%); 
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.font.family}
    font-size: ${theme.font.sizes.medium}     
  }
  
  `}

  
`

export default GlobalStyles
