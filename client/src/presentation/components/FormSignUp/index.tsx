import React, { useState, useEffect } from 'react'
import { User, UserCircle, Envelope, Phone, Lock, PaperPlane } from '@styled-icons/fa-solid'
import { useHistory } from 'react-router-dom'
// import { FormContext, ApiContext } from '../../context'
import { Validation } from '../../protocols/validation'
import { AddAccount } from '../../../domain/usecases/add-account'

import { FormWrapper } from '../Form'
import Button from '../Button'
import TextField from '../TextField'

import * as S from './styles'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const FormSignUp = ({ validation, addAccount }: Props): any => {
  // const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isFormInvalid: true,
    name: '',
    nameEdited: false,
    surname: '',
    surnameEdited: false,
    email: '',
    emailEdited: false,
    phone: '',
    phoneEdited: false,
    password: '',
    passwordEdited: false,
    passwordConfirmation: '',
    passwordConfirmationEdited: false,
    nameError: '',
    surnameError: '',
    phoneError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  useEffect(() => { validate('name') }, [state.name])
  useEffect(() => { validate('surname') }, [state.surname])
  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('phone') }, [state.phone])
  useEffect(() => { validate('password') }, [state.password])
  useEffect(() => { validate('passwordConfirmation') }, [state.passwordConfirmation])

  const validate = (field: string): void => {
    const { name, surname, email, phone, password, passwordConfirmation } = state
    const formData = { name, surname, email, phone, password, passwordConfirmation }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.nameError || !!old.surnameError || !!old.emailError || !!old.surnameError || !!old.passwordError || !!old.passwordConfirmationError }))
  }

  const handleSubmit = async (event): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isFormInvalid) {
        return
      }
      setState(old => ({ ...old, isLoading: true }))
      const account = await addAccount.add({
        name: state.name,
        surname: state.surname,
        email: state.email,
        phone: state.phone,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      // setCurrentAccount(account)
      history.replace('/login')
    } catch (error) {
      setState(old => ({
        ...old,
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
          name="name"
          placeholder="Nome"
          type="name"
          icon={<User />}
          iconPosition="left"
          value={state.name}
          onChange={handleChange}
          error={state.nameEdited ? state.nameError : null}
        />
        <TextField
          name="surname"
          placeholder="Sobrenome"
          type="name"
          icon={<UserCircle />}
          iconPosition="left"
          value={state.surname}
          onChange={handleChange}
          error={state.surnameEdited ? state.surnameError : null}
        />
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
          name="phone"
          placeholder="Telefone"
          type="number"
          icon={<Phone />}
          iconPosition="left"
          value={state.phone}
          onChange={handleChange}
          error={state.phoneEdited ? state.phoneError : null}

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
        <TextField
          name="passwordConfirmation"
          placeholder="Confirmar Senha"
          type="password"
          icon={<Lock />}
          iconPosition="left"
          value={state.passwordConfirmation}
          onChange={handleChange}
          error={state.passwordConfirmationEdited ? state.passwordConfirmationError : null}
        />

        <S.FormObs>
          <S.FormTerms>Ao se cadastrar você automaticamente concorda com nossos Termos de Uso</S.FormTerms>
          <Button
            size="medium"
            icon={<PaperPlane/>}
            onClick={handleSubmit}
          > Cadastrar
          </Button>
        </S.FormObs>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
