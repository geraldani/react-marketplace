import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { COLOR_PRIMARY, COLOR_SECONDARY } from './ColorDefault'

const CircleBullet = props => (
  <>
    {
      props.ring
        ? <Ring {...props} /> //mi forma de hacerlo solo con un div
        : <Container viewBox="25 25 50 50" sizeCircle={props.sizeCircle}>
          <Circle cx="50" cy="50" r="20" colorCircle={props.colorCircle} borderWidth={props.borderWidth} />
          <Bullet cx="50" cy="70" r="4" colorBullet={props.colorBullet} />
        </Container> // Forma de hacerlo con svg
    }
  </>
)
const spin = keyframes`
  to { transform: rotate(360deg); }
`

const BulletRelation = 4.5

const Ring = styled.div`
  width: ${props => props.sizeCircle};
  height: ${props => props.sizeCircle};
  box-shadow: inset 0 0 0 ${props => props.borderWidth} ${props => props.colorCircle};
  border-radius: 50%;
  position: relative;
  display: inline-block;
  animation: ${spin} 1.5s ease infinite;
  &:before{
    content: '';
    width: calc(${props => props.sizeCircle} / ${BulletRelation});
    height: calc(${props => props.sizeCircle} / ${BulletRelation});
    background-color: ${props => props.colorBullet};
    border-radius: 50%;
    position: absolute;
    bottom: calc(${props => props.borderWidth} / 2 - ${props => props.sizeCircle} / (${BulletRelation}*2));
    left: 0;
    right: 0;
    margin: auto;
  }
`

const Container = styled.svg`
  width: ${props => props.sizeCircle};
  animation: ${spin} 1.5s ease infinite;
`

const Circle = styled.circle`
  fill: none;
  stroke: ${props => props.colorCircle};
  stroke-width:  ${props => props.borderWidth};
`

const Bullet = styled.circle`
  fill: ${props => props.colorBullet};
  stroke: none;
`

CircleBullet.propTypes = {
  colorCircle: PropTypes.string,
  colorBullet: PropTypes.string,
  borderWidth: PropTypes.string,
  sizeCircle: PropTypes.string,
  ring: PropTypes.bool,
}

CircleBullet.defaultProps = {
  colorCircle: COLOR_PRIMARY,
  colorBullet: COLOR_SECONDARY,
  borderWidth: '3px',
  sizeCircle: '40px',
  ring: true,
}

export default CircleBullet
