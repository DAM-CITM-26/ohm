// src/components/atomos/Avatar.jsx
// Un círculo con la primera letra del nombre
export function Avatar({ nombre }) {
  return (
    <span className="avatar" aria-hidden="true">
      {nombre[0]}
    </span>
  )
}
