import { useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import StyledText from '../components/molecules/StyledText'

function Experience () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full h-fit flex flex-col'>
      <div
        className='w-screen h-fit mt-20 px-5 sm:px-10
       pt-52 pb-40'
      >
        <div className='w-1/2 mx-auto'>
          <StyledText
            title='Desarrollador Full-Stack'
            position={1}
            company={'Aktios S.L'}
            date={'2023'}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          />
        </div>
      </div>
      <div className='w-screen h-screen px-10'>
        <div className='w-full'>
          <div className='w-fit mt-60 text-xl font-bold'>
            <div className='text-left ml-2'>A que esperas:</div>
            <SequentialLink text={'CONTACTAME'} to={'/contact'} />
          </div>
          <div className='w-fit ml-auto mt-20'>
            <div className='text-right mr-2 text-xl font-bold'>
              O siguiente apartado:
            </div>
            <SequentialLink text={'ESTUDIOS'} to={'/studies'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
