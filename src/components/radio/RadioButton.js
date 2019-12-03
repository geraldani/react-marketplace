import React from 'react'
import { StyledRadio, StyledCircleIcon, StyledLabel } from './styles'
import PropTypes from 'prop-types'

const RadioButtton = (props) => {
  const commosProps = {
    'size-sm': props['size-sm'],
    'size-lg': props['size-lg']
  }
  return (
    <StyledLabel disabled={props.disabled}>
      <StyledRadio
        type='radio'
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <StyledCircleIcon {...commosProps} />
      {props.label}
    </StyledLabel>
  )
}

RadioButtton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  'size-sm': PropTypes.bool,
  'size-lg': PropTypes.bool
}

export default RadioButtton
