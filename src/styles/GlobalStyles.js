import { createGlobalStyle } from 'styled-components'
import { $gridBreakpoints, $headingSizes } from './GlobalVariables'

const GlobalStyles = createGlobalStyle`
  body{
    width: ${$gridBreakpoints.md};
    background: aqua;    
  }
    
  h1 { font-size: ${$headingSizes.h1}; }
  h2 { font-size: ${$headingSizes.h2}; }
  h3 { font-size: ${$headingSizes.h3}; }
  h4 { font-size: ${$headingSizes.h4}; }
  h5 { font-size: ${$headingSizes.h5}; }
  h6 { font-size: ${$headingSizes.h6}!important; }
  p { color: #68768C; }
`

export { GlobalStyles }
