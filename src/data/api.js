const BASE = 'https://dummyjson.com'

// DummyJSON no tiene barrio, precio ni dirección: se rellenan con valores fijos
const BARRIOS = ['Gràcia', 'Eixample', 'Sant Antoni', 'Barceloneta', 'Poblenou', 'El Raval']
const PRECIOS = { Easy: '€', Medium: '€€', Hard: '€€€' }
const COCINAS = {
    Italian: 'Italiana', Japanese: 'Japonesa', Mediterranean: 'Mediterránea',
    Mexican: 'Mexicana', Asian: 'Asiática', Indian: 'India', Greek: 'Griega',
    Thai: 'Tailandesa', Korean: 'Coreana', Turkish: 'Turca', Moroccan: 'Marroquí',
    Lebanese: 'Libanesa', Brazilian: 'Brasileña', Russian: 'Rusa',
    American: 'Americana', Pakistani: 'Pakistaní',
}

async function pedir(ruta, mensaje404 = 'No se ha encontrado') {
    const respuesta = await fetch(`${BASE}${ruta}`)
    if (respuesta.status === 404) throw new Error(mensaje404)
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)
    return respuesta.json()
}

function adaptarRestaurante(receta, resenas = []) {
    return {
        id: receta.id,
        nombre: receta.name,
        cocina: COCINAS[receta.cuisine] ?? receta.cuisine,
        barrio: BARRIOS[receta.id % BARRIOS.length],
        precio: PRECIOS[receta.difficulty] ?? '€€',
        direccion: `Carrer de Prova, ${receta.id}`,
        autorId: receta.userId,
        resenas,
    }
}

function adaptarFoodie(usuario) {
    return {
        id: usuario.id,
        nombre: `${usuario.firstName} ${usuario.lastName}`,
        bio: `${usuario.company.title} en ${usuario.company.name}`,
        avatar: usuario.image,
    }
}

export async function pedirRestaurantes() {
    const { recipes } = await pedir('/recipes?limit=12')
    return recipes.map((r) =>
        adaptarRestaurante(r, [{ nota: Math.round(r.rating) }])
    )
}

export async function pedirRestaurante(id) {
    const receta = await pedir(`/recipes/${id}`, 'Ese restaurante no existe')
    const { comments } = await pedir(`/comments/post/${id}`)
    const resenas = comments.map((c) => ({
        id: c.id,
        foodieId: c.user.id,
        nota: Math.round(receta.rating),
        texto: c.body,
    }))
    return adaptarRestaurante(receta, resenas)
}

export async function pedirFoodies() {
    const { users } = await pedir('/users?limit=12')
    return users.map(adaptarFoodie)
}

export async function pedirFoodie(id) {
    const usuario = await pedir(`/users/${id}`, 'Ese foodie no existe')
    return adaptarFoodie(usuario)
}