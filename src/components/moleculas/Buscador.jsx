// Input controlado: el texto lo guarda la pantalla y llega por props
export function Buscador({ valor, onCambio }) {
  return (
    <>
      <label className="oculto" htmlFor="buscar">
        Buscar restaurante o barrio
      </label>
      <input
        id="buscar"
        className="buscador"
        type="search"
        placeholder="🔍  Busca un restaurante o un barrio"
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
      />
    </>
  )
}
