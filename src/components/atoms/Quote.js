import { useContext } from 'react'
import ReadyForWork from './ReadyForWork'
import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import ThemeContext from '../../contexts/ThemeContext'
function Quote () {
  const { readyForWork } = useContext(GlobalAnimationStatusContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className='w-fit transition-all ease-linear 
      duration-300 flex flex-col gap-3 
      mx-auto text-2xl 
      md:mx-0
      sm:text-4xl z-50'
      style={{
        color: theme.fontColor,
        fontFamily: 'Lato black',
        WebkitTextStroke: '1px' + theme.fontColor
      }}
    >
      <div className='inline-flex gap-2'>
        <div className='text-4xl lg:text-6xl text-transparent'>HOLA</div>
        <div
          className='text-nowrap mt-auto'
          style={{
            WebkitTextStroke: '0px'
          }}
        >
          soy un{' '}
        </div>
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
