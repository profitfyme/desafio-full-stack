import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { makeSignUp } from '../factories/pages/signup/signup'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-up' exact component={makeSignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
