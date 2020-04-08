const TYPE_COLORS = {
  RGB: 'rgb',
  RGBA: 'rgba',
  HEX: 'hex',
  HEXA: 'hexa',
  HSL: 'hsl',
  HSLA: 'hsla',
}
const parseFromHexToInt = color => parseInt(color, 16) // convierte de hex a entero
const parseFromIntToHex = int => int.toString(16) // convierte de entero a hex

// si el color viene exprcesado en forma reducida, se llena con los elementos que falten
const fillColor = (color) => {
  let colorFilled = '';
  [...Array(color.length)].forEach((e, i) => {
    const char = color.charAt(i)
    colorFilled += char + char
  })
  return colorFilled
}

// valida un color, si comienza por # y si tiene un numero de caracteres menos a 6
const validateHexColor = color => {
  if (!isValidHex(color)) color = ''
  else {
    if (color.charAt(0) === '#') color = color.slice(1)
    if (color.length === 3 || color.length === 4) color = fillColor(color)
  }
  return color
}

const isValidRGB = color => {
  const channels = extractChannelsFromString(color)
  const isAlpha = defineTypeColor(color) === TYPE_COLORS.RGBA
  let valid = !channels.some(c => c < 0 || c > 255)
  if (valid) {
    if (isAlpha) {
      if (channels.length !== 4) valid = false
      else if (channels[3] < 0 || channels[3] > 1) valid = false
    } else {
      if (channels.length !== 3) valid = false
    }
  }
  return valid
}

const isValidHSL = color => {
  const channels = extractChannelsFromString(color)
  const isAlpha = defineTypeColor(color) === TYPE_COLORS.HSLA
  let valid = true
  const h = channels[0], s = channels[1], l = channels[2]
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) valid = false
  if (isAlpha) {
    if (channels.length !== 4) valid = false
    else if (channels[3] < 0 || channels[3] > 1) valid = false
  } else {
    if (channels.length !== 3) valid = false
  }
  return valid
}

/* valida si una cadena es un color en hexadecimal valido */
const isValidHex = hex => {
  const regex = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/
  const regexWithAlpha = /^#?([a-f]|[A-F]|[0-9]){4}(([a-f]|[A-F]|[0-9]){4})?$/
  return typeof hex === 'string' && (regex.test(hex) || regexWithAlpha.test(hex))
}

const isHex = color => {
  const type = defineTypeColor(color)
  return (type === TYPE_COLORS.HEX || type === TYPE_COLORS.HEXA)
}
const isHSL = color => {
  const type = defineTypeColor(color)
  return (type === TYPE_COLORS.HSLA || type === TYPE_COLORS.HSL)
}
const isRGB = color => {
  const type = defineTypeColor(color)
  return (type === TYPE_COLORS.RGBA || type === TYPE_COLORS.RGB)
}
// retorna un vector con tres posiciones representando el color rgb dado un hex
const rgbVectorFromHex = color => {
  color = validateHexColor(color)
  let rgb = []
  if (color) {
    for (let i = 0; i < 6; i += 2) rgb.push(parseFromHexToInt(color.substring(i, i + 2)))
  }
  return rgb
}

// extrae los numeros representando el rgb o hsl de una cadena
const extractChannelsFromString = color => {
  const type = defineTypeColor(color)
  const last = color.length - 1
  let splittedArray = []
  if (type === TYPE_COLORS.HSL || type === TYPE_COLORS.RGB) {
    splittedArray = color.substring(4, last).split(',').map(e => parseInt(e))
  } else if (type === TYPE_COLORS.HSLA || type === TYPE_COLORS.RGBA) {
    splittedArray = color.substring(5, last).split(',').map((e, i, a) => i === a.length - 1 ? parseFloat(e) : parseInt(e))
  }
  return splittedArray
}

const constructObject = (color, obj, type) => {
  let converted
  const channels = extractChannelsFromString(color)
  const channel1 = type === 'rgb' ? 'r' : 'h'
  const channel2 = type === 'rgb' ? 'g' : 's'
  const channel3 = type === 'rgb' ? 'b' : 'l'
  const hasAlpha = channels.length === 4
  const split = { [channel1]: channels[0], [channel2]: channels[1], [channel3]: channels[2] }
  if (hasAlpha) split.a = channels[3]
  converted = split
  if (obj === 2) converted = { string: color, split }
  return converted
}
const constructHSLObject = (color, obj) => constructObject(color, obj, 'hsl')
const constructRGBObject = (color, obj) => constructObject(color, obj, 'rgb')

const hueToRgb = (t1, t2, hue) => {
  if (hue < 0) hue += 6
  if (hue >= 6) hue -= 6
  if (hue < 1) return (t2 - t1) * hue + t1
  else if (hue < 3) return t2
  else if (hue < 4) return (t2 - t1) * (4 - hue) + t1
  else return t1
}

const defineTypeColor = color => {
  const length = color.length - 1
  if (color.charAt(0) === '#' && isValidHex(color) && (length === 3 || length === 6)) return TYPE_COLORS.HEX
  if (color.charAt(0) === '#' && isValidHex(color) && (length === 4 || length === 8)) return TYPE_COLORS.HEXA
  else if (color.substring(0, 4) === TYPE_COLORS.RGBA) return TYPE_COLORS.RGBA
  else if (color.substring(0, 3) === TYPE_COLORS.RGB) return TYPE_COLORS.RGB
  else if (color.substring(0, 4) === TYPE_COLORS.HSLA) return TYPE_COLORS.HSLA
  else if (color.substring(0, 3) === TYPE_COLORS.HSL) return TYPE_COLORS.HSL
  else return ''
}

const hasAlpha = color => {
  const type = defineTypeColor(color)
  return (type === TYPE_COLORS.HEXA || type === TYPE_COLORS.RGBA || type === TYPE_COLORS.HSLA)
}

const getHSLStringColor = (h, s, l, a) => a >= 0 && a < 1 ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`
const getRGBStringColor = (r, g, b, a) => a && a < 1 ? `rgba(${r}, ${g}%, ${b}%, ${a})` : `rgb(${r}, ${g}%, ${b}%)`

/* Genera un color aleatorio */
const GetRandomColor = () => '#000000'.replace(/0/g, () => (~~(Math.random() * 16)).toString(16))

export {
  GetRandomColor,
  validateHexColor,
  isValidHex,
  isValidHSL,
  isValidRGB,
  extractChannelsFromString,
  constructRGBObject,
  constructHSLObject,
  hasAlpha,
  parseFromIntToHex,
  parseFromHexToInt,
  getHSLStringColor,
  getRGBStringColor,
  defineTypeColor,
  isHex,
  isHSL,
  isRGB,
  hueToRgb,
  fillColor,
  rgbVectorFromHex,
  TYPE_COLORS,
}
