import React from 'react';
import Form from '../../components/Form';
import Profitfyme from '../../components/Profitfyme';
import Input from '../../components/Shared/Fields/Input';

import { LogoWrap, SubmitBtn } from './styles';

import EmailIcon from '../../assets/images/email.svg';
import UnlockIcon from '../../assets/images/unlock.svg';
import SendIcon from '../../assets/images/send.svg';
import { ActionTypes, useAuth } from '../../providers/Auth/useAuth';
import { useMutation } from 'react-query';
import userService from '../../services/user';

const SignIn: React.FC = () => {
  const [state, dispatch] = useAuth();

  const [mutate] = useMutation(
    () => userService.login(
      state.user?.email as string,
      state.password?.current as string
    )
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const token = await mutate();
    dispatch({ type: ActionTypes.SET_TOKEN, token });
  }

  return (
    <Profitfyme>
      <LogoWrap>
        <Profitfyme.Logo />
      </LogoWrap>

      <Form onSubmit={handleSubmit}>
        <Form.Header>Insira suas credenciais</Form.Header>

        <Input
          placeholder="Email Pessoal"
          icon={EmailIcon}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: ActionTypes.SET_USER,
              user: {
                ...state.user,
                email: event.currentTarget.value,
              },
            });
          }}
        />

        <Input
          type="password"
          placeholder="Senha"
          icon={UnlockIcon}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: ActionTypes.SET_PASSWORD,
              password: {
                ...state.password,
                current: event.currentTarget.value,
              },
            });
          }}
        />

        <SubmitBtn>
          <img src={SendIcon} alt="submit"/>
          Logar
        </SubmitBtn>
      </Form>

      <Form.Footer>
        <Form.Link to="/recover">Esqueceu sua senha?</Form.Link>
        <Form.Link to="/signup">Registrar</Form.Link>
      </Form.Footer>
    </Profitfyme>
  );
}

export default React.memo(SignIn);
