import styled, { css } from 'styled-components'
import { COLOR } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'

const label_font = {
  sm: 0.9 + 'rem',
  md: 1 + 'rem',
  lg: 1.1 + 'rem',
}

const StyledLabel = styled.label`
  position: relative;
  color: ${COLOR.text};
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  ${props => css`font-size: ${label_font[findSize(props.size)]}`};
  
  transition: all 200ms linear;
  ${props => props.disabled && css` color: ${COLOR.disabledText}`};
  &:hover{
    color: ${COLOR.gray};
    ${props => props.disabled && css`//cursor on disable radio
      cursor: initial;
      color: ${COLOR.disabledText}
    `};
  }
`

export { StyledLabel }
