import { useContext, useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import ProjectCard from '../components/organisms/ProjectCard'
import PageBottomContainer from '../components/atoms/PageBottomContainer'
import PageContentContainer from '../components/atoms/PageContentContainer'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Projects () {
  const { setNameTitleBreakpoint } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setNameTitleBreakpoint(0.01)
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col'>
      <PageContentContainer>
        <div className='max-w-4xl mx-auto flex flex-col gap-20 -mt-10'>
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
            text={'AFICIONES'}
            to={'/hobbies'}
            topText={'O siguiente apartado'}
            right={true}
          />
        </div>
      </PageBottomContainer>
    </div>
  )
}

export default Projects
