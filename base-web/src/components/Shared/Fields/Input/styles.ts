import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
`;

export const TextField = styled.input`
  background: #FFFFFF;
  padding: 11px 0 ;
  padding-right: 11px;
  border-radius: 5px;
  border: 0;

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
  padding: 0 12px;
  border-radius: 5px;
  border: 0;
`;

export const InputGroupAddon = styled.div`
  display: flex;
  margin-bottom: 24px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  background: #FFFFFF;
`;
