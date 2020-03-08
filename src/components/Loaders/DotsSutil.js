import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const DotsSutil = props => (<div>
  <Dots {...props}>
    {[...Array(9)].map((e, i) => <div key={i} />)}
  </Dots>
    <DotsV {...props}>
      {/*{[...Array(9)].map((e, i) => <div key={i} />)}*/}
    </DotsV>
  </div>
)

const LoaderSize = 64;

const fade = keyframes`
  to {
    opacity: 0.2
  }
`
const DotsV = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(3, ${pros => pros.size});
  grid-template-columns: repeat(3, ${pros => pros.size});
  grid-gap: ${pros => pros.space};
  justify-items: center;
  align-items: center;
  div{
    width: ${pros => pros.size};
    height: ${pros => pros.size};
    background-color: ${pros => pros.color};
    border-radius: 50%;
    animation: ${fade} 1.5s alternate ease-in-out infinite;
    &:nth-of-type(2),
    &:nth-of-type(4) {
      animation-delay: 0.25s;
    }
    &:nth-of-type(3),
    &:nth-of-type(5),
    &:nth-of-type(7) {
      animation-delay: 0.5s;
    }
    
    &:nth-of-type(6),
    &:nth-of-type(8) {
      animation-delay: 0.75s;
    }
    
    &:nth-of-type(9) {
      animation-delay: 1s;
    }
  }
`

const fadeIn = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const Dots = styled.div`
 /*  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(3, ${pros => pros.size});
  grid-template-columns: repeat(3, ${pros => pros.size});
  grid-gap: ${pros => pros.space};
  justify-items: center;
  align-items: center;*/
  display: inline-block;
  position: relative;
  width: ${LoaderSize}px;
  height: ${LoaderSize}px;
  div{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${pros => pros.color};
    animation: ${fadeIn} 1.2s linear infinite;
    &:nth-child(1) {
      top: 6px;
      left: 6px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: 6px;
      left: 26px;
      animation-delay: -0.4s;
    }
    &:nth-child(3) {
      top: 6px;
      left: 45px;
      animation-delay: -0.8s;
    }
    &:nth-child(4) {
      top: 26px;
      left: 6px;
      animation-delay: -0.4s;
    }
    &:nth-child(5) {
      top: 26px;
      left: 26px;
      animation-delay: -0.8s;
    }
    &:nth-child(6) {
      top: 26px;
      left: 45px;
      animation-delay: -1.2s;
    }
    &:nth-child(7) {
      top: 45px;
      left: 6px;
      animation-delay: -0.8s;
    }
    &:nth-child(8) {
      top: 45px;
      left: 26px;
      animation-delay: -1.2s;
    }
    &:nth-child(9) {
      top: 45px;
      left: 45px;
      animation-delay: -1.6s;
    }
  }
`
DotsSutil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borderWidth: PropTypes.string,
  space: PropTypes.string,
  type: PropTypes.oneOf(['sutil', 'fast']),
}

DotsSutil.defaultProps = {
  color: COLOR_PRIMARY,
  size: '10px',
  space: '10px',
  type: 'sutil',
}

export default DotsSutil
