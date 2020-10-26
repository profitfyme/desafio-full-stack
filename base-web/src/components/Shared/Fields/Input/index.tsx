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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  icon,
  placeholder,
  onChange
}) => {
  return (
    <Container>
      <InputGroupAddon>
        <ImageIcon src={icon} alt="icon"/>

        <TextField type={type} placeholder={placeholder} onChange={onChange}/>
      </InputGroupAddon>

      {/* <span>Campo obrigatório</span> */}
    </Container>
  );
}

export default Input;
