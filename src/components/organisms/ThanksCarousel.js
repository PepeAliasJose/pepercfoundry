import { useContext, useEffect } from 'react'
import anime from 'animejs'
import ThemeContext from '../../contexts/ThemeContext'

function ThanksCarousel () {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    anime({
      targets: '.finalMessage',
      translateX: {
        value: function (el) {
          return [0, -el.offsetWidth]
        }
      },
      duration: 13000,
      //      direction: 'alternate',
      easing: 'linear',
      loop: true
    })
  }, [])

  return (
    <div
      style={{
        color: theme.menuColor
      }}
      className='-mt-11 -mx-5 md:-mx-10 flex flex-row scale-y-[200%] z-10'
    >
      <Message />
      <Message />
      <Message />
    </div>
  )
}

function Message () {
  return (
    <div
      style={{ fontFamily: 'Lato' }}
      className='finalMessage text-[20vh] text-nowrap text-center pr-40'
    >
      CONTACTAME
    </div>
  )
}

export default ThanksCarousel
