import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const color1 = '#c70fa0'
const color2 = '#e57373'
const color3 = '#ff0d23'
const color4 =  '#fc5652'
const claridad = '99'


const Ventilador = props => {
  return (
    <svg width="64px" height="64px" viewBox="0 0 128 128">
      <rect x="0" y="0" width="100%" height="100%" fill="none"/>
      <g>
        <path d="M64 0L40.08 21.9a10.98 10.98 0 0 0-5.05 8.75C34.37 44.85 64 60.63 64 60.63V0z"
              fill={color1} />

        <path d="M128 64l-21.88-23.9a10.97 10.97 0 0 0-8.75-5.05C83.17 34.4 67.4 64 67.4 64H128z"
              fill={color2} />

        <path d="M63.7 69.73a110.97 110.97 0 0 1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17h38.03s-4.3-.86-14.47 10.1c-3.06 3.3-19.2 24.58-19.2 24.58z"
              fill={color2 + claridad}
        />

        <path d="M64 128l23.9-21.88a10.97 10.97 0 0 0 5.05-8.75C93.6 83.17 64 67.4 64 67.4V128z"
              fill={color3}/>

        <path d="M58.27 63.7a110.97 110.97 0 0 1 20.54-5.04c8.7-1.16 14.17.68 14.17.68v38.03s.86-4.3-10.1-14.47c-3.3-3.06-24.58-19.2-24.58-19.2z"
              fill={color3 + claridad}/>

        <path d="M0 64l21.88 23.9a10.97 10.97 0 0 0 8.75 5.05C44.83 93.6 60.6 64 60.6 64H0z"
              fill={color4}/>

        <path d="M64.3 58.27a110.97 110.97 0 0 1 5.04 20.54c1.16 8.7-.68 14.17-.68 14.17H30.63s4.3.86 14.47-10.1c3.06-3.3 19.2-24.58 19.2-24.58z"
              fill={color4 + claridad}/>

        <path d="M69.73 64.34a111.02 111.02 0 0 1-20.55 5.05c-8.7 1.14-14.15-.7-14.15-.7V30.65s-.86 4.3 10.1 14.5c3.3 3.05 24.6 19.2 24.6 19.2z"
              fill={color1 + claridad}/>

        <circle cx="64" cy="64" r="2.03"/>
        { <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1500ms"
          repeatCount="indefinite" />}
      </g>
    </svg>
  )
}


Ventilador.propTypes = {}

export default Ventilador
