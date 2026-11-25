# AGENTS.md · OhM · DAM 2026-27

## Quiénes somos

Somos el equipo OhM: Ainhoa Carayol, Lucía Sangüesa y Arnau Valls. Desarrollamos OhM, una app de restaurantes y Foodies, en React, a partir de la referencia de clase hecha en HTML, CSS y JavaScript.

Solo podemos usar lo que hemos visto en clase. Si algo necesita una técnica que todavía no hemos visto, avísanos y propón una alternativa con lo que sí está permitido.

## Stack

- React con Vite, en JavaScript (`.jsx`), sin TypeScript.
- El CSS de la referencia, en `src/index.css`.
- `src/components/`: componentes reutilizables, en `atomos/`, `moleculas/` y `organismos/`.
- `src/pages/`: una pantalla por dirección.
- `src/hooks/`: custom hooks con el estado, su lógica y los efectos (ficheros `.js`).
- `src/data/api.js`: el único fichero que pide datos a la API (DummyJSON).
- `src/utils/`: funciones puras de cálculo.
- `docs/`: documentación (`datos.md`, `componentes.md`, `rutas.md`).
- No se instala ninguna dependencia sin preguntarnos antes.

## Permitido (hasta el Sprint 2)

- React, JSX, componentes y props.
- `useState` y el estado en el padre común; eventos con `onClick` y `onChange`.
- Listas con `.map()` y `key`; renderizado condicional.
- Funciones puras en `src/utils/`.
- Sprint 2: `useEffect` con sus dependencias y su limpieza, y la función async dentro del efecto.
- Sprint 2: `fetch` con async/await, solo en `src/data/api.js`, comprobando `respuesta.ok`.
- Sprint 2: los tres estados: «cargando», error con «Reintentar» y «sin resultados».
- Sprint 2: custom hooks en `src/hooks/` (`useRestaurantes`, `useRestaurante(id)`, `useFoodies`, `useFoodie(id)`).
- Sprint 2: debounce con `setTimeout` y la limpieza del efecto, si el buscador pregunta a la API.
- Sprint 2: React Router: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`.
- Sprint 2: `useParams` y la ruta del detalle (`/restaurante/:id`, `/foodie/:id`).
- Sprint 2: la ruta de «no encontrado» (`path="*"`).
- Sprint 2: rutas anidadas con `Outlet` para el layout con la barra de pestañas.
- Sprint 2: `useNavigate` y `useRef` (por ejemplo, para dar el foco a un elemento).

## Prohibido

- TypeScript.
- `document.querySelector`, `innerHTML`, `addEventListener` y cualquier forma de tocar el DOM a mano.
- Context, localStorage y publicar en GitHub Pages: llegan en el Sprint 3.
- Pruebas con Vitest: Sprint 3.
- Instalar dependencias o librerías que no hayamos visto en clase sin preguntarnos.
- Llamar a `fetch` fuera de `src/data/api.js`, o meter cálculos, efectos o llamadas dentro de los componentes.

## Cómo tiene que responder

- Antes del código, el plan en 3-5 líneas y qué concepto de clase usa.
- Una pieza cada vez, nunca una pantalla entera de golpe.
- Si pedimos revisar o corregir una parte, no reescribas todo el fichero.
- Explica los cambios para que los entendamos y sepamos explicarlos en la demo.
- Si hay varias formas, la más sencilla de las vistas en clase.
- Props propias en castellano y distintas de las nativas (`onCambio`, no `onChange`).
- Al proponer un commit, usa este formato: título corto `tipo(ámbito): qué`, y en la descripción `Qué:`, `Por qué:`, `Cómo:`, `Referencia:`, `Concepto:`, `IA:`.

## Nuestro proyecto

- **App:** OhM. Descubrir restaurantes, leer las reseñas de los Foodies y ver cuáles recomiendan los Foodies que sigues.
- **Referencia:** https://dam-citm-26.github.io/referencias/ohm/ (su código, en github.com/DAM-CITM-26/referencias)
- **Pantallas del sprint en curso (Sprint 2):** la barra de pestañas, la ficha del restaurante (`/restaurante/:id`), la lista de Foodies (`/foodies`), el perfil de un Foodie (`/foodie/:id`) y la página de «no encontrado».
- **Modelo de datos:** `docs/datos.md`
- **Componentes de cada pantalla:** `docs/componentes.md`
- **Rutas:** `docs/rutas.md`

## Lo que hemos aprendido

- 17/11 · La IA tiene que usar solo lo visto en clase y avisar antes de proponer algo que todavía no hemos aprendido.
- 25/11 · La IA hizo de golpe todas las tareas del Sprint 2, también las de Lucía y Ainhoa, en ramas que no eran nuestras. Regla: trabaja solo en la tarea de quien te lo pide, en su rama, y nunca en la de otra persona.
