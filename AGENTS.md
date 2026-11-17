# AGENTS.md · [Nombre de la app] · DAM 2026-27

> **Esqueleto. Solo si vuestro equipo usa IA** (no es obligatoria). Estos son los apartados que tiene que tener vuestro `AGENTS.md`. Lo escribís vosotros, en la raíz del repositorio, con vuestras palabras; borrad estas notas en gris (las líneas que empiezan por `>`) cuando lo tengáis.
>
> - **Para quién es:** para la IA, no para las personas. OpenCode lo lee solo si lo abrís en la carpeta del repositorio (no uséis `/init`: lo reescribe). En un chat (ChatGPT u otro), pegadlo al empezar cada conversación.
> - **Para qué:** que la IA solo use lo que se ha visto en clase y que trabaje como copiloto.
> - **Es un documento vivo:** al empezar cada sprint, añadid lo nuevo de la tabla «Qué tenéis que usar en cada sprint» de la guía del proyecto. Cada vez que la IA se equivoque, añadid una regla en «Lo que hemos aprendido». Cada cambio, en un commit `docs(agents): …`.
> - **Cómo comprobar que funciona:** preguntadle a la IA «¿qué no puedes usar en este proyecto?». Tiene que responder con vuestra lista.

## Quiénes somos

> Somos OhM (Ainhoa Carayol, Lucia Sangüesa y Arnau Valls). Nuestro proyecto consiste en desarrollar una aplicación llamada OhM, tomando como referencia una aplicación diseñada previamente en HTML, CSS y JavaScript.

Para desarrollarla, solo podemos utilizar los conceptos y las herramientas que hemos aprendido en clase. Si alguna funcionalidad requiere una técnica que todavía no hemos visto, la IA debe indicárnoslo y proponernos una alternativa para conseguir un resultado similar utilizando únicamente los conocimientos permitidos.

## Stack

> Con qué se hace el proyecto: React con Vite, en JavaScript (`.jsx`), sin TypeScript; el CSS de la referencia en `src/index.css`; vuestras carpetas (`src/components`, `src/pages`, `src/data`, `src/utils`, `docs`) y qué va en cada una; que no se instala ninguna dependencia sin preguntar.
-React con Vite.
> JavaScript (.jsx), sin TypeScript.
> CSS a partir de la referencia proporcionada en src/index.css.
> src/components: componentes reutilizables de la aplicación.
> src/pages: pantallas principales de la aplicación.
> src/data: datos utilizados por la aplicación.
> src/utils: funciones auxiliares.
> docs: documentación del proyecto.
> No instalar nuevas dependencias sin preguntarnos antes.

## Permitido (hasta el Sprint [N])

> Lo de la tabla «Qué tenéis que usar en cada sprint» de la guía del proyecto, hasta el sprint en curso. Una línea por cosa.

React y JSX.
JavaScript.
CSS.
HTML.
Componentes y props.

## Prohibido

> Lo que todavía no se ha visto en clase (con el sprint en que llega). Incluid siempre `document.querySelector`, `innerHTML` y `addEventListener`.

Utilizar TypeScript.
Utilizar técnicas o herramientas que todavía no se hayan explicado en clase.
Utilizar document.querySelector.
Utilizar innerHTML.
Utilizar addEventListener.
Manipular el DOM directamente.
Instalar dependencias sin consultarnos previamente.
Introducir librerías externas o soluciones avanzadas que no hayamos trabajado en clase.
Si una funcionalidad necesita alguna de estas técnicas, hay que explicárnoslo y proponer una alternativa utilizando los conocimientos permitidos.

## Cómo tiene que responder

> Cómo queréis que os ayude. Por ejemplo: el plan en 3-5 líneas antes del código y con qué concepto de clase; una pieza cada vez, nunca la pantalla entera; revisar vuestro código sin reescribirlo; proponer el mensaje de commit con su formato (`Qué`, `Por qué`, `Cómo`, `Referencia:`, `Concepto:`, `IA:`); los nombres de las props propias, distintos de los nativos (`onCambio`, no `onChange`).

Antes de escribir código, explicar brevemente el plan de lo que se va a hacer (3-5 líneas).
Indicar qué concepto de clase se está utilizando.
Trabajar una pieza cada vez, sin desarrollar una pantalla entera de golpe.
No reescribir nuestro código completo si solo pedimos corregir una parte.
Explicar los cambios para que podamos entenderlos y aprender.
No utilizar soluciones más avanzadas de las que hemos visto en clase.
Si hay varias formas de resolver algo, elegir la más sencilla dentro de los conocimientos permitidos.
Si una funcionalidad no se puede realizar con lo aprendido, avisarnos y proponer una alternativa.
Utilizar nombres de props propios en castellano, por ejemplo onCambio en lugar de onChange, cuando sean props creadas por nosotros.
Al proponer un commit, utilizar este formato:
- Qué:
- Por qué:
- Cómo:
- Referencia:
- Concepto:
- IA:

## Nuestro proyecto

- **App:** OhM — Aplicación gastronómica que permite descubrir restaurantes, consultar opiniones de Foodies verificados, guardar establecimientos y seguir a usuarios con gustos similares.
- **Referencia:** https://dam-citm-26.github.io/referencias/ohm/ (su código, en github.com/DAM-CITM-26/referencias)
- **Pantallas del sprint en curso:**
- **Modelo de datos:** `docs/datos.md`
- **Componentes de cada pantalla:** `docs/componentes.md`

## Lo que hemos aprendido

> Las reglas que añadís cuando la IA se equivoca, con la fecha. Por ejemplo: «10/11 · El estado de un filtro vive en la pantalla, no en los chips».

- 17/11 · La IA debe utilizar únicamente los conceptos trabajados en clase y avisar antes de proponer técnicas que todavía no hemos aprendido.
