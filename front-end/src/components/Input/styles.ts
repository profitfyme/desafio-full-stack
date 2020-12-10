import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  padding: 8px;
  margin: 0 45px;

  border: 2px solid rgba(0, 0, 0, 0.02);
  color: #A0A4A8;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 24px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #7DD56F;
      border-color: #7DD56F;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #7DD56F;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #2F4F4F;

    &::placeholder {
      color: #A0A4A8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 16px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
