import { validateHexColor, rgbVectorFromHex, parseFromIntToHex, isValidHex, defineTypeColor } from './Utilities'

const LightenDarkenColor = (col, amt) => {
  col = validateHexColor(col)
  let hex = '';
  let rgb = rgbVectorFromHex(col);
  rgb.forEach(e => {
    const sumaColor = e + amt;
    const rgbInt = sumaColor > 255 ? 255 : sumaColor < 0 ? 0 : sumaColor;
    const colorConverted = parseFromIntToHex(rgbInt)
    hex+= colorConverted.length < 2 ? `0${colorConverted}` : colorConverted;
  });
  return `#${hex}`;
}

const DarkenRGB = (color, cons) => LightenDarkenColor(color, cons*-1);
const LightenRGB = (color, cons) => LightenDarkenColor(color, cons);

const getDarkenLightenColors = (baseColor, variation) => {
  const typeColor = defineTypeColor(baseColor)
  /*switch (typeColor) {
    case
  }*/
  const calculateDarkerOrLighter = (lightness) => {
    const vectorColor = [];
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
}

export {
  DarkenRGB,
  LightenRGB,
  getDarkenLightenColors,
}
