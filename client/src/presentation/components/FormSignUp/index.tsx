import React, { useState, useEffect, useContext } from 'react'
import { User, UserCircle, Envelope, Phone, Lock, PaperPlane } from '@styled-icons/fa-solid'
import { useHistory } from 'react-router-dom'
import { FormContext, ApiContext } from '../../context'
import { Validation } from '../../protocols/validation'
import { AddAccount } from '../../../domain/usecases/add-account'

import { FormWrapper, FormLink } from '../Form'
import Button from '../Button'
import TextField from '../TextField'

import * as S from './styles'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const FormSignUp = ({ validation, addAccount }: Props): any => {
  console.log(validation)
  console.log(addAccount)
  const history = useHistory()
  const [state, setState] = useState({
    isFormInvalid: true,
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
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
    const formData = { name, email, password, passwordConfirmation }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.nameError || !!old.emailError || !!old.passwordError || !!old.passwordConfirmationError }))
  }

  const handleSubmit = async (event): Promise<void> => {
    console.log('State: ', state)
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
      //setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
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
        />
        <TextField
          name="surname"
          placeholder="Sobrenome"
          type="surname"
          icon={<UserCircle />}
          iconPosition="left"
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Envelope />}
          iconPosition="left"
        />
        <TextField
          name="phone"
          placeholder="Telegone"
          type="phone"
          icon={<Phone />}
          iconPosition="left"
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          icon={<Lock />}
          iconPosition="left"
        />
        <TextField
          name="confirm-password"
          placeholder="Confirmar Senha"
          type="password"
          icon={<Lock />}
          iconPosition="left"
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
