import { EMOJI_COCINA } from '../../data/restaurantes.js'

export function Portada({ cocina }) {
  return (
    <div className="portada" aria-hidden="true">
      {EMOJI_COCINA[cocina]}
    </div>
  )
}
