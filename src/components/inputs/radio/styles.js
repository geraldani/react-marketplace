import styled, { css } from 'styled-components'
import Label from '../../Form/label/Label'
import { $border_radius, $color, $radio_check_size } from '../../../styles/GlobalVariables'

const circle_sm = 7
const circle_md = 12
const circle_lg = 16

const border_sm = 2
const border_md = 2
const border_lg = 3

const radio_size = (size) => css`
  height: ${size}px;
  width: ${size}px;
`

const StyledCircleIcon = styled.span`
  position: relative;
  top: 0;
  left: -14px;
  margin-right: -5px;
  cursor: pointer;
  border: solid 2px ${$color.gray};
  ${radio_size($radio_check_size.md, border_md)};
  ${props => props.sm && radio_size($radio_check_size.sm, border_sm)}
  ${props => props.lg && css`
        border-width: 3px; 
        ${radio_size($radio_check_size.lg, border_lg)}
    `}
  border-radius: ${$border_radius.circle};
  &:after{
    transform: scale(0);
    content: '';
    position: absolute;
    ${radio_size(circle_md)};
    ${props => props.sm && radio_size(circle_sm)}
    ${props => props.lg && radio_size(circle_lg)}
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    margin: auto;
    border-radius: ${$border_radius.circle};
    background-color: ${$color.primary};
    transition: all 150ms;
  }
`

const StyledRadio = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 0;
  &:checked+${StyledCircleIcon}{
    border-color: ${$color.primary};
    &:after{
      transform: scale(1);
    }
  }
  &[disabled]+${StyledCircleIcon}{
    border-color: ${$color.grayLight};
  }
`

const StyledLabel = styled(Label)`
  margin-bottom: .5rem;
  &:hover{
    ${StyledCircleIcon}{
      border-color: ${$color.primary};
    }
    ${StyledRadio}[disabled]+${StyledCircleIcon}{//el borde del color cuando esta desabilitado
      border-color: ${$color.disabledText};
    }
  }
`

export { StyledRadio, StyledCircleIcon, StyledLabel }
