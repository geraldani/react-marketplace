import styled, { css } from 'styled-components'
import { $color, $font_size } from '../../../styles/GlobalVariables'

const label_font_sm = 0.9 + 'rem'
const label_font_md = 1 + 'rem'
const label_font_lg = 1.1 + 'rem'

const StyledLabel = styled.label`
  position: relative;
  color: ${$color.text};
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: ${label_font_md};
  ${ props  => props.sm && css`font-size: ${label_font_sm}`};
  ${ props  => props.lg && css`font-size: ${label_font_lg}`};
  
  transition: all 200ms linear;
  ${ props  => props.disabled && css` color: ${$color.disabledText}`};
  &:hover{
    color: ${$color.gray};
    ${ props  => props.disabled && css`//cursor on disable radio
      cursor: initial;
      color: ${$color.disabledText}
    `};
  }
`

export { StyledLabel }
