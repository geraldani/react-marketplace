import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { $color, $font_size, $border_radius, $grid_breakpoints } from '../../styles/GlobalVariables'

//paddings
const $btn_padding_x = '1.333rem'
const $btn_padding_y = '0.6667rem'
const $btn_padding_x_sm = '0.8rem'
const $btn_padding_y_sm = '0.4rem'
const $btn_padding_x_lg = '2.667rem'
const $btn_padding_y_lg = '1.067rem'

//border radius
const $btn_border_radius = $border_radius.normal
const $btn_border_radius_sm = $border_radius.sm
const $btn_border_radius_lg = $border_radius.lg
const $btn_border_radius_block = $border_radius.block

const $btn_line_height = '1.2 '
const $btn_font_weight = 'normal'

const ButtonStylesTypes = {
  primary: css`
    background-color: ${$color.primary};
    color: ${$color.white};
    border-color: ${$color.primary};
    transition: all 0.5s ease;
    &:hover{
      color: ${$color.white};
      background-color: ${$color.brandHover};
      border-color: ${$color.brandHover};

  }`,
  secondary: css`
    background-color: ${$color.secondary};
    color: ${$color.white};
    border-color: ${$color.secondary};
    &:hover{
      color: ${$color.white};
      background-color: ${$color.brandHoverSecondary};
      border-color: ${$color.brandHoverSecondary};

  }`,
  'outline-primary': css`
    background-color: transparent;
    color: ${$color.primary};
    border-color: ${$color.primary};
     &:hover{
      color: ${$color.white};
      background-color: ${$color.primary};
  }`,
  'outline-secondary': css`
    background-color: transparent;
    color: ${$color.secondary};
    border-color: ${$color.secondary}!important;
     &:hover{
      color: ${$color.white};
      background-color: ${$color.secondary};
  }`,
  'simple-primary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${$color.primary};
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${$color.brandHover};
    }
  `,
  'simple-secondary': css`
    background-color: transparent;
    border-color: transparent;
    color: ${$color.secondary};
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${$color.brandHoverSecondary};
    }
  `,
}

//shadow
const $btn_box_shadow = css`box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)`
const $btn_active_box_shadow = css`box-shadow: inset 0 3px 5px rgba(0,0,0,.125)`
const $btn_shadow = css`box-shadow: 0 5px 8px 0 rgba(76,132,255,0.32)`

const buttonSize = (padding_x, padding_y, fontSize, border_radius) => css`
  padding: ${padding_y} ${padding_x};
  font-size: ${fontSize};
  border-radius: ${border_radius};`

const blockButton = css`
  display: block;
  width: 100%;
  border-radius: ${$btn_border_radius_block};`

const buttonDisable = css` 
  background-color: ${$color.grayLight};
  color: ${$color.white};
  cursor: not-allowed;
  pointer-events: none;
  border-color: ${$color.grayLight};`

const commosStyles = css`
  border: 1px solid;
  font-weight: ${$btn_font_weight};
  transition: all 250ms;
  line-height: ${$btn_line_height};
  text-transform: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  width: auto;

  //default
  color: ${$color.white};
  background-color: ${$color.primary};
  border-color: ${$color.primary};
  ${buttonSize($btn_padding_x, $btn_padding_y, $font_size.base, $btn_border_radius)};
  
  //border-radius
  ${props => props['no-radius'] && css`border-radius: 0!important;`};
  ${props => props['radius-sm'] && css`border-radius: ${$btn_border_radius_sm}!important;`}
  ${props => props['radius-xs'] && css`border-radius: ${$btn_border_radius_block}!important;`}
  ${props => props['radius-lg'] && css`border-radius: ${$btn_border_radius_lg}!important;`}
  
  //btn sizes
  ${props => props.lg && buttonSize($btn_padding_x_lg, $btn_padding_y_lg, $font_size.lg, $btn_border_radius_lg)};
  ${props => props.sm && buttonSize($btn_padding_x_sm, $btn_padding_y_sm, $font_size.sm, $btn_border_radius_sm)};
  
  //block
  ${props => props.block && blockButton}
  
  //disabled
  ${props => props.disabled && buttonDisable};
 
  &:active {
    box-shadow: none;
  }
  &:focus { 
    box-shadow: none;
    outline: none;
  }
  &:hover{
    background-color: ${$color.brandHover};
    border-color: ${$color.brandHover};
    text-decoration: none;
     ${props => props.disabled && buttonDisable}
  }
  
   //types
  ${props => ButtonStylesTypes[Object.keys(props).find(elem => Object.keys(ButtonStylesTypes).find(style => elem === style))]};

  //medias
  @media(max-width: ${$grid_breakpoints.md}){
    ${props => props['block-md'] && blockButton}
  }
  
  @media(max-width: ${$grid_breakpoints.sm}){
    ${props => props['block-sm'] && blockButton}
  }
`

const StyledButton = styled.button`${commosStyles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${commosStyles}` // para renderizar un link (a) con los mismos estilos

export { StyledButton, StyledLink }
