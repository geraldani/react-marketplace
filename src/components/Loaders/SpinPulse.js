import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SpinPulse = props => <Spin {...props} />

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const pulse = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`

const Spin = styled.div`
 display: flex;
  width: ${props => props.size};
  height: ${props => props.size};
  border: ${props => props.grossor} solid transparent;
  border-top-color: ${props => props.color};
  border-bottom-color: ${props => props.color};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  &:before {
    content: '';
    display: block;
    margin: auto;
    width: calc(${props => props.size} * (3/11));
    height: calc(${props => props.size} * (3/11));
    border: ${props => props.grossor} solid ${props => props.colorPulse};
    border-radius: 50%;
    animation: ${pulse} 1s alternate ease-in-out infinite;
  }
`

SpinPulse.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  colorPulse: PropTypes.string
}

SpinPulse.defaultProps = {
  color: COLOR_PRIMARY,
  grossor: '3px',
  size: '40px',
  colorPulse: COLOR_PRIMARY
}
export default SpinPulse
