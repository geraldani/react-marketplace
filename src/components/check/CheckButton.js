import React from 'react'
import { StyledLabel as Label, StyledCheckbox, StyledCheckboxIcon } from './stylesCheckSimple'
import { StyledIconContainer, StyledInput, StyledLabel } from './stylesCheckButton'

import PropTypes from 'prop-types'
import CheckIcon from './CheckIcon'

export const CheckButtonSimple = (props) => {
  return (
    <Label>
      <StyledCheckbox type='checkbox' name={props.name} onChange={props.onChange} />
      <StyledCheckboxIcon />
      {props.label}
    </Label>
  )
}

const CheckButton = (props) => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" name={props.name} onChange={props.onChange} />
      <StyledIconContainer>
        <CheckIcon />
      </StyledIconContainer>
      {props.label}
    </StyledLabel>
  )
}

CheckButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default CheckButton
