import anime from 'animejs'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import ThemeContext from '../../contexts/ThemeContext'

function NameTitle ({ style }) {
  const { theme } = useContext(ThemeContext)
  const { logoTransparent } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    anime({
      targets: '.myName .it',
      translateX: {
        value: ['-100%', '0%']
      },
      duration: 550,
      easing: 'easeOutSine',
      delay: anime.stagger(250)
    })
  }, [])

  return (
    <Link to='/'>
      <div
        id='myName'
        className='myName 
        text-lg sm:text-3xl md:text-5xl text-left leading-none
       w-min flex flex-col ml-auto overflow-x-hidden overflow-y-hidden
       pointer-events-auto z-50 
       fixed left-10 bottom-10 
       transition-colors pt-1'
        style={{
          fontFamily: 'Lato black',
          WebkitTextStroke: logoTransparent ? theme.nameTitleStroke : '0px',
          color: logoTransparent ? 'transparent' : theme.nameTitleColor
        }}
      >
        <div className='it'>JOSÉ</div>
        <div className='it'>RODRÍGUEZ</div>
        <div className='it'>CÁCERES</div>
      </div>
    </Link>
  )
}

export default NameTitle
