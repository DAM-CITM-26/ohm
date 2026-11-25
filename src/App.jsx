
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Inicio from './pages/Inicio.jsx'

function Foodies() {
  return <h2>Foodies</h2>
}

function Guardados() {
  return <h2>Guardados</h2>
}

function Restaurante() {
  return <h2>Detalle del restaurante</h2>
}

function Foodie() {
  return <h2>Detalle del foodie</h2>
}

function NoEncontrado() {
  return <h2>Página no encontrada</h2>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="foodies" element={<Foodies />} />
        <Route path="guardados" element={<Guardados />} />
        <Route path="restaurante/:id" element={<Restaurante />} />
        <Route path="foodie/:id" element={<Foodie />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}
