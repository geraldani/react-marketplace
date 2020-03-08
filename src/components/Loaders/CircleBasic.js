import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const CircleBasic = ({ color, borderWidth, size }) => (
  <CircleContainer viewBox="25 25 50 50" size={size}>
    <Circle cx="50" cy="50" r="20" {...{ color, borderWidth }} />
  </CircleContainer>
)


const rotate = keyframes`
  100% {
    transform: rotate(360deg);
}`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`

const CircleContainer = styled.svg`
  width: ${props => props.size};
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;

`

const Circle = styled.circle`
  fill: none;
  stroke: ${props => props.color};
  stroke-width: ${props => props.borderWidth};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`

CircleBasic.propTypes = {
  color: PropTypes.string,
  borderWidth: PropTypes.number,
  size: PropTypes.string,
}

CircleBasic.defaultProps = {
  color: COLOR_PRIMARY,
  borderWidth: 3,
  size: '50px'
}
export default CircleBasic
