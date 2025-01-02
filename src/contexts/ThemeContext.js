'use client'
import { createContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  //3986AC

  const [theme, setTheme] = useState({
    bgColor: '#c1cbcd',
    fontColor: '#101010',
    lateralTitleColor: '#FFFFFF'
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
