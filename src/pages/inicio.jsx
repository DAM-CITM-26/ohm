import { useState } from 'react'
import { Buscador } from '../components/moleculas/Buscador.jsx'
import { Chips } from '../components/moleculas/Chips.jsx'
import { ListaRestaurantes } from '../components/organismos/ListaRestaurantes.jsx'
import { RESTAURANTES, SIGUIENDO } from '../data/restaurantes.js'
import { cocinasDe, filtrarRestaurantes } from '../utils/restaurantes.js'

export default function Inicio() {
  // Lo que cambia mientras se usa la pantalla
  const [texto, setTexto] = useState('')
  const [vista, setVista] = useState('Todos')
  const [cocina, setCocina] = useState('Todas')

  // Valor calculado: no es estado, se recalcula en cada render
  const restaurantes = filtrarRestaurantes(
    RESTAURANTES,
    { texto, cocina, vista },
    SIGUIENDO
  )

  return (
    <section className="stack">
      <Buscador valor={texto} onCambio={setTexto} />
      <Chips opciones={['Todos', 'Siguiendo']} valor={vista} onCambio={setVista} />
      <Chips opciones={['Todas', ...cocinasDe(RESTAURANTES)]} valor={cocina} onCambio={setCocina} />
      <p className="card-meta">
        {restaurantes.length} {restaurantes.length === 1 ? 'restaurante' : 'restaurantes'}
      </p>
      <ListaRestaurantes
        restaurantes={restaurantes}
        siguiendo={SIGUIENDO}
        textoVacio="No hay restaurantes con estos filtros."
      />
    </section>
  )
}