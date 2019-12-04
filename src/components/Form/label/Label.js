import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './styles'

const Label = ({ children, className, disabled, sm, lg }) => {
  const commonProps = { className, disabled, sm, lg }
  return (
    <StyledLabel {...commonProps}>
      {children}
    </StyledLabel>
  )
}

Label.prototype = {
  className: PropTypes.string,
  disabled: PropTypes.bool
}
export default Label
