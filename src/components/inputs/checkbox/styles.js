import styled, { keyframes, css } from 'styled-components'
import { COLOR } from '../../../styles/GlobalVariables'
import { findSize } from '../../utils'
import Label from '../../Form/label/Label'

const size_check = {
  sm: 15,
  md: 21,
  lg: 28
}
const padding_check = {
  sm: 2,
  md: 3,
  lg: 4
}

const border_width = 2

const wave = keyframes` 
  50% { transform: scale(0.9); }
`
const checkSize = (sizeSquare, checkSize) => css`
  top: ${-border_width + checkSize}px;
  left: ${-border_width + checkSize}px;
  width: ${sizeSquare - (checkSize * 2)}px;
  height: ${sizeSquare - (checkSize * 2)}px;
`

const squareSize = (size) => css`
    width: ${size}px;
    height: ${size}px;
`
const StyledIconContainer = styled.span`
    ${props => squareSize(size_check[findSize(props.size)])};//para determinar el tamano del recuadro segun las props
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    border-radius: 3px;
    transform: scale(1);
    border: ${border_width}px solid ${COLOR.gray};
    transition: all 0.2s ease;
    svg {//check
      position: absolute;
       ${props => checkSize(size_check[findSize(props.size)], padding_check[findSize(props.size)])};//para determinar el tamano del check segun las props
      fill: none;
      stroke: ${COLOR.white};
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
      ${props => squareSize(size_check[findSize(props.size)])};//para determinar el tamano de la bola del efecto segun las props
      background: ${COLOR.primary};
      display: block;
      position: absolute;
      top: ${-border_width}px;
      left: ${-border_width}px;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
    }
`

const StyledLabel = styled(Label)`
  margin-bottom: .5rem;
`

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledIconContainer}{
    background: ${COLOR.primary};
    border-color: ${COLOR.primary};
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
    border-color: ${COLOR.grayLight};
    &:hover{
      cursor: initial;
    }
  }
`

const StyledLabelSimple = styled.label`
  position: relative;
  margin-bottom: .5rem;
  color: ${COLOR.text};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover{
    color: ${COLOR.gray};
  }
`

const StyledCheckboxIcon = styled.span`
  position: absolute;
  left: 0;
  height: 15px;
  width: 15px;
  border-style: solid;
  border-width: 2px;
  border-color: ${COLOR.gray};
  border-radius: 2px;
  transition: all 0.4s;
  &:after{
    content: '';
    position: absolute;
    display: none;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const StyledCheckbox = styled.input`
  //position: absolute;
  cursor: pointer;
  margin-right: 8px;
  opacity: 0;
  height: 0;
  &:hover + ${StyledCheckboxIcon}{
    background-color: ${COLOR.grayLighter};
  }
  &:checked + ${StyledCheckboxIcon} {
    background-color: ${COLOR.primary};
    border-color: ${COLOR.primary}
  }
   &:checked + ${StyledCheckboxIcon}:after{
    display: block;
  }
`

export {
  StyledIconContainer, StyledInput, StyledLabel,
  StyledCheckbox, StyledCheckboxIcon, StyledLabelSimple
}
