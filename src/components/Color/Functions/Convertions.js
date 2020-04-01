import {
  rgbVectorFromHex,
  extractChannelsFromString,
  parseFromIntToHex,
  hueToRgb,
  defineTypeColor,
  TYPE_COLORS, isValidHex, validateHexColor, hasAlpha, fillColor, parseFromHexToInt
} from './Utilities'

// Tranforma un color de hexadecimal a RGB y lo retorna como una cade tipo rgb(r, g, b)
const HexToRGB = (color, obj) => {
  let colorConverted = 'No valid Hex Color'
  if (isValidHex(color)) {
    let alpha = ''
    const isAlpha = hasAlpha(color);
    const rgb = rgbVectorFromHex(color)
    if (isAlpha) {
      color = validateHexColor(color);
      alpha = parseFromHexToInt(color.substr(color.length-2));
      alpha = Number((alpha/255).toFixed(2))
    }
    if (obj) {
      colorConverted =  { r: rgb[0], g: rgb[1], b: rgb[2] }
      if (isAlpha) colorConverted.a = alpha;
    }
    else {
      if(isAlpha) colorConverted = `rgba(${rgb.toString()},${alpha})`
      else colorConverted = `rgb(${rgb.toString()})`
    }
  }
  return colorConverted;
}

const HexToHSL = (color, obj) => {
  const rgb = HexToRGB(color);
  const {h,s,l} = RGBToHSL(rgb);
  if(obj) return {h,s,l}
  else return `hsl(${h},${s}%,${l}%)`
}

const RGBToHex = color => {
  let hexColor = ''
  let alpha = '';
  const type = defineTypeColor(color);
  const chennels = extractChannelsFromString(color);
  if (type === TYPE_COLORS.RGBA){
    const last = Math.round(chennels.pop() * 255);
    alpha = `${last <= 15 ? '0' : ''}${parseFromIntToHex(last)}`;
  }
  chennels.forEach(int => hexColor += parseFromIntToHex(int));
  return `#${hexColor}${alpha}`.toUpperCase();
}

const RGBToHSL = color => {
  // console.log(color)
  const type = defineTypeColor(color);
  const channels = extractChannelsFromString(color);
  const red = channels[0], green = channels[1], blue = channels[2];
  let min, max, h=0, l, s, maxColor, rgb = {};

  // step 1, divide the value entre 255
  rgb.R = red / 255;
  rgb.G = green / 255;
  rgb.B = blue / 255;
  min = rgb.R;
  max = rgb.R;
  maxColor = 0;

  // Step 2, finding the max and min channel of rgb
  Object.values(rgb).forEach((c, i) => {
    if (c < min) min = c
    if (c > max) {
      max = c;
      maxColor = i;
    }
  })

  // Step 3, calculating the Luminance
  l = (min + max) / 2;

  // Step 4, calculating the Saturation
  if (min === max) s = 0 //if the min and max are the same, there is no saturation
  else {
    if (l < 0.5) s = (max - min) / (max + min)
    else s = (max - min) / (2 - max - min)
  }

  // Step 5, calculating the Hue
  const { R, G, B } = rgb;
  if (maxColor === 0) h = (G - B) / (max - min); // if Red is max
  if (maxColor === 1) h = 2 + (B - R) / (max - min); // if Green is max
  if (maxColor === 2) h = 4 + (R - G) / (max - min) // if Blue is max
  // if (isNaN(h)) h = 0;
  h = h * 60; //  have to be multiplied by 60 to convert it to degrees on the color circle
  if (h < 0) h = h + 360 // if hue is negative, it add 360, cause a circle has 360 degrees

  // Step 6, Rounden all values
  /*h = Number(h.toFixed(0));
  s = Number(s.toFixed(2)) * 100;
  l = Number(l.toFixed(2)) * 100;*/

  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return {h, s, l};
}

function HSLToRGB(hue, sat, light) {
  let t1, t2, r, g, b;
  hue = hue / 60;
  sat = sat / 100;
  light = light / 100;

  if ( light <= 0.5 ) {
    t2 = light * (sat + 1);
  } else {
    t2 = light + sat - (light * sat);
  }
  t1 = light * 2 - t2;
  r = Math.round(hueToRgb(t1, t2, hue + 2) * 255);
  g = Math.round(hueToRgb(t1, t2, hue) * 255);
  b = Math.round(hueToRgb(t1, t2, hue - 2) * 255);
  return {r , g , b };
}

const HSLToHex = () => {

}


export {
  HexToHSL,
  HexToRGB,
  RGBToHex,
  RGBToHSL,
  HSLToHex,
  HSLToRGB
}
