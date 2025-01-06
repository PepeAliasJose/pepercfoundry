import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

function SequentialLink ({ text, to, topText, right }) {
  const { theme } = useContext(ThemeContext)
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <div
        style={{ fontFamily: 'Lato', color: theme.fontColor }}
        className={
          'text-xl tracking-wider font-semibold ' +
          (right ? 'text-right mr-2' : 'text-left ml-2')
        }
      >
        {topText}
      </div>
      <Link
        to={to}
        onMouseEnter={() => {
          setVisible(true)
        }}
        onMouseLeave={() => {
          setVisible(false)
        }}
        //Playfair Display SC // Bio Sans
        className='myOption z-10 w-fit h-fit leading-none
          font-bold text-end flex self-end 
          text-5xl sm:text-7xl md:text8-xl lg:text-9xl'
        style={{
          color: visible ? theme.menuHighlightColor : theme.menuColor,
          fontFamily: 'Bio Sans',
          transformOrigin: 'center right'
        }}
      >
        <div className='-tracking-wider whitespace-nowrap'>{text}</div>
      </Link>
    </div>
  )
}

export default SequentialLink
