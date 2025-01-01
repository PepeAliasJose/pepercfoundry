'use client'
import { createContext, useState } from 'react'

const GlobalAnimationStatusContext = createContext()

//Contexto global de todas las animaciones de la aplicacion, se usa para transiciones entre sitios
//y elementos
export function GlobalAnimationStatusProvider ({ children }) {
  const ret = {}

  return (
    <GlobalAnimationStatusContext.Provider value={ret}>
      {children}
    </GlobalAnimationStatusContext.Provider>
  )
}

export default GlobalAnimationStatusContext
