# Octopus — octopus.dev

Sitio de identidad de **Octopus team**: desarrollo web y sistemas a medida desde Panamá.

**En línea:** https://marianc-programing.github.io/OCTOPUS/

## Stack

- **Vite 8 + React 19 + TypeScript**
- **Tailwind CSS v4** (tema en `src/index.css`)
- **Hero "Liquid Sculpture"**: partículas WebGL2 que reaccionan al cursor/touch (`src/components/ui/liquid-sculpture-hero.tsx`)
- oxlint preconfigurado en la plantilla de Vite

## Estructura

```
public/                  # assets optimizados (pulpo .webp recortado con transparencia, favicon, og-image)
src/
  data/content.ts        # todo el contenido del sitio (texto centralizado, voz plural de Octopus team)
  components/
    sections/            # Services · Process · NoSmoke · Stack · About · Faq · Contact · Footer
    ui/                  # hero WebGL
docs/CONTEXT.md          # contexto del proyecto y estado de las sesiones
```

## Desarrollo

```bash
npm ci          # instalar dependencias
npm run dev     # http://localhost:5173/
npx tsc -b      # typecheck
npx oxlint      # lint (debe quedar en 0/0)
npm run build   # build de producción a dist/
```

## Deploy (GitHub Pages)

- Workflow: `.github/workflows/deploy.yml` — se ejecuta en cada push a `main`.
- La base se inyecta con `VITE_BASE=/OCTOPUS/` (ver `vite.config.ts`).
- Pages debe estar configurado con origen **GitHub Actions** (`build_type: workflow`), no "Deploy from a branch". Si se cambia, es un PUT a `PUT /repos/MarianC-programing/OCTOPUS/pages` con `{"build_type":"workflow"}`.
- El repo es **público** (requerido por Pages gratis).

## Notas

- El correo de contacto es `marianoctopus.dev@gmail.com` (única fuente: `CONTACT` en `src/data/content.ts`).
- La imagen del hero (`octopus-hero.webp`) se recortó con canal alfa derivado por brillo; el modo alpha del componente la muestrea.
- `og:image` apunta a la URL absoluta de Pages para que previsualizen bien los social cards.
