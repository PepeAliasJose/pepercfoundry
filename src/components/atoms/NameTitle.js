import anime from 'animejs'
import { useEffect } from 'react'

function NameTitle ({ style }) {
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
    <div
      className='myName text-3xl md:text-5xl text-left
       w-min font-black ml-auto overflow-x-hidden overflow-y-hidden
       pointer-events-auto'
      style={{ fontFamily: 'Lato black', WebkitTextStroke: '1px black' }}
    >
      <div className='it'>JOSÉ</div>
      <div className='it'>RODRÍGUEZ</div>
      <div className='it'>CÁCERES</div>
    </div>
  )
}

export default NameTitle
