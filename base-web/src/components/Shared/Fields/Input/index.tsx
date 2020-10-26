import React from 'react';

import {
  Container,
  TextField,
  ImageIcon,
  InputGroupAddon
} from './styles';

interface InputProps {
  placeholder: string;
  icon: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  icon,
  placeholder
}) => {
  return (
    <Container>
      <InputGroupAddon>
        <ImageIcon src={icon} alt="icon"/>

        <TextField type={type} placeholder={placeholder} />
      </InputGroupAddon>

      {/* <span>Campo obrigatório</span> */}
    </Container>
  );
}

export default Input;
