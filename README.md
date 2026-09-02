# Aluaro — Sitio web

Sitio institucional de **Aluaro** (mantenimiento hidráulico y sanitario, Uruguay).
Construido con [Astro](https://astro.build) y desplegado en **GitHub Pages** con
dominio propio `www.aluaro.com.uy`.

## Estructura

```
src/
├─ components/        Header, Footer, LlamadaAccion (reutilizables)
├─ layouts/           Base.astro (head, fuentes, header/footer)
├─ pages/             index, servicios, sectores, nosotros, contacto
└─ styles/            global.css (tokens de color y tipografía)
public/               favicon.svg, CNAME
.github/workflows/    deploy.yml (build + deploy automático a Pages)
```

## Desarrollo local

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # compilar a dist/
npm run preview   # previsualizar el build
```

## Deploy

Cada `git push` a la rama `main` dispara el workflow de GitHub Actions,
que compila el sitio y lo publica en GitHub Pages automáticamente.

### Configuración inicial en GitHub (una sola vez)

1. Subir este repo a GitHub.
2. En **Settings → Pages → Build and deployment**, elegir **GitHub Actions**
   como fuente.
3. En **Settings → Pages → Custom domain**, poner `www.aluaro.com.uy`.
4. Configurar el DNS en NetUY (ver más abajo).
5. Esperar el certificado HTTPS y activar **Enforce HTTPS**.

### DNS en NetUY

| Tipo  | Host  | Valor                  |
|-------|-------|------------------------|
| A     | @     | 185.199.108.153        |
| A     | @     | 185.199.109.153        |
| A     | @     | 185.199.110.153        |
| A     | @     | 185.199.111.153        |
| CNAME | www   | TUUSUARIO.github.io    |

> Reemplazar `TUUSUARIO` por el usuario/organización de GitHub.

## Pendientes de completar (placeholders)

Buscar y reemplazar en el código:

- **Teléfono / WhatsApp:** `59800000000` → número real (formato internacional,
  sin `+`, sin espacios). Aparece en Header (no), Footer, Contacto y los CTA.
- **Email:** `contacto@aluaro.com.uy` → email real si difiere.
- **Formulario de contacto:** `TU_ID_FORMSPREE` en `src/pages/contacto.astro`
  → endpoint real de [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com).
- **Textos:** revisar y ajustar copys de cada página con la info real del negocio.
- **Zona / horario:** confirmar en Footer y Contacto.
