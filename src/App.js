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

import { useScroll } from 'framer-motion'
import { useMotionValueEvent } from 'framer-motion'

function App () {
  const { theme } = useContext(ThemeContext)

  const { logoTransparent, setLogoTransparent, nameTitleBreakpoint } =
    useContext(GlobalAnimationStatusContext)

  const { scrollYProgress } = useScroll()
  //Desabilitar la restauración de scroll automatica
  window.history.scrollRestoration = 'manual'

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (latest >= nameTitleBreakpoint && !logoTransparent) {
      setLogoTransparent(true)
    } else if (latest <= nameTitleBreakpoint && logoTransparent) {
      setLogoTransparent(false)
    }
    if (latest >= 1) {
      setLogoTransparent(false)
    }
    //console.log('Scroll: ', latest)
  })

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
  const { moverOpcionSeleccionadaArriba } = useContext(
    GlobalAnimationStatusContext
  )
  const location = useLocation()
  const { menuGeneralAnimation, setMenuGeneralAnimation } = useContext(
    GlobalAnimationStatusContext
  )
  //console.log(location.pathname)

  useEffect(() => {
    location.pathname === '/' && setMenuGeneralAnimation(true)
    location.pathname !== '/' &&
      menuGeneralAnimation &&
      moverOpcionSeleccionadaArriba()
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
          <Route path='/studies' element={<StudiesMotion />} />
          <Route path='/projects' element={<ProjectsMotion />} />
          <Route path='/hobbies' element={<HobbiesMotion />} />
          <Route path='/contact' element={<ContactMotion />} />
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
      transition={{ duration: 0.4, delay: 1.25 }}
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
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
      transition={{ duration: 0.5 }}
    >
      <Aboutme />
    </motion.div>
  )
}

function ExperienceMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(30vh)' }}
      animate={{
        opacity: 1,
        transform: 'translateY(0vh)',
        transition: { delay: 0.3, duration: 0.6 }
      }}
      exit={{
        opacity: 0,
        transform: 'translateY(-50vh)',
        transition: { duration: 0.3, delay: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <Experience />
    </motion.div>
  )
}

function StudiesMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Studies />
    </motion.div>
  )
}

function ProjectsMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Projects />
    </motion.div>
  )
}

function HobbiesMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
    >
      <Hobbies />
    </motion.div>
  )
}

function ContactMotion ({ hasTransition }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.1 }}
      exit={{ opacity: 0, transition: { duration: 0.3, delay: 0 } }}
    >
      <Contact />
    </motion.div>
  )
}
export default App
