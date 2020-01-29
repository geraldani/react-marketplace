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
    transform: translate3d(0, -100px, 0);
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

const bothCubic = css`animation-fill-mode: both; animation-timing-function: cubic-bezier(0.4, 0, 0, 1.5)`
const both = css`animation-fill-mode: both;`

export const styles = {
  zoomenter: bothCubic,
  zoomleave: both,
  slideDownenter: bothCubic,
  slideDownleave: both,
  slideLeftenter: bothCubic,
  slideLeftleave: both,
  slideRightenter: bothCubic,
  slideRightleave: both,
  slideUpenter: bothCubic,
  slideUpleave: both,
  doorenter: bothCubic,
  doorleave: both,
  rotateenter: css`animation-fill-mode: both; transform-origin: center`,
  rotateleave: css`animation-fill-mode: both; transform-origin: center`,
  fadeenter: css`animation-fill-mode: both; animation-timing-function: ease-in`,
  fadeleave: css`animation-fill-mode: both; animation-timing-function: ease-out`,
  flipenter: css`animation-fill-mode: both; animation-timing-function: ease-in; backface-visibility: visible !important`,
  flipleave: css`animation-fill-mode: both; backface-visibility: visible !important`
}


export const animations = {
  fadeenter,
  fadeleave,
  zoomenter,
  zoomleave,
  slideDownenter,
  slideDownleave,
  slideLeftenter,
  slideLeftleave,
  slideRightenter,
  slideRightleave,
  slideUpenter,
  slideUpleave,
  flipenter,
  flipleave,
  rotateenter,
  rotateleave,
  doorenter,
  doorleave
}




