import React from 'react'
import PropTypes from 'prop-types'
import CheckIcon from './CheckIcon'
import { globalSizes } from '../../../../styles/GlobalVariables'
import {
  StyledIconContainer,
  StyledInput,
  StyledInlineLabel,
  StyledLabelSimple,
  StyledCheckbox,
  StyledCheckboxIcon
} from './styles'

export const CheckInputSimple = (props) => {
  return (
    <StyledLabelSimple>
      <StyledCheckbox type='checkbox' name={props.name} onChange={props.onChange} />
      <StyledCheckboxIcon />
      {props.label}
    </StyledLabelSimple>
  )
}

const CheckInput = ({ name, label, onChange, disabled, size = 'md' }) => {
  return (
    <StyledInlineLabel disabled={disabled} size={size}>
      <StyledInput type="checkbox" name={name} onChange={onChange} disabled={disabled} />
      <StyledIconContainer size={size}>
        <CheckIcon />
      </StyledIconContainer>
      {label}
    </StyledInlineLabel>
  )
}

CheckInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(globalSizes),
}

export default CheckInput
