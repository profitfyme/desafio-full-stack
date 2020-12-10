import { useRef, useCallback } from 'react';
import { FaEnvelope, FaUnlockAlt, FaCheck } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Footer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatorio')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatoria'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/profile');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error na authenticação',
          description: 'Ocorreu um erro ao fazer login, valide as credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Profitfy" />

        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <p>Faça seu login</p>

            <Input name="email" icon={FaEnvelope} placeholder="E-mail" />
            <Input
              name="password"
              icon={FaUnlockAlt}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit" icon={FaCheck}>Entrar</Button>
          </Form>

          <Footer>
            <Link to="/reset-senha">
              Esqueceu sua senha?
            </Link>
            <Link to="/signup">
              Criar conta
            </Link>
          </Footer>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default SignIn;
