import { useContext, useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import MediumStyleText from '../components/molecules/MediumStyleText'
import StyledText from '../components/molecules/StyledText'
import PageBottomContainer from '../components/atoms/PageBottomContainer'
import PageContentContainer from '../components/atoms/PageContentContainer'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Studies () {
  const { setNameTitleBreakpoint } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setNameTitleBreakpoint(0)
    window.scrollTo(0, 0)

    return () => {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <div className='flex flex-col'>
      <PageContentContainer>
        <div className='mt-20 sm:mt-0 max-w-3xl mx-auto flex flex-col gap-8'>
          <Title title={'Aprende. Investiga. Mejora'} />
          <MediumStyleText
            content={
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. ' +
              'Delivering highly executed front-end user experiences by paying close ' +
              'attention to the nuances of design, optimization, and performance. '
            }
          />
          <div className='my-5' />
          <StyledText
            title='Desarollo de aplicaciones multiplataforma'
            highlight={[3]}
            company={'IES Laguna de Tollón'}
            date={'2023-2025'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          />
          <div className='my-5' />
          <StyledText
            title='Desarollo de aplicaciones web'
            highlight={[3]}
            company={'CDP José Cabrera'}
            date={'2021-2023'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          />
          <div className='my-5' />
          <StyledText
            title='Automatización y robótica industrial'
            highlight={[2]}
            company={'Colegio Salesiano Manuel Lora Tamayo'}
            date={'2019-2021'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          />
          <div className='my-5' />
          <StyledText
            title='Sistemas microinformaticos y redes'
            highlight={[0, 3]}
            company={'IES Laguna de Tollón'}
            date={'2017-2019'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          />
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
            text={'PROYECTOS'}
            to={'/projects'}
            topText={'O siguiente apartado'}
            right={true}
          />
        </div>
      </PageBottomContainer>
    </div>
  )
}

export default Studies
