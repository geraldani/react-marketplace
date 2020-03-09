import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const LeafLoader = props => {
  return (
    <LeafContainer {...props}>
      {
        [...Array(8)].map((e, i) => <div key={i} />)
      }
    </LeafContainer>
  )
}

const rotate0 = keyframes`
  0% {
    transform: rotate(0deg);
}
  60% {
    transform: rotate(180deg);
}
  100% {
    transform: rotate(180deg);
}`
const rotate90 = keyframes`
  0% {
  transform: rotate(90deg);
  }
  60% {
  transform: rotate(270deg);
  }
  100% {
  transform: rotate(270deg);
}
`
const rotate45 = keyframes`
  0% {
    transform: rotate(45deg);
}
  60% {
    transform: rotate(225deg);
}
  100% {
    transform: rotate(225deg);
}
`
const rotate135 = keyframes`
  0% {
    transform: rotate(135deg);
}
  60% {
    transform: rotate(315deg);
}
  100% {
    transform: rotate(315deg);
}
`
const leafLoader = keyframes`
  0% {
    transform: rotate(0deg);
}
  100% {
    transform: rotate(360deg);
}
`

const LeafContainer = styled.div`
  width: 47.284271247462px;
  height: 47.284271247462px;
  border-radius: 100%;
  animation: ${leafLoader} 4.6s infinite linear;
  div{
    display: block;
    width: 6px;
    height: 19px;
    background-color: ${props => props.color};
    margin: 2px;
    position: absolute;
    border-radius: 50%;
    animation: 1.73s infinite ease;
    &:nth-child(1),
    &:nth-child(5) {
      transform: rotate(0deg);
      animation-name: ${rotate0};
    }
    &:nth-child(3),
    &:nth-child(7) {
      transform: rotate(90deg);
      animation-name: ${rotate90};
    }
    &:nth-child(2),
    &:nth-child(6) {
      transform: rotate(45deg);
      animation-name: ${rotate45};
    }
    &:nth-child(4),
    &:nth-child(8) {
      transform: rotate(135deg);
      animation-name: ${rotate135};
    }
    &:nth-child(1) {
      top: 23.142135623731px;
      left: 47.284271247462px;
      margin-left: -3px;
      margin-top: -10px;
    }
    &:nth-child(2) {
    top: 40.213203431093px;
    left: 40.213203431093px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(3) {
    top: 47.284271247462px;
    left: 23.142135623731px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(4) {
    top: 40.213203431093px;
    left: 7.0710678163691px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(5) {
    top: 23.142135623731px;
    left: 0px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(6) {
    top: 7.0710678163691px;
    left: 7.0710678163691px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(7) {
    top: 0px;
    left: 23.142135623731px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
    &:nth-child(8) {
    top: 7.0710678163691px;
    left: 40.213203431093px;
    margin-left: -3px;
    margin-top: -10px;
    animation-delay: 0;
    }
  }
`

LeafLoader.defaultProps = {
  size: '40px',
  color: COLOR_PRIMARY,
}

LeafLoader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default LeafLoader
