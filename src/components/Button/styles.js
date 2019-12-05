import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, FONT_SIZE, BORDER_RADIUS, GRID_BREAKPOINTS } from '../../styles/GlobalVariables'
import { findSize } from '../utils'
import { Shadow } from '../../styles/GlobalStyles'

//paddings
const btn_padding_x = {
  sm: 0.8 + 'rem',
  md: 1.333 + 'rem',
  lg: 2.667 + 'rem'
}

const btn_padding_y = {
  sm: 0.4 + 'rem',
  md: 0.6667 + 'rem',
  lg: 1.067 + 'rem'
}

const btn_font = {
  sm: FONT_SIZE.sm,
  md: FONT_SIZE.md,
  lg: FONT_SIZE.lg
}

//border radius
const btn_border_radius = {
  sm: BORDER_RADIUS.sm,
  md: BORDER_RADIUS.normal,
  lg: BORDER_RADIUS.lg,
  xs: BORDER_RADIUS.block,
  none: BORDER_RADIUS.none
}

const btn_line_height = '1.2'
const btn_font_weight = 'normal'

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
    padding: ${btn_padding_y.sm} ${btn_padding_x.sm}!important;
    border-radius: ${btn_border_radius.xs}!important;
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
    padding: ${btn_padding_y.sm} ${btn_padding_x.sm}!important;
    border-radius: ${btn_border_radius.xs}!important;
    &:hover{
      background-color: transparent;
      border-color: transparent;
      color: ${COLOR.brandHoverSecondary};
    }
  `,
}

const ShadowStyles = {
  none: css` box-shadow: none; `,
  normal: Shadow.shadow,
  onhover: css`
    ${Shadow.noShadow};
    &:hover{
      ${Shadow.shadow};
    }`,
  onhoverout: css`
    ${Shadow.shadow};
    &:hover{
      ${Shadow.noShadow};
    }`
}

const buttonSize = (padding_x, padding_y, font_size, border_radius) => css`
  padding: ${padding_y} ${padding_x};
  font-size: ${font_size};
  border-radius: ${border_radius};`

const blockButton = css`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: ${btn_border_radius.block};`

const buttonDisable = css` 
  background-color: ${COLOR.grayLight};
  color: ${COLOR.white};
  cursor: not-allowed;
  pointer-events: none;
  border-color: ${COLOR.grayLight};`

const findButtonSize = (size) => {
  const elem = findSize(size)
  return buttonSize(btn_padding_x[elem], btn_padding_y[elem], btn_font[elem], btn_border_radius[elem])
}

const commosStyles = css`
  border: 1px solid;
  font-weight: ${btn_font_weight};
  transition: background-color 250ms, transform 90ms linear, box-shadow 300ms ease-in-out;
  line-height: ${btn_line_height};
  text-transform: inherit;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  width: auto;
  //shadows
  ${props => ShadowStyles[Object.keys(ShadowStyles).find(e => e === props.shadow)]};
  
  ${props => ButtonStylesTypes[Object.keys(ButtonStylesTypes).find(style => props.btntype === style)]};
  
  //buttonSize
  ${props => findButtonSize(props.size)};
  
  //border-radius
  border-radius: ${props => btn_border_radius[Object.keys(btn_border_radius).find(e => e === props.radius)]};
  
  //block
  ${props => typeof (props.block) === 'boolean' && props.block && blockButton}
  
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
    text-decoration: none;
    ${props => props.disabled && buttonDisable};
  }

  //medias
  @media(max-width: ${GRID_BREAKPOINTS.md}){
    ${props => props.block === 'md' && blockButton};
  }
  @media(max-width: ${GRID_BREAKPOINTS.sm}){
    ${props => props.block === 'sm' && blockButton};
    font-size: ${FONT_SIZE.sm};
  }
`

const StyledButton = styled.button`${commosStyles}` // para renderizar un boton con los mismos estilos
const StyledLink = styled(Link)`${commosStyles}` // para renderizar un link (a) con los mismos estilos

export { StyledButton, StyledLink }
