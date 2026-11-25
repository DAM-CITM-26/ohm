
import { Outlet, NavLink } from 'react-router-dom'
import { Cabecera } from './components/organismos/Cabecera.jsx'

export default function Layout() {
  return (
    <>
      <Cabecera titulo="OhM" />

      <nav className="pestanas" aria-label="Secciones">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'activa' : '')}>
          <span aria-hidden="true">🍽️</span>Inicio
        </NavLink>
        <NavLink to="/foodies" className={({ isActive }) => (isActive ? 'activa' : '')}>
          <span aria-hidden="true">👥</span>Foodies
        </NavLink>
        <NavLink to="/guardados" className={({ isActive }) => (isActive ? 'activa' : '')}>
          <span aria-hidden="true">🔖</span>Guardados
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
