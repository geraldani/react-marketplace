import styled, { createGlobalStyle } from 'styled-components'
import { animationsStyles } from './animations'

const positions = {
  top: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '',
  },
  bottom: {
    top: '',
    left: '0',
    right: '0',
    bottom: '0',
  },
  left: {
    top: '0',
    left: '0',
    right: '',
    bottom: '0',
  },
  right: {
    top: '0',
    left: '',
    right: '0',
    bottom: '0',
  },
  center: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },

  leftTop: {
    top: '0',
    left: '0',
    right: '',
    bottom: '',
  },
  rightTop: {
    top: '0',
    left: '',
    right: '0',
    bottom: '',
  },
  leftBottom: {
    top: '',
    left: '0',
    right: '',
    bottom: '0',
  },
  rightBottom: {
    top: '',
    left: '',
    right: '0',
    bottom: '0',
  },
};


const StyledModal = styled.div`
   top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    position: fixed;
    display: ${props => props.isShow ? 'block' : 'none'};
    ${props => animationsStyles[`fade${props.animationType}`]};
    pointer-events: ${props => ((props.mask && props.hideContent) ? 'auto' : 'none')};
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
    pointer-events: auto;
`
const StyledDialog = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  position: absolute;
  top: ${props => positions[props.position].top};
  bottom: ${props => positions[props.position].bottom};
  left: ${props => positions[props.position].left};
  right: ${props => positions[props.position].right};
  margin: auto;
  z-index: 101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  ${props => animationsStyles[props.animationType]};
  animation-duration: ${props => props.duration}ms!important;
  pointer-events: auto;
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
    outline: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
    top: ${props => positions[props.position].top};
  bottom: ${props => positions[props.position].bottom};
  left: ${props => positions[props.position].left};
  right: ${props => positions[props.position].right};
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: auto;
  ${props => animationsStyles[props.animationType]};
  animation-duration: ${props => props.duration}ms!important;
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
