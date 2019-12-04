import styled, { keyframes , css} from 'styled-components'
import { $color } from '../../styles/GlobalVariables'

const size_sm = 15
const size_md = 21
const size_lg = 28
const border_width = 2
const padding_check_sm = 2
const padding_check_md = 3
const padding_check_lg = 4

const wave = keyframes` 
  50% { transform: scale(0.9); }
`
const checkSize = (sizeSquare, checkSize) =>  css`
  top: ${-border_width + checkSize}px;
  left: ${-border_width + checkSize}px;
  width: ${sizeSquare - (checkSize*2)}px;
  height: ${sizeSquare - (checkSize*2)}px;
`

const squareSize = (size) =>  css`
    width: ${size}px;
    height: ${size}px;
`

const StyledIconContainer = styled.span`
    ${squareSize(size_md)};
    ${props => props.sm && squareSize(size_sm)};
    ${props => props.lg && squareSize(size_lg)};
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    border-radius: 3px;
    transform: scale(1);
    border: ${border_width}px solid ${$color.gray};
    transition: all 0.2s ease;
    svg {//check
      position: absolute;
      ${checkSize(size_md,padding_check_md)};
      ${props => props.sm && checkSize(size_sm, padding_check_sm)}
      ${props => props.lg && checkSize(size_lg, padding_check_lg)}
      fill: none;
      stroke: ${$color.white};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }
    &:before{//bola de efecto
      content: '';
      ${squareSize(size_md)};
      ${props => props.sm && squareSize(size_sm)};
      ${props => props.lg && squareSize(size_lg)};
      background: ${$color.primary};
      display: block;
      position: absolute;
      top: ${-border_width}px;
      left: ${-border_width}px;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
    }
`

const StyledLabel = styled.label`
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  position: relative;
  margin-bottom: .5rem;
  color: ${$color.text};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  transition: all 200ms linear;
  ${props => props.disabled && css`color: ${$color.disabledText}`};
   &:hover{
    color: ${$color.gray};
    ${props => props.disabled && css`color: ${$color.disabledText}; cursor: initial`};
    ${StyledIconContainer} {
      border-color: ${$color.primary};
    }
  }
`

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledIconContainer}{
    background: ${$color.primary};
    border-color: ${$color.primary};
    animation: ${wave} 0.4s ease;
    svg{
      stroke-dashoffset: 0;
    }
    &:before{
      transform: scale(3.5);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }
  &[disabled]+${StyledIconContainer}{
    border-color: ${$color.grayLight};
    &:hover{
      cursor: initial;
    }
  }
`

export { StyledIconContainer, StyledInput, StyledLabel }
