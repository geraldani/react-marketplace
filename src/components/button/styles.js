import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, FONT_SIZE, BORDER_RADIUS, GRID_BREAKPOINTS } from '../../styles/GlobalVariables'

//paddings
const btn_padding_x = '1.333rem'
const btn_padding_y = '0.6667rem'
const btn_padding_x_sm = '0.8rem'
const btn_padding_y_sm = '0.4rem'
const btn_padding_x_lg = '2.667rem'
const btn_padding_y_lg = '1.067rem'

//border radius
const btn_border_radius = BORDER_RADIUS.normal
const btn_border_radius_sm = BORDER_RADIUS.sm
const btn_border_radius_lg = BORDER_RADIUS.lg
const btn_border_radius_block = BORDER_RADIUS.block

const btn_line_height = '1.2'
const btn_font_weight = 'normal'

//shadow
const btn_box_shadow = css`box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)`
const btn_active_box_shadow = css`box-shadow: inset 0 3px 5px rgba(0,0,0,.125)`
const btn_shadow = css`box-shadow: 0 5px 8px 0 rgba(76,132,255,0.32)`


const ButtonStylesTypes = {
  primary: css`
    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    border-color: ${COLOR.primary};
    &:hover{
      color: ${COLOR.white};
      background-color: ${COLOR.brandHover};
      border-color: ${COLOR.brandHover};

  }`,
  secondary: css`
    background-color: ${COLOR.secondary};
    color: ${COLOR.white};
    border-color: ${COLOR.secondary};
    &:hover{
      color: ${COLOR.white};
      background-color: ${COLOR.brandHoverSecondary};
      border-color: ${COLOR.brandHoverSecondary};

  }`,
  'outline-primary': css`
    background-color: transparent;
    color: ${COLOR.primary};
    border-color: ${COLOR.primary};
     &:hover{
      color: ${COLOR.white};
      background-color: ${COLOR.primary};
  }`,
  'outline-secondary': css`
    background-color: transparent;
    color: ${COLOR.secondary};
    border-color: ${COLOR.secondary}!important;
     &:hover{
      color: ${COLOR.white};
      background-color: ${COLOR.secondary};
  }`,
  'simple-primary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${COLOR.primary};
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${COLOR.brandHover};
    }
  `,
  'simple-secondary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${COLOR.secondary};
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${COLOR.brandHoverSecondary};
    }
  `,
}

const buttonSize = (padding_x, padding_y, fontSize, border_radius) => css`
  padding: ${padding_y} ${padding_x};
  font-size: ${fontSize};
  border-radius: ${border_radius};`

const blockButton = css`
  display: block;
  width: 100%;
  border-radius: ${btn_border_radius_block};`

const buttonDisable = css` 
  background-color: ${COLOR.grayLight};
  color: ${COLOR.white};
  cursor: not-allowed;
  pointer-events: none;
  border-color: ${COLOR.grayLight};`

const commosStyles = css`
  border: 1px solid;
  font-weight: ${btn_font_weight};
  transition: background-color 250ms, transform 100ms linear;
  line-height: ${btn_line_height};
  text-transform: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  width: auto;

  //default
  color: ${COLOR.white};
  background-color: ${COLOR.primary};
  border-color: ${COLOR.primary};
  ${buttonSize(btn_padding_x, btn_padding_y, FONT_SIZE.base, btn_border_radius)};
  
  //border-radius
  ${props => props['no-radius'] && css`border-radius: 0!important;`};
  ${props => props['radius-sm'] && css`border-radius: ${btn_border_radius_sm}!important;`}
  ${props => props['radius-xs'] && css`border-radius: ${btn_border_radius_block}!important;`}
  ${props => props['radius-lg'] && css`border-radius: ${btn_border_radius_lg}!important;`}
  
  //btn sizes
  ${props => props.lg && buttonSize(btn_padding_x_lg, btn_padding_y_lg, FONT_SIZE.lg, btn_border_radius_lg)};
  ${props => props.sm && buttonSize(btn_padding_x_sm, btn_padding_y_sm, FONT_SIZE.sm, btn_border_radius_sm)};
  
  //block
  ${props => props.block && blockButton}
  
  //disabled
  ${props => props.disabled && buttonDisable};
 
  &:active {
    transform: scale(0.9);
  }
  &:focus { 
    box-shadow: none;
    outline: none;
  }
  &:hover{
    background-color: ${COLOR.brandHover};
    border-color: ${COLOR.brandHover};
    text-decoration: none;
     ${props => props.disabled && buttonDisable}
  }
  
   //types
  ${props => ButtonStylesTypes[Object.keys(props).find(elem => Object.keys(ButtonStylesTypes).find(style => elem === style))]};

  //medias
  @media(max-width: ${GRID_BREAKPOINTS.md}){
    ${props => props['block-md'] && blockButton}
  }
  
  @media(max-width: ${GRID_BREAKPOINTS.sm}){
    ${props => props['block-sm'] && blockButton}
  }
`

const StyledButton = styled.button`${commosStyles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${commosStyles}` // para renderizar un link (a) con los mismos estilos

export { StyledButton, StyledLink }
