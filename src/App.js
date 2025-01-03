import './globals.css'
import Landing from './pages/Landing'
import Aboutme from './pages/Aboutme'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ThemeContext from './contexts/ThemeContext'
import { useContext, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MenuContainer from './components/atoms/MenuContainer'
import GlobalAnimationStatusContext from './contexts/GlobalAnimationStatusContext'
import NameTitle from './components/atoms/NameTitle'
import Footer from './components/molecules/Footer'
import Experience from './pages/Experience'
import Studies from './pages/Studies'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'

function App () {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.style.backgroundColor = theme.bgColor
  }, [theme])

  return (
    <div
      className='App transition-colors duration-500 ease-in-out'
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
  const { menuGeneralAnimation, setMenuGeneralAnimation } = useContext(
    GlobalAnimationStatusContext
  )
  //console.log(location.pathname)

  useEffect(() => {
    location.pathname === '/' && setMenuGeneralAnimation(true)
  }, [location])

  return (
    <div className='w-screen h-fit overflow-x-hidden'>
      <NameTitle />
      <Footer />
      <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<LandingMotion />} />
          <Route path='/about' element={<AboutMotion />} />
          <Route path='/experience' element={<ExperienceMotion />} />
          <Route path='/studies' element={<Studies />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/hobbies' element={<Hobbies />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {menuGeneralAnimation && <MenuContainer key='menu' />}
    </div>
  )
}

function LandingMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.5 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
    >
      <Landing />
    </motion.div>
  )
}

function AboutMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.65 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Aboutme />
    </motion.div>
  )
}

function ExperienceMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(70vh)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0vh)',
        transition: { delay: 0.3, duration: 1 }
      }}
      exit={{ opacity: 0, transform: 'translateY(-50vh)' }}
      transition={{ duration: 0.5 }}
    >
      <Experience />
    </motion.div>
  )
}

export default App
