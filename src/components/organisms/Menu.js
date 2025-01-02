import { useEffect } from 'react'
import RadialMenuOption from '../atoms/RadialMenuOption'
import { mostrarMenu } from '../../helpers/animations/landing-lg-animations'

function Menu () {
  useEffect(() => {
    const x = document.querySelector('#myMenuContainer')
    mostrarMenu()
  }, [])

  return (
    <div
      id='myMenu'
      style={{
        transformOrigin: 'center right',
        transform: 'perspective(2000px) rotateY(-20deg) translateZ(0)'
      }}
      className='myMenu pointer-events-auto flex flex-col items-end gap-4 pt-40 pb-80'
    >
      <RadialMenuOption
        text={'SOBRE MÍ'}
        subtitle={'Lo que quieras saber sobre mí'}
        to={'about'}
      />
      <RadialMenuOption
        text={'EXPERIENCIA'}
        subtitle={'Mi experiencia profesional'}
        to={'experience'}
      />
      <RadialMenuOption
        text={'ESTUDIOS'}
        subtitle={'Todo lo que he aprendido'}
        to={'studies'}
      />
      <RadialMenuOption
        text={'PROYECTOS'}
        subtitle={'Mis proyectos más interesantes'}
        to={'proyects'}
      />
      <RadialMenuOption
        text={'AFICIONES'}
        subtitle={'Un poco más sobre mí'}
        to={'hobbies'}
      />
      <RadialMenuOption
        text={'CONTACTAME'}
        subtitle={'Te estoy esperando'}
        to={'contact'}
      />
    </div>
  )
}

export default Menu
