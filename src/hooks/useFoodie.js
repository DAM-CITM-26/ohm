
import { useEffect, useState } from 'react'
import { pedirFoodie } from '../data/api.js'

export function useFoodie(id) {
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
        const foodie = await pedirFoodie(id)
        if (!cancelado) setDatos(foodie)
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
