import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = (props) => {
  const className = props.className ? props.className : ''
  return (
    <StyledButton className={className} {...props}>
      {
        props.children
      }
    </StyledButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  'outline-primary': PropTypes.bool,
  'outline-secondary': PropTypes.bool,
  'no-radius': PropTypes.bool,
  'radius-sm': PropTypes.bool,
  'radius-lg': PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  block: PropTypes.bool,
  'block-sm': PropTypes.bool,
  'block-md': PropTypes.bool,
}
export default Button
