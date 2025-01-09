import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import ThemeContext from '../../contexts/ThemeContext'

function RadialMenuOption ({ text, subtitle, to }) {
  const { theme } = useContext(ThemeContext)

  const [visible, setVisible] = useState(false)
  const { moverOpcionSeleccionadaArriba } = useContext(
    GlobalAnimationStatusContext
  )
  return (
    <Link
      id={to}
      to={to}
      onClick={() => {
        //Esconder el menu y hacer la transicion de pagina
        moverOpcionSeleccionadaArriba(to)
      }}
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      //Playfair Display SC // Bio Sans
      className='myOption block z-10 w-fit h-fit leading-none 
      font-bold text-end opacity-0 '
      style={{
        color: visible ? theme.menuHighlightColor : theme.menuColor,
        fontFamily: 'Bio Sans',
        fontSize: '10vw',
        lineHeight: '9vw',
        transformOrigin: 'center right'
      }}
    >
      <div className='tracking-tight whitespace-nowrap'>{text}</div>
      {visible && (
        <div
          className='hidden sm:block text-xs lg:text-sm absolute 
          px-3 py-0.5 rounded-md w-fit tracking-wide 
          right-0 font-medium -mt-1 mr-3'
          style={{
            backgroundColor: theme.subMenuBgColor,
            color: theme.subMenuTextColor,
            fontFamily: 'Lato'
          }}
        >
          {subtitle}
        </div>
      )}
    </Link>
  )
}

export default RadialMenuOption
