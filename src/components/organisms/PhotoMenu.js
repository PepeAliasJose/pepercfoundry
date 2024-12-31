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

function PhotoMenu ({ location }) {
  const { scrollProgress, setScrollProgress } = useContext(ScrollContext) //Contexto scroll
  const {
    radialMenuAnimationStatus,
    setRadialMenuAnimationStatus,
    setRadialMenuPosition,
    radialMenuPosition,
    pageHistory
  } = useContext(
    //Contexto animacion
    GlobalAnimationStatusContext
  )

  //El scroll se maneja aqui en lugar de en la pagina por que las animaciones que mas fuertemente
  //dependen del scroll estan aqui, si lo ponemos fuera de aqui y que le llegue por props o contexto
  //Se pierde rendimiento
  const { scrollYProgress } = useScroll()

  const [photo, setPhoto] = useState(Math.floor(scrollProgress * (45 - 1) + 1))
  const [loaded, setLoaded] = useState(false)
  const [animating, setAnimating] = useState(true)

  const [animations, setAnimations] = useState({
    menuAnimation: null,
    radialAnimation: null
  })

  function showMenu () {
    //Desplegar el menu
    radialMenuAnimationStatus.reversed && animations.radialAnimation.reverse()
    animations.radialAnimation.play()
    //Que solo si la animacion esta definida se actualice el estado,
    //dado que si no esta definida no se va a ejecutar y no deberia cambiar el estado
    animations.radialAnimation &&
      setRadialMenuAnimationStatus({
        isVisible: true,
        reversed: false
      })
  }

  function hideMenu () {
    //Esconder el menu
    animations.radialAnimation?.reverse()
    animations.radialAnimation?.play()
    animations.radialAnimation &&
      setRadialMenuAnimationStatus({
        isVisible: false,
        reversed: true
      })
  }

  function move (l) {
    //Animacion de scroll
    animations.menuAnimation?.seek(l * 500)
    if (l >= 1) {
      setPhoto(45)
    } else if (l == 0) {
      setPhoto(1)
    }
    //mostrar o esconder el menu
    if (l >= 1 && !radialMenuAnimationStatus.isVisible) {
      showMenu()
    } else if (l < 0.95 && radialMenuAnimationStatus.isVisible) {
      hideMenu()
    }
    setScrollProgress(l)
  }

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setScrollProgress(latest)
    //console.log('Scroll: ', latest)
    //Si no estamos en landing no nos movemos en scroll
    location === '/' &&
      pageHistory.currentPage === 'landing' &&
      !animating &&
      move(latest) // Y escondemos el menu
    location !== '/' && radialMenuAnimationStatus.isVisible && hideMenu()
  })

  function firstLoadLanding (bottom) {
    const { x, y } = getObjectCoordinates('#basePhotoAnchorLanding')
    //Actualizar la posicion del menu
    const { x: fx, y: fy } = getObjectCoordinates('#finalPhotoAnchorLanding', 1)
    setRadialMenuPosition({
      ...radialMenuPosition,
      radialMenu: { x: fx, y: fy }
    })
    //Si estamos en landing page cargar animaciones de scroll
    setAnimations({
      //Animacion de la foto al bajar
      ...animations,
      menuAnimation: helpers.menuScrollAnimation(
        x,
        y,
        setPhoto,
        setRadialMenuPosition
      )
    })
    bottom &&
      setAnimations(a => {
        a.menuAnimation.seek(1)
        return a
      })
  }

  function moverMenuToAbout () {
    setAnimating(true)
    //Cuando salimos estamos animando
    console.log('Mover menu to about')
    const { x, y } = getObjectCoordinates('#basePhotoAnchorAbout')

    setRadialMenuPosition({
      ...radialMenuPosition,
      photoTransition: { x: x, y: y }
    })

    helpers.photoIlusionAnimation(
      setPhoto,
      x,
      y,
      radialMenuPosition.radialMenu.x,
      radialMenuPosition.radialMenu.y,
      false,
      'toSmall'
    )
    //Opacity a 0
    helpers.hide()
  }

  function moverMenuToLanding () {
    console.log('Mover menu to landing')
    window.scrollTo(1, document.body.scrollHeight)
    const { x, y } = getObjectCoordinates('#finalPhotoAnchorLanding', 1)
    const a = helpers.photoIlusionAnimation(
      setPhoto,
      x,
      y,
      radialMenuPosition.photoTransition.x,
      radialMenuPosition.photoTransition.y,
      true,
      'toBig'
    )
    a.finished.then(() => {
      setAnimating(false)
      move(1)
    })
  }

  function firstLoadAbout () {
    const { x, y } = getObjectCoordinates('#basePhotoAnchorAbout')
    setRadialMenuPosition({
      ...radialMenuPosition,
      photoTransition: { x: x, y: y }
    })
    const c = helpers.startPhotoToX(x, y, '18rem')
    //Opacity a 0
    c.finished.then(() => {
      helpers.hide()
    })
  }

  function fixResize () {
    if (location === '/') {
      //Areglamos la animacion
      const { x, y } = getObjectCoordinates('#basePhotoAnchorLanding')
      setAnimations({
        ...animations,
        menuAnimation: helpers.menuScrollAnimation(
          x,
          y,
          setPhoto,
          setRadialMenuPosition
        )
      })
      setAnimations(e => {
        e.menuAnimation.seek(scrollProgress * 500)
        return e
      })
      const { x: fx, y: fy } = getObjectCoordinates(
        '#finalPhotoAnchorLanding',
        1
      )
      setRadialMenuPosition({
        ...radialMenuPosition,
        radialMenu: { x: fx, y: fy }
      })
    } else if (location === '/about') {
      const { x, y } = getObjectCoordinates('#basePhotoAnchorAbout')
      setRadialMenuPosition({
        ...radialMenuPosition,
        photoTransition: { x: x, y: y }
      })
    }
  }

  // ***** USE EFECTS *****

  useEffect(() => {
    window.addEventListener('resize', fixResize)

    return () => {
      window.removeEventListener('resize', fixResize)
    }
  }, [animations, scrollProgress])

  useEffect(() => {
    loaded && move(scrollProgress)
  }, [loaded])

  useEffect(() => {
    //Cuando llegamos a la pagina de about desde otra pagina
    //  movemos el menu a la posicion de la foto
    location === '/about' &&
      pageHistory.currentPage === 'about' &&
      pageHistory.previousPage !== 'none' &&
      moverMenuToAbout()

    //Cuando llegamos a la pagina de about desde otra pagina
    //  movemos el menu a la posicion de la foto
    location === '/' &&
      pageHistory.currentPage === 'landing' &&
      pageHistory.previousPage !== 'none' &&
      moverMenuToLanding()

    location === '/' && helpers.show()
    //Si llegamos a la pagina luego ahora es cuando cargamos el scroll
    if (
      location === '/' &&
      pageHistory.previousPage !== 'none' &&
      animations.menuAnimation === null
    ) {
      console.log('Cargar landing como segunda pagina...')
      firstLoadLanding(true)
    }
    //Si llegamos a otra pagina animar desde su posicion a posicion de destino
  }, [location, pageHistory])

  useEffect(() => {
    const { width, height } = getWindowDimensions()
    console.log(location)

    //Si llegamos a landing primero cargamos las animaciones del scroll
    location === '/' && firstLoadLanding()
    //Si llegamos de primeras no estamos animando
    location === '/' && console.log('Cargar landing como primera pagina...')
    location === '/' && setAnimating(false)

    //Si llegamos a about primero cargamos el menu en su posicion
    location === '/about' && firstLoadAbout()

    //Siempre cargamos la animacion del menu deplegable
    setAnimations(a => {
      return {
        ...a,
        radialAnimation: helpers.menuAppearAnimation(height)
      }
    })
    setLoaded(true)
  }, [])

  return (
    <div
      key={'photoMenu'}
      className={
        loaded
          ? 'w-96 h-full py-auto z-10 transition-all ease-linear duration-300 sticky top-0'
          : 'w-96 opacity-0 h-full py-auto z-10 transition-all ease-linear duration-300 sticky top-0'
      }
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
          text={'CONTACTAME'}
          subtitle={'Te estoy esperando'}
          to={'/contact'}
        />
        <RadialMenuOption
          offset={0}
          data={2}
          text={'AFICIONES'}
          subtitle={'Un poco mas sobre mi'}
          to={'/hoobies'}
        />
        <RadialMenuOption
          offset={0}
          data={3}
          text={'PROYECTOS'}
          subtitle={'Los proyectos que he creado'}
          to={'/proyects'}
        />
        <RadialMenuOption
          offset={0}
          data={4}
          text={'ESTUDIOS'}
          subtitle={'Sobre todo lo que se'}
          to={'/studies'}
        />
        <RadialMenuOption
          offset={5}
          data={5}
          text={'EXPERIENCIA'}
          subtitle={'Mi experiencia laboral'}
          to={'/experience'}
        />
        <RadialMenuOption
          offset={12}
          data={6}
          text={'SOBRE MÍ'}
          subtitle={'Mi historia y habilidades'}
          to={'/about'}
        />
      </div>
    </div>
  )
}

export default PhotoMenu
