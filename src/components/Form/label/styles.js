import styled, { css } from 'styled-components'
import { color, fontSize } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'

const labelFont = {
  sm: fontSize.sm,
  md: fontSize.md,
  lg: fontSize.lg
}

const StyledInlineLabel = styled.label`
  position: relative;
  color: ${color.text};
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  ${props => css`font-size: ${labelFont[findSize(props.size)]}`};
  
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
