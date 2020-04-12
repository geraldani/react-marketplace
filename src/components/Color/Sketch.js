import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Range from '../Form/inputs/range'
import styled, { css } from 'styled-components'
import transparency from '../../assets/img/transparency.png';

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
  console.log('me llame')
  const thumbSize = '20px'
  const stickHeight = 8;
  const MAX_HUE = 359
  const [hue, setHue] = useState(0)
  const [sat, setSat] = useState(100)
  const [light, setLight] = useState(50)
  const [alpha, setAlpha] = useState(1)
  const [color, setColor] = useState(getHSLStringColor(hue, sat, light, alpha))
  const {string: rgb, split:{r,g,b}} = HSLToRGB(color,2);
  const hex = HSLToHex(color);
  let complementColor ='#785cde'

  const thumbStyles = (channel, max) => css`
    left: ${channel === 0 ? `calc(${thumbSize} / -2)` : ''};
    right: ${channel === max ? `calc(${thumbSize} / -2)` : ''};
  `

  const onChangeColor = e => {
    const { name } = e.target
    const newValue = parseInt(e.target.value);
    let newColor = '';
        switch (name) {
          case 'hue':
            newColor = getHSLStringColor(newValue, sat, light, alpha)
            setHue(newValue)
            break
          case 'sat':
            newColor = getHSLStringColor(hue, newValue, light, alpha)
            setSat(newValue)
            break
          case 'light':
            setLight(newValue)
            newColor = getHSLStringColor(hue, sat, newValue, alpha)
            break
          case 'alpha':
            setAlpha(newValue / 100)
            newColor = getHSLStringColor(hue, sat, light, newValue / 100)
            break
        }
    setColor(newColor);
  }

  const commonProps = {
    showProgress: false,
    thumbRadius: '50%',
    trackHeight: `${stickHeight}px`,
    thumbWidth: thumbSize,
    thumbHeight: thumbSize,
    thumbBorderColor: 'white',
    thumbBorderWidth: '2px',
    onChange: onChangeColor,
    trackRadius: '20px'
  }

  /*console.log('el hue ', hue)
  console.log('el sat ', sat)
  console.log('el light ', light)*/
  const Sample = ({ name, color, light, onClick }) => (
    <SampleStyled bgColor={color} light={light} onClick={onClick}>
      <p>{name}</p>
      <p>{color}</p>
      <p>{rgb}</p>
      <p>{hex}</p>
    </SampleStyled>
  )
  /*
  linear-gradient(to right, hsl(0,100%,50%), 0%,hsl(60,100%,50%), 17%,hsl(120,100%,50%), 33%,hsl(180,100%,50%), 50%,hsl(240,100%,50%), 67%,hsl(300,100%,50%), 83%,hsl(360,100%,50%), 100%)
  linear-gradient(to right, hsl(0,100%,50%) 0%, hsl(60,100%,50%) 17%, hsl(120,100%,50%) 33%, hsl(180,100%,50%) 50%, hsl(240,100%,50%) 67%, hsl(300,100%,50%) 83%, hsl(0,100%,50%) 100%)
   */
  return (
    <div>
      {/*Para el hue */}
      <h5>TONO</h5>
      <Range
        minValue={0}
        maxValue={MAX_HUE}
        actualValue={hue}
        name='hue'
        trackColor={`linear-gradient(to right, hsl(0,100%,50%) 0%, hsl(60,100%,50%) 17%, hsl(120,100%,50%) 33%, hsl(180,100%,50%) 50%, hsl(240,100%,50%) 67%, hsl(300,100%,50%) 83%, hsl(0,100%,50%) 100%)`}
        thumbStyles={() => thumbStyles(hue, MAX_HUE)}
        thumbColor={`hsl(${hue}, 100%, 50%)`}
        {...commonProps}
      />

      {/*Para la saturacion */}
      <h5>SATURACION</h5>
      <Range
        minValue={0}
        maxValue={100}
        actualValue={sat}
        name='sat'
        thumbStyles={() => thumbStyles(sat, 100)}
        trackColor={`linear-gradient(to right,
                    hsl(${hue},0%,50%) 0%,
                    hsl(${hue},100%,50%) 100%)`}
        thumbColor={`hsl(${hue},${sat}%,50%)`}
        {...commonProps}
      />

      {/*Para el brillo */}
      <h5>LUMINOSIDAD</h5>
      <Range
        minValue={0}
        maxValue={100}
        actualValue={light}
        name='light'
        thumbStyles={() => thumbStyles(light, 100)}
        trackColor={`linear-gradient(to right,
                    hsl(${hue},100%,0%) 0%,
                    hsl(${hue},100%,50%) 50%,
                    hsl(${hue},100%,100%) 100%)`}
        thumbColor={`hsl(${hue},100%, ${light}%)`}
        {...commonProps}
        thumbBorderColor={light > 90 ? '#cac9c9' : 'white'}
      />

      {/*Para la opacidad */}
      <h5>OPACIDAD</h5>
      <OpacityContainer>
        {/*<TransparencySquare />*/}
        <Range
          minValue={0}
          maxValue={100}
          actualValue={alpha * 100}
          name='alpha'
          thumbStyles={() => thumbStyles(alpha * 100, 100)}
          trackColor={`linear-gradient(to right,
                    hsla(${hue},100%,50%,0) 0%,
                    hsla(${hue},100%,50%,1) 100%)`}
          thumbColor={`hsl(${hue}, 100%, 50%)`}
          {...commonProps}
        />
      </OpacityContainer>

      <Container>
        <Sample color={color} name='Selecciondo' light={light} onClick={e=>console.log(e.nativeEvent.offsetX,e.nativeEvent.offsetY)}/>
        <Sample color={complementColor} name='Complemento' light={light} />
      </Container>
    </div>
  )
}

const OpacityContainer = styled.div`
  background-image: url(${transparency});
`;

const SampleStyled = styled.div`
  position: relative;
  height: 150px;
  text-align: center;
  padding:20px;
  background: ${props => props.bgColor};
  width: 250px;
  border-radius: 20px;
  p{
    color: ${props => props.light >= 50 ? 'black' : 'white'};
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
  margin-top: 20px;
  ${SampleStyled}:first-child{
    margin-right: 20px;
  }
`

Sketch.propTypes = {}

export default Sketch
