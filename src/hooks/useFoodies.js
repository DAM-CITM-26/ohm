
import { useEffect, useState } from 'react'
import { pedirFoodies } from '../data/api.js'

export function useFoodies() {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let cancelado = false

    async function cargar() {
      setCargando(true)
      setError(null)

      try {
        const lista = await pedirFoodies()
        if (!cancelado) setDatos(lista)
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
  }, [intento])

  function reintentar() {
    setIntento((prev) => prev + 1)
  }

  return { datos, cargando, error, reintentar }
}
