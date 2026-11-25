import { FilaFoodie } from '../components/moleculas/FilaFoodie.jsx'
import { Vacio } from '../components/moleculas/Vacio.jsx'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/Error.jsx'
import { SIGUIENDO } from '../data/restaurantes.js'
import { useFoodies } from '../hooks/useFoodies.js'

// La lista de Foodies (/foodies). Los datos llegan del hook de Lucía.
export default function Foodies() {
  const { datos, cargando, error, reintentar } = useFoodies()

  if (cargando) return <Cargando mensaje="Cargando Foodies…" />
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />
  if (datos.length === 0) return <Vacio icono="👥" texto="Todavía no hay Foodies." />

  return (
    <section className="stack">
      <h2>Foodies</h2>
      <ul className="list">
        {datos.map((foodie) => (
          <FilaFoodie key={foodie.id} foodie={foodie} loSigo={SIGUIENDO.includes(foodie.id)} />
        ))}
      </ul>
    </section>
  )
}