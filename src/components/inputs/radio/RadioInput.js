import React from 'react'
import { StyledRadio, StyledCircleIcon, StyledLabel } from './styles'
import PropTypes from 'prop-types'

const RadioInput = ({value, name, label, onChange, disabled, sm, lg}) => {
  const commonProps = { sm, lg }

  return (
    <StyledLabel disabled={disabled} {...commonProps}>
      <StyledRadio
        type='radio'
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCircleIcon {...commonProps} />
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
  sm: PropTypes.bool,
  lg: PropTypes.bool
}

export default RadioInput
