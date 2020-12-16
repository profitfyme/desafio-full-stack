import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '../../usecases/remote-authentication-factory'
import Login from '../../../../presentation/pages/login/login'
import React from 'react'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
