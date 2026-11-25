# Modelo de datos

## Origen de los datos

En el Sprint 1 los datos estaban escritos a mano en `src/data/restaurantes.js`. Desde el Sprint 2 se piden a la API pública [DummyJSON](https://dummyjson.com) (sin clave, con CORS) y todo el acceso está en **`src/data/api.js`**, el único fichero con `fetch`.

`api.js` adapta la respuesta de la API a los nombres de OhM, de modo que las pantallas no conocen la forma de DummyJSON. Los datos a mano de `restaurantes.js` se mantienen hasta que todas las pantallas usen la API.

| Función de `api.js` | Devuelve | Endpoint de DummyJSON |
| :--- | :--- | :--- |
| `pedirRestaurantes()` | `Restaurante[]` (12) | `/recipes?limit=12` |
| `pedirRestaurante(id)` | `Restaurante` con reseñas | `/recipes/:id` y `/comments/post/:id` |
| `pedirFoodies()` | `Foodie[]` (12) | `/users?limit=12` |
| `pedirFoodie(id)` | `Foodie` | `/users/:id` |

Si la respuesta no es correcta, las funciones lanzan un `Error`. Para un id que no existe (404) el mensaje es «Ese restaurante no existe» o «Ese foodie no existe».

## Restaurante

Cada local disponible en la aplicación, con su información básica y sus valoraciones.

| Campo | Tipo | Ejemplo | Origen en DummyJSON |
| :--- | :--- | :--- | :--- |
| `id` | `number` | `1` | `id` de la receta |
| `nombre` | `string` | `"Classic Margherita Pizza"` | `name` |
| `cocina` | `string` | `"Italiana"` | `cuisine`, traducida al español |
| `barrio` | `string` | `"Eixample"` | **Inventado**: uno de 6 barrios, según el `id` |
| `precio` | `string` | `"€€"` | **Inventado**: según `difficulty` (Easy `€`, Medium `€€`, Hard `€€€`) |
| `direccion` | `string` | `"Carrer de Prova, 1"` | **Inventado**: texto fijo con el `id` |
| `autorId` | `number` | `166` | `userId` |
| `resenas` | `array<Reseña>` | ver abajo | Ver «Reseña» |

### Reseña (`resenas`)

Cada elemento del array `resenas` de un restaurante.

| Campo | Tipo | Ejemplo | Origen en DummyJSON |
| :--- | :--- | :--- | :--- |
| `id` | `number` | `93` | `id` del comentario (solo en la ficha) |
| `foodieId` | `number` | `105` | `user.id` del comentario (solo en la ficha) |
| `nota` | `number` | `4` | `rating` de la receta, redondeado |
| `texto` | `string` | `"These are fabulous ideas!"` | `body` del comentario (solo en la ficha) |

En la **lista** (`pedirRestaurantes`) cada restaurante trae una única reseña con solo `nota`, para poder calcular la nota media. La reseña completa, con `id`, `foodieId` y `texto`, llega en la **ficha** (`pedirRestaurante`).

### Ejemplo en JSON (ficha de un restaurante)

```json
{
  "id": 1,
  "nombre": "Classic Margherita Pizza",
  "cocina": "Italiana",
  "barrio": "Eixample",
  "precio": "€",
  "direccion": "Carrer de Prova, 1",
  "autorId": 166,
  "resenas": [
    { "id": 93, "foodieId": 105, "nota": 5, "texto": "These are fabulous ideas!" }
  ]
}
```

## Foodie

Persona usuaria de la app que reseña restaurantes. Se usa en la lista de Foodies y en su perfil.

| Campo | Tipo | Ejemplo | Origen en DummyJSON |
| :--- | :--- | :--- | :--- |
| `id` | `number` | `1` | `id` del usuario |
| `nombre` | `string` | `"Emily Johnson"` | `firstName` y `lastName` |
| `bio` | `string` | `"Cargo en Empresa"` | **Inventado**: `company.title` y `company.name` |
| `avatar` | `string` | `"https://dummyjson.com/icon/..."` | `image` |

La API devuelve más campos por usuario (correo, teléfono, contraseña…). Son datos de prueba y la app **no los copia**: solo se queda con los cuatro de arriba.

### Ejemplo en JSON

```json
{
  "id": 1,
  "nombre": "Emily Johnson",
  "bio": "Cargo en Empresa",
  "avatar": "https://dummyjson.com/icon/emilys/128"
}
```

## Datos que siguen en local

| Dato | Tipo | Ejemplo | Para qué sirve |
| :--- | :--- | :--- | :--- |
| `SIGUIENDO` | `array<number>` | `[1, 3]` | Ids de los Foodies que sigue el usuario (etiqueta «Siguiendo») |
| `EMOJI_COCINA` | `object` | `{ "Italiana": "🍝" }` | Emoji de la portada de cada tipo de cocina |

## Cambios respecto a la referencia

DummyJSON no tiene restaurantes ni reseñas de restaurantes, así que se adaptan recetas y comentarios. Esto es un cambio respecto a la referencia, y se negocia con el profesor:

- **Inventados**: `barrio`, `precio` y `direccion`.
- **Reseñas**: los comentarios cuelgan de «posts» y no de recetas; se usa el comentario del post con el mismo `id` que la receta. La `nota` es la de la receta, igual para todas sus reseñas.
- **Idioma**: los textos de las reseñas llegan en inglés y no se traducen.
- **Cocinas**: se traducen con un mapa en `api.js`. Una cocina sin traducción se muestra tal cual.