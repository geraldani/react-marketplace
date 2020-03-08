import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const DotsFalling = props => (
  <Balls {...props}>
    {[...Array(3)].map((e, i) => <div key={i} />)}
  </Balls>
)

const wave = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`

const Balls = styled.div`
  width: fit-content;
  height: ${props => props.size};
  display: flex;
  div{
    display: inline-block;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    background-color: ${props => props.color};
    //transform: translateY(-100%);
    animation: ${wave} 450ms ease-in-out alternate infinite;
    &:nth-of-type(1) {
      animation-delay: -300ms;
    }
    &:nth-of-type(2) {
      animation-delay: -100ms;
      margin-left: ${props => props.space};
    }
    &:nth-of-type(3) {
      margin-left: ${props => props.space};
    }
  }
`

DotsFalling.defaultProps = {
  color: COLOR_PRIMARY,
  size: '10px',
  space: '10px',
}

DotsFalling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  space: PropTypes.string,
}

export default DotsFalling
