import { TarjetaRestaurante } from '../moleculas/TarjetaRestaurante.jsx'
import { Vacio } from '../moleculas/Vacio.jsx'

export function ListaRestaurantes({ restaurantes, siguiendo, textoVacio }) {
  if (restaurantes.length === 0) return <Vacio icono="🍽️" texto={textoVacio} />

  return (
    <div className="grid">
      {restaurantes.map((restaurante) => (
        <TarjetaRestaurante key={restaurante.id} restaurante={restaurante} siguiendo={siguiendo} />
      ))}
    </div>
  )
}
