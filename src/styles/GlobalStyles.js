import { createGlobalStyle, css } from 'styled-components'
import { headingSizes, fontSize, color, borderRadius } from './GlobalVariables'

const  inputSettings = {
  paddingX: 1 + 'rem',
  paddingY: .8 + 'rem',
  lineHeight: 1.25,
  borderWidth: 2 + 'px',
  radius:borderRadius.block
}

const GlobalStyles = createGlobalStyle`
  body{
    margin: 20px;
  }
    
  h1 { font-size: ${headingSizes.h1}; }
  h2 { font-size: ${headingSizes.h2}; }
  h3 { font-size: ${headingSizes.h3}; }
  h4 { font-size: ${headingSizes.h4}; }
  h5 { font-size: ${headingSizes.h5}; }
  h6 { font-size: ${headingSizes.h6}; }
  p { color: #68768C; }
`

//shadow
const Shadow = {
  btn_box_shadow: css`box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)`,
  btn_active_box_shadow: css`box-shadow: inset 0 3px 5px rgba(0,0,0,.125)`,
  shadow: css`box-shadow: 0 5px 8px 0 rgba(76,132,255,0.32)`,
  noShadow: css`box-shadow: 0 0 0 rgb(0,0,0,0)`,
}

const GlobalInputStyles = css`
  width: 100%;
  margin-top: 0.3em;
  height: auto!important;
  padding: ${inputSettings.paddingY} ${inputSettings.paddingX};
  font-size: ${fontSize.base};
  line-height: ${inputSettings.lineHeight};
  border: ${inputSettings.borderWidth} solid ${color.grayLightest};
  border-radius: ${inputSettings.radius};
  color: ${color.grayDark};
  background-color: ${color.white};
  transition: all 250ms ease-in-out;
  &:focus {
    border-color: ${color.primary};
    outline: none; 
  }
`

export { GlobalStyles, Shadow, GlobalInputStyles }
