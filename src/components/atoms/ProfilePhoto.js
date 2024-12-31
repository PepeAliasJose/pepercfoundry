import GlobalAnimationStatusContext from '../../contexts/GlobalAnimationStatusContext'
import { photoIlusionAnimation } from '../../helpers/animations/landing-lg-animations'
import { getObjectCoordinates } from '../../helpers/functions/positionSynchronizerFunctions'
import { useContext, useEffect, useState } from 'react'

function ProfilePhoto ({ toLanding }) {
  const [photo, setPhoto] = useState(toLanding ? 1 : 45)
  const { radialMenuPosition, setRadialMenuPosition } = useContext(
    GlobalAnimationStatusContext
  )

  const fromMenuToAbout = () => {
    //Obtenemos las coordenadas del contenedor
    const { x, y } = getObjectCoordinates('#aboutPhotoAnchor')
    const rx = radialMenuPosition.radialMenu.x
    const ry = radialMenuPosition.radialMenu.y

    const ox = rx == -1 ? 0 : rx - x
    const oy = ry == -1 ? -700 : ry - y

    setRadialMenuPosition({
      ...radialMenuPosition,
      photoTransition: { x: x, y: y, isOld: ry != -1 }
    })
    //Animacion para que la foto se mueva a la posicion de destino
    photoIlusionAnimation(
      setPhoto,
      0,
      0,
      ox,
      oy,
      false,
      rx == -1 ? 'small' : 'toSmall'
    )
  }

  const fromAboutToMenu = () => {
    //Obtenemos las coordenadas del contenedor
    const { x, y } = getObjectCoordinates('#landingPhotoAnchor', 1)
    const rx = radialMenuPosition.photoTransition.x
    const ry = radialMenuPosition.photoTransition.y

    const ox = rx == -1 ? x : rx
    const oy = ry == -1 ? -700 : ry
    //console.log(x, y, ox, oy)
    //Animacion para que la foto se mueva a la posicion de destino
    photoIlusionAnimation(
      setPhoto,
      x,
      y,
      ox,
      oy,
      true,
      rx == -1 ? 'big' : 'toBig'
    )
  }

  useEffect(() => {
    if (!toLanding) {
      fromMenuToAbout()
    } else {
      fromAboutToMenu()
    }
  }, [])

  return (
    <div
      id='aboutPhotoCon'
      //Si viene de recargar la pagina para evitar incoherencias visuales se pone la opacidad a 0
      className={'opacity-0 aboutPhoto'}
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
