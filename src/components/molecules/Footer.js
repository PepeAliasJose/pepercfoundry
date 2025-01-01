import { useEffect } from 'react'
import anime from 'animejs'

function Footer () {
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
      style={{ fontFamily: 'Lato' }}
      className='myFooter sm:w-full sm:h-5 flex justify-start 
      items-center gap-10 absolute bottom-10 -mx-10 px-10
      pointer-events-auto z-50'
    >
      <div className='el opacity-0'>781peperc@gmail.com</div>
      <div className='el opacity-0'>linkedin</div>
      <div className='el opacity-0'>github</div>

      <div className='ml-auto flex gap-8'>
        <div className='el opacity-0'>COLOR</div>
        <div className='el opacity-0'>IDIOMA</div>
      </div>
    </div>
  )
}

export default Footer
