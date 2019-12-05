import { createGlobalStyle } from 'styled-components'
import {  HEADING_SIZES } from './GlobalVariables'

const GlobalStyles = createGlobalStyle`
  body{
    margin: 20px;
  }
    
  h1 { font-size: ${HEADING_SIZES.h1}; }
  h2 { font-size: ${HEADING_SIZES.h2}; }
  h3 { font-size: ${HEADING_SIZES.h3}; }
  h4 { font-size: ${HEADING_SIZES.h4}; }
  h5 { font-size: ${HEADING_SIZES.h5}; }
  h6 { font-size: ${HEADING_SIZES.h6}; }
  p { color: #68768C; }
`


export { GlobalStyles }
