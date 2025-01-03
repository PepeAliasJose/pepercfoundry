import { useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import MediumStyleText from '../components/molecules/MediumStyleText'
import StyledText from '../components/molecules/StyledText'

function Studies () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full h-full'>
      <div className='px-5 pt-5 md:px-10 md:pt-10'>
        <div className='mt-20 max-w-3xl mx-auto flex flex-col gap-8'>
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
      </div>
      <div className='w-screen h-screen px-10'>
        <div className='w-full'>
          <div className='w-fit pt-60 text-xl font-bold'>
            <div className='text-left ml-2'>A que esperas:</div>
            <SequentialLink text={'CONTACTAME'} to={'/contact'} />
          </div>
          <div className='w-fit ml-auto mt-20'>
            <div className='text-right mr-2 text-xl font-bold'>
              O siguiente apartado:
            </div>
            <SequentialLink text={'PROYECTOS'} to={'/projects'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studies
