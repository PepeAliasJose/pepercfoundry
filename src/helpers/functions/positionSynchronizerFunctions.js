export function getMenuItems () {
  const i = document.querySelector('#myMenu')
  //Esto da un HTMLCollection, y tenemos que convertirlo a un array
  return [...i.children]
}

export function getAllMenuItemsUnselected (id) {
  const items = getMenuItems()
  const res = items.filter(i => {
    return i.id !== id
  })
  return res
}

/**
 * @returns width - ancho de la ventana, height - alto de la ventana
 */
export function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

/**
 *
 * @param {string} id id del elemento a encontrar la posicion
 * @param {float} scroll % de scroll de la pagina en caso en que la pagina este scrolleada y quieras
 * su posicion respecto al viewport
 * @returns x para la coordenada X e y para la coordenada Y
 */
export function getObjectCoordinates (id, scroll) {
  const { height } = getWindowDimensions()
  const bodyRect = document.body.getBoundingClientRect()
  const photo = document.querySelector(id)
  const e = photo?.getBoundingClientRect()

  const offset = height * (isNaN(scroll) ? 0 : scroll)
  const y = e?.top - bodyRect.top - offset
  const x = e?.left - bodyRect.left
  return { x, y }
}
