import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY, COLOR_SECONDARY } from './ColorDefault'


const CircleClassic = props => <Circle {...props} />

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Circle = styled.div`
  border: ${props => props.width} solid ${({colorCircle}) => colorCircle}; 
  border-top-color: ${props => props.colorSpiner}; 
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  animation: ${spin} 1.2s ${props => props.type} infinite;
  `

CircleClassic.defaultProps = {
  size: '40px',
  width: '3px',
  colorCircle: COLOR_PRIMARY,
  colorSpiner: COLOR_SECONDARY,
  type: 'linear'
}

CircleClassic.propTypes = {
  size: PropTypes.string,
  width: PropTypes.string,
  colorCircle: PropTypes.string,
  colorSpiner: PropTypes.string,
  type: PropTypes.string,
}

export default CircleClassic
