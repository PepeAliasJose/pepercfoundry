'use client'
import { createContext, useState } from 'react'

const GlobalAnimationStatusContext = createContext()

//Contexto global de todas las animaciones de la aplicacion, se usa para transiciones entre sitios
//y elementos
export function GlobalAnimationStatusProvider ({ children }) {
  const [optionNumberAnimationStatus, setOptionNumberAnimationStatus] =
    useState({
      isVisible: false
    })
  const [radialMenuAnimationStatus, setRadialMenuAnimationStatus] = useState({
    isVisible: false,
    reversed: false
  })
  const [radialMenuPosition, setRadialMenuPosition] = useState({
    radialMenu: { x: -1, y: -1 },
    photoTransition: { x: -1, y: -1 }
  })

  const [pageHistory, setPageHistory] = useState({
    currentPage: 'none',
    previousPage: 'none'
  })

  const setCurrentPage = nueva => {
    setPageHistory({
      currentPage: nueva,
      previousPage: pageHistory.currentPage
    })
  }

  const [optionSelection, setOptionSelection] = useState(0)

  const ret = {
    optionNumberAnimationStatus,
    setOptionNumberAnimationStatus,
    radialMenuAnimationStatus,
    setRadialMenuAnimationStatus,
    radialMenuPosition,
    setRadialMenuPosition,
    pageHistory,
    setCurrentPage,
    optionSelection,
    setOptionSelection
  }

  return (
    <GlobalAnimationStatusContext.Provider value={ret}>
      {children}
    </GlobalAnimationStatusContext.Provider>
  )
}

export default GlobalAnimationStatusContext
