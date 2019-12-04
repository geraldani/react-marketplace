import React from 'react'
import { StyledIconContainer, StyledInput, StyledLabel, StyledLabelSimple, StyledCheckbox, StyledCheckboxIcon } from './styles'

import PropTypes from 'prop-types'
import CheckIcon from './CheckIcon'

export const CheckInputSimple = (props) => {
  return (
    <StyledLabelSimple>
      <StyledCheckbox type='checkbox' name={props.name} onChange={props.onChange} />
      <StyledCheckboxIcon />
      {props.label}
    </StyledLabelSimple>
  )
}

const CheckInput = ({name, label, onChange, disabled, lg, sm}) => {
  const commonProps = { sm, lg }
  return (
    <StyledLabel disabled={disabled} {...commonProps}>
      <StyledInput type="checkbox" name={name} onChange={onChange} disabled={disabled} />
      <StyledIconContainer {...commonProps}>
        <CheckIcon />
      </StyledIconContainer>
      {label}
    </StyledLabel>
  )
}

CheckInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool
}

export default CheckInput
