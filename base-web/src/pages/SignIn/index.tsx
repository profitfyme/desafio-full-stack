import React from 'react';
import Form from '../../components/Form';
import Profitfyme from '../../components/Profitfyme';
import Input from '../../components/Shared/Fields/Input';

import { LogoWrap, SubmitBtn } from './styles';

import UserIcon from '../../assets/images/user.svg';
import UserCircleIcon from '../../assets/images/user-circle.svg';
import EmailIcon from '../../assets/images/email.svg';
import BrandBrIcon from '../../assets/images/brand-br.svg';
import UnlockIcon from '../../assets/images/unlock.svg';
import SendIcon from '../../assets/images/send.svg';

const SignIn: React.FC = () => {
  return (
    <Profitfyme>
      <LogoWrap>
        <Profitfyme.Logo />
      </LogoWrap>

      <Form>
        <Form.Header>Insira suas credenciais</Form.Header>

        <Input placeholder="Email Pessoal" icon={EmailIcon} />
        <Input type="password" placeholder="Senha" icon={UnlockIcon} />

        <SubmitBtn>
          <img src={SendIcon} alt=""/>
          Logar
        </SubmitBtn>
      </Form>

      <Form.Footer>
        <a href="#/">Esqueceu sua senha?</a>
        <a href="#/">Registrar</a>
      </Form.Footer>
    </Profitfyme>
  );
}

export default SignIn;
