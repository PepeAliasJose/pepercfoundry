import { useContext, useEffect } from 'react'
import PageContentContainer from '../components/atoms/PageContentContainer'
import SpecialTitle from '../components/molecules/SpecialTitle'
import MediumStyleText from '../components/molecules/MediumStyleText'
import PageBottomContainer from '../components/atoms/PageBottomContainer'
import SequentialLink from '../components/atoms/SequentialLink'
import ThemeContext from '../contexts/ThemeContext'
import anime from 'animejs'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Hobbies () {
  const { theme, setTheme, setThemeToBlack } = useContext(ThemeContext)

  const { setNameTitleBreakpoint } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setNameTitleBreakpoint(0.01)
    window.scrollTo(0, 0)

    var firstTheme = theme
    setThemeToBlack()

    //Animacion intro de fotos??
    anime({
      targets: '.fotoInicio',
      height: {
        value: ['0%', '100%']
      },
      duration: 1200,
      delay: 300,
      easing: 'easeInOutSine'
    })

    return () => {
      setTheme(firstTheme)
    }
  }, [])
  return (
    <div className='flex flex-col'>
      <PageContentContainer>
        <div className='h-screen -mt-20 md:-mt-40'>
          <div className='max-w-3xl mx-auto flex flex-col gap-8 relative z-40 mt-16 mb-8'>
            <SpecialTitle
              title={'Astronomía y fotografía'}
              highlight={[0]}
              size={'md:text-7xl tracking-tighter'}
            />
          </div>
          <div className='h-[50vh] z-10 overflow-hidden -mx-5 md:-mx-10'>
            <div className='fotoInicio overflow-hidden'>
              <img
                className=' object-cover -mt-0 brightness-110'
                alt='header'
                src='./hobbiesResources/wide-2.jpg'
              />
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto flex flex-row gap-8 relative'>
          <div className='z-10 overflow-hidden'>
            <div className='fotoInicio overflow-hidden'>
              <img
                className=' object-cover -mt-0 brightness-110 '
                alt='header'
                src='./hobbiesResources/d1.jpeg'
              />
            </div>
          </div>
          <div className='my-auto'>
            <MediumStyleText
              content={
                'Delivering highly executed front-end user experiences by paying close ' +
                'attention to the nuances of design, optimization, and performance. ' +
                'Delivering highly executed front-end user experiences by paying close ' +
                'attention to the nuances of design, optimization, and performance. '
              }
            />
          </div>
        </div>
        <div className='my-56'>
          <div className='h-screen z-10 overflow-hidden '>
            <div className='fotoInicio overflow-hidden'>
              <img
                className=' object-cover -mt-0 brightness-110 h-full mx-auto'
                alt='header'
                src='./hobbiesResources/PXL_20230816.jpg'
              />
            </div>
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
      </PageBottomContainer>
    </div>
  )
}

export default Hobbies

/*
<MediumStyleText
  content={
    'Delivering highly executed front-end user experiences by paying close ' +
    'attention to the nuances of design, optimization, and performance. ' +
    'Delivering highly executed front-end user experiences by paying close ' +
    'attention to the nuances of design, optimization, and performance. '
  }
/>
*/
