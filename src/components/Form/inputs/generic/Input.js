import React from 'react'
import PropTypes from 'prop-types'
import {StyledLabel, StyledInput} from './styles'

const Input = ({ type, placeholder, label, disabled, clarification }) => {
  return (
    <StyledLabel disabled={disabled}>
      {label}
      <StyledInput type={type} placeholder={placeholder} disabled={disabled} />
      {
        clarification &&
        <small className="text-muted">{clarification}</small>
      }
    </StyledLabel>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clarification: PropTypes.string,
}

export default Input
