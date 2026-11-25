export default function Cargando({ mensaje = 'Cargando...' }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }} role="status">
      <p>{mensaje}</p>
    </div>
  );
}