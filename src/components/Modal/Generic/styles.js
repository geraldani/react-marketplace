import styled, { createGlobalStyle, css } from 'styled-components'
import { animationsStyles } from './animations'

const StyledModal = styled.div`
   top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: fixed;
    display: ${props => props.isShow ? 'block' : 'none'};
    ${props => animationsStyles['fade' + props.animationType]};
    animation-duration: ${props => props.duration}ms!important;
`
const StyledMask = styled.div`
    position: absolute;
    background: ${props => props.bgMaskColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`
const StyledDialog = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  position: absolute;
  top: ${props => props.position === 'top' ? '30px': '0'};
  bottom: ${props => props.position === 'top' ? '': '0'};
  left: 0;
  right: 0;
  margin: auto;
  z-index: 101;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  ${props => animationsStyles[props.animationType]};
  animation-duration: ${props => props.duration}ms!important;
  &:focus {
    outline: none;
  }
`

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  &:before, 
  &:after{
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    transition: background .2s;
  }
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
  
  &:hover:before,
  &:hover:after {
    background: #333;
  }
  
  &:focus{
    outline: dotted 1px gray;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  ${props => animationsStyles[props.animationType]};
  animation-duration: ${props => props.duration}ms!important;
  z-index: 1000;
  width: fit-content;
  height: fit-content;
`

//es para ocultar el scroll al abrir el modal
const BodyStyled = createGlobalStyle`
  body{
    height: 100vh;
    overflow: hidden;
    margin-right: 15px!important; // por el scroll que habia
    @media (max-width: 520px){
      margin-right: 0!important;
    }
  }`


export {
  StyledModal,
  StyledMask,
  StyledDialog,
  StyledCloseButton,
  Wrapper,
  BodyStyled
}
