import React from 'react'
import { StyledRadio, StyledCircleIcon, StyledInlineLabel } from './styles'
import PropTypes from 'prop-types'
import { globalSizes } from '../../../../styles/GlobalVariables'

const RadioInput = ({value, name, label, onChange, disabled, size='md'}) => {

  return (
    <StyledInlineLabel disabled={disabled} size={size}>
      <StyledRadio
        type='radio'
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCircleIcon size={size} />
      {label}
    </StyledInlineLabel>
  )
}

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(globalSizes)
}

export default RadioInput
