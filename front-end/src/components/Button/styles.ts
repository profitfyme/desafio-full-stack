import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #7DD56F;
  height: 42px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(125, 213, 111, 0.4);
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 160px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7DD56F')};
  }

  svg {
    margin-right: 14px;
  }
`;
