import RadialMenuOption from '../atoms/RadialMenuOption'

function Menu () {
  return (
    <div
      className='pointer-events-auto flex flex-col items-end mt-20 pb-80'
      style={{
        transformOrigin: 'center right',
        transform: 'perspective(1500px) rotateY(-15deg)'
      }}
    >
      <RadialMenuOption text={'SOBRE MÍ'} subtitle={'Hola'} />
      <RadialMenuOption text={'EXPERIENCIA'} subtitle={'Hola'} />
      <RadialMenuOption text={'ESTUDIOS'} subtitle={'Hola'} />
      <RadialMenuOption text={'PROYECTOS'} subtitle={'Hola'} />
      <RadialMenuOption text={'AFICIONES'} subtitle={'Hola'} />
      <RadialMenuOption text={'CONTACTAME'} subtitle={'Hola'} />
    </div>
  )
}

export default Menu
