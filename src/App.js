import './globals.css'
import Landing from './pages/Landing'
import Aboutme from './pages/Aboutme'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ThemeContext from './contexts/ThemeContext'
import { useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import GlobalAnimationStatusContext from './contexts/GlobalAnimationStatusContext'
import PhotoMenu from './components/organisms/PhotoMenu'

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
  //console.log(location.pathname)

  return (
    <div>
      <PhotoMenu location={location.pathname} />
      <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<LandingMotion />} />
          <Route path='/about' element={<AboutMotion />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

function LandingMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Landing />
    </motion.div>
  )
}

function AboutMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Aboutme />
    </motion.div>
  )
}

export default App
