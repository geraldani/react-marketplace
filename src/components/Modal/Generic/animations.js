import { css, keyframes } from 'styled-components'

/* -- fade -- */
const fadeenter = keyframes`
    from {
        opacity: 0;
    }
`
const fadeleave = keyframes`
  to {
    opacity: 0
  }
`

/* -- zoom -- */
const zoomenter = keyframes`
  from {
    transform: scale3d(.3, .3, .3);
  }
`
const zoomleave = keyframes`
  to {
    transform: scale3d(.3, .3, .3);
  }
`

/* -- slideDown -- */
const slideDownenter = keyframes`
  from {
    transform: translate3d(0, -50px, 0);
  }
`
const slideDownleave = keyframes`
  to {
    transform: translate3d(0, -100px, 0);
  }
`

/* -- slideLeft -- */
const slideLeftenter = keyframes`
  from {
    transform: translate3d(-150px, 0, 0);
  }
`
const slideLeftleave = keyframes`
  to {
    transform: translate3d(-150px, 0, 0);
  }
`

/* -- slideRight -- */
const slideRightenter = keyframes`
  from {
    transform: translate3d(150px, 0, 0);
  }
`
const slideRightleave = keyframes`
  to {
    transform: translate3d(150px, 0, 0);
  }
`

/* -- slideUp -- */
const slideUpenter = keyframes`
  from {
    transform: translate3d(0, 100px, 0);
  }
`
const slideUpleave = keyframes`
  to {
    transform: translate3d(0, 100px, 0);
  }
`

/* -------------- flip --------------- */
const flipenter = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
  }
  70% {
  transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
}
  to {
    transform: perspective(400px);
  }
`
const flipleave = keyframes`
  from {
    transform: perspective(400px);
  }
  30% {
  transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
}
  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
  }
`
/* -------------- fin flip --------------- */

/* -- rotate -- */
const rotateenter = keyframes`
  from {
    transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
  }
`
const rotateleave = keyframes`
    to {
      transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
    }
`

/* -- door -- */
const doorenter = keyframes`
  from {
    transform: scale3d(0, 1, 1);
  }
`
const doorleave = keyframes`
  60% {
  transform: scale3d(.01, 1, 1);
}
  to {
    transform: scale3d(0, 1, .1);
  }
`

export const animationsStyles = {
  zoomenter: css`animation: ${zoomenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  zoomleave: css`animation: ${zoomleave} both;`,
  slideDownenter: css`animation: ${slideDownenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideDownleave: css`animation: ${slideDownleave} both;`,
  slideLeftenter: css`animation: ${slideLeftenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideLeftleave: css`animation: ${slideLeftleave} both;`,
  slideRightenter: css`animation: ${slideRightenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideRightleave: css`animation: ${slideRightleave} both;`,
  slideUpenter: css`animation: ${slideUpenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideUpleave: css`animation: ${slideUpleave} both;`,
  doorenter: css`animation: ${doorenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  doorleave: css`animation: ${doorleave} both;`,
  rotateenter: css`animation: ${rotateenter} both; transform-origin: center`,
  rotateleave: css`animation: ${rotateleave} both; transform-origin: center`,
  fadeenter: css`animation: ${fadeenter} ease-in both`,
  fadeleave: css`animation: ${fadeleave} ease-out both`,
  flipenter: css`animation: ${flipenter} ease-in both; backface-visibility: visible !important`,
  flipleave: css`animation: ${flipleave} both; backface-visibility: visible !important`
}




