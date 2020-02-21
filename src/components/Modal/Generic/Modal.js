import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledMask, StyledCloseButton, StyledDialog, StyledModal, Wrapper, BodyStyled } from './styles'

const CONTAINER_MODAL = document.getElementById('modal')
const MainModal = ({
  width,
  height,
  bgColor,
  bgMaskColor,
  visible,
  showMask,
  showDialog,
  closeOnEsc,
  closeMaskOnClick,
  showCloseButton,
  animation,
  enterAnimation,
  leaveAnimation,
  duration,
  className,
  customStyles,
  customMaskStyles,
  onClose,
  children,
  onAnimationEnd,
  position
}) => {
  const [isShow, setIsShow] = useState(visible)
  const [animationType, setAnimationType] = useState('leave')
  const el = React.useRef(null)

  const enter = () => {
    setIsShow(true)
    setAnimationType('enter')
  }

  const leave = () => {
    setAnimationType('leave')
  }

/*  useEffect(() => {
    if (visible) enter()
  }, [])*/

  useEffect(() => {
    visible ? enter() : leave()
  }, [visible])

  const onKeyUp = event => {
    if (closeOnEsc && event.keyCode === 27) { // verifico que la tecla presioanda sea esc para cerrar el modal
      onClose()
    }
  }

  const animationEnd = event => {
    if (animationType === 'leave') {
      setIsShow(false)
      onAnimationEnd() // ejecuta un callback al ocuntar el modal
    } else if (closeOnEsc) {
      el.current.focus() //para enfocar el primer elemento q sea enfocable dentro del modal
    }
    /*if (event.target !== el.current && onAnimationEnd && animationType === 'leave') {
      onAnimationEnd() // esto es para ejecutar la funcion tanto de entrada o de salida al terminar al animacion
    }*/
  }

  const customAnimations = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation

  if (!isShow) return null;
  return (
    <>
      <BodyStyled />
      <StyledModal
        isShow={isShow}
        duration={duration}
        animationType={`${animationType}`}
        onAnimationEnd={animationEnd}
        tabIndex="-1"
        ref={el}
        onKeyUp={onKeyUp}
      >
        {
          showMask
          &&
            <StyledMask
              style={customMaskStyles}
              bgMaskColor={bgMaskColor}
              onClick={closeMaskOnClick ? onClose : ()=>{}}
            />
        }

        {
          showDialog
            ?(
              <StyledDialog
                style={customStyles}
                className={className}
                width={width}
                height={height}
                duration={duration}
                bgColor={bgColor}
                animationType={customAnimations + animationType}
                position={position}
              >
                {showCloseButton && <StyledCloseButton onClick={onClose} />}
                {children}
              </StyledDialog>
            )
            : (
              <Wrapper duration={duration} animationType={customAnimations + animationType}>
                {children}
              </Wrapper>
              )
        }
      </StyledModal>
    </>
  )
}

export const Modal = (props) => ReactDOM.createPortal(<MainModal {...props} />, CONTAINER_MODAL)

const animationTypes = [
  'zoom',
  'fade',
  'flip',
  'door',
  'rotate',
  'slideUp',
  'slideDown',
  'slideLeft',
  'slideRight',
  ''
]

Modal.propTypes = {
  width             : PropTypes.string, // ancho del recuadro dentro del modal
  height            : PropTypes.string, // alto del recuadro dentro del modal
  bgColor           : PropTypes.string, // color del fondo del recuadro del modal
  bgMaskColor       : PropTypes.string, // color del fondo de la mascara del modal
  visible           : PropTypes.bool, // si el modal es visible o no
  showMask          : PropTypes.bool, // si muestra o no el fondo detras del modal
  showDialog        : PropTypes.bool, // si muestra o no el recuadro blanco
  closeOnEsc        : PropTypes.bool, // si se cierra el modal al presionar ESC
  closeMaskOnClick  : PropTypes.bool, // si se cierra el modal al presionar fuera del recuadro del modal
  showCloseButton   : PropTypes.bool, // si muestra un boton de cerrar en forma de X dentro del modal
  animation         : PropTypes.oneOf(animationTypes), // el tipo de animacion que tendra en modal
  enterAnimation    : PropTypes.oneOf(animationTypes), // la animacion al aparecer el modal
  leaveAnimation    : PropTypes.oneOf(animationTypes), //  la animacion al desaparecer el modal
  duration          : PropTypes.number, // el tiempo que dura la animacion expresado en ms
  className         : PropTypes.string, // alguna clase
  customStyles      : PropTypes.object, // stilos custom para el recuadro del modal
  customMaskStyles  : PropTypes.object, // estilos customs para la mascara del modal
  onClose           : PropTypes.func.isRequired, // funcion para cerrar el modal
  onAnimationEnd    : PropTypes.func, // funcion que se ejecuta despues de que el modal se haya ido
  position          : PropTypes.oneOf(['center', 'top']) // define la posicion del cuadro de dialogo del modal
}

Modal.defaultProps = {
  width             : '400px',
  height            : '240px',
  bgColor           : '#fff',
  bgMaskColor       : 'rgba(0, 0, 0, .3)',
  visible           : false,
  showMask          : true,
  showDialog        : true,
  closeOnEsc        : true,
  closeMaskOnClick  : true,
  showCloseButton   : true,
  animation         : 'fade',
  enterAnimation    : '',
  leaveAnimation    : '',
  duration          : 300,
  className         : '',
  customStyles      : {},
  customMaskStyles  : {},
  onAnimationEnd    : () => {console.log('me ejecute despues que se ocultara el modal')},
  position          : 'center'
}
