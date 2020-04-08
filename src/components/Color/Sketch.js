import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Range from '../Form/inputs/range'
import styled, { css } from 'styled-components'
import {
  ConvertToHex,
  ConvertToHSL,
  ConvertToRGB,
  getComplement,
  getHSLStringColor, HexToHSL,
  HSLToHex,
  HSLToRGB
} from './Functions'

const Sketch = props => {
  const thumbSize = '20px'
  const MAX_HUE = 359
  const hex = '#1ABC9C'
  const { h, s, l } = HexToHSL(hex, 1)
  const [hue, setHue] = useState(h)
  const [sat, setSat] = useState(s)
  const [light, setLight] = useState(l)
  const [alpha, setAlpha] = useState(1)
  const [color, setColor] = useState(getHSLStringColor(hue, sat, light, alpha))
  let complementColor = getComplement(color)

  const thumbStyles = (channel, max) => css`
    left: ${channel === 0 ? `calc(${thumbSize} / -2)` : ''};
    right: ${channel === max ? `calc(${thumbSize} / -2)` : ''};
  `
  const trackStyles = css`
    background-image: url('https://previews.123rf.com/images/fokaspokas/fokaspokas1607/fokaspokas160700259/59781701-cuadr%C3%ADcula-de-transparencia-patr%C3%B3n-sin-fisuras.jpg');
  `

  const setColors = color => {
    setColor(color)
    complementColor = getComplement(color)
  }

  const onChangeHue = e => {
    const newHue = parseInt(e.target.value)
    setColors(getHSLStringColor(newHue, sat, light, alpha))
    setHue(newHue)
  }

  const onChangeSat = e => {
    const newSat = parseInt(e.target.value)
    setSat(newSat)
    setColors(getHSLStringColor(hue, newSat, light, alpha))
  }

  const onChangeLight = e => {
    const newLight = parseInt(e.target.value)
    setLight(newLight)
    setColors(getHSLStringColor(hue, sat, newLight, alpha))
  }

  const onChangeAlpha = e => {
    const newAlpha = parseInt(e.target.value) / 100
    console.log('newAlphat ', newAlpha)
    setAlpha(newAlpha)
    setColors(getHSLStringColor(hue, sat, light, newAlpha))

  }

  const commonProps = {
    showProgress: false,
    thumbRadius: '50%',
    trackHeight: '16px',
    thumbWidth: thumbSize,
    thumbHeight: thumbSize,
    thumbBorderColor: 'white',
    thumbBorderWidth: '3px',
  }

  /*console.log('el hue ', hue)
  console.log('el sat ', sat)
  console.log('el light ', light)*/
  const Sample = ({ name, color, light }) => (
    <SampleStyled bgColor={color} light={light}>
      <p>{name}</p>
      <p>{ConvertToHSL(color)}</p>
      <p>{ConvertToRGB(color)}</p>
      <p>{ConvertToHex(color)}</p>
    </SampleStyled>
  )
  return (
    <div>
      {/*Para el hue */}
      <h5>TONO</h5>
      <Range
        minValue={0}
        maxValue={MAX_HUE}
        actualValue={hue}
        onChange={onChangeHue}
        trackColor={`linear-gradient(to right,
                    hsl(0,100%,50%) 0%,
                    hsl(60,100%,50%) 17%,
                    hsl(120,100%,50%) 33%,
                    hsl(180,100%,50%) 50%,
                    hsl(240,100%,50%) 67%,
                    hsl(300,100%,50%) 83%,
                    hsl(0,100%,50%) 100%)`}
        thumbStyles={() => thumbStyles(hue, MAX_HUE)}
        thumbColor={() => getHSLStringColor(hue, 100, 50)}
        thumbColorHover={() => getHSLStringColor(hue, 100, 50)}
        {...commonProps}
      />

      {/*Para la saturacion */}
      <h5>SATURACION</h5>
      <Range
        minValue={0}
        maxValue={100}
        actualValue={sat}
        onChange={onChangeSat}
        thumbStyles={() => thumbStyles(sat, 100)}
        trackColor={`linear-gradient(to right,
                    hsl(${hue},0%,50%) 0%,
                    hsl(${hue},100%,50%) 100%)`}
        thumbColor={() => getHSLStringColor(hue, sat, 50)}
        thumbColorHover={() => getHSLStringColor(hue, sat, 50)}
        {...commonProps}
      />

      {/*Para el brillo */}
      <h5>LUMINOSIDAD</h5>
      <Range
        minValue={0}
        maxValue={100}
        actualValue={light}
        onChange={onChangeLight}
        thumbStyles={() => thumbStyles(light, 100)}
        trackColor={`linear-gradient(to right,
                    hsl(${hue},100%,0%) 0%,
                    hsl(${hue},100%,50%) 50%,
                    hsl(${hue},100%,100%) 100%)`}
        thumbColor={() => getHSLStringColor(hue, 100, light)}
        thumbColorHover={() => getHSLStringColor(hue, 100, light)}
        {...commonProps}
        thumbBorderColor={light > 90 ? '#cac9c9' : 'white'}
      />

      {/*Para la opacidad */}
      <h5>OPACIDAD</h5>
      <TransparencySquare>
        <Range
          minValue={0}
          maxValue={100}
          actualValue={alpha * 100}
          onChange={onChangeAlpha}
          thumbStyles={() => thumbStyles(alpha * 100, 100)}
          trackColor={`linear-gradient(to right,
                    hsla(${hue},100%,50%,0) 0%,
                    hsla(${hue},100%,50%,1) 100%)`}
          thumbColor={() => getHSLStringColor(hue, 100, 50)}
          thumbColorHover={() => getHSLStringColor(hue, 100, 50)}
          {...commonProps}
        />
      </TransparencySquare>

      <Container>
        <Sample color={color} name='Selecciondo' light={light} />
        <Sample color={complementColor} name='Complemento' light={light} />
      </Container>
    </div>
  )
}

const TransparencySquare = styled.div`
  
`
const SampleStyled = styled.div`
  position: relative;
  height: 150px;
  text-align: center;
  padding:20px;
  background: ${props => props.bgColor};
  width: 250px;
  border-radius: 20px;
  p{
    color: ${props => props.light < 50 ? 'white' : 'black'};
    margin: 0;
    &:first-child{
      font-weight: bold;
    }
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${SampleStyled}:first-child{
    margin-right: 20px;
  }
`

Sketch.propTypes = {}

export default Sketch
