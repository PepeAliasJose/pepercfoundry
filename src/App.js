import './globals.css'
import Landing from './pages/Landing'
import Aboutme from './pages/Aboutme'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ThemeContext from './contexts/ThemeContext'
import { useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GlobalAnimationStatusContext from './contexts/GlobalAnimationStatusContext'

function App () {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.style.backgroundColor = theme.bgColor
  }, [])
  return (
    <div
      className='App'
      style={{
        backgroundColor: theme.bgColor
      }}
    >
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </div>
  )
}

function Body () {
  const location = useLocation()
  const { radialMenuPosition } = useContext(GlobalAnimationStatusContext)

  const landing = radialMenuPosition.photoTransition.isOld ? (
    <Landing />
  ) : (
    <LandingMotion />
  )

  const about =
    radialMenuPosition.radialMenu.x != -1 ? <Aboutme /> : <AboutMotion />

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={landing} />
        <Route path='/about' element={about} />
      </Routes>
    </AnimatePresence>
  )
}

function LandingMotion () {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(-100px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.8 }}
    >
      <Landing />
    </motion.div>
  )
}

function AboutMotion () {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateX(-100px)' }}
      animate={{ opacity: 1, transform: 'translateX(0px)' }}
      exit={{ opacity: 0, transform: 'translateY(-100px)' }}
      transition={{ duration: 0.8 }}
    >
      <Aboutme />
    </motion.div>
  )
}

export default App
