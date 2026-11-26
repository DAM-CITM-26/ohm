
# Modelo de datos

## Origen de los datos

OhM utiliza la API pública [DummyJSON](https://dummyjson.com) para obtener información de restaurantes y usuarios.

El acceso a la API está centralizado en `src/data/api.js`. Este archivo contiene las peticiones HTTP y adapta las respuestas de DummyJSON al modelo de datos propio de OhM.

La API es pública y no necesita clave de autenticación.

Los datos locales se mantienen en `src/data/restaurantes.js` para las funcionalidades que todavía no utilizan la API.

## Acceso a la API

Las funciones principales de `src/data/api.js` son:

| Función | Devuelve | Endpoint de DummyJSON |
|---|---|---|
| `pedirRestaurantes()` | `Restaurante[]` | `/recipes?limit=12` |
| `pedirRestaurante(id)` | `Restaurante` con reseñas | `/recipes/:id` y `/comments/post/:id` |
| `pedirFoodies()` | `Foodie[]` | `/users?limit=12` |
| `pedirFoodie(id)` | `Foodie` | `/users/:id` |

Las peticiones utilizan `fetch()`.

La función interna `pedir()` comprueba las respuestas HTTP:

- Si la respuesta es correcta, devuelve los datos en formato JSON.
- Si el servidor responde con un error 404, lanza un error con un mensaje específico.
- Si se produce otro error HTTP, lanza un error indicando el código de estado.

## Modelo Restaurante

Representa un restaurante dentro de la aplicación.

Los datos proceden de las recetas de DummyJSON y se transforman mediante la función `adaptarRestaurante()`.

| Campo | Tipo | Ejemplo | Origen |
|---|---|---|---|
| `id` | `number` | `1` | `id` de la receta |
| `nombre` | `string` | `"Classic Margherita Pizza"` | `name` |
| `cocina` | `string` | `"Italiana"` | `cuisine`, traducida al español cuando existe traducción |
| `barrio` | `string` | `"Eixample"` | Valor generado a partir del identificador |
| `precio` | `string` | `"€€"` | `difficulty` de la receta |
| `direccion` | `string` | `"Carrer de Prova, 1"` | Valor generado con el identificador |
| `autorId` | `number` | `166` | `userId` |
| `resenas` | `array<Reseña>` | Ver modelo Reseña | Datos de reseñas adaptados |

### Adaptación de los restaurantes

DummyJSON no proporciona restaurantes reales. Por eso, OhM utiliza recetas como base para representar establecimientos gastronómicos.

Algunos campos se generan dentro de `api.js`:

- `barrio`: se asigna utilizando una lista de barrios y el identificador de la receta.
- `precio`: se calcula a partir de la dificultad de la receta.
- `direccion`: se genera con un texto fijo y el identificador.

La cocina se traduce mediante el objeto `COCINAS`. Si no existe una traducción, se conserva el valor original.

## Modelo Reseña

Representa la opinión de un Foodie sobre un restaurante.

Las reseñas se construyen a partir de los comentarios de DummyJSON.

| Campo | Tipo | Ejemplo | Origen |
|---|---|---|---|
| `id` | `number` | `93` | `id` del comentario |
| `foodieId` | `number` | `105` | `user.id` del comentario |
| `nota` | `number` | `5` | `rating` de la receta, redondeado |
| `texto` | `string` | `"These are fabulous ideas!"` | `body` del comentario |

En `pedirRestaurantes()` cada restaurante recibe una reseña simplificada que contiene únicamente la nota.

En `pedirRestaurante(id)` se obtienen los comentarios correspondientes y se construyen las reseñas completas.

La nota de cada reseña procede de la valoración de la receta, por lo que todas las reseñas de un mismo restaurante comparten esa nota.

## Modelo Foodie

Representa a una persona usuaria de OhM que puede publicar opiniones sobre restaurantes.

Los datos proceden del endpoint `/users` de DummyJSON y se adaptan mediante `adaptarFoodie()`.

| Campo | Tipo | Ejemplo | Origen |
|---|---|---|---|
| `id` | `number` | `1` | `id` del usuario |
| `nombre` | `string` | `"Emily Johnson"` | `firstName` y `lastName` |
| `bio` | `string` | `"Cargo en Empresa"` | `company.title` y `company.name` |
| `avatar` | `string` | `"https://dummyjson.com/icon/..."` | `image` |

Aunque DummyJSON devuelve más información sobre los usuarios, OhM solamente utiliza estos cuatro campos.

No se copian otros datos personales de prueba, como correo electrónico o teléfono.

## Datos que siguen siendo locales

El archivo `src/data/restaurantes.js` mantiene algunos datos utilizados por la aplicación.

### Restaurantes

`RESTAURANTES` contiene una lista local de nueve restaurantes con información de ejemplo:

- Identificador.
- Nombre.
- Tipo de cocina.
- Barrio.
- Precio.
- Reseñas.

Actualmente, estos datos siguen utilizándose en la ficha individual de restaurante (`src/pages/Restaurante.jsx`).

### Usuarios seguidos

`SIGUIENDO` es un array de identificadores de Foodies que representa los usuarios seguidos inicialmente.

```javascript
export const SIGUIENDO = [1, 3]
```

Se utiliza para filtrar restaurantes que han sido reseñados por alguno de los Foodies seguidos.

### Emojis de cocina

`EMOJI_COCINA` es un objeto que relaciona cada tipo de cocina con un emoji utilizado en la interfaz.

Ejemplo:

```javascript
export const EMOJI_COCINA = {
  Mediterránea: '🥘',
  Japonesa: '🍜',
  Italiana: '🍝',
  Vegetariana: '🥗',
  Mexicana: '🌮',
}
```

## Relación entre los datos y los hooks

Los hooks permiten obtener los datos y gestionar los estados de las peticiones.

| Hook | Función |
|---|---|
| `useRestaurantes()` | Obtiene la lista de restaurantes mediante `pedirRestaurantes()`. |
| `useRestaurante(id)` | Permite obtener un restaurante mediante su identificador. |

Los hooks gestionan los estados de carga, error y reintento.

La pantalla de inicio utiliza `useRestaurantes()` para cargar los establecimientos desde la API.

La ficha individual todavía utiliza el array local `RESTAURANTES`.

## Funciones auxiliares

El archivo `src/utils/restaurantes.js` contiene funciones que trabajan con los datos:

| Función | Descripción |
|---|---|
| `notaMedia(resenas)` | Calcula la media de las notas de las reseñas. |
| `resenadoPorSeguidos(restaurante, siguiendo)` | Comprueba si algún Foodie seguido ha reseñado el restaurante. |
| `filtrarRestaurantes(restaurantes, filtros, siguiendo)` | Filtra los restaurantes por texto, cocina y usuarios seguidos. |
| `cocinasDe(restaurantes)` | Obtiene los tipos de cocina sin repetir. |

Estas funciones son independientes de la interfaz y reciben los datos como argumentos.

## Cambios y limitaciones respecto a la referencia

DummyJSON no dispone de restaurantes ni de reseñas gastronómicas reales.

Por este motivo, OhM adapta recetas y comentarios para representar la información de la aplicación.

Las principales limitaciones son:

- Los restaurantes se representan mediante recetas.
- Los barrios, precios y direcciones son valores generados por la aplicación.
- Los comentarios proceden de otro recurso de DummyJSON.
- Las notas de las reseñas se obtienen de la valoración de la receta.
- Los textos de los comentarios pueden aparecer en inglés.
- Las cocinas se traducen mediante un mapa de equivalencias.
- Algunas pantallas todavía utilizan datos locales.

Esta adaptación permite desarrollar y probar la aplicación sin disponer de una API gastronómica específica.
