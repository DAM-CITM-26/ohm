
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Restaurante from './pages/Restaurante.jsx'
import Foodies from './pages/Foodies.jsx'
import Foodie from './pages/Foodie.jsx'


function Guardados() {
  return <h2>Guardados</h2>
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
