import { useEffect, useState } from 'react'
import { pedirRestaurante } from '../data/api.js'

// Carga UN restaurante por su id, para la ficha.
// Si el id no existe, api.js lanza «Ese restaurante no existe» y llega como error.
export function useRestaurante(id) {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let cancelado = false
    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const restaurante = await pedirRestaurante(id)
        if (!cancelado) setDatos(restaurante)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    cargar()
    return () => {
      cancelado = true
    }
  }, [id, intento])

  function reintentar() {
    setIntento((prev) => prev + 1)
  }

  return { datos, cargando, error, reintentar }
}