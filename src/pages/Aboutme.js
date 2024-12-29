import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LateralText from '../components/atoms/LateralText'
import ProfilePhoto from '../components/atoms/ProfilePhoto'
import Name from '../components/atoms/Name'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Aboutme () {
  const { theme } = useContext(ThemeContext)
  const { setCurrentPage } = useContext(GlobalAnimationStatusContext)

  const [show, setShow] = useState(false)

  useEffect(() => {
    setCurrentPage('about')
  }, [])

  return (
    <div className='flex flex-row w-screen h-screen overflow-hidden'>
      <LateralText text={'SOBRE MI'} />
      <div
        className='border-solid border-x-0 border-black
      lg:min-w-96
      xl:w-5/12 '
      >
        <div className='mt-40 w-72 h-72 ml-auto'>
          <div id='aboutPhotoAnchor'>
            <ProfilePhoto />
          </div>
        </div>
      </div>
      <div className='w-full border-x-0 border-blue-400 overflow-y-scroll'>
        <div className='w-fit mx-auto mt-20'>
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

        <div className='mt-20'>
          <div style={{ fontFamily: 'Lato' }} className='w-4/6 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{' '}
            <span style={{ fontFamily: 'Lato bold', color: '#499EDF' }}>
              commodo
            </span>{' '}
            consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
        <div className='mt-20'>
          <div className='w-4/6 mx-auto mb-10 font-bold text-3xl'>
            Desarrollo web y multiplataforma
          </div>
          <div style={{ fontFamily: 'Lato' }} className='w-4/6 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{' '}
            <span style={{ fontFamily: 'Lato bold', color: '#499EDF' }}>
              commodo
            </span>{' '}
            consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
        <div className='mt-20 mb-20'>
          <div className='w-4/6 mx-auto mb-10 font-bold text-3xl'>
            Informática y Robótica
          </div>
          <div style={{ fontFamily: 'Lato' }} className='w-4/6 mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{' '}
            <span style={{ fontFamily: 'Lato bold', color: '#499EDF' }}>
              commodo
            </span>{' '}
            consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
