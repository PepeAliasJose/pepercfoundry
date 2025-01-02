import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { GlobalAnimationStatusProvider } from './contexts/GlobalAnimationStatusContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalAnimationStatusProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GlobalAnimationStatusProvider>
  </React.StrictMode>
)
