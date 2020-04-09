import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const TransparencyRectangle = ({
  width,
  height,
  squareSize,
  color1,
  color2
}) => {
  const nroSquaresWidth = Math.floor(width / squareSize);
  const nroSquaresHeight = Math.floor(height / squareSize);
  return(
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      {
        [...Array(nroSquaresHeight)].map((e, i) => (
          <div>
            {
              [...Array(nroSquaresWidth)].map(() => (
                <Square
                  size={squareSize}
                  pair={i % 2 === 0}
                  nro={i}
                  nroSquares={nroSquaresWidth}
                  color1={color1}
                  color2={color2}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

const Square = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  top: ${props => props.nro * props.size}px;
  ${props => [...Array(props.nroSquares)].map((e, i) => css`
    &:nth-child(${i+1}){
      left: ${props => props.size * i}px;
    }
  `)};
  &:nth-child(even){
    background: ${props => props.pair ? props.color1 : props.color2};
  }
  &:nth-child(odd){
    background: ${props => props.pair ?  props.color2 : props.color1};
  }
`

TransparencyRectangle.defaultProps = {
  width: 155,
  height: 15,
  squareSize: 5,
  color1: '#949494',
  color2: '#efefef',
}
TransparencyRectangle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  squareSize: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string
}

export default TransparencyRectangle;
