import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({ children, loading, icon: Icon, ...rest }) => (
  <Container type="button" {...rest}>
    {Icon && <Icon size={16} />}
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
