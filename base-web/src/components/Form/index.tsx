import React from 'react';
import { Link } from 'react-router-dom';

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
  Link: typeof Link;
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
Form.Link = Link;

export default Form;
