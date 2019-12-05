import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './styles'
import { GLOBAL_SIZES } from '../../../styles/GlobalVariables'

const Label = ({ children, className, disabled, size='md' }) => {
  const commonProps = { className, disabled, size }
  return (
    <StyledLabel {...commonProps}>
      {children}
    </StyledLabel>
  )
}

Label.prototype = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(GLOBAL_SIZES)
}
export default Label
