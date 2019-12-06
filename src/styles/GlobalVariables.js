const medidas = {
  px: 'px',
  em: 'em',
  rem: 'rem',
  por: '%'
}

// Colors
const color = {
  grayDark: '#444444',
  gray: '#555555',
  grayLight: '#999999',
  disabledText: '#999',
  disabledBackground: '#555',
  grayLighter: '#CCCCCC',
  grayLightest: '#DDDDDD',
  grayXlightest: '#F8F8F8',
  txtColor: '#68768C',
  text: '#19233C',
  primary: '#0062cc',
  brandHover: '#0062ccd9',
  secondary: '#7610a0',
  brandHoverSecondary: '#7610a0d9',
  white: '#fff'
}

const gridBreakpoints = {
  xs: 0,
  sm: 576 + medidas.px,
  md: 768 + medidas.px,
  lg: 992 + medidas.px,
  xl: 1200 + medidas.px
}

// Headins sizes
const headingSizes = {
  h1: 3.067 + medidas.rem,
  h2: 2.4 + medidas.rem,
  h3: 1.733 + medidas.rem,
  h4: 1.467 + medidas.rem,
  h5: 1.2 + medidas.rem,
  h6: 1 + medidas.rem
}

// Pixel value used to responsively scale all typography. Applied to the `<html>` element.
const fontSize = {
  root: 15 + medidas.px,
  base: 1 + medidas.rem,
  lg: 1.2 + medidas.rem,
  md: 1 + medidas.rem,
  sm: 0.8 + medidas.rem,
  xs: 0.6 + medidas.rem
}

const marginsPaddings = {
  none: 0,
  xs: 0.25 + medidas.rem, // m-1
  sm: 0.5 + medidas.rem, // m-2
  md: 1 + medidas.rem, // m-3
  lg: 1.5 + medidas.rem, // m-4
  xg: 3 + medidas.rem, // m-5
  xxg: 4 + medidas.rem // m-6
}

//borders
const borderWidth = {
  sm: 1 + medidas.px,
  md: 2 + medidas.px,
  lg: 3 + medidas.px,
  xl: 5 + medidas.px
}

//border radius
const borderRadius = {
  xs: 5 + medidas.px,
  sm: 10 + medidas.px,
  md: 25 + medidas.px,
  lg: 50 + medidas.px,
  circle: 50 + medidas.por,
  none: 0
}

const globalSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xg'
]


export {
  color,
  gridBreakpoints,
  headingSizes,
  fontSize,
  globalSizes,
  borderRadius,
  marginsPaddings,
  borderWidth
}

