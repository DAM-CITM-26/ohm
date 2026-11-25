# OhM

OhM es una aplicación gastronómica para descubrir restaurantes, consultar las opiniones de Foodies verificados, guardar establecimientos y seguir a usuarios con gustos similares.

Proyecto de Desarrollo de Aplicaciones Móviles (DAM 2026-27, CITM). Hecha en React con Vite a partir de la referencia de clase.

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

Otros comandos:

- `npm run build`: genera la versión de producción.
- `npm run preview`: sirve esa versión en local.
- `npm run lint`: revisa el código con Oxlint.

## Enlaces

- **Trello:** https://trello.com/b/2AWGRpmC/ohm
- **Referencia:** https://dam-citm-26.github.io/referencias/ohm/ (código en [github.com/DAM-CITM-26/referencias](https://github.com/DAM-CITM-26/referencias))
- **API de datos:** [DummyJSON](https://dummyjson.com) (pública, sin clave)

## Estructura del proyecto

| Carpeta | Para qué sirve |
|---|---|
| `src/components/atomos/` | Las piezas más pequeñas: Chip, Nota, Portada, Avatar, Cargando… |
| `src/components/moleculas/` | Piezas hechas con átomos: Buscador, Chips, TarjetaRestaurante, Vacio, ErrorCarga… |
| `src/components/organismos/` | Partes grandes de la pantalla: Cabecera, ListaRestaurantes, BarraPestanas. |
| `src/pages/` | Una pantalla por dirección: Inicio, ficha del restaurante, Foodies, perfil del Foodie y «no encontrado». |
| `src/hooks/` | Custom hooks que cargan los datos y devuelven `cargando`, `error` y `reintentar`. |
| `src/data/api.js` | El único fichero que pide datos a la API y los adapta a nuestro modelo. |
| `src/utils/` | Funciones puras: nota media, filtros, buscar por id… |
| `docs/` | Documentación: modelo de datos (`datos.md`), mapa de componentes (`componentes.md`) y árbol de rutas (`rutas.md`). |
| `public/` | Archivos estáticos (favicon e iconos). |

Además, `src/index.css` contiene los estilos, tomados de la referencia.
