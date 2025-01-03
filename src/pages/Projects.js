import { useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import ProjectCard from '../components/organisms/ProjectCard'

function Projects () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full h-full'>
      <div className='px-5 pt-5 md:px-10 md:pt-10'>
        <div className='mt-20 max-w-4xl mx-auto flex flex-col gap-20'>
          <Title title={'Crea y analiza'} />
          <ProjectCard
            title='DRAGONBALLDLE'
            content='Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet'
            stats=' hasta 1200 usuarios diarios 223 mil interacciones en los ultimos 28 dias'
            links='Link Link Link'
          />
          <ProjectCard
            title='Inteligente. Autónomo. Es IA'
            content='Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet'
            stats=' hasta 1200 usuarios diarios 223 mil interacciones en los ultimos 28 dias'
            links='Link Link Link'
          />
          <ProjectCard
            title='Astronómico y preciso'
            content='Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet'
            stats=' hasta 1200 usuarios diarios 223 mil interacciones en los ultimos 28 dias'
            links='Link Link Link'
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
            <SequentialLink text={'AFICIONES'} to={'/hobbies'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
