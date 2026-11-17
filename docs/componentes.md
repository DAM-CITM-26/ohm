# Mapa de componentes

## Inicio (Sprint 1)

Búsqueda arriba, chips «Todos / Siguiendo» y de cocina, el número de resultados y la lista de restaurantes.

| En la referencia (js/componentes.js)          | En React                            | Nivel     |
|-----------------------------------------------|-------------------------------------|-----------|
| Nota({ valor })                               | components/Nota.jsx                 | Átomo     |
| Portada({ restaurante })                      | components/Portada.jsx              | Átomo     |
| Cada botón de Chips                           | components/Chip.jsx                 | Átomo     |
| Vacio({ icono, texto })                       | components/Vacio.jsx                | Átomo     |
| Buscador({ valor })                           | components/Buscador.jsx             | Molécula  |
| Chips({ nombre, opciones, valor })            | components/Chips.jsx                | Molécula  |
| TarjetaRestaurante({ restaurante, siguiendo }) | components/TarjetaRestaurante.jsx  | Molécula  |
| ListaRestaurantes({ restaurantes, estado, vacio }) | components/ListaRestaurantes.jsx | Organismo |
| PantallaInicio({ estado })                    | pages/Inicio.jsx                    | Pantalla  |
| estado.texto                                  | useState en Inicio                  | Estado    |
| estado.vista                                  | useState en Inicio                  | Estado    |
| estado.cocina                                 | useState en Inicio                  | Estado    |
| notaMedia, resenadoPorSeguidos, filtrarRestaurantes, cocinasDe (js/logica.js) | utils/restaurantes.js | Lógica |
| RESTAURANTES, SIGUIENDO_INICIAL (js/datos.js) | data/restaurantes.js                | Datos     |
| EMOJI_COCINA (js/componentes.js)              | data/restaurantes.js                | Datos     |

- **El estado vive en Inicio**, que es el padre común: el buscador y los chips lo cambian, y la lista lo lee. Baja por props (`valor`) y los hijos avisan con `onCambio`.
- **Los Foodies que sigo** (`SIGUIENDO_INICIAL`) son datos en el Sprint 1: todavía no se pueden seguir ni dejar de seguir, eso llega en el Sprint 3.
- **Se construye de pequeño a grande:** Nota, Portada, Chip y Vacio; después Buscador, Chips y TarjetaRestaurante; después ListaRestaurantes, y por último Inicio.
