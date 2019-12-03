import styled, { keyframes } from 'styled-components'
import { $color } from '../../styles/GlobalVariables'


const wave = keyframes` 
  50% { transform: scale(0.9); }
`

const StyledIconContainer = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
  margin-right: 10px;
  &:nth-child(2) {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid ${$color.gray};
    transition: all 0.2s ease;
    padding-left: 8px;
    svg {
      position: absolute;
      top: 3px;
      left: 2px;
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
    &:before{
      content: '';
      width: 18px;
      height: 18px;
      background: ${$color.primary};
      display: block;
      position: absolute;
      top:-1px;
      left: -1px;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
    }
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
   &:hover{
    color: ${$color.gray};
    ${StyledIconContainer}:nth-child(2) {
      border-color: ${$color.primary};
    }
  }
`

const StyledInput = styled.input`
  display: none;
  &:checked + ${StyledIconContainer}:nth-child(2) {
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
`

export { StyledIconContainer, StyledInput, StyledLabel }
