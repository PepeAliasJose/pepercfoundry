import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import NameTitle from '../components/atoms/NameTitle'
import Quote from '../components/atoms/Quote'
import ReadyForWork from '../components/atoms/ReadyForWork'
import PhotoMenu from '../components/organisms/PhotoMenu'
import OptionCounter from '../components/molecules/OptionCounter'
import * as helpers from '../helpers/animations/landing-lg-animations'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'
import ProfilePhoto from '../components/atoms/ProfilePhoto'

function Landing () {
  const { theme } = useContext(ThemeContext)
  const { pageHistory, setCurrentPage } = useContext(
    GlobalAnimationStatusContext
  )

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0)
  const [animating, setAnimating] = useState(
    pageHistory.currentPage === 'about'
  )
  //Variable para que no parpadeen las transiciones de renderizado condicional
  const [magic, setMagic] = useState(pageHistory.currentPage === 'landing')

  useEffect(() => {
    helpers.guideArrowAnimation()
    setCurrentPage('landing')
    //Cuando acabe la animacion quitamos el estado de animando para que aparezcan
    // los componentes de verdad
    setTimeout(() => {
      setMagic(true)
    }, 600)
    setTimeout(() => {
      setAnimating(false)
      setMagic(false)
    }, 650)
  }, [])

  return (
    <div
      style={{
        height: '200vh',
        width: '100vw',
        backgroundColor: theme.bgColor
      }}
      className='w-screen -z-40 overflow-x-hidden'
    >
      <div className='w-screen h-screen flex flex-col'>
        <div
          className='w-screen h-full flex flex-col 
          lg:flex-row '
        >
          <div
            className='lg:w-1/2 lg:h-fit 
          block mt-auto mb-auto '
          >
            <div
              className='w-96 h-96
                md:ml-24 
                xl:ml-48'
            >
              <div
                id='landingPhotoAnchor'
                style={{ transform: 'translateX(42vw) translateY(102vh)' }}
                className='absolute border-2 border-solid border-orange-600'
              />
              {(!animating || magic) && (
                <PhotoMenu
                  key={'PhotoMenuPage'}
                  selectOption={setOpcionSeleccionada}
                />
              )}
            </div>
          </div>
          <div
            className='lg:w-1/2 lg:float-end 
                          md:h-fit 
                          block mt-auto mb-auto'
          >
            {
              //Margen superior para situar en la pagina la foto y el texto
            }
            <div
              className='-mt-6  
            md:w-4/5 md:ml-auto md:mr-auto
            xl:w-full '
            >
              <NameTitle isLanding />
              <Quote
                quote={
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq'
                }
              />
              <ReadyForWork />
            </div>
          </div>
        </div>
        <div className='w-14 h-14 mr-auto ml-auto pb-4'>
          <img
            alt='arrow'
            src='./landingResources/Arrow-down-circle.svg'
            className='guideArrow w-14 h-14'
          />
        </div>
      </div>
      <div className='w-screen h-screen block'>
        <div className='absolute'>
          {animating && <ProfilePhoto toLanding={true} />}
        </div>
        {(!animating || magic) && (
          <OptionCounter key={'optionCounter'} number={opcionSeleccionada} />
        )}
      </div>
    </div>
  )
}

export default Landing
