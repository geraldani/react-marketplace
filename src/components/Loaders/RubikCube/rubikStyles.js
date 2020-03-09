/*
.rubiks-loader {
  *, *::before,
  *::after {
    box-sizing: border-box;
  }
}
*/

import styled, { css } from 'styled-components'
import {
  step1fronttoup,
  step1downtofront,
  step2fronttoleft,
  step2righttofront,
  step3fronttodown,
  step23righttofronttodown,
  step3uptofront,
  step4fronttoright,
  step14downtofronttoright,
  step34uptofronttoright,
  step4lefttofront,
} from './animation'

const styles = ({ size, space, duration, bgColor, border, colors }) => {
  const piecesize = parseInt(size)
  const interpiecespacing = parseInt(space)
  const multiplo = border ? 4 : 2
  const cubesize = 3 * piecesize + multiplo * interpiecespacing + 'px'

  //calcula la posicion de cada recuadro
  const positioninface = order => {
    let formula = (order * piecesize + (order + 1) * interpiecespacing)
    if (!border) { //ti tiene borde el cubo o no
      formula-= interpiecespacing;
    }
    return `${formula}px`
  }

  //calcula la distancia
  const distancetokernel = (x, y) => (`
    ${piecesize / 2 + -1 * x * (piecesize + interpiecespacing)}px
    ${piecesize / 2 + -1 * y * (piecesize + interpiecespacing)}px
    ${-1 * (piecesize / 2 + piecesize + interpiecespacing)}px
  `)

  return (
    css`
      width: ${cubesize};
      height: ${cubesize};
      position: relative;
      perspective: ${cubesize};
      background: ${bgColor};
      .cube {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: 0; // hide text
        transform-style: preserve-3d;
        .piece {
          display: inline-block;
          width: ${piecesize}px;
          height: ${piecesize}px;
          position: absolute;
          backface-visibility: hidden;
          animation: ${duration} infinite;
          &.row-top    { top:  ${positioninface(0)}; }
          &.row-center { top:  ${positioninface(1)}; }
          &.row-bottom { top:  ${positioninface(2)}; }
          &.col-left   { left: ${positioninface(0)}; }
          &.col-center { left: ${positioninface(1)}; }
          &.col-right  { left: ${positioninface(2)}; }
    
          &.col-left.row-top      { transform-origin: ${distancetokernel(-1, -1)}; }
          &.col-center.row-top    { transform-origin: ${distancetokernel(0, -1)}; }
          &.col-right.row-top     { transform-origin: ${distancetokernel(1, -1)}; }
          &.col-left.row-center   { transform-origin: ${distancetokernel(-1, 0)}; }
          &.col-center.row-center { transform-origin: ${distancetokernel(0, 0)}; }
          &.col-right.row-center  { transform-origin: ${distancetokernel(1, 0)}; }
          &.col-left.row-bottom   { transform-origin: ${distancetokernel(-1, 1)}; }
          &.col-center.row-bottom { transform-origin: ${distancetokernel(0, 1)}; }
          &.col-right.row-bottom  { transform-origin: ${distancetokernel(1, 1)}; }
          ${colors.map((color, i) => css`&.color${i + 1}{ background-color: ${color}}`)};
        }
    
        .face {
          &.back  { transform: rotateY(180deg); }
          &.right { transform: rotateY( 90deg); }
          &.left  { transform: rotateY(-90deg); }
          &.up    { transform: rotateX( 90deg); }
          &.down  { transform: rotateX(-90deg); }
          &.piece {
            &.down.col-center             { animation-name: ${step1downtofront}; }
            &.left.row-bottom             { animation-name: ${step4lefttofront}; }
            &.right.row-center            { animation-name: ${step2righttofront}; }
            &.up.col-left                 { animation-name: ${step3uptofront}; }
            &.front.col-center            { animation-name: ${step1fronttoup}; }
            &.front.row-bottom.col-right  { animation-name: ${step4fronttoright}; }
            &.down.row-bottom.col-center  { animation-name: ${step14downtofronttoright}; }
            &.up.row-bottom.col-left      { animation-name: ${step34uptofronttoright}; }
            &.right.row-center.col-left   { animation-name: ${step23righttofronttodown}; }
            &.front.row-center.col-left,
            &.down.row-center.col-center,
            &.front.row-center.col-right {
              animation-name: ${step2fronttoleft};
            }
            &.front.row-top.col-left,
            &.front.row-bottom.col-left {
              animation-name: ${step3fronttodown};
            }
          }
        }
      }
    `
  )
}

export const RubikCubeLoader = styled.div`
  ${props => styles(props)}
`




