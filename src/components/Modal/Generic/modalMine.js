import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './stylesMine.css'
import { StyledMask, StyledModal, StyledDialog, StyledCloseButton, StyledContainer } from './styles'

const CONTAINER_MODAL = document.getElementById('modal')

const Dialog = props => {
  const { showCloseButton, onClose, children, width, height, duration, customStyles, bgColor } = props

  const animation = (props.animationType === 'enter' ? props.enterAnimation : props.leaveAnimation) || props.animation

  const className = `rodal-${animation}-${props.animationType}`
  const styleProps = {
    width: width,
    height: height,
    animationDuration: duration,
    bgColor: bgColor
  }

  return (
    <StyledDialog style={customStyles} className={className} {...styleProps}>
      {showCloseButton && <StyledCloseButton onClick={onClose} />}
      {children}
    </StyledDialog>
  )
}

const MainModal = props => {
  const { closeMaskOnClick, onClose, customMaskStyles, showMask, visible, duration, className, children, closeOnEsc, onAnimationEnd, bgMaskColor } = props

  const [isShow, setIsShow] = useState(visible)
  const [animationType, setAnimationType] = useState('leave')

  const el = useRef(null)

  const enter = () => {
    setIsShow(true)
    setAnimationType('enter')
  }

  const leave = () => setAnimationType('leave')

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
    } else if (closeOnEsc) {
      el.current.focus()
    }
    if (event.target === el.current && onAnimationEnd) {
      onAnimationEnd()
    }
  }

  return (
    <StyledModal
      {...{ isShow, duration, animationType }}
      className={`rodal-fade-${animationType} ${className}`}
      onAnimationEnd={animationEnd}
      tabIndex='-1'
      ref={el}
      onKeyUp={onKeyUp}
    >
      {
        showMask && <StyledMask style={customMaskStyles} bgMaskColor={bgMaskColor}
                                onClick={closeMaskOnClick ? onClose : () => {}} />
      }
      {
        props.showDialog
          ? <Dialog {...props} animationType={animationType}>{children}</Dialog>
          : <StyledContainer>{children}</StyledContainer>
      }
    </StyledModal>
  )
}

export const Modal = (props) => ReactDOM.createPortal(<MainModal {...props} />, CONTAINER_MODAL)

Modal.propTypes = {
  width: PropTypes.string, // ancho del recuadro dentro del modal
  height: PropTypes.string, // alto del recuadro dentro del modal
  bgColor: PropTypes.string, // color del fondo del recuadro del modal
  bgMaskColor: PropTypes.string, // color del fondo de la mascara del modal
  visible: PropTypes.bool, // si el modal es visible o no
  showMask: PropTypes.bool, // si muestra o no el fondo detras del modal
  showDialog: PropTypes.bool, // si muestra o no el recuadro blanco
  closeOnEsc: PropTypes.bool, // si se cierra el modal al presionar ESC
  closeMaskOnClick: PropTypes.bool, // si se cierra el modal al presionar fuera del recuadro del modal
  showCloseButton: PropTypes.bool, // si muestra un boton de cerrar en forma de X dentro del modal
  animation: PropTypes.string, // el tipo de animacion que tendra en modal
  enterAnimation: PropTypes.string, // la animacion al aparecer el modal
  leaveAnimation: PropTypes.string, //  la animacion al desaparecer el modal
  duration: PropTypes.number, // el tiempo que dura la animacion expresado en ms
  className: PropTypes.string, // alguna clase
  customStyles: PropTypes.object, // stilos custom para el recuadro del modal
  customMaskStyles: PropTypes.object, // estilos customs para la mascara del modal
  onClose: PropTypes.func.isRequired, // funcion para cerrar el modal
  onAnimationEnd: PropTypes.func // funcion que se ejecuta despues de que el modal se haya ido
}

Modal.defaultProps = {
  width: '400px',
  height: '240px',
  bgColor: '#fff',
  bgMaskColor: 'rgba(0, 0, 0, .3)',
  visible: false,
  showMask: true,
  showDialog: true,
  closeOnEsc: true,
  closeMaskOnClick: true,
  showCloseButton: true,
  animation: 'zoom',
  enterAnimation: '',
  leaveAnimation: '',
  duration: 300,
  className: '',
  customStyles: {},
  customMaskStyles: {},
}
