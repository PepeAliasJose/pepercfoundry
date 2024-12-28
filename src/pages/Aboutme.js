import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LateralText from '../components/atoms/LateralText'
import ProfilePhoto from '../components/atoms/ProfilePhoto'
import Name from '../components/atoms/Name'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Aboutme () {
  const { theme } = useContext(ThemeContext)
  const { setCurrentPage } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    setCurrentPage('about')
  }, [])

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden'>
      <LateralText text={'SOBRE MI'} />
      <div
        className='border-solid border-x-2 border-black
      lg:min-w-80 
      xl:min-w-96 '
      >
        <div className='mt-20 w-72 h-72 mx-auto'>
          <div id='aboutPhotoAnchor'>
            <ProfilePhoto />
          </div>
        </div>
      </div>
      <div className='w-full border-x-2 border-blue-400'>
        <div className='w-fit mx-auto mt-10'>
          <div className='w-fit mx-auto text-nowrap'>
            <Name />
          </div>
          <img
            alt='__________'
            src='./pagesResources/underline1.svg'
            className='mt-2'
            style={{ width: '450px' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Aboutme
