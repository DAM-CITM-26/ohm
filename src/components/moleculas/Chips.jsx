import { Chip } from '../atomos/Chip.jsx'

// Una fila de chips en la que solo puede haber uno activo
export function Chips({ opciones, valor, onCambio }) {
  return (
    <div className="chips">
      {opciones.map((opcion) => (
        <Chip key={opcion} texto={opcion} activo={opcion === valor} onClick={() => onCambio(opcion)} />
      ))}
    </div>
  )
}
