import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.small} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const FormObs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;
`

export const FormTerms = styled.p`
  color: #94A3B3;
  font-size: 12px;
  font-family: 'Open Sans';
  text-align: center;
`
