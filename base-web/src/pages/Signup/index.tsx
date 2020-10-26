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

const SignUp: React.FC = () => {
  return (
    <Profitfyme>
      <LogoWrap>
        <Profitfyme.Logo />
      </LogoWrap>

      <Form>
        <Form.Header>Informe seus dados</Form.Header>

        <Input placeholder="Nome" icon={UserIcon} />
        <Input placeholder="Sobrenome" icon={UserCircleIcon} />
        <Input placeholder="Email Pessoal" icon={EmailIcon} />
        <Input placeholder="" icon={BrandBrIcon} />
        <Input type="password" placeholder="Senha" icon={UnlockIcon} />
        <Input type="password" placeholder="Confirma senha" icon={UnlockIcon} />

        <Term>
          Ao se cadastrar você automaticamente concorda com nossos <a href="#/">Termos de Uso</a>
        </Term>

        <SubmitBtn>
          <img src={SendIcon} alt=""/>
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
