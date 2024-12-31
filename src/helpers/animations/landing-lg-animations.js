import anime from 'animejs'
import { getObjectCoordinates } from '../functions/positionSynchronizerFunctions'

/**
 *
 * @returns animacion de la fecha de landing page que indica que bajes
 */
export const guideArrowAnimation = () => {
  return anime({
    targets: '.guideArrow',
    translateY: {
      value: [0, -25]
    },
    easing: 'easeOutCirc',
    direction: 'alternate',
    duration: 750,
    loop: true
  })
}

//En las animaciones es importante usar transforms antes que mover con top,left,right,bottom
//Mejora el CLS y el rendimiento
/**
 *
 * @param {function} setPhoto funcion para cambiar la foto en scroll
 * @returns la animacion que sigue el scroll
 */
export const menuScrollAnimation = (ox, oy, setPhoto) => {
  const { x, y } = getObjectCoordinates('#finalPhotoAnchorLanding', 1)
  return anime({
    targets: '.photoMenuContainer',
    translateY: {
      value: [oy + 'px', y]
    },
    translateX: {
      value: [ox + 'px', x]
    },
    width: {
      value: ['24rem', '24rem']
    },
    height: {
      value: ['24rem', '24rem']
    },
    duration: 500,
    easing: 'linear',
    autoplay: false,
    update: function (anim) {
      const photoNumber = Math.floor((anim.progress / 100) * (45 - 1) + 1)
      setPhoto(photoNumber)
    }
  })
}

/**
 *
 * @param {integer} height la altura en pixeles de la ventana
 * @returns animacion para desplegar o esconder el menu
 */
export const menuAppearAnimation = height => {
  return anime({
    targets: '.option',
    //El orden de la animacion es importante
    scaleX: {
      value: [1, 5]
    },
    translateX: {
      value: [
        0,
        function (option) {
          return -250 + option.getAttribute('xoffset') * 6
        }
      ]
    },
    translateY: {
      value: [
        0,
        function (option) {
          return (
            height * (((-22 + option.getAttribute('data') * 9.5) * -1) / 100) +
            45
          )
        }
      ]
    },
    rotate: {
      value: [
        0,
        function (option) {
          return -17 + option.getAttribute('data') * 5.6
        }
      ]
    },
    delay: function (option) {
      return (6 - option.getAttribute('data')) * 10
    },
    duration: 200,
    autoplay: false,
    easing: 'linear'
  })
}

/**
 * @returns animacion de aparecer del texto en vertical en las páginas
 */
export const verticalTextAppearAnimation = () => {
  return anime({
    targets: '.lateralText',
    translateY: {
      value: ['15rem', '0rem']
    },
    opacity: {
      value: [0, 1]
    },
    duration: 600,
    easing: 'easeOutCubic'
  })
}

/**
 *
 * @param {function} setPhoto funcion para actualizar la foto en la dirección
 * @param {float} dx movimiento en X (px)
 * @param {float} dy movimiento en Y (px)
 * @param {boolean} direction true para avanzar en la foto, false para retroceder
 * @param {string} changeSize toSmall, toBig, small, big
 * @returns La animacion
 */
export function photoIlusionAnimation (
  setPhoto,
  dx,
  dy,
  ox,
  oy,
  direction,
  changeSize
) {
  const toSmall = ['24rem', '18rem']
  const toBig = ['18rem', '24rem']
  const small = ['18rem', '18rem']
  const big = ['24rem', '24rem']

  var size = toSmall
  size = changeSize === 'toBig' ? toBig : size
  size = changeSize === 'small' ? small : size
  size = changeSize === 'big' ? big : size

  return anime({
    targets: '.photoMenuContainer',
    translateY: { value: [oy + 'px', dy + 'px'] },
    translateX: { value: [ox + 'px', dx + 'px'] },
    width: { value: size },
    height: { value: size },
    opacity: { value: [1, 1] },
    duration: 700,
    easing: 'easeOutCubic',
    autoplay: true,
    delay: 0,
    update: function (anim) {
      const photoNumber = Math.floor((anim.progress / 100) * (45 - 1) + 1)
      direction && setPhoto(photoNumber)
      !direction && setPhoto(46 - photoNumber)
    }
  })
}
export function hide () {
  return anime({
    targets: '.photoMenuContainer',
    opacity: 0,
    easing: 'linear',
    duration: 100,
    delay: 600
  })
}
export function show () {
  return anime({
    targets: '.photoMenuContainer',
    opacity: 1,
    easing: 'linear',
    duration: 1
  })
}

export function startPhotoToX (dx, dy, size) {
  return anime({
    targets: '.photoMenuContainer',
    translateY: { value: [dy, dy] },
    translateX: { value: [dx, dx] },
    width: size,
    height: size,
    easing: 'linear',
    duration: 10
  })
}

export const nameIntroAnimation = () => {
  anime({
    targets: '.nombreAnimation path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function (el, i) {
      return i * 50
    },
    direction: 'alternate',
    loop: false
  })

  anime({
    targets: '.nombreAnimation path',
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function (el, i) {
      return i * 250
    },
    fill: '#101010',
    delay: 2000,
    direction: 'alternate',
    loop: false
  })
}
