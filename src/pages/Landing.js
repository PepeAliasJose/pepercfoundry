import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import NameTitle from '../components/atoms/NameTitle'
import Quote from '../components/atoms/Quote'
import ReadyForWork from '../components/atoms/ReadyForWork'
import OptionCounter from '../components/molecules/OptionCounter'
import * as helpers from '../helpers/animations/landing-lg-animations'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'
import { getObjectCoordinates } from '../helpers/functions/positionSynchronizerFunctions'

function Landing () {
  const { theme } = useContext(ThemeContext)
  const { setCurrentPage, radialMenuPosition, setRadialMenuPosition } =
    useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    helpers.guideArrowAnimation()
    setCurrentPage('landing')
    const { x: fx, y: fy } = getObjectCoordinates('#finalPhotoAnchorLanding', 1)
    setRadialMenuPosition({
      ...radialMenuPosition,
      radialMenu: { x: fx, y: fy }
    })
  }, [])

  return (
    <div
      exit={{ opacity: 0, animationDuration: 1000, transitionDuration: 1000 }}
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
                id='finalPhotoAnchorLanding'
                style={{ transform: 'translateX(42vw) translateY(102vh)' }}
                className='absolute border-2 border-solid border-green-600'
              />
              <div
                id='basePhotoAnchorLanding'
                className='absolute border-2 border-solid border-green-600'
              />
              <img
                className='rounded-full border-2 border-black border-solid'
                alt='foto'
                src='./perfil/perfil-1.jpg'
              />
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
        <div className='absolute bottom-0 w-screen'>
          <div className='w-14 h-14  flex relative mr-auto ml-auto pb-4'>
            <img
              alt='arrow'
              src='./landingResources/Arrow-down-circle.svg'
              className='guideArrow w-14 h-14'
            />
          </div>
        </div>
      </div>
      <div className='w-screen h-screen block'>
        <div className='absolute'></div>
        <OptionCounter key={'optionCounter'} />
      </div>
    </div>
  )
}

export default Landing
