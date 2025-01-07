'use client'
import { createContext, useState } from 'react'
import {
  getAllMenuItemsUnselected,
  getMenuItems
} from '../helpers/functions/positionSynchronizerFunctions'
import {
  esconderMenu,
  esconderOpciones
} from '../helpers/animations/landing-lg-animations'

const GlobalAnimationStatusContext = createContext()

//Contexto global de todas las animaciones de la aplicacion, se usa para transiciones entre sitios
//y elementos
export function GlobalAnimationStatusProvider ({ children }) {
  const [firstArrival, setFirstArrival] = useState(true)
  const [menuGeneralAnimation, setMenuGeneralAnimation] = useState(false)
  const [logoTransparent, setLogoTransparent] = useState(false)
  const [readyForWork, setReadyForWork] = useState(true)
  const [nameTitleBreakpoint, setNameTitleBreakpoint] = useState(0)

  function moverOpcionSeleccionadaArriba () {
    const x = getMenuItems()
    esconderMenu()
    const menuOculto = esconderOpciones(x)
    menuOculto.finished.then(() => {
      setMenuGeneralAnimation(false)
    })
  }

  const ret = {
    firstArrival,
    setFirstArrival,
    menuGeneralAnimation,
    setMenuGeneralAnimation,
    moverOpcionSeleccionadaArriba,
    logoTransparent,
    setLogoTransparent,
    readyForWork,
    setReadyForWork,
    nameTitleBreakpoint,
    setNameTitleBreakpoint
  }

  return (
    <GlobalAnimationStatusContext.Provider value={ret}>
      {children}
    </GlobalAnimationStatusContext.Provider>
  )
}

export default GlobalAnimationStatusContext
