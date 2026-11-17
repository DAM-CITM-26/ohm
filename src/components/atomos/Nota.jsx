export function Nota({ valor }) {
  return (
    <span className="estrellas" aria-label={`Nota media ${valor} de 5`}>
      ★ {valor}
    </span>
  )
}
