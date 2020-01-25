import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledSelect } from './styles'
import { LabelBlock, LabelInline } from '../../label/Label'
import ElementSelected from './ElementSelected'
import { sortArray } from '../../../../Utilidades'

const SelectInput = (props) => {
  const { options, placeholder, label, multiple, onChange, name } = props
  const [selectedElement, setSelectedElement] = useState(multiple ? [] : '')
  const [newOption, setNewOption] = useState(sortArray(options, 'asc', 'value'))
  const [multipleOptionTitle, setMultipleOptionTitle] = useState(placeholder)

  const onRemoveElement = (e) => {
    const removeName = e.target.previousSibling.innerHTML //el nombre del elementp a ser removido del select
    const removeValue = selectedElement.find(ele => ele.name === removeName).value //el value del elementp a ser removido del select
    setNewOption(sortArray(newOption.concat([{ name: removeName, value: removeValue }]), 'asc', 'value'))//agrego ese elmento de nuevo al select
    setSelectedElement(selectedElement.filter(elem => elem.name !== removeName))//y quito ese elemento de los seleccionados
  }

  const handleChange = (e) => {
    let valueName = ''
    const targetValue = e.target.value
    if (multiple) {
      e.target.childNodes.forEach(ele => {
        if (ele.getAttribute('value') === targetValue) valueName = ele.getAttribute('name')
      })
      setSelectedElement(selectedElement.concat([{ name: valueName, value: targetValue }]))
      setNewOption(newOption.filter(elem => elem.value.toString() !== targetValue.toString()))
    } else {
      setSelectedElement(targetValue)
    }
    if (onChange) onChange(e)
  }

  useEffect(() => {
    if (selectedElement.length > 0 && multiple) {
      let pluralName = 'option'
      if (selectedElement.length > 1) pluralName += 's'
      setMultipleOptionTitle(`${selectedElement.length} ${pluralName} selected`)
    } else setMultipleOptionTitle(placeholder)
  }, [selectedElement.length])

  let Label
  props['position-label'] === 'block'
    ? Label = LabelBlock
    : Label = LabelInline

  return (
    <div>
      <Label marginBottom={multiple && setSelectedElement.length === 0} labelname={label}>
        <StyledSelect name={name} multi={multiple} onChange={handleChange}>
          <option value=''>{multipleOptionTitle}</option>
          {
            newOption.map(option => (
              <option value={option.value} key={option.name} name={option.name}>
                {option.name}
              </option>
            ))
          }
        </StyledSelect>
      </Label>
      {
        multiple &&
        <div>
          {selectedElement.map(el => <ElementSelected key={el.name} element={el.name} onClick={onRemoveElement} />)}
        </div>
      }
    </div>
  )
}

SelectInput.defaultProps = {
  options: [],
  placeholder: 'Choose an option',
  label: '',
  multiple: false,
  name: '',
  'position-label': 'block'
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string
  })).isRequired,
  'position-label': PropTypes.oneOf(['block', 'inline']),
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired
}

export default SelectInput
