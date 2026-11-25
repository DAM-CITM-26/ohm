// src/components/moleculas/FilaFoodie.jsx
import { Link } from 'react-router-dom'
import { Avatar } from '../atomos/Avatar.jsx'

// Un Foodie de la lista: avatar, nombre y bio (enlace a su perfil) y si lo sigo
export function FilaFoodie({ foodie, loSigo }) {
  return (
    <li>
      <Avatar nombre={foodie.nombre} />
      <Link className="crece enlace-fila" to={`/foodie/${foodie.id}`}>
        <h3>{foodie.nombre}</h3>
        <p className="card-meta">{foodie.bio}</p>
      </Link>
      {loSigo && <span className="tag">Siguiendo</span>}
    </li>
  )
}