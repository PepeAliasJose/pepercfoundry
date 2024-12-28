import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import { ScrollProvider } from './contexts/ScrollContext'
import { GlobalAnimationStatusProvider } from './contexts/GlobalAnimationStatusContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalAnimationStatusProvider>
      <ScrollProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ScrollProvider>
    </GlobalAnimationStatusProvider>
  </React.StrictMode>
)
