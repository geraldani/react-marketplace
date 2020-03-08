import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SpinStretch = props => <Spin {...props} />

const spinstretch = border => keyframes`
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: calc(${border} + 5px);
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: ${border};
  }
`

const Spin = styled.div`
  width: ${props => props.size};
  height: calc(${props => props.size} + 8px);
  border: ${props => props.grossor} solid transparent;
  border-top-color: ${props => props.color};
  border-bottom-color: ${props => props.color};
  border-radius: 50%;
  animation: ${props => spinstretch(props.grossor)} 2s ease infinite;
`

SpinStretch.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string
}

SpinStretch.defaultProps = {
  color: COLOR_PRIMARY,
  grossor: '3px',
  size: '40px'
}
export default SpinStretch
