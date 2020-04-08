import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { StyledMask, StyledCloseButton, StyledDialog, StyledModal, Wrapper, BodyStyled } from './styles'

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
  position,
  autoFocus,
  hideContent,
}) => {
  const [isShow, setIsShow] = useState(visible)
  const [animationType, setAnimationType] = useState('leave')
  const el = useRef(null)
  const customAnimations = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation


  const enter = () => {
    setIsShow(true)
    setAnimationType('enter')
  }

  const leave = () => {
    setAnimationType('leave')
  }

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
    } else if (closeOnEsc && autoFocus) {
      el.current.focus() //para enfocar el primer elemento q sea enfocable dentro del modal
    }
    /*if (event.target !== el.current && onAnimationEnd && animationType === 'leave') {
      onAnimationEnd() // esto es para ejecutar la funcion tanto de entrada o de salida al terminar al animacion
    }*/
  }

  if (!isShow) return null;
  return (
    <>
      { hideContent && <BodyStyled />}
      <StyledModal
        isShow={isShow}
        duration={duration}
        animationType={animationType}
        onAnimationEnd={animationEnd}
        tabIndex="-1"
        ref={el}
        onKeyUp={onKeyUp}
        mask={showMask}
        hideContent={hideContent}
      >
        {
          showMask
          &&
            <StyledMask
              style={customMaskStyles}
              bgMaskColor={bgMaskColor}
              onClick={closeMaskOnClick ? onClose : null}
            />
        }

        {
          showDialog
            ?(
                <StyledDialog
                  style={customStyles}
                  duration={duration}
                  bgColor={bgColor}
                  className={className}
                  position={position}
                  width={width}
                  height={height}
                  animationType={customAnimations + animationType}
                >
                  {showCloseButton && <StyledCloseButton onClick={onClose} />}
                  {children}
                </StyledDialog>
            )
            : (
                <Wrapper
                  animationType={customAnimations + animationType}
                  duration={duration}
                  position={position}
                  onClick={closeMaskOnClick ? onClose : null}
                >
                  <div
                    onClick={ev => ev.stopPropagation()}
                    className={className}
                    style={customStyles}
                  >
                    {children}
                  </div>
                </Wrapper>
              )
        }
      </StyledModal>
    </>
  )
}

export const Modal = ({id, ...props}) => {
  const DOM_ELEMENT = document.getElementById(id);

  React.useLayoutEffect(() => {
    if (!DOM_ELEMENT) {
      const newModalNode = document.createElement('div');
      newModalNode.id = id;
      document.body.insertBefore(newModalNode, document.body.firstChild);
    }
  }, []);

  if (!DOM_ELEMENT) return null;
  return (
    ReactDOM.createPortal(
      <MainModal {...props} />,
      DOM_ELEMENT
    )
  );
  // ReactDOM.createPortal(<MainModal {...props} />, CONTAINER_MODAL)
}

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
  'slideBlurredTop',
  ''
]

Modal.propTypes = {
  id                : PropTypes.string, // el id del dom donde se renderizara el modal
  autoFocus: PropTypes.bool, // decide se se auto-enfoca el modal, esto para poder usar la tecla esc para cerrar el modal
  width             : PropTypes.string, // ancho del recuadro dentro del modal
  height            : PropTypes.string, // alto del recuadro dentro del modal
  bgColor           : PropTypes.string, // color del fondo del recuadro del modal
  bgMaskColor       : PropTypes.string, // color del fondo de la mascara del modal
  visible           : PropTypes.bool, // si el modal es visible o no
  showMask          : PropTypes.bool, // si muestra o no el fondo detras del modal
  showDialog        : PropTypes.bool, // si muestra o no el recuadro de dialogo
  closeOnEsc        : PropTypes.bool, // si se cierra el modal al presionar ESC
  closeMaskOnClick  : PropTypes.bool, // si se cierra el modal al presionar fuera del recuadro del modal
  showCloseButton   : PropTypes.bool, // si muestra un boton de cerrar en forma de X dentro del modal
  animation         : PropTypes.oneOf(animationTypes), // el tipo de animacion que tendra en modal
  enterAnimation    : PropTypes.oneOf(animationTypes), // la animacion al aparecer el modal
  leaveAnimation    : PropTypes.oneOf(animationTypes), //  la animacion al desaparecer el modal
  duration          : PropTypes.number, // el tiempo que dura la animacion expresado en ms
  className         : PropTypes.string, // alguna clase aplicada al recuadro del modal
  customStyles      : PropTypes.object, // estilos custom para el recuadro del modal
  customMaskStyles  : PropTypes.object, // estilos customs para la mascara del modal
  onClose           : PropTypes.func.isRequired, // funcion para cerrar el modal
  onAnimationEnd    : PropTypes.func, // funcion que se ejecuta despues de que el modal se haya ido
  hideContent: PropTypes.bool, // decide si ocular lo que esta detras del modal, para que no se pueda hacer scroll cunado el modal esta abierto
  position: PropTypes.oneOf(['center', 'top', 'right', 'left', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom']), // define la posicion del cuadro de dialogo del modal
}

Modal.defaultProps = {
  id                : 'uniquePortalModalID',
  autoFocus         :  true,
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
  onAnimationEnd    : () => {},
  hideContent       : true,
  position          : 'center',
};

MainModal.propTypes = Modal.propTypes;
