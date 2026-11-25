import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Avatar } from '../components/atomos/Avatar.jsx'
import { Vacio } from '../components/moleculas/Vacio.jsx'
import { ListaRestaurantes } from '../components/organismos/ListaRestaurantes.jsx'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/Error.jsx'
import { SIGUIENDO } from '../data/restaurantes.js'
import { useFoodie } from '../hooks/useFoodie.js'
import { useRestaurantes } from '../hooks/useRestaurantes.js'
import { restaurantesDeFoodie } from '../utils/restaurantes.js'

// El perfil de un Foodie (/foodie/3). Seguir llega en el Sprint 3.
export default function Foodie() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { datos: foodie, cargando, error, reintentar } = useFoodie(id)
  const restaurantes = useRestaurantes()

  // useRef: al abrir el perfil, el foco va al nombre (accesibilidad), sin querySelector
  const titulo = useRef(null)
  useEffect(() => {
    if (titulo.current) titulo.current.focus()
  }, [foodie])

  if (cargando || restaurantes.cargando) return <Cargando mensaje="Cargando perfil…" />

  if (error === 'Ese foodie no existe') {
    return (
      <section className="stack">
        <Vacio icono="🧭" texto="Este Foodie no existe." />
        <button type="button" className="btn" onClick={() => navigate('/foodies')}>
          Volver a Foodies
        </button>
      </section>
    )
  }
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />
  if (restaurantes.error) {
    return <ErrorCarga mensaje={restaurantes.error} onReintentar={restaurantes.reintentar} />
  }

  const suyos = restaurantesDeFoodie(restaurantes.datos, foodie.id)

  return (
    <article className="stack">
      <button type="button" className="btn btn-secundario" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <div className="row">
        <Avatar nombre={foodie.nombre} />
        <h2 ref={titulo} tabIndex={-1}>{foodie.nombre}</h2>
        {SIGUIENDO.includes(foodie.id) && <span className="tag">Siguiendo</span>}
      </div>
      <p>{foodie.bio}</p>
      <h2>Sus restaurantes</h2>
      <ListaRestaurantes
        restaurantes={suyos}
        siguiendo={SIGUIENDO}
        textoVacio="Todavía no ha reseñado nada."
      />
    </article>
  )
}