const em = 'em'
const rem = 'rem'
const px = 'px'
const por = '%'

// Colors
// Grayscale and brand colors for use across Bootstrap.
const $grayDark = '#444444'
const $gray = '#555555'
const $grayLight = '#999999'
const $grayLighter = '#CCCCCC'
const $grayLightest = '#EEEEEE'
const $grayXlightest = '#F8F8F8'
const $txtColor = '#68768C'
const $brandPrimary = '#4C84FF'
const $brandSecondary = '#4C84FF'
const $brandDocturno = '#1976D2'
const $brandHover = '#ffffff'

// Grid breakpoints
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

const $gridBreakpoints = {
  xs: '0',
  sm: '544' + px,
  md: '768' + px,
  lg: '992' + px,
  xl: '1200' + px
}

// Headins sizes
const $headingSizes = {
  h1 : '3.067' + rem,
  h2 : '2.4' + rem,
  h3 : '1.733' + rem,
  h4 : '1.467' + rem,
  h5 : '1.2' + rem,
  h6 : '1' + rem
}

export {
  $grayDark,
  $gray,
  $grayLight,
  $grayLighter,
  $grayLightest,
  $grayXlightest,
  $txtColor,
  $brandPrimary,
  $brandSecondary,
  $brandDocturno,
  $brandHover,
  $gridBreakpoints,
  $headingSizes
}

