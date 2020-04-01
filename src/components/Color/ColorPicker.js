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
  parseFromIntToHex, RGBToHex, extractChannelsFromString, isValidHSL, isValidRGB
} from './Functions/'
import styled, { css } from 'styled-components'

const ColorPicker = props => {
  const colorPrimary = '#ffff99'
  const variation = 15

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
    'rgba(74,74,45)',
    'rgba(34,21,45,0.5)',
  ]


  const hsl = [
    'hsl(255,74%,45%,0.4)',
    'hsl(211,74%,74%)',
    'hsla(74,74%,45%)',
    'hsla(34,21%,45%,0.5)',
  ]

  hex.forEach(col => console.log(`hex${col.length-1} -> ${col} / `, HexToRGB(col, true)))


  // console.log('hsl(220, 66%, 43%) es ', HSLToRGB(220, 66, 43))
  // console.log('rgb(45,245,150) es ', RGBToHSL(45,245,150))

  const calculateDarkerOrLighter = (baseColor, variation, lightness) => {
    const vectorColor = []
    if (isValidHex(baseColor)) {
      const isDark = lightness < 0
      let i = isDark ? 1 : 0 // el color base va a quedar en el array de los claros siempre y va a quedar de ultimo
      let color = baseColor
      const stopColor = isDark ? '#000000' : '#ffffff' // si es darker, entonces me tengo que llegar al negro, simo al blanco
      const colorFunction = isDark ? DarkenRGB : LightenRGB
      while (color !== stopColor) {
        color = colorFunction(baseColor, i * variation)
        vectorColor.push(color)
        i++
        if (i === 100) break
      }
      return isDark ? vectorColor : vectorColor.reverse()
    } else return vectorColor;
  }

  const lighterRGB = (baseColor, variation) => calculateDarkerOrLighter(baseColor, variation, 1)
  const darkerRGB = (baseColor, variation) => calculateDarkerOrLighter(baseColor, variation, -1)

  const lighterVector = lighterRGB(colorPrimary, variation)
  const darkerVector = darkerRGB(colorPrimary, variation)




  // console.log('rgb(45,74,88) es ', RGBToHex('rgb(45,74,88)'))
  // console.log('rgb(45,74,88,0.06) es ',RGBToHex('rgba(45,74,88,0.06)'))
  /*const hsl = 'hsl(44,74%,45%)'
  const hsla = 'hsla(45,74%,88%,6,74)'
  console.log(`${hsl} es valido? `,isValidHSL(hsl))
  console.log(`${hsla} es valido? `,isValidHSL(hsla))

  const rgb = 'rgb(255,74,45,4)'
  const rgba = 'rgba(74,74,45)'
  console.log(`${rgb} es valido? `,isValidRGB(rgb))
  console.log(`${rgba} es valido? `,isValidRGB(rgba))
*/
  /*
  const hex3 = '#577'
  const hex4 = '#afa3'
  const hex6 = '#85da23'
  const hex8 = '#74a36cb3'
  const hex5 = '#74acb'
  const hex7 = '#74acba41'
  console.log(`${hex3} es valido? `,isValidHex(hex3))
  console.log(`${hex4} es valido? `,isValidHex(hex4))
  console.log(`${hex6} es valido? `,isValidHex(hex6))
  console.log(`${hex8} es valido? `,isValidHex(hex8))
  console.log(`${hex5} es valido? `,isValidHex(hex5))
  console.log(`${hex7} es valido? `,isValidHex(hex7))*/

  return (
    <div style={{padding: '20px 0'}}>
     {/*<div>
        {[...Array(256)].map((e, i) =>
        <p>{`${i} (${(i/255).toFixed(2)}) - ${parseFromIntToHex(i)}`}</p>
      )}
      </div>

      <h3 style={{ textAlign: 'center' }}>Base: <strong>{colorPrimary.toUpperCase()} - {HexToRGB(colorPrimary)} - {HexToHSL(colorPrimary)}</strong></h3>
      <h3 style={{ textAlign: 'center' }}>Variacion: <strong>{variation}</strong></h3>
      <Container>
        {
          lighterVector.map((color, i) => (
            <Square bgColor={color} bold={i === lighterVector.length - 1} light>
              <p>{i + 1}</p>
              <p>{color.toUpperCase()}</p>
              <small>{HexToRGB(color)}</small>
            </Square>)
          )
        }
        {
          darkerVector.map((color, i) => (
            <Square bgColor={color}>
              <p>{i + lighterVector.length + 1}</p>
              <p>{color.toUpperCase()}</p>
              <small>{HexToRGB(color)}</small>
            </Square>
          ))
        }
      </Container>
      <div>
        <h3>Lighter / Darker:</h3>
      </div>*/}

     {/* <div>
        <div style={{margin: '10px auto', height: '250px', width: '250px', background: hsl}}/>
        {
          [...Array(360)].map((e, i)=> {
            const colorHSL = `hsl(${i}, 100%, 50%)`;
            return <Square onClick={()=>setHsl(colorHSL)} bgColor={colorHSL} style={{height: '22px', width: '4px'}} />
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
  color: ${props => props.light ? 'black' : 'white'};
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
