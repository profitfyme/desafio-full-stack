import React, { useState, useEffect, useContext } from 'react'
import { Envelope, Lock, PaperPlane } from '@styled-icons/fa-solid'
import { useHistory } from 'react-router-dom'
import { ApiContext } from '../../context'
import { Validation } from '../../protocols/validation'
import { Authentication } from '../../../domain/usecases/authentication'

import { FormWrapper } from '../Form'
import Button from '../Button'
import TextField from '../TextField'

import * as S from './styles'

type Props = {
  validation: Validation
  authentication: Authentication
}

const FormSignIn = ({ validation, authentication }: Props): any => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isFormInvalid: true,
    email: '',
    emailEdited: false,
    password: '',
    passwordEdited: false,
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('password') }, [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.emailError || !!old.passwordError }))
  }

  const handleSubmit = async (event): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isFormInvalid) {
        return
      }
      setState(old => ({ ...old, isLoading: true }))
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  const handleChange = (e): any => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Edited`]: true
    })
  }

  return (
    <FormWrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Envelope />}
          iconPosition="left"
          value={state.email}
          onChange={handleChange}
          error={state.emailEdited ? state.emailError : null}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          icon={<Lock />}
          iconPosition="left"
          value={state.password}
          onChange={handleChange}
          error={state.passwordEdited ? state.passwordError : null}
        />
        <S.FormObs>
          <Button
            size="medium"
            icon={<PaperPlane/>}
            onClick={handleSubmit}
          > Login
          </Button>
        </S.FormObs>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
