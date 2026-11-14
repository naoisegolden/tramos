# Tramos · web estática

Web de [tramos.eu](https://tramos.eu) (provisionalmente en naoisegolden.com/tramos), servida con GitHub Pages desde `main` / raíz.

- Páginas: `index.html` y una por colección (`camino-de-santiago.html`, `senderos-gr.html`, `caminos-naturales.html`, `vias-verdes.html`, `otras-rutas.html`).
- Todas las rutas son relativas (`assets/...`), para que funcione en un subdirectorio y detrás de la redirección.
- **Enlaces de compra:** `assets/js/products.js`, una línea por SKU:
  `"TRM-CF2": { "amazon": "https://www.amazon.es/dp/ASIN" },` — con `null` se muestra «Próximamente en Amazon».
- Imágenes de producto: `assets/img/{sku}.jpg` (600 px).
