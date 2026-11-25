import { useEffect, useState } from 'react'
import { pedirRestaurantes } from '../data/api.js'

// Carga la lista de restaurantes con sus tres estados.
// El componente que lo usa solo pinta.
export function useRestaurantes() {
  const [datos, setDatos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  // Cada «Reintentar» suma uno y el efecto vuelve a pedir los datos
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let cancelado = false
    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const lista = await pedirRestaurantes()
        if (!cancelado) setDatos(lista)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    cargar()
    // Limpieza: si la pantalla se cierra antes de la respuesta, se ignora
    return () => {
      cancelado = true
    }
  }, [intento])

  function reintentar() {
    setIntento((prev) => prev + 1)
  }

  return { datos, cargando, error, reintentar }
}