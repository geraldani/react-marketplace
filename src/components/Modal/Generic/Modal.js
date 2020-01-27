import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal } from './modalMine'
// import cx from 'classnames';

// env
const IN_BROWSER = typeof window !== 'undefined'
const UA = IN_BROWSER && window.navigator.userAgent.toLowerCase()
const IS_IE_9 = UA && UA.indexOf('msie 9.0') > 0

const Dialog = props => {
  const animation = (props.animationType === 'enter' ? props.enterAnimation : props.leaveAnimation) || props.animation
  const className = `rodal-dialog rodal-${animation}-${props.animationType}`

  const CloseButton = props.showCloseButton ? <span className="rodal-close" onClick={props.onClose} /> : null
  const { width, height, measure, duration, customStyles } = props
  const style = {
    width: width ,
    height: height ,
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  }
  console.log(style)
  const mergedStyles = { ...style, ...customStyles }

  return (
    <div style={mergedStyles} className={className}>
      {CloseButton}
      {props.children}
    </div>
  )
}

const Rodal = (props) => {
  const [isShow, setIsShow] = useState(false)
  const [animationType, setAnimationType] = useState('leave')
  const el = React.useRef(null)

  const enter = () => {
    setIsShow(true)
    setAnimationType('enter')
    // this.setState({ isShow: true, animationType: 'enter' });
  }

  const leave = () => setAnimationType('leave')

  useEffect(() => {
    if (props.visible) {
      enter()
    }
  }, [])

  /*  componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }*/

  useEffect(() => {
    props.visible ? enter() : leave()
  }, [props.visible])

  /*  componentDidUpdate(prevProps) {
      if (this.props.visible && !prevProps.visible) {
        this.enter();
      }

      if (!this.props.visible && prevProps.visible) {
        this.leave();
      }
    }*/

  const onKeyUp = event => {
    if (!props.closeOnEsc || event.keyCode !== 27) {
      return
    }

    props.onClose()
  }

  const animationEnd = event => {
    // const { animationType } = this.state
    const { closeOnEsc, onAnimationEnd } = props

    if (animationType === 'leave') {
      setIsShow(false)
      // this.setState({ isShow: false })
    } else if (closeOnEsc) {
      el.current.focus()
    }

    if (event.target === el.current && onAnimationEnd) {
      onAnimationEnd()
    }
  }

  const {
    closeMaskOnClick,
    onClose,
    customMaskStyles,
    showMask,
    duration,
    className,
    children
  } = props
  const mask = showMask
    ? (
      <div
        className="rodal-mask"
        style={customMaskStyles}
        onClick={closeMaskOnClick ? onClose : void 0}
      />
    )
    : null
  const style = {
    display: isShow ? '' : 'none',
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  }

  return (
    <div
      style={style}
      className={`rodal rodal-fade-${animationType} className`}
      onAnimationEnd={animationEnd}
      tabIndex="-1"
      ref={el}
      onKeyUp={onKeyUp}
    >
      {mask}
      <Dialog {...props} animationType={animationType}>
        {children}
      </Dialog>
    </div>
  )
}

Rodal.propTypes = {
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

Rodal.defaultProps = {
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

export default Rodal
