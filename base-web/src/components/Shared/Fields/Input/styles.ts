import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
`;

export const TextField = styled.input`
  background: #FFFFFF;
  box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  padding: 11px 0 ;
  padding-right: 11px;
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #A0A4A8;

  &::placeholder {
    color: #A0A4A8;
  }
`;

export const ImageIcon = styled.img`
  background: #FFFFFF;
  box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  margin-bottom: 24px;
  padding: 0 12px;
`;

export const InputGroupAddon = styled.div`
  display: flex;

  img {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;
