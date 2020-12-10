import { useRef, useCallback } from 'react';
import { FaUserAlt, FaUserCircle, FaEnvelope, FaUnlockAlt, FaPaperPlane } from 'react-icons/fa';
import { GiBrazilFlag } from 'react-icons/gi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Footer } from './styles';

interface SignUpFormData {
  name: string;
  surname: string;
  telephone: number;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          surname: Yup.string().required('Sobrenome obrigatorio'),
          telephone: Yup.string().required('Telefone obrigatorio'),
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Campo obrigatorio'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          name: data.name,
          surname: data.surname,
          telephone: data.telephone,
          email: data.email,
          password: data.password
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login no Profitfy!',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Profitfy" />

        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <p>Informe seus dados</p>

            <Input name="name" icon={FaUserAlt} placeholder="Nome" />
            <Input name="surname" icon={FaUserCircle} placeholder="Sobrenome" />
            <Input name="telephone" icon={GiBrazilFlag} placeholder="" />
            <Input name="email" icon={FaEnvelope} placeholder="Email Pessoal" />
            <Input
              name="password"
              icon={FaUnlockAlt}
              type="password"
              placeholder="Senha"
            />

            <Input
              name="password_confirmation"
              icon={FaUnlockAlt}
              type="password"
              placeholder="Confirmar senha"
            />

            <h3>Ao se cadastrar você automaticamente concorda com nossos <a href='#'>Termos de Uso</a></h3>

            <Button type="submit" icon={FaPaperPlane}>Cadastrar</Button>
          </Form>

          <Footer>
            <Link to="/reset-senha">
              Esqueceu sua senha?
            </Link>
            <Link to="/">
              Entrar
            </Link>
          </Footer>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
