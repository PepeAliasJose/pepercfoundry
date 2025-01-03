'use client'
import { createContext, useState } from 'react'
import {
  HSLToRGB,
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

    var custom = {
      bgColor: RGBtoHEX(...HSLToRGB(parseInt(h), 20, 90)),
      fontColor: RGBtoHEX(...HSLToRGB(parseInt(h), 45, 45)),
      softHighlightColor: RGBtoHEX(...HSLToRGB(parseInt(h), 80, 25)),
      highlightColor: RGBtoHEX(...HSLToRGB(parseInt(h), 90, 20)),
      menuColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 35)),
      menuHighlightColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 20)),
      subMenuBgColor: '#101010',
      subMenuTextColor: '#FFFFFF',
      nameTitleColor: RGBtoHEX(...HSLToRGB(parseInt(h), 70, 30)),
      nameTitleStroke: '0.5px ' + RGBtoHEX(...HSLToRGB(parseInt(h), 50, 20))
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
