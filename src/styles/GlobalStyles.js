import { createGlobalStyle } from 'styled-components'
import { $color, $grid_breakpoints, $heading_sizes } from './GlobalVariables'

const GlobalStyles = createGlobalStyle`
  body{
    width: ${$grid_breakpoints.md};
    margin: 20px;
  }
    
  h1 { font-size: ${$heading_sizes.h1}; }
  h2 { font-size: ${$heading_sizes.h2}; }
  h3 { font-size: ${$heading_sizes.h3}; }
  h4 { font-size: ${$heading_sizes.h4}; }
  h5 { font-size: ${$heading_sizes.h5}; }
  h6 { font-size: ${$heading_sizes.h6}; }
  p { color: #68768C; }
`

export { GlobalStyles }
