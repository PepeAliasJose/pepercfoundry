import { verticalTextAppearAnimation } from '../../helpers/animations/landing-lg-animations'
import { useEffect, useState } from 'react'

function LateralText ({ text }) {
  const [escala, setEscala] = useState('')

  const scale = () => {
    const texto = document.querySelector('#lateraltext')
    //La fuente tardaba en cargar y cogia el ancho antes de usar la fuente, con lo que
    //el calculo salia mal, asi que hay que esperar que las fuentes del documento esten
    //cargadas y usadas para poder coger el ancho del componente de manera correcta
    document.fonts.ready.then(() => {
      //Conseguimos el ancho el componente y el alto de la ventana
      const { innerHeight: height } = window
      //Calculamos el porcentaje de la ventana respecto al componente
      const w = window.getComputedStyle(texto, null).getPropertyValue('width')
      const x = (100 * height) / parseInt(w.substring(0, w.length - 2)) / 100
      //Y pasamos esa escala normalizada a 1 para que sepa cuento tiene que escalar el
      //componente para que ocupe todo el ancho
      setEscala(x)
    })
  }

  useEffect(() => {
    verticalTextAppearAnimation()
    scale()
    window.addEventListener('resize', scale)

    return () => {
      window.removeEventListener('resize', scale)
    }
  }, [])

  return (
    <div
      className='lateralText h-full w-10/1 translate-y-60 opacity-0
      text-white content-end border-r-2 border-solid border-white'
      style={{ fontFamily: 'Playfair Display SC' }}
    >
      <div
        id='lateraltext'
        className='rotatedText text-nowrap w-min  text-10/1 
      leading-none font-bold'
        style={{ '--x': escala }}
      >
        {text}
      </div>
    </div>
  )
}

export default LateralText
