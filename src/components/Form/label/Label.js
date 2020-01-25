import React from 'react'
import PropTypes from 'prop-types'
import { StyledInlineLabel, StyledBlockLabel } from './styles'
import { GLOBAL_SIZES } from '../../../styles/GlobalVariables'

const ComponentGenerated = (Component, props) => {
  const commonProps = {
    className: props.className,
    disabled: props.disabled,
    size: props.size
  }
  const label = React.useRef(null)
  React.useEffect(()=>{
  },[])
  return (
    <Component {...commonProps}>
      {
        props.labelname && <span ref={label}>{props.labelname}</span>
      }
      {props.children}
    </Component>
  )
}

export const LabelInline = props => ComponentGenerated(StyledInlineLabel, props)
export const LabelBlock = props => ComponentGenerated(StyledBlockLabel, props)

const defaultProps = {
  className: '',
  disabled: false,
  size: 'md',
  labelname: ''
}
const prototype = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(GLOBAL_SIZES),
  labelname: PropTypes.string
}

LabelInline.prototype = prototype
LabelInline.defaultProps = defaultProps

LabelBlock.prototype = prototype
LabelBlock.defaultProps = defaultProps
