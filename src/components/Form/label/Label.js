import React from 'react'
import PropTypes from 'prop-types'
import { StyledInlineLabel, StyledBlockLabel } from './styles'
import { globalSizes } from '../../../styles/GlobalVariables'


const LabelInline = ({ children, className, disabled, size='md' }) => {
  const commonProps = { className, disabled, size }
  return (
    <StyledInlineLabel {...commonProps}>
      {children}
    </StyledInlineLabel>
  )
}

export const LabelBlock = ({ children, className, disabled, size='md' }) => {
  const commonProps = { className, disabled, size }
  return (
    <StyledBlockLabel {...commonProps}>
      {children}
    </StyledBlockLabel>
  )
}


LabelInline.prototype = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(globalSizes)
}
export default LabelInline
