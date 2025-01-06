import anime from 'animejs'

export function mostrarMenu () {
  anime({
    targets: '.myMenu',
    perspective: '2000px',
    rotateY: {
      value: ['0deg', '-20deg']
    },
    duration: 100,
    easing: 'easeOutSine',
    delay: 0
  })
  anime({
    targets: '.myOption',
    opacity: {
      value: [0, 1]
    },
    translateY: {
      value: ['-220vh', '0vh']
    },
    duration: 600,
    easing: 'easeOutSine',
    delay: anime.stagger(-50, { start: 600 })
  })
}

export function esconderMenu () {
  return anime({
    targets: '.myMenu',
    perspective: '2000px',
    rotateY: {
      value: ['-20', '0deg']
    },
    duration: 250,
    easing: 'easeOutSine',
    delay: 0
  })
}

export function esconderOpciones (items) {
  return anime({
    targets: items,
    translateX: '100vw',
    opacity: {
      value: [1, 0]
    },
    duration: 300,
    easing: 'easeOutSine',
    delay: anime.stagger(100)
  })
}

export const photoAppear = setPhoto => {
  return anime({
    targets: '.myProfilePhoto',
    translateX: {
      value: ['-50vw', 0]
    },
    duration: 700,
    easing: 'easeOutSine',
    delay: 600
  })
}
