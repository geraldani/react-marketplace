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
  grayLighter: '#CCCCCC',
  grayLightest: '#EEEEEE',
  grayXlightest: '#F8F8F8',
  txtColor: '#68768C',
  primary: '#1ce2ad',
  secondary: '#dc30c6',
  brandHover: '#62fdd3',
  brandHoverSecondary: '#e26cd3',
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
  sm: '0.8' + rem,
  xs: '0.6' + rem
}

//border radius
const $border_radius = {
  normal: '25' + px,
  lg: '50' + px,
  sm: '10' + px,
  block: '5' + px
}




export {
  $color,
  $grid_breakpoints,
  $heading_sizes,
  $font_size,
  $border_radius
}

