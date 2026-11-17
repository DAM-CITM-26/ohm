import { Nota } from '../atomos/Nota.jsx'
import { Portada } from '../atomos/Portada.jsx'
import { notaMedia, resenadoPorSeguidos } from '../../utils/restaurantes.js'

export function TarjetaRestaurante({ restaurante, siguiendo }) {
  return (
    <article className="card">
      <Portada cocina={restaurante.cocina} />
      <div className="card-cuerpo">
        <h2>{restaurante.nombre}</h2>
        <p className="card-meta">
          {restaurante.cocina} · {restaurante.barrio} · {restaurante.precio}
        </p>
        <div className="row">
          <Nota valor={notaMedia(restaurante.resenas)} />
          {resenadoPorSeguidos(restaurante, siguiendo) && <span className="tag">Lo recomienda alguien que sigues</span>}
        </div>
      </div>
    </article>
  )
}
