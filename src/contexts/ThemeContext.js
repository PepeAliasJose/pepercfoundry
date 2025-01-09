'use client'
import { createContext, useState } from 'react'
import {
  base,
  black,
  getPreloadTheme,
  saveTheme,
  setColorPicker
} from '../helpers/theme/themes'

const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const { myTheme, isCustom } = getPreloadTheme()

  const [theme, setTheme] = useState(myTheme)
  const [custom, setCustom] = useState(isCustom)

  function setThemeStatus (themeS) {
    if (themeS === 'claro') {
      setTheme(base)
      setCustom(false)
    }
    if (themeS === 'oscuro') {
      setTheme(black)
      setCustom(false)
    }
    if (themeS !== 'claro' && themeS !== 'oscuro' && custom) {
      setTheme(setColorPicker(themeS))
    }

    //Guardar en el LocalStorage
    saveTheme(themeS)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        setThemeStatus,
        base,
        black,
        custom,
        setCustom
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
