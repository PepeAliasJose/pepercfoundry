import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function HighlightText ({ highlight }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex'>
      <div
        className='font-semibold text-2xl text-left'
        style={{ fontFamily: 'Lato bold', color: theme.fontColor }}
      >
        {highlight}
      </div>
    </div>
  )
}

export default HighlightText
