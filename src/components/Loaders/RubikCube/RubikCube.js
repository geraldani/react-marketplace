import React from 'react'
import PropTypes from 'prop-types'
import { RubikCubeLoader } from './rubikStyles'

const RubikCube = props => (
// const RubikCube = ({colors = defaultColors, ...props}) => (
  <RubikCubeLoader {...props}>
    <div className="cube">
      {/* <!-- base position -->*/}
      <div className="face front piece row-top    col-left   color1" />
      <div className="face front piece row-top    col-center color2 " />
      <div className="face front piece row-top    col-right  color3 " />
      <div className="face front piece row-center col-left   color4  " />
      <div className="face front piece row-center col-center color6 " />
      <div className="face front piece row-center col-right  color4  " />
      <div className="face front piece row-bottom col-left   color2 " />
      <div className="face front piece row-bottom col-center color1" />
      <div className="face front piece row-bottom col-right  color5   " />

      {/*first step: E', equator inverted*/}
      <div className="face down  piece row-top    col-center color2 " />
      <div className="face down  piece row-center col-center color5   " />
      <div className="face down  piece row-bottom col-center color3 " />

      {/*second step: M, middle*/}
      <div className="face right piece row-center col-left   color1" />
      <div className="face right piece row-center col-center color2 " />
      <div className="face right piece row-center col-right  color4  " />

      {/*third step: L, left */}
      <div className="face up  piece row-top    col-left   color1" />
      <div className="face up  piece row-center col-left   color4  " />
      <div className="face up  piece row-bottom col-left   color2 " />

      {/*fourth step: D, down */}
      <div className="face left  piece row-bottom col-left   color2 " />
      <div className="face left  piece row-bottom col-center color1" />
      <div className="face left  piece row-bottom col-right  color5   " />
    </div>
  </RubikCubeLoader>
)

RubikCube.propTypes = {
  size: PropTypes.string,
  space: PropTypes.string,
  duration: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
}

RubikCube.defaultProps = {
  size: '15px',
  space: '3px',
  duration: '2s',
  bgColor: 'transparent',
  border: false,
  colors: [ '#c70fa0',
            '#e57373',
            '#ff0d23',
            '#ffb6db',
            '#fc5652',
            '#b7273b' ],
}

export default RubikCube
