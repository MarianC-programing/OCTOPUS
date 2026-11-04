<div align="center">

<img src="public/OCTOPUS.svg" width="120" alt="Pulpo morado de Octopus" />

# Octopus team

**Software que hace lo que dice.**

Desarrollo web y sistemas a medida desde Panamá.

<a href="https://marianc-programing.github.io/OCTOPUS/">Ver el sitio en línea →</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#desarrollo">Desarrollo</a>&nbsp;·&nbsp;<a href="#deploy-github-pages">Deploy</a>

[![Deploy a GitHub Pages](https://github.com/MarianC-programing/OCTOPUS/actions/workflows/deploy.yml/badge.svg)](https://github.com/MarianC-programing/OCTOPUS/actions/workflows/deploy.yml)

</div>

## Qué es esto

El sitio de identidad de **Octopus team**: hero con partículas WebGL que reaccionan al cursor,
secciones que explican qué construimos y cómo trabajamos, faq y contacto por correo.
Estático, oscuro y sin humo.

## Stack

- **Vite 8 + React 19 + TypeScript**, gestionado con **pnpm**
- **Tailwind CSS v4** (tema en `src/index.css`)
- **Hero "Liquid Sculpture"**: partículas WebGL2 que reaccionan al cursor y al touch (`src/components/ui/liquid-sculpture-hero.tsx`)
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
pnpm install            # instalar dependencias
pnpm dev                # http://localhost:5173/
pnpm exec tsc -b        # typecheck
pnpm lint               # lint (debe quedar en 0/0)
pnpm build              # build de producción a dist/
```

## Integración continua

`.github/workflows/ci.yml` se ejecuta en cada pull request y en cada push a ramas de trabajo.
Ejecuta typecheck (`tsc -b`), lint y build con pnpm. Los mismos comandos se pueden correr en local
antes de abrir la PR (ver Desarrollo).

## Deploy (GitHub Pages)

- Workflow: `.github/workflows/deploy.yml` — se ejecuta en cada push a `main`.
- La base se inyecta con `VITE_BASE=/OCTOPUS/` (ver `vite.config.ts`).
- Pages debe estar configurado con origen **GitHub Actions** (`build_type: workflow`), no "Deploy from a branch".
- El repo es **público** (requerido por Pages gratis).

## Notas

- El correo de contacto es `marianoctopus.dev@gmail.com` (única fuente: `CONTACT` en `src/data/content.ts`).
- La imagen del hero (`octopus-hero.webp`) se recortó con canal alfa derivado por brillo; el modo alpha del componente la muestrea.
- `og:image` apunta a la URL absoluta de Pages para que previsualicen bien los social cards.

<div align="center">

## Licencia

[MIT](LICENSE) — el componente del hero deriva del trabajo de
[guglielmogiannattasio.it](https://guglielmogiannattasio.it); su cabecera de autoría se conserva en el archivo fuente.

Hecho con Vite, React, Tailwind y un pulpo morado 🐙

</div>
