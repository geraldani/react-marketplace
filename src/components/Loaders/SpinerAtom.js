import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SpinnerAtom = props => {
  return (
    <AtomContainer {...props}>
      <Inner>
        {[...Array(3)].map((e, i) => <Lines key={i} />)}
        <Circle>&#9679;</Circle>
      </Inner>
    </AtomContainer>
  )
}



const atom1 = keyframes`100% { transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg); }`
const atom2 = keyframes`100% { transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg); }`
const atom3 = keyframes`100% { transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg); }`

const Lines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
  animation: 1s linear infinite;
  &:nth-child(1) {
    animation-name: ${atom1};
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(2) {
    animation-name: ${atom2};
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }
  &:nth-child(3) {
    animation-name: ${atom3};
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }
`

const Circle = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Inner = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
`
const AtomContainer = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  overflow: hidden;
  ${Circle}{
    color: ${props => props.color};
    font-size: calc(${props => props.size} * 0.24);
  }
  ${Lines}{
    border-left-color: ${props => props.color};
    border-left-width: calc(${props => props.size} / 25);
    border-top-width: calc(${props => props.size} / 25);
  }
`;

SpinnerAtom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

SpinnerAtom.defaultProps = {
  color: COLOR_PRIMARY,
  size: '60px',
}

export default SpinnerAtom
