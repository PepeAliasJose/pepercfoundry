import { useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'

function Hobbies () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      HOBBIES HOBBIES
      <div className='w-screen h-screen px-10'>
        <div className='w-full'>
          <div className='w-fit pt-60 text-xl font-bold'>
            <div className='text-left ml-2'>A que esperas:</div>
            <SequentialLink text={'CONTACTAME'} to={'/contact'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
