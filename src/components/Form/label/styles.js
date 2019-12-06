import styled, { css } from 'styled-components'
import { color } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'
import Label from './Label'

const label_font = {
  sm: 0.9 + 'rem',
  md: 1 + 'rem',
  lg: 1.1 + 'rem',
}

const StyledInlineLabel = styled.label`
  position: relative;
  color: ${color.text};
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  ${props => css`font-size: ${label_font[findSize(props.size)]}`};
  
  transition: all 250ms ease-in-out;
  ${props => props.disabled && css` color: ${color.disabledText}`};
  &:hover{
    color: ${color.gray};
    ${props => props.disabled && css`//cursor on disable radio
      cursor: initial;
      color: ${color.disabledText}
    `};
  }
`
const StyledBlockLabel = styled(StyledInlineLabel)`
  flex-direction: column;
  width: 100%;
  align-items: start;
  margin-bottom: 0.8em;
`
export { StyledInlineLabel, StyledBlockLabel }
