import React from 'react'
import PropTypes from 'prop-types'
import {
  HexToHSL,
  HexToRGB,
  DarkenRGB,
  LightenRGB,
  isValidHex,
  HSLToRGB,
  RGBToHSL,
  defineTypeColor,
  parseFromIntToHex,
  RGBToHex,
  extractChannelsFromString,
  isValidHSL,
  isValidRGB,
  HSLToHex,
  GetDarkenLightenColors,
  LighterDarkerScale, SaturationScale
} from './Functions/'
import styled, { css } from 'styled-components'

const ColorPicker = props => {
  const colorPrimary = '#ffff00'
  const variation = 5

  const hex = [
    '#fa7',
    '#afa3',
    '#85da23',
    '#74a36cb3',
    '#74acb',
    '#74aca41',
    '#74va41',
]

  const rgb = [
    'rgb(255,74,45,0.4)',
    'rgb(211,74,74)',
    'rgb(57,100,44)',
    'rgb(57,854,44)',
    'rgba(57,100,44,1.4)',
    'rgba(74,74,45)',
    'rgba(34,21,45,0.5)',
    'rgba(432,21,45,0.5)',
  ]


  const hsl = [
    'hsl(255,74%,45%,0.4)',
    'hsl(211,74%,74%)',
    'hsla(74,74%,45%)',
    'hsla(432,74%,45%,0.4)',
    'hsla(34,21%,45%,0.5)',
    'hsla(34,21%,45%,2)',
    'hsl(34,21%,101%)',
    'hsl(34,50%,17%)',
    'hsl(34,21,10)',
  ]

/*  hex.forEach(col => console.log(`hex${col.length-1} -> ${col} / ${HexToRGB(col)} - ${HexToHSL(col)}`))
  console.log('')
  rgb.forEach(col => console.log(`${col} -> ${RGBToHex(col)} - ${RGBToHSL(col)}`))
  console.log('')
  hsl.forEach(col => console.log(`${col} -> ${HSLToHex(col)} - ${HSLToRGB(col)}`))*/

  const vectorHex = GetDarkenLightenColors(colorPrimary, variation);
  const vecRGB = vectorHex.map(col => HexToRGB(col));
  const vecHSL = vectorHex.map(colr => HexToHSL(colr, 2));

  const lightnessScale = LighterDarkerScale(colorPrimary, variation);
  const saturationsScale = SaturationScale(colorPrimary, variation);

  console.log()
  return (
    <div style={{padding: '20px 0'}}>
      <h3 style={{ textAlign: 'center' }}>Base: <strong>{colorPrimary.toUpperCase()} - {HexToRGB(colorPrimary)} - {HexToHSL(colorPrimary)}</strong></h3>
      <h3 style={{ textAlign: 'center' }}>Variacion: <strong>{variation}</strong></h3>
      <Container>
        {
          vecHSL.map((color, i) => {
            const hex = vectorHex[i]
              return (
                <Square bgColor={hex} bold={hex === colorPrimary} light={color.split.l <= 50}>
                  <p>{i + 1}</p>
                  <p>{hex.toUpperCase()}</p>
                  <small>{vecRGB[i]}</small>
                  <small>{color.string}</small>
                </Square>
              )
            }
          )
        }
      </Container>

      <h3>Lightness Scale</h3>

      <Container>
        {
          lightnessScale.map((color, i) => {
              return (
                <Square bgColor={color} bold={color === HexToHSL(colorPrimary)}>
                  <p>{i + 1}</p>
                  <p>{HSLToHex(color)}</p>
                  <small>{HSLToRGB(color)}</small>
                  <small>{color}</small>
                </Square>
              )
            }
          )
        }
      </Container>

      <h3>Saturation Scale</h3>

      <Container>
        {
          saturationsScale.map((color, i) => {
              return (
                <Square bgColor={color} bold={color === HexToHSL(colorPrimary)}>
                  <p>{i + 1}</p>
                  <p>{HSLToHex(color)}</p>
                  <small>{HSLToRGB(color)}</small>
                  <small>{color}</small>
                </Square>
              )
            }
          )
        }
      </Container>



     {/* <div>
        <div style={{margin: '10px auto', height: '250px', width: '250px', background: hsl}}/>
        {
          [...Array(360)].map((e, i)=> {
            const colorHSL = `hsl(${i}, 100%, 50%)`;
            return <Square   bgColor={colorHSL} style={{height: '22px', width: '4px'}} />
          })
        }
      </div>*/}
    </div>
  )
}

const Container = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, auto));
    //grid-template-columns: ${props => `repeat(auto-fill, ${props.empty ? '12px' : 'minmax(120px, auto)'})`};

`
const Square = styled.div`
  /*width: 100px;*/
  //height: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //border: solid black;
  border: ${props => props.bold ? '3px solid black' : ''};
  //margin-right:  -1px;
  //margin-bottom:  -1px;
  transition: all 300ms;
  flex-direction: column;
  background: ${props => props.bgColor};
  font-weight: ${props => props.bold ? 'bold' : ''};
  color: ${props => props.light ? 'white' : 'black'};
  p:first-child{
    margin-top: 10px;
  }
  small{
    font-weight: ${props => props.bold ? 'bold' : ''};
    margin-bottom: 10px;
  }
`

ColorPicker.propTypes = {}

export default ColorPicker
