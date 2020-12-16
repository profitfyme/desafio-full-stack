import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApiContext } from '../../presentation/context/index'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '../adapters/current-account-adapter'
import PrivateRoute from '../../presentation/components/private-route'

import { makeSignUp } from '../factories/pages/signup/signup'
import { makeLogin } from '../factories/pages/login/login'

const teste = (): any => {
  return (
    <div style={{ fontSize: '30px', alignContent: 'center' }}>Logado!</div>
  )
}

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path='/sign-up' exact component={makeSignUp} />
          <Route path='/login' exact component={makeLogin} />
          <PrivateRoute path='/' exact component={teste} />
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
