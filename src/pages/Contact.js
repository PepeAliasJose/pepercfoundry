import { useContext, useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import MediumStyleText from '../components/molecules/MediumStyleText'
import ThemeContext from '../contexts/ThemeContext'

function Contact () {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      Contacto Contacto
      <Title title={'ESTO ES UN TITULO'} highlight={[1]} />
      <Title
        title={'ESTO ES UN TITULO'}
        highlight={[1, 3]}
        size={'md:text-2xl'}
      />
      <Title title={'ESTO ES UN TITULO'} highlight={[2]} size={'md:text-7xl'} />
      <MediumStyleText
        content={
          'Delivering highly executed front-end user experiences by paying close ' +
          'attention to the nuances of design, optimization, and performance. ' +
          'Delivering highly executed front-end user experiences by paying close ' +
          'attention to the nuances of design, optimization, and performance. '
        }
      />
      <div className='text-xl' style={{ color: theme.softHighlightColor }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </div>
      <div className='w-screen h-screen px-10'>
        <div className='w-full'>
          <div className='w-fit pt-60 text-xl font-bold'>
            <div className='text-left ml-2'>VOLVER?:</div>
            <SequentialLink text={'VOLVER?'} to={'/'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
