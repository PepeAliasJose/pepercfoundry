import { useContext, useEffect } from 'react'
import anime from 'animejs'
import ThemeContext from '../../contexts/ThemeContext'
import ThemeSwitch from '../organisms/ThemeSwitch'

function Footer () {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    anime({
      targets: '.myFooter .el',
      opacity: {
        value: [0, 1]
      },
      translateY: {
        value: ['2vh', '0vh']
      },
      duration: 550,
      easing: 'linear',
      delay: anime.stagger(200)
    })
  }, [])

  return (
    <div
      style={{
        fontFamily: 'Lato',
        color: theme.fontColor
      }}
      className='myFooter sm:w-full sm:h-5 flex justify-start 
      items-center gap-10 fixed top-0 p-10 mx-0
      pointer-events-auto z-50'
    >
      <div className='el opacity-0'>linkedin</div>
      <div className='el opacity-0'>github</div>
      <div className='el opacity-0'>781peperc@gmail.com</div>

      <div className='ml-auto flex gap-8'>
        <div className='el opacity-0'>
          <ThemeSwitch />
        </div>
        <div className='el opacity-0'>IDIOMA</div>
      </div>
    </div>
  )
}

export default Footer
