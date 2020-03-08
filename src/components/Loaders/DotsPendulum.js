import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const DotsPendulum = props => (
  <Dots {...props}>
    {
      [...Array(3)].map((e, i) => <div key={i} />)
    }
  </Dots>
)

const leftSwing = left => keyframes`
  50%,
  100% {
    left: ${left};
}
`

const rightSwing = right => keyframes`
  50% {
    right: ${right};
  }
  100% {
    right: -${right};
  }
`

const Dots = styled.div`
  width: calc(${props => props.size} * 5);
  height: ${props => props.size};
  display: flex;
  position: relative;
  div{
    position: absolute;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    background-color: ${props => props.color};
    &:nth-of-type(1) {
      left: -${props => props.size};
      animation: ${props => leftSwing(props.size)} 500ms ease-in alternate infinite;
    }
    &:nth-of-type(2) {
      left: 0;
      right: 0;
      margin: auto;
    }
    &:nth-of-type(3) {
      right: ${props => props.size};
      animation: ${props => rightSwing(props.size)} 500ms ease-out alternate infinite;
    }
  }
`

DotsPendulum.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

DotsPendulum.defaultProps = {
  color: COLOR_PRIMARY,
  size: '10px',
}
export default DotsPendulum
