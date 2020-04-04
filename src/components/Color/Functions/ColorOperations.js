import {
  validateHexColor,
  rgbVectorFromHex,
  parseFromIntToHex,
  isValidHex,
  defineTypeColor,
  TYPE_COLORS, extractChannelsFromString
} from './Utilities'
import { HexToHSL, RGBToHSL } from './Convertions'

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

const GetDarkenLightenColors = (baseColor, variation) => {
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
        // if (i === 100) break
      }
      return isDark ? vectorColor : vectorColor.reverse()
    } else return vectorColor;
  }

  const lighterRGB = calculateDarkerOrLighter(1);
  const darkerRGB = calculateDarkerOrLighter(-1);
  return (lighterRGB.concat(darkerRGB))
}

const getScale = (color, variation, subject) => {
  const getString = (col, x, sub) => `hsl(${col.h},${sub === 's' ? x : col.s}%,${sub === 'l' ? x : col.l}%)`

  const type = defineTypeColor(color);
  let colorConvertet;
  if(TYPE_COLORS.HEX === type || type === TYPE_COLORS.HEXA) colorConvertet = HexToHSL(color, 1);
  else if(TYPE_COLORS.RGB === type || type === TYPE_COLORS.RGBA) colorConvertet = RGBToHSL(color, 1);
  else if(TYPE_COLORS.HSL === type || type === TYPE_COLORS.HSLA) {
    colorConvertet = extractChannelsFromString(color);
    colorConvertet.h = colorConvertet[0]
    colorConvertet.s = colorConvertet[1]
    colorConvertet.l = colorConvertet[2]
  }

  let x = colorConvertet[subject];
  const vec = []
  for (let i = 0; i <= 100; i += variation) {
    vec.push(getString(colorConvertet, i, subject))
    if (x < i + variation && x > i)
      vec.push(getString(colorConvertet, x, subject))
  }
  return vec.reverse();


}

const SaturationScale = (color, variation) => getScale(color, variation, 's')
const LighterDarkerScale = (color, variation) => getScale(color, variation, 'l')
  /*
  const vec = [...Array(101).keys()];
  const modUp = vec.find(e => (e % variation === 0 && e > luminance));
  const modDown = vec.slice().reverse().find(e => (e % variation === 0 && e < luminance));
  const vecUper = [];
  const vecDowner = []
  for (let i = modUp; i <= 100; i += variation) vecUper.push(`hsl(${colorConvertet.h},${colorConvertet.s}%,${i}%)`)
  for (let i = modDown; i >= 0; i -= variation) vecDowner.push(`hsl(${colorConvertet.h},${colorConvertet.s}%,${i}%)`)
  vecDowner.reverse().push(`hsl(${colorConvertet.h},${colorConvertet.s}%,${luminance}%)`)
  vecDowner.concat(vecUper)
*/




export {
  DarkenRGB,
  LightenRGB,
  GetDarkenLightenColors,
  LighterDarkerScale,
  SaturationScale
}
