import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SquareGrow = props => (
  <SquareGrowStyled {...props}>
    {[...Array(4)].map((e, i) => <div key={i} />)}
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
  grid-template-columns: repeat(4, ${pros => pros.sizeWidth});
  grid-gap: ${pros => pros.space};
  justify-items: center;
  align-items: center;
  div{
    width: ${pros => pros.sizeWidth};
    height: ${pros => pros.sizeHeight};
    background-color: ${pros => pros.color}; 
    animation: ${grow} 1s ease-in-out infinite;
    &:nth-of-type(1) {
      animation-delay: -0.45s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.3s;
    }
    &:nth-of-type(3) {
      animation-delay: -0.15s;
    }
  }
`

SquareGrow.propTypes = {
  color: PropTypes.string,
  sizeWidth: PropTypes.string,
  sizeHeight: PropTypes.string,
  space: PropTypes.string,
}

SquareGrow.defaultProps = {
  color: COLOR_PRIMARY,
  sizeWidth: '5px',
  sizeHeight: '20px',
  space: '5px',
}

export default SquareGrow
