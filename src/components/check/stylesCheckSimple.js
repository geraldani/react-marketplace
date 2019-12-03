import styled, { css } from 'styled-components'
import { $color } from '../../styles/GlobalVariables'

const StyledLabel = styled.label`
  position: relative;
  margin-bottom: .5rem;
  color: ${$color.text};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover{
    color: ${$color.gray};
  }
`

const StyledCheckboxIcon = styled.span`
  position: absolute;
  left: 0;
  height: 15px;
  width: 15px;
  border-style: solid;
  border-width: 2px;
  border-color: ${$color.gray};
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
    background-color: ${$color.grayLighter};
  }
  &:checked + ${StyledCheckboxIcon} {
    background-color: ${$color.primary};
    border-color: ${$color.primary}
  }
   &:checked + ${StyledCheckboxIcon}:after{
    display: block;
  }
`


export { StyledLabel, StyledCheckbox, StyledCheckboxIcon }
