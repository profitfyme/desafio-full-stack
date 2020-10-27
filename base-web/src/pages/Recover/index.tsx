import React from 'react';
import Form from '../../components/Form';
import Profitfyme from '../../components/Profitfyme';
import Input from '../../components/Shared/Fields/Input';

import { LogoWrap, SubmitBtn } from './styles';

import EmailIcon from '../../assets/images/email.svg';
import SendIcon from '../../assets/images/send.svg';

const Recover: React.FC = () => {
  return (
    <Profitfyme>
      <LogoWrap>
        <Profitfyme.Logo />
      </LogoWrap>

      <Form>
        <Form.Header>Quero recuperar minha senha!</Form.Header>

        <Input placeholder="Email Pessoal" icon={EmailIcon} />

        <SubmitBtn>
          <img src={SendIcon} alt="submit"/>
          Enviar
        </SubmitBtn>
      </Form>

      <Form.Footer>
        <Form.Link to="/signup">Registrar</Form.Link>
        <Form.Link to="/signin">Entrar</Form.Link>
      </Form.Footer>
    </Profitfyme>
  );
}

export default React.memo(Recover);
