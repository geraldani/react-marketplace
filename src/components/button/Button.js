import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledLink } from './styles'

const Button = (props) => {
  const className = props.className ? props.className : ''
  const ButtonLink = props.link ? StyledLink : StyledButton
  return (
    <ButtonLink className={className} {...props} onClick={props.onClick} to={props.link}>
      {
        props.children
      }
    </ButtonLink>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  'outline-primary': PropTypes.bool,
  'outline-secondary': PropTypes.bool,
  'simple-primary': PropTypes.bool,
  'simple-secondary': PropTypes.bool,
  'no-radius': PropTypes.bool,
  'radius-sm': PropTypes.bool,
  'radius-lg': PropTypes.bool,
  'radius-xs': PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  block: PropTypes.bool,
  'block-sm': PropTypes.bool,
  'block-md': PropTypes.bool,
  onClick: PropTypes.func,
  link: PropTypes.string,
  disabled: PropTypes.bool
}
export default Button
