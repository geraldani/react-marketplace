import React from 'react'
import PropTypes from 'prop-types'
import { StyledInput } from './styles'
import { LabelBlock, LabelInline } from '../../label'

const Input = (props) => {
  let Label
  props['position-label'] === 'block'
    ? Label = LabelBlock
    : Label = LabelInline

  return (
    <Label disabled={props.disabled} labelname={props.label}>
      <StyledInput type={props.type} placeholder={props.placeholder} disabled={props.disabled} />
      {
        props.clarification &&
        <small className="text-muted">{props.clarification}</small>
      }
    </Label>
  )
}

Input.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  clarification: '',
  'position-label': 'block'
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clarification: PropTypes.string,
  'position-label': PropTypes.oneOf(['block', 'inline'])
}

export default Input
