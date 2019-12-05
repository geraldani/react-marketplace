import React from 'react'
import PropTypes from 'prop-types'
import { StyledSelect } from './styles'
import { LabelBlock } from '../../label/Label'

const SelectInput = ({ options, defaultOption, label }) => {
  return (
    <LabelBlock>
      {label}
      <StyledSelect>
        <option value=''>{defaultOption}</option>
        {
          options.map(option => (
            <option value={option.value} key={option.name}>
              {option.name}
            </option>
          ))
        }
      </StyledSelect>
    </LabelBlock>
  )
}

SelectInput.defaultProps = {
  options: [],
  defaultOption: 'Seleccione una opcion'
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string
  })).isRequired,
  defaultOption: PropTypes.string,
  label: PropTypes.string.isRequired
}

export default SelectInput
