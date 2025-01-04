'use client'
import { createContext, useState } from 'react'
import {
  contrast,
  fixContrast,
  HSLToRGB,
  lightReducer,
  RGBtoHEX
} from '../helpers/functions/positionSynchronizerFunctions'

const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const base = {
    bgColor: '#c1cbcd',
    fontColor: '#101010',
    softHighlightColor: '',
    highlightColor: '#3986AC',
    menuColor: '#FFFFFF',
    menuHighlightColor: '#101010',
    subMenuBgColor: '#101010',
    subMenuTextColor: '#FFFFFF',
    nameTitleColor: '#101010',
    nameTitleStroke: '0.5px #909090'
  }

  const black = {
    bgColor: '#101010',
    fontColor: '#FAFAFA',
    softHighlightColor: '',
    highlightColor: '#D41F48',
    menuColor: '#FFFFFF',
    menuHighlightColor: '#D41F48',
    subMenuBgColor: '#404040',
    subMenuTextColor: '#FFFFFF',
    nameTitleColor: '#FAFAFA',
    nameTitleStroke: '0.5px #AAAAAA'
  }

  const white = {
    bgColor: '#FAFAFA',
    fontColor: '#101010',
    softHighlightColor: '',
    highlightColor: '#3986AC',
    menuColor: '#101010',
    menuHighlightColor: '#3986AC',
    subMenuBgColor: '#101010',
    subMenuTextColor: '#FFFFFF',
    nameTitleColor: '#101010',
    nameTitleStroke: '0.5px #909090'
  }
  const [theme, setTheme] = useState(base)
  const [customTheme, setCustomTheme] = useState(0)

  const setColorPicker = h => {
    //Se usa el color en HSL por que es mas facil modificarle la saturacion y la luminosidad,
    //Luego los convetirmos en RGB para comprobar el contraste, y por ultimo HEX para inyectarlo al
    //HTML
    var bg = [parseInt(h), 55.6, 97.8]

    var ft = [parseInt(h), 17.2, 44.1]
    var hl = [parseInt(h), 93.2, 71]

    var sh = [parseInt(h), 3.3, 11]
    var me = [parseInt(h), 36.6, 61.2]

    //36-186
    const dangerZone = h >= 25 && h <= 200

    ft = fixContrast(contrast(HSLToRGB(...bg), HSLToRGB(...ft)), ft)
    hl[2] = dangerZone ? hl[2] + lightReducer(h) : hl[2]

    var custom = {
      bgColor: RGBtoHEX(...HSLToRGB(...bg)),
      fontColor: RGBtoHEX(...HSLToRGB(...ft)),
      softHighlightColor: RGBtoHEX(...HSLToRGB(...sh)),
      highlightColor: RGBtoHEX(...HSLToRGB(...hl)),
      menuColor: RGBtoHEX(...HSLToRGB(...me)),
      menuHighlightColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 20)),
      subMenuBgColor: '#101010',
      subMenuTextColor: '#FFFFFF',
      nameTitleColor: RGBtoHEX(...HSLToRGB(...me)),
      nameTitleStroke: '0.5px ' + RGBtoHEX(...HSLToRGB(...me))
    }
    setTheme(custom)
  }

  function setThemeToBlack () {
    //D41F48
    setTheme(black)
  }

  function setThemeToWhite () {
    //#3986AC
    setTheme(white)
  }

  function setThemeToBase () {
    setTheme(base)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        setThemeToBase,
        setThemeToBlack,
        setThemeToWhite,
        base,
        black,
        white,
        setColorPicker,
        customTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
