import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { useScroll } from 'framer-motion'
import { useMotionValueEvent } from 'framer-motion'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'
import MediumStyleText from '../components/molecules/MediumStyleText'
import SequentialLink from '../components/atoms/SequentialLink'
import { photoAppear } from '../helpers/animations/landing-lg-animations'
import HighlightText from '../components/atoms/HighlightText'

function Aboutme () {
  const { theme } = useContext(ThemeContext)
  const {
    logoTransparent,
    setLogoTransparent,
    moverOpcionSeleccionadaArriba,
    menuGeneralAnimation,
    setMenuGeneralAnimation
  } = useContext(GlobalAnimationStatusContext)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    if (latest > 0.08 && !logoTransparent) {
      setLogoTransparent(true)
    } else if (latest < 0.08 && logoTransparent) {
      setLogoTransparent(false)
    }
    if (latest >= 1) {
      setLogoTransparent(false)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setLogoTransparent(false)

    //Hacer aparecer la foto girando
    photoAppear()

    return () => {
      setLogoTransparent(false)
    }
  }, [])

  return (
    <div id='aboutComponent' className='w-full h-full flex flex-col'>
      <div className='w-screen h-screen px-5 sm:px-10'>
        <div
          className=' w-fit h-fit pt-40 md:pt-40 flex flex-col
         md:flex-row gap-10 lg:gap-24 mx-auto mb-20'
        >
          <div className='w-48 sm:w-56 mx-auto md:mx-0 md:w-80 lg:w-96'>
            <div className='myProfilePhoto'>
              <img
                className='rounded-full border-2 border-black border-solid'
                alt='foto'
                src={'./perfil/perfil-1.jpg'}
              />
            </div>
          </div>
          <div className='my-auto w-highlight'>
            <HighlightText
              highlight={
                'Delivering highly executed front-end user experiences by paying close ' +
                'attention to the nuances of design, optimization, and performance. ' +
                'Delivering highly executed front-end user experiences by paying close '
              }
            />
          </div>
        </div>
        <div className='w-8 h-8 mt-32 mx-auto'>
          <img src='./landingResources/back.svg' className='-rotate-90' />
        </div>
      </div>
      <div className='w-screen min-h-fit px-10 pb-20'>
        <div className='w-full flex flex-col md:flex-row mt-20 gap-20 mx-0  md:px-20 xl:px-44'>
          <MediumStyleText
            title={'Desarrollo web y multiplataforma'}
            content={
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance '
            }
          />
          <MediumStyleText
            title={'Informática y robótica'}
            content={
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance '
            }
          />
        </div>
        <div className='w-full flex flex-col md:flex-row mt-20 gap-20 mx-0  md:px-20 xl:px-44'>
          <MediumStyleText
            highlight={
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. '
            }
            content={
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance '
            }
          />
        </div>
      </div>
      <div className='w-screen h-screen px-10'>
        <div className='w-full'>
          <div className='w-fit mt-32 text-xl font-bold'>
            <div className='text-left ml-2'>A que esperas:</div>
            <SequentialLink text={'CONTACTAME'} to={'/contact'} />
          </div>
          <div className='w-fit ml-auto mt-20'>
            <div className='text-right mr-2 text-xl font-bold'>
              O siguiente apartado:
            </div>
            <SequentialLink text={'EXPERIENCIA'} to={'/experience'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
