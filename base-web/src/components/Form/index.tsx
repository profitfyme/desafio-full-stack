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

const Form: FormProps & React.FC = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
}

Form.Header = FormHeader;
Form.Footer = FormFooter;

export default Form;
