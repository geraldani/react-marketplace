import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledLink } from './styles'
import { GLOBAL_SIZES } from '../../styles/GlobalVariables'

const Button = (props) => {
  const className = props.className || ''
  const ButtonLink = props.link ? StyledLink : StyledButton
  const commonProps = {
    btntype: props['btn-style'],
    radius: props.radius,
    size: props.size,
    onClick: props.onClick,
    block: props.block,
    disabled: props.disabled,
    shadow: props.shadow,
    className,
  }

  return (
    <ButtonLink{...commonProps} to={props.link}>
      {props.children}
    </ButtonLink>
  )
}

// Especifica los valores por defecto de props:
Button.defaultProps = {
  size: 'md',
  'btn-style': 'primary',
  radius: 'sm',
  shadow:'none'
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(GLOBAL_SIZES),
  shadow: PropTypes.oneOf([
    'onhover',
    'onhoverout',
    'normal',
    'none'
  ]),
  'btn-style': PropTypes.oneOf([
    'primary',
    'secondary',
    'outline-primary',
    'outline-secondary',
    'simple-primary',
    'simple-secondary'
  ]),
  radius: PropTypes.oneOf([
    'none',
    'sm',
    'md',
    'lg'
  ]),
  block: PropTypes.oneOfType([
    PropTypes.oneOf(['sm','md']),
    PropTypes.bool
  ]),
}
export default Button
