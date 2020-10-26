import React from 'react';

import { Container, Header, Footer } from './styles';

const FormHeader: React.FC = React.memo(({ children }) => {
  return <Header>{children}</Header>;
});

const FormFooter: React.FC = React.memo(({ children }) => {
  return <Footer>{children}</Footer>;
});

interface FormProps {
  Header: typeof FormHeader;
  Footer: typeof FormFooter;
}

interface Props {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FormProps & React.FC<Props> = ({ onSubmit, children }) => {
  return (
    <Container onSubmit={onSubmit}>{children}</Container>
  );
}

Form.Header = FormHeader;
Form.Footer = FormFooter;

export default Form;
