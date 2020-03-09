import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'
import { COLOR_PRIMARY } from './ColorDefault'

const DotsSutil = props => {
  const Loader = props.type === 'sutil' ? Sutil : Fade
  return (
    <Loader {...props}>
      {[...Array(9)].map((e, i) => <div key={i} />)}
    </Loader>
  )
}

const fade = keyframes`
  to {
    opacity: 0.2
  }
`
const fadeSutil = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`

const divStyles = css`
  width: ${pros => pros.size};
  height: ${pros => pros.size};
  background-color: ${pros => pros.color};
  border-radius: 50%;
`
const commonStyles = css`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(3, ${pros => pros.size});
  grid-template-columns: repeat(3, ${pros => pros.size});
  grid-gap: ${pros => pros.space};
  justify-items: center;
  align-items: center;
`
const Fade = styled.div`
  ${commonStyles};
  div{
    ${divStyles};
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

const Sutil = styled.div`
  ${commonStyles};
  div{
    ${divStyles};
    animation: ${fadeSutil} 1.2s linear infinite;
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: -0.4s; }
    &:nth-child(3) { animation-delay: -0.8s; }
    &:nth-child(4) { animation-delay: -0.4s; }
    &:nth-child(5) { animation-delay: -0.8s; }
    &:nth-child(6) { animation-delay: -1.2s; }
    &:nth-child(7) { animation-delay: -0.8s; }
    &:nth-child(8) { animation-delay: -1.2s; }
    &:nth-child(9) { animation-delay: -1.6s; }
  }
`

DotsSutil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borderWidth: PropTypes.string,
  space: PropTypes.string,
  type: PropTypes.oneOf(['sutil', 'fade']),
}

DotsSutil.defaultProps = {
  color: COLOR_PRIMARY,
  size: '10px',
  space: '10px',
  type: 'fade',
}

export default DotsSutil
