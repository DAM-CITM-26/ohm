export default function Error({ mensaje = 'Ha ocurrido un error al cargar los datos.', onReintentar }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#b91c1c' }} role="alert">
      <p>{mensaje}</p>
      {onReintentar && (
        <button
          type="button"
          onClick={onReintentar}
          style={{
            marginTop: '0.75rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Reintentar
        </button>
      )}
    </div>
  );
}