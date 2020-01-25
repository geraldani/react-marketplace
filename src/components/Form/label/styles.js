import styled, { css } from 'styled-components'
import { COLOR } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'
import Label from './Label'

const label_font = {
  sm: 0.9 + 'rem',
  md: 1 + 'rem',
  lg: 1.1 + 'rem',
}

const StyledInlineLabel = styled.label`
  position: relative;
  color: ${COLOR.text};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  &>:first-child{
    padding-right: 10px;
    white-space: nowrap;
  }
  ${props => css`font-size: ${label_font[findSize(props.size)]}`};
  
  transition: all 250ms ease-in-out;
  ${props => props.disabled && css` color: ${COLOR.disabledText}`};
  &:hover{
    color: ${COLOR.gray};
    ${props => props.disabled && css`//cursor on disable radio
      cursor: initial;
      color: ${COLOR.disabledText}
    `};
  }
`
const StyledBlockLabel = styled(StyledInlineLabel)`
  flex-direction: column;
  width: 100%;
  align-items: start;
  margin-bottom: 0.8em;
 &>:first-child{
  padding-right: 0;
}
`
export { StyledInlineLabel, StyledBlockLabel }
