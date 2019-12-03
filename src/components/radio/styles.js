import styled, { css } from 'styled-components'
import { $border_radius, $color, $radio_check_size } from '../../styles/GlobalVariables'

const circle_sm = 7
const circle_md = 12
const circle_lg = 16

const border_sm = 2
const border_md = 2
const border_lg = 3

const StyledLabel = styled.label`
  position: relative;
  margin-bottom: .5rem;
  color: ${$color.text};
  ${({ disabled }) => disabled && css`color: ${$color.gray}`};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  //flex-direction: column;
`

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
  border: solid 2px ${$color.primary};
  ${radio_size($radio_check_size.md, border_md)};
  ${props => props['size-sm'] && radio_size($radio_check_size.sm, border_sm)}
  ${props => props['size-lg'] && css`
        border-width: 3px; 
        ${radio_size($radio_check_size.lg, border_lg)}
    `}
  border-radius: ${$border_radius.circle};
  &:after{
    display: none;
    content: '';
    position: absolute;
    ${radio_size(circle_md)};
    ${props => props['size-sm'] && radio_size(circle_sm)}
    ${props => props['size-lg'] && radio_size(circle_lg)}
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    margin: auto;
    border-radius: ${$border_radius.circle};
    background-color: ${$color.primary};
  }
`

const StyledRadio = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 0;
  &:checked+${StyledCircleIcon}:after{
    display: block;
  }
  &[disabled]+${StyledCircleIcon}{
    border-color: ${$color.grayLight};
  }
`

export { StyledRadio, StyledCircleIcon, StyledLabel }
