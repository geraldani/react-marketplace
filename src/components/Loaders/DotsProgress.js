import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const DotsProgress = props => (
  <Dots {...props}>
    {
      [...Array(3)].map((e, i) => <div key={i} />)
    }
  </Dots>
)

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`


  const Dots = styled.div`
  width: fit-content;
  height: ${props => props.size};
  display: flex;
  div{
    display: inline-block;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${fade} 800ms ease-in-out alternate infinite;
    &:nth-of-type(1) {
      animation-delay: -400ms;
    }
    &:nth-of-type(2) {
      animation-delay: -200ms;
      margin-left: ${props => props.space};
    }
    &:nth-of-type(3) {
     margin-left: ${props => props.space};
    }
  }
`

DotsProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  space: PropTypes.string
}

DotsProgress.defaultProps = {
  color: COLOR_PRIMARY,
  size: '10px',
  space: '10px'
}
export default DotsProgress
