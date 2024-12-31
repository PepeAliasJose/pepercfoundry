import anime from 'animejs'
import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import ScrollContext from '../../contexts/ScrollContext'

function OptionCounter () {
  const {
    optionNumberAnimationStatus,
    setOptionNumberAnimationStatus,
    optionSelection
  } = useContext(GlobalAnimationStatusContext)
  const salida = 0.9

  const { scrollProgress } = useContext(ScrollContext)
  const [animation, setAnimation] = useState()

  //Esto va en un useEffect, para que cambie justo despues de renderizar asi evitamos el error:
  //Cannot update a component (`GlobalAnimationStatusProvider`) while
  // rendering a different component (`OptionCounter`).
  // To locate the bad setState() call inside `OptionCounter`,
  // follow the stack trace as described in https://react.dev/link/setstate-in-render

  useEffect(() => {
    if (scrollProgress >= salida && !optionNumberAnimationStatus.isVisible) {
      animation?.reverse()
      animation?.play()
      animation &&
        setOptionNumberAnimationStatus({
          isVisible: true
        })
    } else if (
      scrollProgress < salida &&
      optionNumberAnimationStatus.isVisible
    ) {
      animation?.reverse()
      animation?.play()
      animation &&
        setOptionNumberAnimationStatus({
          isVisible: false
        })
    }
  })

  useEffect(() => {
    const an = anime({
      targets: '.contador',
      translateX: {
        value: [40, 0]
      },
      opacity: {
        value: [0, 1]
      },
      duration: 250,
      delay: 100,
      easing: 'linear',
      autoplay: false
    })

    an.reverse()

    setAnimation(an)

    return () => {
      setOptionNumberAnimationStatus({
        isVisible: false
      })
    }
  }, [])

  return (
    <div
      key={'1234'}
      className='contador border-r-2 w-fit
       border-white border-solid 
       float-right mr-5 h-full text-8xl
       translate-x-10 opacity-0 overflow-hidden'
      style={{ fontFamily: 'RockNRoll One' }}
    >
      <div className='flex text-black pt -rotate-90 mt-5 -mr-3'>
        0
        <div className='numero text-white -ml-5'>
          <Number pos={optionSelection} />
        </div>
      </div>
    </div>
  )
}

function Number ({ pos }) {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    //BUG:
    //Cuando el navegador tiene zoom en el tamaño de la letra no cuadra la animacion
    //SOLUCION:
    //Calcular expresamente en todos los casos el tamaño de la letra y del gap
    const numberSize = document.querySelector('.num').offsetHeight
    anime({
      targets: '.numeros',
      translateY: function (number) {
        const gap = (number.offsetHeight - numberSize * 7) / 6
        return -pos * ((number.offsetHeight - gap * 6) / 7 + gap)
      },
      duration: 500
    })
  })

  return (
    //96
    <div className='h-32 -mb-8 pt-8 -mt-8 overflow-hidden'>
      <div
        className=' absolute w-16 h-40 -mt-8 z-20'
        style={{
          background:
            'linear-gradient(180deg, ' +
            theme.bgColor +
            ' 0%, ' +
            theme.bgColor +
            ' 15%, rgba(0,0,0,0) 30%)'
        }}
      ></div>
      <div className='numeros flex flex-col gap-20'>
        <div className='num'>0</div>
        <div className='num'>1</div>
        <div className='num'>2</div>
        <div className='num'>3</div>
        <div className='num'>4</div>
        <div className='num'>5</div>
        <div className='num'>6</div>
      </div>
    </div>
  )
}

export default OptionCounter
