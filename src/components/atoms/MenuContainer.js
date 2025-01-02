import { useContext } from 'react'
import Menu from '../organisms/Menu'
import ThemeContext from '../../contexts/ThemeContext'

function MenuContainer () {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      id='myMenuContainer'
      className=' w-full  h-full
      absolute top-0 right-0 pr-10 pointer-events-none
      sm:pl-0 overflow-y-scroll z-20 overflow-x-hidden'
    >
      <div className='w-full h-full'>
        <Menu />
      </div>
    </div>
  )
}

export default MenuContainer
