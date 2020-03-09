import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SpinerFingerprint = props => (
  <Fingerpint {...props}>
    {[...Array(props.number)].map((e, i) => <div key={i} />)}
  </Fingerpint>
)

/*
<fingerprint-spinner
  :animation-duration="1500"
  :size="64"
  color="#ff1d5e"
/>
*/

const spinner = keyframes`
  100% { transform: rotate( 360deg ); }
`

/*esto es para calcular el tamano de cada linea
size: el tamano del loader
i: el indice del recorrido
n: el numero de rayas que habra
*/
const calculateSizeDelay = (size, i, n) => {
  const sizeParse = parseInt(size);
  const sizeCalc = (sizeParse * (i + 1)) / n;
  return (
    css`
    &:nth-child(${i + 1}){
      height: ${sizeCalc}px;
      width: ${sizeCalc}px;
      animation-delay: calc(50ms * (${i} + 1)); 
    }
  `
  )
}

const Fingerpint = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  div{
    position: absolute;
    border-radius: 50%;
    ${props => props.type === 'normal' && css`
      border: ${props => props.border} solid transparent;
      border-top-color: ${props => props.color};`};
    box-shadow: ${props => props.type === 'sharp' ? `inset 0 ${props.border} 0 0 ${props.color}` : 'none'};
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    animation: ${spinner} 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
    ${({ number, size }) => [...Array(number)].map((e, index) => calculateSizeDelay(size, index, number))};
  }
`

/*&:nth-child(1) {
      height: calc(${props => props.size} / 9 + 0 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 0 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 1);
    }
    &:nth-child(2) {
      height: calc(${props => props.size} / 9 + 1 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 1 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 2);
    }
    &:nth-child(3) {
      height: calc(${props => props.size} / 9 + 2 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 2 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 3);
    }
    &:nth-child(4) {
      height: calc(${props => props.size} / 9 + 3 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 3 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 4);
    }
    &:nth-child(5) {
      height: calc(${props => props.size} / 9 + 4 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 4 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 5);
    }
    &:nth-child(6) {
      height: calc(${props => props.size} / 9 + 5 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 5 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 6);
    }
    &:nth-child(7) {
      height: calc(${props => props.size} / 9 + 6 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 6 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 7);
    }
    &:nth-child(8) {
      height: calc(${props => props.size} / 9 + 7 * ${props => props.size} / 9);
      width: calc(${props => props.size} / 9 + 7 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 8);
    }

    &:nth-child(9) {
      height: calc(60 / 9 + 8 * 60 / 9);
      width: calc(${props => props.size} / 9 + 8 * ${props => props.size} / 9);
      animation-delay: calc(50ms * 9);
    }*/

SpinerFingerprint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  border: PropTypes.string,
  number: PropTypes.number,
  type: PropTypes.oneOf(['normal', 'sharp']),
}

SpinerFingerprint.defaultProps = {
  color: COLOR_PRIMARY,
  size: '60px',
  border: '2px',
  number: 9,
  type: 'normal',

}

export default SpinerFingerprint
