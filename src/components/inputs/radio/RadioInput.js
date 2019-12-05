import React from 'react'
import { StyledRadio, StyledCircleIcon, StyledLabel } from './styles'
import PropTypes from 'prop-types'
import { GLOBAL_SIZES } from '../../../styles/GlobalVariables'

const RadioInput = ({value, name, label, onChange, disabled, size='md'}) => {

  return (
    <StyledLabel disabled={disabled} size={size}>
      <StyledRadio
        type='radio'
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCircleIcon size={size} />
      {label}
    </StyledLabel>
  )
}

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(GLOBAL_SIZES)
}

export default RadioInput
