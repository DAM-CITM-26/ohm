
# Mapa de componentes

## Organización general

OhM está desarrollada con React y utiliza una arquitectura basada en componentes reutilizables.

Los componentes se organizan en tres niveles siguiendo el patrón de diseño Atomic Design:

- **Átomos:** elementos básicos de la interfaz.
- **Moléculas:** componentes formados por varios átomos.
- **Organismos:** componentes que agrupan moléculas y otros elementos para formar partes completas de la interfaz.

Las pantallas se encuentran en `src/pages/` y utilizan estos componentes para construir la aplicación.

## Estructura de componentes

### Átomos

Se encuentran en `src/components/atomos/`.

| Componente | Función |
|---|---|
| `Chip.jsx` | Representa un botón pequeño utilizado para seleccionar filtros. |
| `Nota.jsx` | Muestra la valoración de un restaurante. |
| `Portada.jsx` | Muestra la imagen o representación visual de la cocina de un restaurante. |

### Moléculas

Se encuentran en `src/components/moleculas/`.

| Componente | Función |
|---|---|
| `Buscador.jsx` | Permite introducir texto para buscar restaurantes. |
| `Chips.jsx` | Agrupa botones para seleccionar filtros. |
| `TarjetaRestaurante.jsx` | Muestra la información resumida de un restaurante. |
| `Vacio.jsx` | Muestra un mensaje cuando no hay resultados. |

### Organismos

Se encuentran en `src/components/organismos/`.

| Componente | Función |
|---|---|
| `Cabecera.jsx` | Representa la cabecera de la aplicación. |
| `ListaRestaurantes.jsx` | Muestra una lista de tarjetas de restaurantes. |

### Componentes auxiliares

Se encuentran directamente en `src/components/`.

| Componente | Función |
|---|---|
| `Cargando.jsx` | Muestra el estado de carga de los datos. |
| `Error.jsx` | Muestra los errores y permite volver a intentar la petición. |

## Pantallas

Las pantallas se encuentran en `src/pages/`.

| Archivo | Función |
|---|---|
| `inicio.jsx` | Pantalla principal con búsqueda, filtros y lista de restaurantes. |
| `Restaurante.jsx` | Muestra la información y las reseñas de un restaurante. |

Las rutas y pantallas adicionales se gestionan desde `src/App.jsx`.

Actualmente, las vistas de Foodies, Guardados y detalle del Foodie están representadas mediante componentes provisionales dentro de `App.jsx`.

## Estado y comunicación entre componentes

El estado de la pantalla de inicio se gestiona mediante el hook `useState` de React.

En `Inicio` se mantienen tres estados:

| Estado | Función |
|---|---|
| `texto` | Guarda el texto introducido en el buscador. |
| `vista` | Controla el filtro Todos / Siguiendo. |
| `cocina` | Controla el filtro por tipo de cocina. |

Los estados se pasan a los componentes mediante props.

Los componentes hijos comunican los cambios al componente padre mediante funciones como `onCambio`.

De esta manera, el componente `Inicio` controla los filtros y la lista de restaurantes muestra los resultados actualizados.

## Carga de datos

Los datos de los restaurantes se obtienen mediante el hook `useRestaurantes()`.

Este hook utiliza las funciones de `src/data/api.js` para realizar las peticiones a DummyJSON.

Se gestionan tres estados:

- `cargando`: indica que los datos se están obteniendo.
- `error`: almacena un posible error.
- `datos`: contiene los restaurantes recibidos.

La pantalla de inicio muestra `Cargando` mientras espera la respuesta y `Error` si se produce algún problema.

## Lógica y utilidades

El archivo `src/utils/restaurantes.js` contiene funciones independientes de la interfaz.

| Función | Responsabilidad |
|---|---|
| `notaMedia()` | Calcula la nota media de las reseñas. |
| `resenadoPorSeguidos()` | Comprueba si un restaurante tiene reseñas de usuarios seguidos. |
| `filtrarRestaurantes()` | Aplica los filtros de búsqueda, cocina y seguimiento. |
| `cocinasDe()` | Obtiene las cocinas disponibles sin repetirlas. |

Esta separación permite reutilizar la lógica y mantener los componentes más sencillos.

## Flujo de funcionamiento

La pantalla de inicio sigue este flujo:

1. `Inicio` llama al hook `useRestaurantes()`.
2. El hook solicita los datos mediante `api.js`.
3. La API devuelve los restaurantes adaptados al modelo de OhM.
4. `Inicio` recibe los datos y gestiona los filtros.
5. `Buscador` y `Chips` permiten modificar los filtros.
6. `filtrarRestaurantes()` calcula los resultados.
7. `ListaRestaurantes` muestra las tarjetas correspondientes.
8. `TarjetaRestaurante` utiliza otros componentes para mostrar la información.

## Arquitectura del proyecto

La separación de responsabilidades permite mantener el código organizado:

- `components/`: elementos visuales reutilizables.
- `pages/`: pantallas de la aplicación.
- `hooks/`: lógica reutilizable para gestionar datos y estados.
- `data/`: acceso a la API y datos locales.
- `utils/`: funciones auxiliares independientes de la interfaz.

Esta organización facilita el mantenimiento, la reutilización de componentes y la ampliación de funcionalidades en futuros sprints.
