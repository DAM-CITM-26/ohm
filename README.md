# OhM

OhM es una aplicación gastronómica para descubrir restaurantes, consultar las opiniones de Foodies verificados, guardar establecimientos y seguir a usuarios con gustos similares.

## Equipo
| Ainhoa Carayol | [@ainhoacf] |
| Lucia Sangüesa | [@luciasamo] |
| Arnau Valls | [@arnauvg] |

## Cómo arrancar la app

Necesitas tener [Node.js](https://nodejs.org) instalado.

```bash
git clone <url-del-repositorio>
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

- **Trello:** <enlace [al tablero](https://trello.com/invite/b/6ab6940f3c3229641dc1d950/ATTI456cb14389276facc5071dc2ae0b9c517896BF7D/ohm) >
- **Referencia:** https://dam-citm-26.github.io/referencias/ohm/ (código en [github.com/DAM-CITM-26/referencias](https://github.com/DAM-CITM-26/referencias))

## Estructura del proyecto

| Carpeta | Para qué sirve |
|---|---|
| `src/components/` | Componentes reutilizables, organizados por nivel: `atomos/` (Chip, Nota, Portada), `moleculas/` (Buscador, Chips, TarjetaRestaurante, Vacio) y `organismos/` (Cabecera, ListaRestaurantes). |
| `src/pages/` | Pantallas principales de la aplicación (por ahora, Inicio). |
| `src/data/` | Datos de la app: restaurantes, Foodies que seguimos y emojis de cada cocina. |
| `src/utils/` | Funciones auxiliares, como calcular la nota media o filtrar restaurantes. |
| `docs/` | Documentación: modelo de datos (`datos.md`) y mapa de componentes (`componentes.md`). |
| `public/` | Archivos estáticos (favicon e iconos). |

Además, `src/index.css` contiene los estilos, tomados de la referencia.
