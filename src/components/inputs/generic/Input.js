import React from 'react'
import PropTypes from 'prop-types'
import {StyledLabel, StyledInput} from './styles'

const Input = ({ type, placeholder, label, disabled, aclaration }) => {
  return (
    <StyledLabel disabled={disabled}>
      {label}
      <StyledInput type={type} placeholder={placeholder} disabled={disabled} />
      {
        aclaration &&
        <small className="text-muted">{aclaration}</small>
      }
    </StyledLabel>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  aclaration: PropTypes.bool,
}

export default Input
