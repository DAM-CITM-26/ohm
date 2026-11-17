# Modelo de datos

## Restaurante (`RESTAURANTES`)

Representa cada local disponible en la aplicación, incluyendo su información básica y las valoraciones recibidas.

| Campo | Tipo | Ejemplo |
| :--- | :--- | :--- |
| `id` | `number` | `1` |
| `nombre` | `string` | `"La Taberna del Puerto"` |
| `cocina` | `string` | `"Mediterránea"` |
| `barrio` | `string` | `"Barceloneta"` |
| `precio` | `string` | `"€€"` |
| `resenas` | `array<Resena>` | `[{ "foodieId": 1, "nota": 5 }, { "foodieId": 2, "nota": 4 }]` |

### Subentidad: Reseña (`resenas`)

Cada elemento dentro del array `resenas` de un restaurante.

| Campo | Tipo | Ejemplo |
| :--- | :--- | :--- |
| `foodieId` | `number` | `1` |
| `nota` | `number` | `5` |

### Ejemplo en JSON

```json
{
  "id": 1,
  "nombre": "La Taberna del Puerto",
  "cocina": "Mediterránea",
  "barrio": "Barceloneta",
  "precio": "€€",
  "resenas": [
    {
      "foodieId": 1,
      "nota": 5
    },
    {
      "foodieId": 2,
      "nota": 4
    }
  ]
}