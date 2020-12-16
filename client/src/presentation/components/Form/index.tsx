import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'

export const FormWrapper = styled.div`
  width: 90%;
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xsmall} 0;
      font-family: ${theme.font.family}
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`
