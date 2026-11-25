
import { Outlet, NavLink } from 'react-router-dom'
import { Cabecera } from './components/organismos/Cabecera.jsx'

export default function Layout() {
  return (
    <>
      <Cabecera titulo="Ohm" />

      <nav>
        <NavLink to="/">Inicio</NavLink>
        {' | '}
        <NavLink to="/foodies">Foodies</NavLink>
        {' | '}
        <NavLink to="/guardados">Guardados</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  )
}
