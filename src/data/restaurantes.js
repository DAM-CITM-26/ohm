// Los datos de la app, escritos en el código.

export const RESTAURANTES = [
  { id: 1, nombre: 'La Taberna del Puerto', cocina: 'Mediterránea', barrio: 'Barceloneta', precio: '€€', resenas: [{ foodieId: 1, nota: 5 }, { foodieId: 2, nota: 4 }] },
  { id: 2, nombre: 'Sakura Ramen', cocina: 'Japonesa', barrio: 'Eixample', precio: '€€', resenas: [{ foodieId: 3, nota: 4 }, { foodieId: 4, nota: 5 }] },
  { id: 3, nombre: 'Trattoria Nonna', cocina: 'Italiana', barrio: 'Gràcia', precio: '€€', resenas: [{ foodieId: 2, nota: 3 }, { foodieId: 4, nota: 4 }] },
  { id: 4, nombre: 'El Huerto Verde', cocina: 'Vegetariana', barrio: 'Poblenou', precio: '€', resenas: [{ foodieId: 1, nota: 4 }, { foodieId: 3, nota: 5 }] },
  { id: 5, nombre: 'Taquería La Lupe', cocina: 'Mexicana', barrio: 'Raval', precio: '€', resenas: [{ foodieId: 2, nota: 5 }] },
  { id: 6, nombre: 'Brasa y Leña', cocina: 'Mediterránea', barrio: 'Sant Antoni', precio: '€€€', resenas: [{ foodieId: 4, nota: 4 }, { foodieId: 3, nota: 3 }] },
  { id: 7, nombre: 'Dim Sum House', cocina: 'China', barrio: 'Eixample', precio: '€€', resenas: [{ foodieId: 1, nota: 3 }] },
  { id: 8, nombre: 'Pizzeria Forno', cocina: 'Italiana', barrio: 'Sants', precio: '€', resenas: [{ foodieId: 4, nota: 5 }, { foodieId: 2, nota: 4 }] },
  { id: 9, nombre: 'Casa Hanoi', cocina: 'Vietnamita', barrio: 'Gràcia', precio: '€€', resenas: [{ foodieId: 3, nota: 5 }] },
]

// Los ids de los Foodies que sigo
export const SIGUIENDO = [1, 3]

// El emoji que sale en la portada de cada tipo de cocina
export const EMOJI_COCINA = {
  Mediterránea: '🥘',
  Japonesa: '🍜',
  Italiana: '🍝',
  Vegetariana: '🥗',
  Mexicana: '🌮',
  China: '🥟',
  Vietnamita: '🍲',
}
