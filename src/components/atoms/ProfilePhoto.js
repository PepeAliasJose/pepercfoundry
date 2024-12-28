import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import { photoIlusionToOriginalAnimation } from '../../helpers/animations/landing-lg-animations'
import { getObjectCoordinates } from '../../helpers/functions/positionSynchronizerFunctions'
import { useContext, useEffect, useState } from 'react'

function ProfilePhoto () {
  const [photo, setPhoto] = useState(45)
  const { radialMenuPosition } = useContext(GlobalAnimationStatusContext)

  useEffect(() => {
    //Obtenemos las coordenadas del contenedor
    const { x, y } = getObjectCoordinates('#aboutPhotoAnchor')
    const dx = radialMenuPosition.x == -1 ? 0 : radialMenuPosition.x - x
    const dy = radialMenuPosition.y == -1 ? -300 : radialMenuPosition.y - y
    console.log(x, y, dx, dy)
    //Animacion para que la foto se mueva a la posicion de destino
    photoIlusionToOriginalAnimation(
      setPhoto,
      0,
      0,
      dx,
      dy,
      false,
      radialMenuPosition.x == -1 ? 'small' : 'toSmall'
    )
  }, [])

  return (
    <div
      id='aboutPhotoCon'
      //Si viene de recargar la pagina para evitar incoherencias visuales se pone la opacidad a 0
      className={
        radialMenuPosition.x == -1 ? 'opacity-0 aboutPhoto' : 'aboutPhoto'
      }
    >
      <img
        className='w-full h-full relative rounded-full z-20 border-black 
      border-2'
        alt='profile'
        src={'./perfil/perfil-' + photo + '.jpg'}
      />
    </div>
  )
}

export default ProfilePhoto
