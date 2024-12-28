import { useContext, useEffect, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import RadialMenuOption from '../atoms/RadialMenuOption'
import ScrollContext from '../../contexts/ScrollContext'
import * as helpers from '../../helpers/animations/landing-lg-animations'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import {
  getObjectCoordinates,
  getWindowDimensions
} from '../../helpers/functions/positionSynchronizerFunctions'

function PhotoMenu ({ selectOption }) {
  const { scrollProgress, setScrollProgress } = useContext(ScrollContext) //Contexto scroll
  const {
    radialMenuAnimationStatus,
    setRadialMenuAnimationStatus,
    setRadialMenuPosition
  } = useContext(
    //Contexto animacion
    GlobalAnimationStatusContext
  )

  //El scroll se maneja aqui en lugar de en la pagina por que las animaciones que mas fuertemente
  //dependen del scroll estan aqui, si lo ponemos fuera de aqui y que le llegue por props o contexto
  //Se pierde rendimiento
  const { scrollYProgress } = useScroll()

  const [photo, setPhoto] = useState(1)
  const [loaded, setLoaded] = useState(false)

  const [animations, setAnimations] = useState({
    menuAnimation: null,
    radialAnimation: null
  })

  function move (l) {
    //Actualizar la posicion del menu
    const { x, y } = getObjectCoordinates('#photoMenuContainer', l)
    setRadialMenuPosition({ x: x, y: y })

    //Animacion de scroll
    animations.menuAnimation?.seek(l * 500)
    if (l >= 1) {
      setPhoto(45)
    }

    //mostrar o esconder el menu
    if (l >= 1 && !radialMenuAnimationStatus.isVisible) {
      //Desplegar el menu
      radialMenuAnimationStatus.reversed &&
        animations.radialAnimation?.reverse()
      animations.radialAnimation?.play()
      //Que solo si la animacion esta definida se actualice el estado,
      //dado que si no esta definida no se va a ejecutar y no deberia cambiar el estado

      //BUG: al navegar por el react router, esta funcion se ejecuta en el mismo MS que otras
      //que actualizan el estado, con lo que una sobreescribe a la otra y genere un conflicto
      //SOLUCION: Resulta que al volver de la otra pagina, el que ejecutaba la funcion era un
      //useState sin el contexto como dependencia, entonces llamada desde ahi la funcion,
      // no cambia nada

      animations.radialAnimation &&
        setRadialMenuAnimationStatus({
          isVisible: true,
          reversed: false
        })
    } else if (l < 0.95 && radialMenuAnimationStatus.isVisible) {
      //Esconder el menu
      animations.radialAnimation?.reverse()
      animations.radialAnimation?.play()
      animations.radialAnimation &&
        setRadialMenuAnimationStatus({
          isVisible: false,
          reversed: true
        })
    }

    setScrollProgress(l)
  }

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setScrollProgress(latest)
    move(latest)
  })

  //Por las impicaciones que tiene estas animaciones, que dependen tanto del scroll, no he podido
  //programar la funcion sin este useEffect,
  useEffect(() => {
    loaded && move(scrollProgress)
  }, [loaded, radialMenuAnimationStatus])

  useEffect(() => {
    //Alto y ancho de la ventana
    const { width, height } = getWindowDimensions()
    //Meter la animacion a un estado para manejarla despues
    setAnimations({
      //Animacion de la foto al bajar responsiva
      menuAnimation: helpers.menuScrollAnimation(setPhoto),
      //Animacion de desplegar el menu
      radialAnimation: helpers.menuAppearAnimation(height)
    })
    setLoaded(true)

    return () => {
      setRadialMenuAnimationStatus({
        isVisible: false,
        reversed: false
      })
    }
  }, [])

  return (
    <div
      key={'photoMenu'}
      className='w-96 h-96 z-10 relative transition-all ease-linear duration-300
    md:ml-24 
    xl:ml-48'
    >
      <div
        id='photoMenuContainer'
        className='photoMenuContainer block rounded-full w-96 h-96 absolute origin-center'
      >
        <img
          className='w-full h-full relative rounded-full z-20 border-black 
        border-2'
          alt='profile'
          src={'./perfil/perfil-' + photo + '.jpg'}
        />
        <RadialMenuOption
          offset={4}
          data={1}
          selectOption={selectOption}
          text={'CONTACTAME'}
          subtitle={'Te estoy esperando'}
          to={''}
        />
        <RadialMenuOption
          offset={0}
          data={2}
          selectOption={selectOption}
          text={'AFICIONES'}
          subtitle={'Un poco mas sobre mi'}
          to={''}
        />
        <RadialMenuOption
          offset={0}
          data={3}
          selectOption={selectOption}
          text={'PROYECTOS'}
          subtitle={'Los proyectos que he creado'}
          to={''}
        />
        <RadialMenuOption
          offset={0}
          data={4}
          selectOption={selectOption}
          text={'ESTUDIOS'}
          subtitle={'Sobre todo lo que se'}
          to={''}
        />
        <RadialMenuOption
          offset={5}
          data={5}
          selectOption={selectOption}
          text={'EXPERIENCIA'}
          subtitle={'Mi experiencia laboral'}
          to={''}
        />
        <RadialMenuOption
          offset={12}
          data={6}
          selectOption={selectOption}
          text={'SOBRE MÍ'}
          subtitle={'Mi historia y habilidades'}
          to={'/about'}
        />
      </div>
    </div>
  )
}

export default PhotoMenu
