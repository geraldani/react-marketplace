import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { COLOR_PRIMARY } from './ColorDefault'

const SquareNumber = 8;
const colorBase = 'transparent'
const color = COLOR_PRIMARY
const HorizontalSquares = props => (
  <HorizontalSquaresStyled {...props}>
    {
      [...Array(SquareNumber)].map((e, i) => <div key={i} />)
    }
  </HorizontalSquaresStyled>
)


 const bounceSpinningSquares = type => keyframes`
  0%{
    transform:scale(1);
    background-color:${color};
  }
  
  100%{
    transform:scale(.3) ${type === 'turning' ? 'rotate(90deg)' : ''};
    background-color:${colorBase};
  }
`

const size = '12px';
const space = '1px';
const HorizontalSquaresStyled = styled.div`
  display: grid;
  grid-template-rows: ${size};
  grid-template-columns: repeat(${SquareNumber}, ${size});
  grid-gap: ${space};
  div{
    top:0;
    background-color: ${colorBase};
    width:${size};
    height:${size};
    border-radius: ${props => props.circular ? '50%' : ''};
    animation-name: ${props => bounceSpinningSquares(props.type)};
    animation-duration: ${SquareNumber < 5 ? 1000 : (600 + (150*(SquareNumber-1)))-150}ms;
    transform:scale(.3);
    animation-iteration-count:infinite;
    animation-direction:normal;
    ${[...Array(SquareNumber)].map((e, i) => css`
      &:nth-of-type(${i+1}){
        animation-delay: ${600 + (150*i)}ms
      }
    `)};
    }
`

HorizontalSquares.defaultProps = {
  size: '40px',
  color: COLOR_PRIMARY,
}

HorizontalSquares.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default HorizontalSquares
