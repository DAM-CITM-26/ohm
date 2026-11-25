// Funciones puras: reciben datos y devuelven datos, sin tocar la pantalla.

// Media de las notas, con un decimal (0 si no tiene reseñas)
export function notaMedia(resenas) {
  if (resenas.length === 0) return 0
  let suma = 0
  for (const resena of resenas) suma += resena.nota
  return Math.round((suma / resenas.length) * 10) / 10
}

// ¿Lo ha reseñado alguno de los Foodies que sigo?
export function resenadoPorSeguidos(restaurante, siguiendo) {
  return restaurante.resenas.some((resena) => siguiendo.includes(resena.foodieId))
}

// Aplica la búsqueda (nombre o barrio), la cocina y la vista a la vez
export function filtrarRestaurantes(restaurantes, { texto, cocina, vista }, siguiendo) {
  const buscado = texto.trim().toLowerCase()
  return restaurantes.filter(
    (restaurante) =>
      (restaurante.nombre.toLowerCase().includes(buscado) || restaurante.barrio.toLowerCase().includes(buscado)) &&
      (cocina === 'Todas' || restaurante.cocina === cocina) &&
      (vista === 'Todos' || resenadoPorSeguidos(restaurante, siguiendo)),
  )
}

// Las cocinas que aparecen, sin repetir
export function cocinasDe(restaurantes) {
  const cocinas = []
  for (const restaurante of restaurantes) {
    if (!cocinas.includes(restaurante.cocina)) cocinas.push(restaurante.cocina)
  }
  return cocinas
}

// Los restaurantes que ha reseñado un Foodie
export function restaurantesDeFoodie(restaurantes, foodieId) {
  return restaurantes.filter((restaurante) =>
    restaurante.resenas.some((resena) => resena.foodieId === foodieId),
  )
}