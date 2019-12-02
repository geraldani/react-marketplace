import styled, { css } from 'styled-components'
import { $color, $font_size, $border_radius, $grid_breakpoints } from '../../styles/GlobalVariables'

const ButtonStylesTypes = {
  primary: css`
    background-color: ${$color.primary};
    color: ${$color.white}!important;
    border-color: ${$color.primary}!important;
    transition: all 0.5s ease;
    &:hover{
      color: ${$color.white}!important;
      background-color: ${$color.brandHover};
      border-color: ${$color.brandHover}!important;

    }
  `,
  secondary: css`
    background-color: ${$color.secondary}!important;
    color: ${$color.white}!important;
    border-color: ${$color.secondary}!important;
    &:hover{
      color: ${$color.white}!important;
      background-color: ${$color.brandHoverSecondary}!important;
      border-color: ${$color.brandHoverSecondary}!important;

    }
  `,
  'outline-primary': css`
    background-color: transparent!important;
    color: ${$color.primary}!important;
    border-color: ${$color.primary}!important;
     &:hover{
      color: ${$color.white}!important;
      background-color: ${$color.primary}!important;
    }
  `,
  'outline-secondary': css`
    background-color: transparent!important;
    color: ${$color.secondary}!important;
    border-color: ${$color.secondary}!important;
     &:hover{
      color: ${$color.white}!important;
      background-color: ${$color.secondary}!important;
    }
  `
}

const $btn_padding_x = '1.333rem'
const $btn_padding_y = '0.6667rem'

const $btn_padding_x_sm = '0.8rem'
const $btn_padding_y_sm = '0.4rem'

const $btn_padding_x_lg = '2.667rem'
const $btn_padding_y_lg = '1.067rem'

const $btn_line_height = '1.2 '
const $btn_font_weight = 'normal'

const $btn_box_shadow = css`box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)`
const $btn_active_box_shadow = css`box-shadow: inset 0 3px 5px rgba(0,0,0,.125)`
const $btn_shadow = css`box-shadow: 0 5px 8px 0 rgba(76,132,255,0.32)`

const $btn_border_radius = $border_radius.normal
const $btn_border_radius_sm = $border_radius.sm
const $btn_border_radius_lg = $border_radius.lg
const $btn_border_radius_block = $border_radius.block

const buttonSize = (padding_x, padding_y, fontSize, border_radius) => css`
  padding: ${padding_y} ${padding_x};
  font-size: ${fontSize};
  border-radius: ${border_radius};
`

const StyledButton = styled.button`
  ${props => ButtonStylesTypes[Object.keys(props).find(elem => Object.keys(ButtonStylesTypes).find(style => elem === style))]};
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
  ${props => props['radius-lg'] && css`border-radius: ${$btn_border_radius_lg}!important;`}
  
  //btn sizes
  ${props => props.lg && buttonSize($btn_padding_x_lg, $btn_padding_y_lg, $font_size.lg, $btn_border_radius_lg)};
  ${props => props.sm && buttonSize($btn_padding_x_sm, $btn_padding_y_sm, $font_size.sm, $btn_border_radius_sm)};
  
  //block
  ${props => props.block && css`
    display: block;
    width: 100%;
    border-radius: ${$btn_border_radius_block};
  `}
  
  &:active {
    box-shadow: none;
  }
  &:focus { 
    box-shadow: none;
  }
  &:hover{
    background-color: ${$color.brandHover};
    border-color: ${$color.brandHover}
  }
  
  //medias
  @media(max-width: ${$grid_breakpoints.md}){
    ${props => props['block-md'] && css`
      display: block;
      width: 100%;
      border-radius: ${$btn_border_radius_block};
    `}
  }
  
  @media(max-width: ${$grid_breakpoints.sm}){
    ${props => props['block-sm'] && css`
      display: block;
      width: 100%;
      border-radius: ${$btn_border_radius_block};
    `}
  }
`

export { StyledButton }
