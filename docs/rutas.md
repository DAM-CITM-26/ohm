
# Rutas de Ohm

La aplicación Ohm utiliza React Router para gestionar la navegación entre sus diferentes páginas.

## Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio con el listado de restaurantes. |
| `/foodies` | Página con el listado de foodies. |
| `/guardados` | Página de restaurantes guardados. |
| `/restaurante/:id` | Muestra el detalle de un restaurante según su ID. |
| `/foodie/:id` | Muestra el perfil de un foodie según su ID. |
| `*` | Muestra una página cuando la ruta no existe. |

## Navegación

La navegación se realiza mediante:

- **BrowserRouter:** permite gestionar las rutas de la aplicación.
- **NavLink:** permite navegar entre las diferentes páginas.
- **Outlet:** muestra el contenido de la página seleccionada dentro del layout.

## Parámetros dinámicos

Las rutas `/restaurante/:id` y `/foodie/:id` utilizan el parámetro `id` para identificar el restaurante o foodie que se quiere consultar.

## Ruta no encontrada

La ruta `*` se utiliza para mostrar una página de error cuando el usuario accede a una dirección que no existe.
