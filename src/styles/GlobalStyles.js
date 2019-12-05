import { createGlobalStyle, css } from 'styled-components'
import { HEADING_SIZES } from './GlobalVariables'

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

//shadow
const Shadow = {
  btn_box_shadow: css`box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)`,
  btn_active_box_shadow: css`box-shadow: inset 0 3px 5px rgba(0,0,0,.125)`,
  shadow: css`box-shadow: 0 5px 8px 0 rgba(76,132,255,0.32)`,
  noShadow: css`box-shadow: 0 0 0 rgb(0,0,0,0)`,
}

export { GlobalStyles, Shadow }
