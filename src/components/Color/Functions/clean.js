/*este es una conversion mas sencilla para lo que se quiere en cliengo
* simplemente dado un color en hexadecimal, retorna blanco o negro dependiendo del valor de luminancia de dicho color */


import React  from 'react'
import styled from 'styled-components'
import { hasAlpha, TYPE_COLORS } from './Utilities'

// convierte de hex a entero
const parseFromHexToInt = color => parseInt(color, 16)


// si el color viene exprcesado en forma reducida (tipo #000 o #da11, se rellena con los elementos que falten)
const fillColor = (color) => {
  let colorFilled = '';
  [...Array(color.length)].forEach((e, i) => {
    const char = color.charAt(i)
    colorFilled += char + char
  })
  return colorFilled
}


// valida un color hexadecimal, si comienza por # y si tiene un numero de caracteres menor a 6
const validateHexColor = color => {
  if (color.charAt(0) === '#') color = color.slice(1)
  if (color.length === 3 || color.length === 4) color = fillColor(color)
  return color
}


// Tranforma un color de hexadecimal a RGB y lo retorna como una cade tipo rgb(r, g, b)
// retorna un objeto con tres valores representando el color rgb dado un hex
const HexToRGB = color => {
  color = validateHexColor(color);
  const hasAlpha = color.length > 6; //si tiene canal alpha (opacidad)
  const rgb = {r: 0, g: 0, b: 0}; //inicializo el objeto

  if(hasAlpha){ //si tiene canal alfa
    rgb.a = 0; // se inicia
  }

  Object.keys(rgb).forEach((channel, index) => {
    //aqui se recprre el string del hex de dos en dos (ya que cada dos caracteres representan el valor en decimal)
    rgb[channel] = parseFromHexToInt(color.substring(index * 2, index * 2 + 2));
  });

  if(hasAlpha){
    // se divide entre 255 porque este canal representa un porcentaje (de 0 a 100) asi que se saca a partir del valor en decimal
    rgb.a = Number((rgb.a / 255).toFixed(2));
  }
  return rgb
}


// este es un algoritmo universal, es la forma en que se calcula dichos valores
// retorna un objeto con la informacion del color en hsl
const RGBToHSL = ({ r, g, b }) => {
  let min, max, h = 0, l, s, maxColor, rgb = {}

  // Paso 1, divide el valor entre 255
  rgb.R = r / 255
  rgb.G = g / 255
  rgb.B = b / 255
  min = rgb.R
  max = rgb.R
  maxColor = 0

  // Paso 2, encontrando el max y el min canal del rgb
  Object.values(rgb).forEach((c, i) => {
    if (c < min) min = c
    if (c > max) {
      max = c
      maxColor = i
    }
  })

  // Paso 3, calculando la luminancia
  l = (min + max) / 2

  // Paso 4, calculando la saturacion
  if (min === max) s = 0 //si el min y el max son los mismos, no hay saturacion
  else {
    if (l < 0.5) s = (max - min) / (max + min)
    else s = (max - min) / (2 - max - min)
  }

  // Step 5, calculando el matiz
  const { R, G, B } = rgb
  if (maxColor === 0) h = (G - B) / (max - min) // si el rojo es el maximo
  if (maxColor === 1) h = 2 + (B - R) / (max - min) // si el verde es el maximo
  if (maxColor === 2) h = 4 + (R - G) / (max - min) // si el azul es el maximo
  if (isNaN(h)) h = 0
  h = h * 60 //  se tiene que multiplicar por 60 para convertirlo a  grados en el ciruculo cromatico
  if (h < 0) h = h + 360 // s el matiz es negativo, se le agrega 360, porque un circulo tiene 360 grados

  // Paso 6, se redondean todos los valores
  h = parseInt(Number(h.toFixed(0)))
  s = parseInt(Number(s.toFixed(2)) * 100)
  l = parseInt(Number(l.toFixed(2)) * 100)

  return { h, s, l }
}

const HexToHSL = (color) => RGBToHSL(HexToRGB(color));

/**
 * retorna la tranformacion dado un color en hexadecimal, al formato hsl
 * @param color el color base a tranforma y saber su luminancia (por ahora solo acepta desde colores en hexadecimal, proximamente podra hacerlo en rgb
 * @param model el canal a ser retornado: (hue, sat o lum) si no se provee, retornara una cadena con el valor en hsl
 * @return el color converido a hsl
 */
const getHSL = (color, model = '') => {
  const { h, s, l } = HexToHSL(color);
  switch (model){
    case 'hue': return h;
    case 'sat': return s;
    case 'lum': return l;
    default: return {h,s,l};
  }
}

//retorna blanco o negro dado el nivel de luminosidad de un color
const getBlackOrWhite = color => {
  const {s, l} = getHSL(color);
// >= 50 ? '#000000' : '#ffffff'}
  if(l > 60){
    return 'black'
  }else{
    return 'white'
  }
  /*
  if(l > 50 && s < 50){
    console.log('white')
  }else if(l > 50 && s > 50){
    console.log('black')
    return 'black'
  }else if (l < 50 && s > 50){
    console.log('black')
    return 'white'
  }else{
  }
*/
}

const fromStringRGBtoObject = color => {
  let hasAlpha = false;
  if(color.substring(0, 4).toLowerCase() === 'rgba') hasAlpha = true; //veo las primeras letras de la cadena, para ver si tiene la a que indica que tiene opacidad
  if(hasAlpha){
    //aqui pregunto por el ultimo elemento, ya que el numero de la opacidad no es entero sino floar, asi que por eso esa validacion
    const converted = color.substring(5, color.length - 1).split(',').map((e, i, a) => i === a.length - 1 ? parseFloat(e) : parseInt(e));
    //construyo el objeto
    return  ({r: converted[0], g: converted[1], b: converted[2], a: converted[3]});
  }else{
    const converted = color.substring(4, color.length - 1).split(',').map(e => parseInt(e))
    return  ({r: converted[0], g: converted[1], b: converted[2]});
  }
}



const CaculateColor = ({colorBase}) => {
  const baseColors = [
    '#54ac74',
    '#c9c2ca',
    '#0a091d',
    '#b30a3d',
    '#e4e2d4',
    '#0f2804',
    '#ff0505',
    '#9e9a9a'
  ];
  //se usa useMemo para que no se calcule esto cada vez que se actualiza el estado.
  const blackOrWhite = React.useMemo(() => baseColors.map(color => getBlackOrWhite(color)), []);

  const colorRGB = 'rgba(100,87,44,1)';
  const colorRGBOBJ = fromStringRGBtoObject(colorRGB);


  console.log('la cadena ', colorRGB);
  console.log('el objeto ', colorRGBOBJ);
  console.log('convertido ', RGBToHSL(colorRGBOBJ))
  const hsls = baseColors.map(color => {
    const {h,s,l} = HexToHSL(color);
    return `h: ${h}, s: ${s}, l: ${l}`
  });
  return(
    <>
      {
        baseColors.map((color, i) => (
          <Container baseColor={color} key={color} colorFont={blackOrWhite[i]}>
            <p>Deberia estar en negro o blanco dependiendo de mi fondo que es <strong>{hsls[i]}</strong> retorno {blackOrWhite[i]}</p>
          </Container>
        ))
      }
    </>
  )
}


const Container = styled.div`
  background: ${props => props.baseColor};
  width: 500px;
  margin: 0 auto 10px auto;
  padding: 10px;
  border-radius: 12px;
  p{
    margin: 0;
    color: ${props => props.colorFont};
  }
`
export default CaculateColor;
