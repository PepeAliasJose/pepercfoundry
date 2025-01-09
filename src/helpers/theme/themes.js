import {
  contrast,
  fixContrast,
  HSLToRGB,
  lightReducer,
  RGBtoHEX
} from '../functions/positionSynchronizerFunctions'

export const base = {
  bgColor: '#FDFDFF',
  fontColor: '#6A6D6F',
  softHighlightColor: '#393D3F',
  highlightColor: '#62929E',
  menuColor: '#393D3F',
  menuHighlightColor: '#62929E',
  subMenuBgColor: '#62929E',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#393D3F',
  nameTitleStroke: '0.5px #393D3F',
  rfwBg: '#546A7B',
  rfwText: '#FFFFFF',
  rfwSec: '#62929E'
}

export const black = {
  bgColor: '#2F3234',
  fontColor: '#B4B5B7',
  softHighlightColor: '#FDFDFF',
  highlightColor: '#62929E',
  menuColor: '#FDFDFF',
  menuHighlightColor: '#546A7B',
  subMenuBgColor: '#546A7B',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#FDFDFF',
  nameTitleStroke: '0.5px #FDFDFF',
  rfwBg: '#62929E',
  rfwText: '#FAFAFA',
  rfwSec: '#546A7B'
}

export const base1 = {
  bgColor: '#F7F0F5',
  fontColor: '#8F857D',
  softHighlightColor: '#433633',
  highlightColor: '#3986AC',
  menuColor: '#5C5552',
  menuHighlightColor: '#433633',
  subMenuBgColor: '#101010',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#5C5552',
  nameTitleStroke: '0.5px #8F857D',
  rfwBg: '#D41F48',
  rfwText: '#FFFFFF',
  rfwSec: '#39A9A3'
}
export const base2 = {
  bgColor: '#EDF2F4',
  fontColor: '#5C6378',
  softHighlightColor: '#2B2D42',
  highlightColor: '#EF233C',
  menuColor: '#5C6378',
  menuHighlightColor: '#2B2D42',
  subMenuBgColor: '#2B2D42',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#5C6378',
  nameTitleStroke: '0.5px #5C6378',
  rfwBg: '#EF233C',
  rfwText: '#FFFFFF',
  rfwSec: '#2B2D42'
}
export const base3 = {
  bgColor: '#FDFDFF',
  fontColor: '#6A6D6F',
  softHighlightColor: '#393D3F',
  highlightColor: '#62929E',
  menuColor: '#393D3F',
  menuHighlightColor: '#546A7B',
  subMenuBgColor: '#546A7B',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#393D3F',
  nameTitleStroke: '0.5px #393D3F',
  rfwBg: '#62929E',
  rfwText: '#FFFFFF',
  rfwSec: '#546A7B'
}
const black1 = {
  bgColor: '#393D3F',
  fontColor: '#B4B5B7',
  softHighlightColor: '#FDFDFF',
  highlightColor: '#546A7B',
  menuColor: '#FDFDFF',
  menuHighlightColor: '#62929E',
  subMenuBgColor: '#62929E',
  subMenuTextColor: '#FFFFFF',
  nameTitleColor: '#FDFDFF',
  nameTitleStroke: '0.5px #FDFDFF',
  rfwBg: '#546A7B',
  rfwText: '#FAFAFA',
  rfwSec: '#62929E'
}

export const setColorPicker = h => {
  //Se usa el color en HSL por que es mas facil modificarle la saturacion y la luminosidad,
  //Luego los convetirmos en RGB para comprobar el contraste, y por ultimo HEX para inyectarlo al
  //HTML
  var bg = [parseInt(h), 55.6, 97.8]

  var ft = [parseInt(h), 17.2, 44.1]
  var hl = [parseInt(h), 93.2, 71]

  var sh = [parseInt(h), 3.3, 25]
  var me = [parseInt(h), 36.6, 61.2]

  //36-186
  const dangerZone = h >= 25 && h <= 200

  ft = fixContrast(contrast(HSLToRGB(...bg), HSLToRGB(...ft)), ft)
  hl[2] = dangerZone ? hl[2] + lightReducer(h) : hl[2]

  var customT = {
    bgColor: RGBtoHEX(...HSLToRGB(...bg)),
    fontColor: RGBtoHEX(...HSLToRGB(...ft)),
    softHighlightColor: RGBtoHEX(...HSLToRGB(...sh)),
    highlightColor: RGBtoHEX(...HSLToRGB(...hl)),
    menuColor: RGBtoHEX(...HSLToRGB(...me)),
    menuHighlightColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 20)),
    subMenuBgColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 20)),
    subMenuTextColor: '#FFFFFF',
    nameTitleColor: RGBtoHEX(...HSLToRGB(...me)),
    nameTitleStroke: '0.5px ' + RGBtoHEX(...HSLToRGB(...me)),
    rfwBg: RGBtoHEX(...HSLToRGB(...me)),
    rfwText: '#FFFFFF',
    rfwSec: RGBtoHEX(...HSLToRGB(...hl)),
    hue: parseInt(h)
  }
  return customT
}

export function getPreloadTheme () {
  const loadedTheme = localStorage.getItem('PepeRCFoundryTheme')

  const themeS = loadedTheme ? loadedTheme : 'claro'

  console.log(themeS)

  if (themeS === 'claro') {
    return { myTheme: base, isCustom: false }
  }
  if (themeS === 'oscuro') {
    return { myTheme: black, isCustom: false }
  }
  if (themeS !== 'claro' && themeS !== 'oscuro') {
    return { myTheme: setColorPicker(themeS), isCustom: true }
  }
}

export function saveTheme (theme) {
  localStorage.setItem('PepeRCFoundryTheme', theme)
}
