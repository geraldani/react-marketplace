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
  LighterDarkerScale, SaturationScale, TYPE_COLORS, ConvertToHSL, ConvertToRGB, ConvertToHex, getComplement
} from './Functions/'
import styled, { css } from 'styled-components'
import { useCopyContent } from '../CopyContentButton/CopyContentButton'
import Sketch from './Sketch'

const ColorPicker = props => {
  const colorPrimary = '#ed9b8a'
  const variation = 1
  const { Copy, copied } = useCopyContent()
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

  const vectorHex = GetDarkenLightenColors(colorPrimary, variation)
  const vecRGB = vectorHex.map(col => HexToRGB(col))
  const vecHSL = vectorHex.map(colr => HexToHSL(colr,2))

  const lightnessScale = LighterDarkerScale(colorPrimary, variation)
  const saturationsScale = SaturationScale(colorPrimary, variation)

  const colorComplement = getComplement(colorPrimary);

  const Scale = ({ color, nro }) => {
    // let hex, rgb, hsl;
    const hex = ConvertToHex(color)
    const rgb = ConvertToRGB(color)
    const hsl = ConvertToHSL(color)
    // console.log(`${nro} ${color} / ${rgb}`)
    return (
      <Square bgColor={hsl} onClick={() => Copy(hex)}>
        {/*<Square bgColor={color} bold={color === HexToHSL(colorPrimary)}>*/}
        <Overlay>
          {
            copied
              ? <p>Copiado</p>
              : <div>
                <p>{nro}</p>
                <p>{hex}</p>
                <p>{rgb}</p>
                <p>{hsl}</p>
              </div>
          }
        </Overlay>
      </Square>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <Sketch />
      <h3
        style={{ textAlign: 'center' }}>Base: <strong>{colorPrimary.toUpperCase()} - {HexToRGB(colorPrimary)} - {HexToHSL(colorPrimary)}</strong>
      </h3>
      <h3 style={{ textAlign: 'center' }}>Variacion: <strong>{variation}</strong></h3>

      <Sample color={colorPrimary} >Original <br/> {colorPrimary} <br/>{HexToHSL(colorPrimary)} <br/>{HexToRGB(colorPrimary)}</Sample>
      <Sample color={colorComplement}>Complemento <br/> {colorComplement} <br/> {RGBToHSL(colorComplement)} <br/> {RGBToHex(colorComplement)} </Sample>
      {/*    <Container length={vecHSL.length}>
        {
          vecHSL.map((color, i) => {
              const hex = vectorHex[i]*/
            /*<Square bgColor={hex} bold={hex === colorPrimary} light={color.split.l <= 30}>
              <p>{i + 1}</p>
              <p>{hex.toUpperCase()}</p>
              <small>{vecRGB[i]}</small>
              <small>{color.string}</small>
            </Square>*/
          //  return (
            //  <Scale color={hex} nro={i+1}/>
              //)
            //}
          //)
        //}
     // </Container>
        }

      <h3>Lightness Scale</h3>

      <Container length={lightnessScale.length}>
        {lightnessScale.map((color, i) => <Scale color={color} nro={i + 1} key={i} />)}
      </Container>

      <h3>Saturation Scale</h3>
      <Container length={saturationsScale.length}>
        {saturationsScale.map((color, i) => <Scale color={color} nro={i + 1} />)}
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

const Sample = styled.div`
  width: 100%;
  position: relative;
  height: 150px;
  text-align: center;
  padding:20px;
  &:before{
    background: ${props => props.color};
    width: 500px;
    height: 100%;
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 250px);
  }
`
const Overlay = styled.div`
  display: none;
  position: absolute;
  bottom: 70px;
  z-index: 1;
  background: beige;
  padding: 10px;
  border-radius: 5px;
  &:before{
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    bottom: -15px;
    z-index: 2;
    left: calc(50% - 10px);
    border-top: solid beige 15px;
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
  }
  p{
    text-align: center;
    margin: 0;
    font-size: 10px;
    font-weight: bold;
  }
`

const Container = styled.div`
  display: grid;
  margin: 20px 0;
/*  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, auto));*/
  grid-template-columns: repeat(auto-fill, calc(100% / ${props => props.length}));
  grid-template-rows: 50px;
  width: 100%;
  border: solid 1px black;
`
const Square = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: ${props => props.bold ? '3px solid black' : ''};
  transition: all 300ms;
  flex-direction: column;
  background: ${props => props.bgColor};
    color: ${props => props.light ? 'white' : 'black'};
  &:hover{
    cursor:pointer;
    border: 1px dotted black;
    ${Overlay}{
      display: block;
    }
  }
`

ColorPicker.propTypes = {}

export default ColorPicker
