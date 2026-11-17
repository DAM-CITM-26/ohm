export function Chip({ texto, activo, onClick }) {
  return (
    <button type="button" className={activo ? 'chip activo' : 'chip'} aria-pressed={activo} onClick={onClick}>
      {texto}
    </button>
  )
}
