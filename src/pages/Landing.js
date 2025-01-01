import { useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Quote from '../components/atoms/Quote'
import * as helpers from '../helpers/animations/landing-lg-animations'
import GlobalAnimationStatusContext from '../contexts/GlobalAnimationStatusContext'

function Landing () {
  const { theme } = useContext(ThemeContext)
  const { setCurrentPage, radialMenuPosition, setRadialMenuPosition } =
    useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    helpers.guideArrowAnimation()
  }, [])

  return (
    <div className='w-full h-full flex flex-col'>
      <Quote />
    </div>
  )
}

export default Landing

/*
<div className='w-fit ml-auto'>
          <div className='flex flex-row gap-8'>
            <div className='w-56'>
              <img
                className='rounded-full border-2 border-black border-solid'
                alt='foto'
                src='./perfil/perfil-1.jpg'
              />
            </div>
            <div className='h-fit my-auto'>
              <NameTitle style={''} />
            </div>
          </div>
        </div>
       */
