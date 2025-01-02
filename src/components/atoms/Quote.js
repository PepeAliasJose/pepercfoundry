import { useContext } from 'react'
import ReadyForWork from './ReadyForWork'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
function Quote () {
  const { readyForWork } = useContext(GlobalAnimationStatusContext)

  return (
    <div
      className='w-fit transition-all ease-linear 
      duration-300 flex flex-col gap-3 
      mx-auto text-2xl 
      md:mx-0
      sm:text-4xl z-50'
      style={{ fontFamily: 'Lato black', WebkitTextStroke: '1px black' }}
    >
      <div className='inline-flex gap-2'>
        <div className='text-4xl lg:text-6xl text-transparent'>HOLA</div>
        <div className='text-nowrap mt-auto'>soy un </div>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-transparent tracking-tight'>
        DESARROLLADOR
      </h1>
      <p style={{ WebkitTextStroke: '0px black' }} className='text-sm'>
        WEB / MULTIPLATAFORMA / FULL-STACK
      </p>
      {readyForWork && <ReadyForWork />}
    </div>
  )
}

export default Quote
