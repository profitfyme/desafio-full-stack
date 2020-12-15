import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes/route'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../presentation/styles/global'
import theme from '../presentation/styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>

  )
}

ReactDOM.render(<App />, document.getElementById('main'))
