import { useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'

function Contact () {
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
