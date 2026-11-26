
# OhM

OhM es una aplicación gastronómica para descubrir restaurantes, consultar las opiniones de Foodies verificados, guardar establecimientos y seguir a usuarios con gustos similares.

Proyecto de Desarrollo de Aplicaciones Móviles (DAM 2026-27, CITM). Desarrollado con React y Vite a partir de la referencia de clase.

## Equipo

| Persona | GitHub |
|---|---|
| Ainhoa Carayol | [@ainhoacf](https://github.com/ainhoacf) |
| Lucía Sangüesa | [@luciasamo](https://github.com/luciasamo) |
| Arnau Valls | [@arnoldvg23](https://github.com/arnoldvg23) |

## Cómo arrancar la app

Necesitas tener [Node.js](https://nodejs.org) instalado.

```bash
git clone https://github.com/DAM-CITM-26/ohm.git
cd ohm
npm install
npm run dev
```

Vite te mostrará en la terminal la dirección local (normalmente http://localhost:5173).

### Otros comandos

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la versión de producción.
- `npm run preview`: sirve esa versión en local.
- `npm run lint`: revisa el código con Oxlint.

## Tecnologías

- React 19.
- Vite 8.
- React Router.
- JavaScript.
- DummyJSON como API pública de datos.
- Oxlint para analizar el código.

## Enlaces

- **Trello:** https://trello.com/b/2AWGRpmC/ohm
- **Referencia:** https://dam-citm-26.github.io/referencias/ohm/ (código en [github.com/DAM-CITM-26/referencias](https://github.com/DAM-CITM-26/referencias)).
- **API de datos:** [DummyJSON](https://dummyjson.com) (pública, sin clave).

## Estructura del proyecto

| Carpeta | Para qué sirve |
|---|---|
| `src/components/atomos/` | Componentes básicos y reutilizables, como Chip, Nota y Portada. |
| `src/components/moleculas/` | Componentes formados por elementos más pequeños, como Buscador, Chips y TarjetaRestaurante. |
| `src/components/organismos/` | Componentes que agrupan varias piezas de interfaz, como Cabecera y ListaRestaurantes. |
| `src/pages/` | Pantallas de la aplicación, como Inicio y Restaurante. |
| `src/hooks/` | Hooks reutilizables para cargar datos y gestionar estados de carga, error y reintento. |
| `src/data/api.js` | Comunicación con DummyJSON y adaptación de sus respuestas al modelo de OhM. |
| `src/data/restaurantes.js` | Datos locales de restaurantes, usuarios seguidos y emojis de cocina. |
| `src/utils/` | Funciones auxiliares para calcular notas, filtrar restaurantes y obtener cocinas. |
| `docs/` | Documentación técnica: modelo de datos (`datos.md`), mapa de componentes (`componentes.md`) y rutas (`rutas.md`). |
| `public/` | Archivos estáticos de la aplicación. |

Además, `src/index.css` contiene los estilos de la aplicación, adaptados de la referencia de clase.

## Datos y API

La aplicación utiliza DummyJSON para obtener información de restaurantes y usuarios. Los datos recibidos se adaptan al modelo propio de OhM mediante `src/data/api.js`.

La pantalla de inicio utiliza datos obtenidos mediante hooks. Algunas funcionalidades todavía utilizan datos locales.

Para más información, consulta [docs/datos.md](docs/datos.md).

## Documentación

- [Modelo de datos](docs/datos.md).
- [Mapa de componentes](docs/componentes.md).
- [Árbol de rutas](docs/rutas.md).
