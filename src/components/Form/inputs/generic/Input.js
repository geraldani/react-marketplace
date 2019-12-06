import React from 'react'
import PropTypes from 'prop-types'
import {StyledInput} from './styles'
import { LabelBlock } from '../../label/Label'

const Input = ({ name, type, placeholder, label, disabled, clarification }) => {
  return (
    <LabelBlock disabled={disabled}>
      {label}
      <StyledInput type={type} placeholder={placeholder} disabled={disabled} name={name} />
      {
        clarification &&
        <small className="text-muted">{clarification}</small>
      }
    </LabelBlock>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clarification: PropTypes.string,
}

export default Input
