import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { InputContainer, ProgressLoader } from './styles.js'

const Range = ({
  maxValue,
  minValue,
  name,
  actualValue,
  onChange,
  step,
  ...styles
}) => {
  const [currentValuePorcent, setCurrentValuePorcent] = useState(actualValue)
  const onChangeDefault = e => setCurrentValuePorcent((parseInt(e.target.value) * 100) / maxValue)
  useEffect(() => setCurrentValuePorcent((actualValue * 100) / maxValue), [actualValue])
  const isWebkit = (Array.prototype.slice.call(window.getComputedStyle(document.documentElement, '')).join('').match(/-(moz|webkit|ms)-/))[1] === 'webkit'

  return (
    <InputContainer {...styles} currentValue={currentValuePorcent}>
      <input
        type="range"
        name={name}
        min={minValue}
        max={maxValue}
        step={step}
        defaultValue={onChange ? undefined : actualValue}
        value={onChange ? actualValue : undefined}
        onChange={onChange || onChangeDefault}
      />
      {
        isWebkit && <ProgressLoader />
      }
    </InputContainer>
  )
}

Range.defaultProps = {
  minValue: 0,
  maxValue: 100,
  actualValue: 4,
  onChange: null,
  name: '',
  step: 1,

  thumbColor: '#d4d4d4',
  thumbColorHover: '#acacac',
  thumbRadius: '20px',
  thumbHeight: '16px',
  thumbWidth: '16px',
  thumbBorderWidth: '0',
  thumbBorderColor: '',
  thumbShadowSize: '', //px
  thumbShadowBlur: '', //4px
  thumbShadowColor: '', // rgba(0,0,0,.2)
  thumbShadow: '0 0 2px rgba(0, 0, 0, 0.4), inset 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.6), 0 4px 2px rgba(0, 0, 0, 0.2), 0 9px 4px rgba(0, 0, 0, 0.1), inset 0 2px 1px white',

  trackColor: '#565656',
  trackWidth: '100%',
  trackHeight: '7px',
  trackBorderWidth: '0px',
  trackBorderColor: '',
  trackRadius: '7px',
  trackShadowSize: '0',
  trackShadowBlur: '0',
  trackShadowColor: '',
  trackShadow: '0 1px 0 rgba(255, 255, 255, 0.25), inset 0 0 4px rgba(0, 0, 0, 0.9)',

  progressColor: '#9FD0E9',
  progressBorderWidth: '0px',
  progressBorderColor: 'gray',
  progressRadius: '',
  progressShadowSize: '0',
  progressShadowBlur: '0',
  progressShadowColor: '',
  progressShadow: 'inset 0 0 4px rgba(0, 85, 151, 0.8), inset 0 0 2px rgba(0, 0, 0, 0.5);',
}

Range.propTypes = {
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  name: PropTypes.string,
  actualValue: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,

  thumbColor: PropTypes.string,
  thumbColorHover: PropTypes.string,
  thumbRadius: PropTypes.string,
  thumbHeight: PropTypes.string,
  thumbWidth: PropTypes.string,
  thumbBorderWidth: PropTypes.string,
  thumbBorderColor: PropTypes.string,
  thumbShadowSize: PropTypes.string,
  thumbShadowBlur: PropTypes.string,
  thumbShadowColor: PropTypes.string,
  thumbShadow: PropTypes.string,

  trackColor: PropTypes.string,
  trackFillColor: PropTypes.string,
  trackWidth: PropTypes.string,
  trackHeight: PropTypes.string,
  trackBorderWidth: PropTypes.string,
  trackBorderColor: PropTypes.string,
  trackRadius: PropTypes.string,
  trackShadowSize: PropTypes.string,
  trackShadowBlur: PropTypes.string,
  trackShadowColor: PropTypes.string,
  trackShadow: PropTypes.string,
}

export default Range
