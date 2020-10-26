import React from 'react';
import Form from '../../components/Form';
import Profitfyme from '../../components/Profitfyme';
import Input from '../../components/Shared/Fields/Input';

import { LogoWrap, Term, SubmitBtn } from './styles';

import UserIcon from '../../assets/images/user.svg';
import UserCircleIcon from '../../assets/images/user-circle.svg';
import EmailIcon from '../../assets/images/email.svg';
import BrandBrIcon from '../../assets/images/brand-br.svg';
import UnlockIcon from '../../assets/images/unlock.svg';
import SendIcon from '../../assets/images/send.svg';
import { ActionTypes, useAuth } from '../../providers/Auth/useAuth';

const SignUp: React.FC = () => {
  const [state, dispatch] = useAuth();

  const isActive = React.useMemo(() => {
    return !!state.user?.firstname
      && !!state.user?.lastname
      && !!state.user?.email;
  }, [state.user?.firstname, state.user?.lastname, state.user?.email]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Profitfyme>
      <LogoWrap>
        <Profitfyme.Logo />
      </LogoWrap>

      <Form onSubmit={handleSubmit}>
        <Form.Header>Informe seus dados</Form.Header>

        <Input
          placeholder="Nome"
          icon={UserIcon}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: ActionTypes.SET_USER,
              user: {
                ...state.user,
                firstname: event.currentTarget.value,
              },
            });
          }}
        />

        <Input
          placeholder="Sobrenome"
          icon={UserCircleIcon}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: ActionTypes.SET_USER,
              user: {
                ...state.user,
                lastname: event.currentTarget.value,
              },
            });
          }}
        />

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

        <Input placeholder="" icon={BrandBrIcon} />
        <Input type="password" placeholder="Senha" icon={UnlockIcon} />
        <Input type="password" placeholder="Confirma senha" icon={UnlockIcon} />

        <Term>
          Ao se cadastrar você automaticamente concorda com nossos <a href="#/">Termos de Uso</a>
        </Term>

        <SubmitBtn isActive={isActive}>
          <img src={SendIcon} alt="submit"/>
          Cadastrar
        </SubmitBtn>
      </Form>

      <Form.Footer>
        <a href="#/">Esqueceu sua senha?</a>
        <a href="#/">Entrar</a>
      </Form.Footer>
    </Profitfyme>
  );
}

export default SignUp;
