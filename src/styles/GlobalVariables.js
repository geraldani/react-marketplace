const em = 'em'
const rem = 'rem'
const px = 'px'
const por = '%'

// Colors
// Grayscale and brand colors for use across Bootstrap.
const COLOR = {
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

// Grid breakpoints
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

const GRID_BREAKPOINTS = {
  xs: 0,
  sm: 544 + px,
  md: 768 + px,
  lg: 992 + px,
  xl: 1200 + px
}

// Headins sizes
const HEADING_SIZES = {
  h1: '3.067' + rem,
  h2: '2.4' + rem,
  h3: '1.733' + rem,
  h4: '1.467' + rem,
  h5: '1.2' + rem,
  h6: '1' + rem
}

// Pixel value used to responsively scale all typography. Applied to the `<html>` element.
const FONT_SIZE = {
  root: '15' + px,
  base: '1' + rem,
  lg: '1.2' + rem,
  md: '1' + rem,
  sm: '0.9' + rem,
  xs: '0.6' + rem
}

//border radius
const BORDER_RADIUS = {
  normal: '25' + px,
  lg: '50' + px,
  sm: '10' + px,
  block: '5' + px,
  circle: '50' + por,
  none: 0
}
const GLOBAL_SIZES = [
  'sm',
  'md',
  'lg'
]
export {
  COLOR,
  GRID_BREAKPOINTS,
  HEADING_SIZES,
  FONT_SIZE,
  GLOBAL_SIZES,
  BORDER_RADIUS,
}

