import { useContext, useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import StyledText from '../components/molecules/StyledText'
import PageBottomContainer from '../components/atoms/PageBottomContainer'
import PageContentContainer from '../components/atoms/PageContentContainer'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Experience () {
  const { setNameTitleBreakpoint } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setNameTitleBreakpoint(0.01)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex flex-col'>
      <PageContentContainer>
        <div className='max-w-xl md:max-w-3xl mx-auto mt-20'>
          <StyledText
            title='Desarrollador Full-Stack'
            highlight={[1]}
            company={'Aktios S.L'}
            date={'2023'}
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
            text={'ESTUDIOS'}
            to={'/studies'}
            topText={'O siguiente apartado'}
            right={true}
          />
        </div>
      </PageBottomContainer>
    </div>
  )
}

export default Experience
