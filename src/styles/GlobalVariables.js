const em = 'em'
const rem = 'rem'
const px = 'px'
const por = '%'

// Colors
// Grayscale and brand colors for use across Bootstrap.
const $color = {
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

const $grid_breakpoints = {
  xs: '0',
  sm: '544' + px,
  md: '768' + px,
  lg: '992' + px,
  xl: '1200' + px
}

// Headins sizes
const $heading_sizes = {
  h1: '3.067' + rem,
  h2: '2.4' + rem,
  h3: '1.733' + rem,
  h4: '1.467' + rem,
  h5: '1.2' + rem,
  h6: '1' + rem
}

// Pixel value used to responsively scale all typography. Applied to the `<html>` element.
const $font_size = {
  root: '15' + px,
  base: '1' + rem,
  lg: '1.2' + rem,
  md: '1' + rem,
  sm: '0.9' + rem,
  xs: '0.6' + rem
}

//border radius
const $border_radius = {
  normal: '25' + px,
  lg: '50' + px,
  sm: '10' + px,
  block: '5' + px,
  circle: '50' + por
}


//sizes of radio and check buttons
const $radio_check_size = {
  sm: 15,
  md: 22,
  lg: 30
}

export {
  $color,
  $grid_breakpoints,
  $heading_sizes,
  $font_size,
  $border_radius,
  $radio_check_size
}

