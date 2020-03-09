import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SquareFilling = props => <Square {...props} />

const spin = keyframes`
  50%,
  100% {
    transform: rotate(360deg);
  }
`
const fill = keyframes`
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`


const Square = styled.div`
  position: relative;
  width: ${pros => pros.size};
  height: ${pros => pros.size};
  border: ${pros => pros.border} solid ${pros => pros.color};
  overflow: hidden;
  animation: ${spin} 3s ease infinite;
  &:before {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${pros => pros.color + '77'};
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: ${fill} 3s linear infinite;
  }
`

SquareFilling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  border: PropTypes.string,
}

SquareFilling.defaultProps = {
  color: COLOR_PRIMARY,
  size: '40px',
  border: '3px',
}

export default SquareFilling
