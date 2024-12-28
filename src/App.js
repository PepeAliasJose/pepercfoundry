import './globals.css'
import Landing from './pages/Landing'
import Aboutme from './pages/Aboutme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeContext from './contexts/ThemeContext'
import { useContext } from 'react'

function App () {
  const { theme } = useContext(ThemeContext)
  document.body.style.backgroundColor = theme.bgColor
  return (
    <div
      className='App'
      style={{
        backgroundColor: theme.bgColor
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
