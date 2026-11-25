import { Link, useParams } from 'react-router-dom'
import { RESTAURANTES } from '../data/restaurantes.js'
import { Portada } from '../components/atomos/Portada.jsx'
import { Nota } from '../components/atomos/Nota.jsx'
import { notaMedia } from '../utils/restaurantes.js'

export function Restaurante() {
  const { id } = useParams()

  // TODO: Cuando Arnau termine s2-hooks-restaurantes, sustituir esta búsqueda por useRestaurante(id)
  const restaurante = RESTAURANTES.find((r) => String(r.id) === String(id))

  if (!restaurante) {
    return (
      <section className="page">
        <h2>Restaurante no encontrado</h2>
        <p>No existe ningún restaurante con el identificador {id}.</p>
        <Link to="/">Volver al inicio</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <Link to="/">← Volver</Link>

      <article className="card" style={{ marginTop: '1rem' }}>
        <Portada cocina={restaurante.cocina} />
        <div className="card-cuerpo">
          <h1>{restaurante.nombre}</h1>
          <p className="card-meta">
            {restaurante.cocina} · {restaurante.barrio} · {restaurante.precio}
          </p>
          <Nota valor={notaMedia(restaurante.resenas)} />
        </div>
      </article>

      <section style={{ marginTop: '1.5rem' }}>
        <h2>Reseñas ({restaurante.resenas.length})</h2>
        {restaurante.resenas.length === 0 ? (
          <p>Este restaurante todavía no tiene reseñas.</p>
        ) : (
          <ul>
            {restaurante.resenas.map((resena, index) => (
              <li key={`${resena.foodieId}-${index}`}>
                Foodie #{resena.foodieId} — Nota: <strong>{resena.nota}/5</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  )
}

export default Restaurante