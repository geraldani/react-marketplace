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

/* -- zoomIn -- */
const zoomInenter = keyframes`
  from {
    transform: scale3d(.3, .3, .3);
  }
`
const zoomInleave = keyframes`
  to {
    transform: scale3d(.3, .3, .3);
  }
`

/* -- zoom -- */
const zoomOutenter = keyframes`
  from {
    transform: scale3d(2, 2, 2);
  }
`
const zoomOutleave = keyframes`
  to {
    transform: scale3d(2, 2, 2);
  }
`

/* -- slideDown -- */
const slideUpenter = keyframes`
  from {
    transform: translate3d(0, -50px, 0);
  }
`
const slideUpleave = keyframes`
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
const slideDownenter = keyframes`
  from {
    transform: translate3d(0, 100px, 0);
  }
`
const slideDownleave = keyframes`
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

  /*
  * ----------------------------------------
  * animation puff-in-bl
* ----------------------------------------
*/
const puffInenter = keyframes`
  0% {
    transform: scale(0);
    transform-origin: 0 100%;
    filter: blur(4px);
  }
  100% {
    transform: scale(1);
    transform-origin: 0 100%;
    filter: blur(0px);
  }
`
const puffInleave = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 0 100%;
    filter: blur(0px);
  }
  100% {
    transform: scale(0);
    transform-origin: 0 100%;
    filter: blur(4px);
  }
`

const puffOutenter = keyframes`
  0% {
    transform: scale(2);
    transform-origin: 0 100%;
    filter: blur(4px);
  }
  100% {
    transform: scale(1);
    transform-origin: 0 100%;
    filter: blur(0px);
  }
`
const puffOutleave = keyframes`
  0% {
    transform: scale(1);
    transform-origin: 0 100%;
    filter: blur(0px);
  }
  100% {
    transform: scale(2);
    transform-origin: 0 100%;
    filter: blur(4px);
  }
`

/**
 * ----------------------------------------
 * animation slideBlurredTop
 * ----------------------------------------
 */
const slideBlurredTopenter = keyframes`
  0% {
  transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
  transform-origin: 50% 0;
  filter: blur(40px);
}
  100% {
  transform: translateY(0) scaleY(1) scaleX(1);
  transform-origin: 50% 50%;
  filter: blur(0);
}
`

const slideBlurredTopleave = keyframes`
  0% {
  transform: translateY(0) scaleY(1) scaleX(1);
  transform-origin: 50% 0;
  filter: blur(0);
}
  100% {
  transform: translateY(-1000px) scaleY(2) scaleX(0.2);
  transform-origin: 50% 0;
  filter: blur(40px);
}
`

const slideInEllipticRightenter = keyframes`
  from {
    transform: translateX(800px) rotateY(-30deg) scale(0);
    transform-origin: -100% 50%;
  }
  100% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: -1800px 50%;
  }
`
const slideInEllipticRightleave = keyframes`
  0% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: -1800px 50%;
  }
  100% {
    transform: translateX(1000px) rotateY(-30deg) scale(0);
    transform-origin: -100% 50%;
  }
`

export const animationsStyles = {
  zoomInenter: css`animation: ${zoomInenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  zoomInleave: css`animation: ${zoomInleave} both;`,
  zoomOutenter: css`animation: ${zoomOutenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  zoomOutleave: css`animation: ${zoomOutleave} both;`,
  slideDownenter: css`animation: ${slideDownenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideDownleave: css`animation: ${slideDownleave} both;`,
  slideUpenter: css`animation: ${slideUpenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideUpleave: css`animation: ${slideUpleave} both;`,
  slideRightleave: css`animation: ${slideRightleave} both;`,
  slideLeftenter: css`animation: ${slideLeftenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  slideLeftleave: css`animation: ${slideLeftleave} both;`,
  slideRightenter: css`animation: ${slideRightenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  doorenter: css`animation: ${doorenter} cubic-bezier(0.4, 0, 0, 1.5) both;`,
  doorleave: css`animation: ${doorleave} both;`,
  rotateenter: css`animation: ${rotateenter} both; transform-origin: center`,
  rotateleave: css`animation: ${rotateleave} both; transform-origin: center`,
  fadeenter: css`animation: ${fadeenter} ease-in both`,
  fadeleave: css`animation: ${fadeleave} ease-out both`,
  flipenter: css`animation: ${flipenter} ease-in both; backface-visibility: visible !important`,
  flipleave: css`animation: ${flipleave} both; backface-visibility: visible !important`,
  slideBlurredTopenter: css`animation: ${slideBlurredTopenter} cubic-bezier(0.230, 1.000, 0.320, 1.000) both`,
  slideBlurredTopleave: css`animation: ${slideBlurredTopleave} cubic-bezier(0.755, 0.050, 0.855, 0.060) both`,
  puffInenter: css`animation: ${puffInenter} cubic-bezier(0.165, 0.840, 0.440, 1.000) both;`,
  puffInleave: css`animation: ${puffInleave} cubic-bezier(0.470, 0.000, 0.745, 0.715) both;`,
  puffOutenter: css`animation: ${puffOutenter} cubic-bezier(0.165, 0.840, 0.440, 1.000) both;`,
  puffOutleave: css`animation: ${puffOutleave} cubic-bezier(0.470, 0.000, 0.745, 0.715) both;`,
  slideInEllipticRightenter: css`animation: ${slideInEllipticRightenter} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`,
  slideInEllipticRightleave: css`animation: ${slideInEllipticRightleave} ease-in both;`,
}
