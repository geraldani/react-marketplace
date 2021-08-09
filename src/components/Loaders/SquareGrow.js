import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SquareGrow = props => (
  <SquareGrowStyled {...props}>
    {[...Array(props.number)].map((e, i) => <div key={i} />)}
  </SquareGrowStyled>
)

const grow = keyframes`
  0%,
  100% {
    transform: scaleY(1);
}

  50% {
    transform: scaleY(2);
}
`

const SquareGrowStyled = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-rows: ${pros => pros.sizeHeight};
  grid-template-columns: repeat(${props => props.number}, ${pros => pros.sizeWidth});
  grid-gap: ${pros => pros.space};
  justify-items: center;
  align-items: center;
  div{
    width: ${pros => pros.sizeWidth};
    height: ${pros => pros.sizeHeight};
    background-color: ${pros => pros.color}; 
    animation: ${grow} ${props=> props.duration} ease-in-out infinite;
    ${props => [...Array(props.number)].map((e, i, a) => {
  console.log(`milisegundos ${i+1}`, -(150 * (a.length - i - 1)))
      return css`
      &:nth-of-type(${i+1}){
        animation-delay: -${150 * (a.length - i - 1)}ms
      }
    `})};
  }
`

SquareGrow.propTypes = {
  color: PropTypes.string,
  sizeWidth: PropTypes.string,
  sizeHeight: PropTypes.string,
  space: PropTypes.string,
  duration: PropTypes.string,
  number: PropTypes.number
}

SquareGrow.defaultProps = {
  color: COLOR_PRIMARY,
  sizeWidth: '8px',
  sizeHeight: '20px',
  space: '5px',
  duration: '900ms',
  number: 4,
}

export default SquareGrow
