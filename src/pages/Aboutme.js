import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'
import MediumStyleText from '../components/molecules/MediumStyleText'
import SequentialLink from '../components/atoms/SequentialLink'
import { photoAppear } from '../helpers/animations/landing-lg-animations'
import HighlightText from '../components/atoms/HighlightText'
import PageBottomContainer from '../components/atoms/PageBottomContainer'
import PageContentContainer from '../components/atoms/PageContentContainer'
import DownArrow from '../components/atoms/DownArrow'

function Aboutme () {
  const { theme } = useContext(ThemeContext)
  const { logoTransparent, setLogoTransparent, setNameTitleBreakpoint } =
    useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setNameTitleBreakpoint(0.08)
    window.scrollTo(0, 0)
    setLogoTransparent(false)

    //Hacer aparecer la foto girando
    photoAppear()

    return () => {
      setLogoTransparent(false)
    }
  }, [])

  return (
    <div id='aboutComponent' className='flex flex-col'>
      <PageContentContainer>
        <div className='w-full h-screen'>
          <div
            className=' w-fit h-fit flex flex-col
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
          <div className='w-8 h-8 mt-32 mx-auto -rotate-90'>
            <DownArrow />
          </div>
        </div>
        <div className='w-full min-h-fit px-10 pb-20'>
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
      </PageContentContainer>
      <PageBottomContainer>
        <div className='w-fit text-xl font-bold'>
          <SequentialLink
            text={'CONTACTAME'}
            to={'/contact'}
            topText={'A que esperas:'}
          />
        </div>
        <div className='w-fit ml-auto mt-20'>
          <SequentialLink
            text={'EXPERIENCIA'}
            to={'/experience'}
            topText={'O siguiente apartado'}
            right={true}
          />
        </div>
      </PageBottomContainer>
    </div>
  )
}

export default Aboutme
