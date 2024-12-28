'use client'
import { createContext, useState } from 'react'

const ScrollContext = createContext()

export function ScrollProvider ({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0)

  return (
    <ScrollContext.Provider value={{ scrollProgress, setScrollProgress }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext
