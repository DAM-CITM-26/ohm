# OhM · Sprint 1

OhM es una aplicación móvil web de restaurantes recomendados por los Foodies que sigues.

Este proyecto contiene el Sprint 1: la pantalla de **Inicio**, hecha con React.

## Qué hace

- **Buscador** bien visible arriba, por nombre del restaurante o por barrio.
- **Chips «Todos» y «Siguiendo»**, para ver solo los restaurantes reseñados por los Foodies que sigues.
- **Chips de cocina**, para filtrar por tipo de cocina.
- **Tarjetas de restaurante** con la cocina, el barrio, el precio y la nota media. Si lo ha reseñado alguien que sigues, la tarjeta lo indica.
- **Contador de resultados** y un mensaje cuando ningún restaurante cumple los filtros.

La búsqueda y los chips se pueden combinar entre sí.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [ESLint](https://eslint.org/) para revisar el código
- CSS con variables para los colores, la tipografía y los espacios

## Cómo ponerlo en marcha

Hace falta tener instalados [Node.js](https://nodejs.org/) y npm.

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Arranca la aplicación:

   ```bash
   npm run dev
   ```

3. Abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Arranca la aplicación en modo desarrollo |
| `npm run build` | Genera la versión final en la carpeta `dist` |
| `npm run preview` | Muestra la versión generada en `dist` |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

Los componentes están organizados siguiendo Atomic Design, de la pieza más pequeña a la más grande.

```
src/
├─ main.jsx                 Punto de entrada de React
├─ App.jsx                  Cabecera y pantalla de Inicio
├─ index.css                Variables y estilos de la aplicación
├─ pantallas/
│  └─ PantallaInicio.jsx    Guarda los filtros y compone la pantalla
├─ components/
│  ├─ atomos/               Chip, Nota, Portada
│  ├─ moleculas/            Buscador, Chips, TarjetaRestaurante, Vacio
│  └─ organismos/           Cabecera, ListaRestaurantes
├─ data/
│  └─ restaurantes.js       Restaurantes y Foodies que sigues
└─ utils/
   └─ restaurantes.js       Filtros y cálculo de la nota media
```

Los datos de los restaurantes están escritos en `src/data/restaurantes.js`.
