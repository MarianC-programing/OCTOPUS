# OCTOPUS — Contexto del proyecto y estado de la sesión

> Última actualización: 2026-11-02 · Sesión 2
> Leer este archivo antes de continuar (regla 1 del `CLAUDE.md` general).

---

## 1. Qué es el proyecto

Sitio web de identidad de **Octopus team**: desarrollo web y sistemas a medida desde Panamá.

**Objetivo del sitio:** verse dinámico (no corporativo ni seco) y transmitir *"sabe lo que hace"* sin sonar a *vendehumos de IA*.

**Reglas de contenido pedidas por la usuaria**
- No hablar de proyectos concretos (nada de casos/portafolio).
- Usar las tecnologías de su portafolio: https://marianc-programing.github.io/mi-portafolio/
- Colores: **azul o lila** (el pulpo del logo es morado/lila).
- Favicon: `OCTOPUS.svg` (el original está en la raíz, fuera del repo; la versión ligera está en `public/`).
- Hero basado en el componente *Liquid Sculpture Hero* (partículas WebGL2 que reaccionan al cursor).
- **Voz de equipo:** todo el sitio habla como "Octopus team" / "trabajamos", nunca en primera persona singular.
- **Sin cursiva:** no usar itálica ni la fuente serif de acento (Instrument Serif fue retirada del sitio).
- Correo de contacto: **marianoctopus.dev@gmail.com**.

---

## 2. Identidad visual

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#07060d` | Fondo principal |
| `surface` | `#0e0b1a` | Chips / superficies |
| `lilac` | `#c4b5fd` | Acento principal, íconos |
| `violet` | `#8b5cf6` | Halos, detalles |
| `sky` | `#60a5fa` | Acento azul, hover |
| `blue` | `#3b82f6` | Blobs de fondo |
| `mist` | `#f1effa` | Texto |

- Tipografía: **Geist** única (UI + acento). Instrument Serif quedó fuera del sitio (fuentes en `index.html` solo cargan Geist; token `--font-serif` eliminado de `index.css`).
- Los acentos de titulares ahora son palabras resaltadas con degradado lila→azul vía `.grad-text`, en la misma fuente que el resto del titular.
- Animaciones: partículas del hero, reveal al hacer scroll, tarjetas con halo que sigue al cursor, marquee de tecnologías, blobs flotantes en contacto. Todo respeta `prefers-reduced-motion`.
- Assets (`public/`): `octopus-hero.webp` (pulpo con laptop, recortado con transparencia), `OCTOPUS.svg` (favicon), `favicon-48.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.jpg`.
- Originales sin tocar en la raíz (fuera del repo): `OCTOPUS.svg`, `OCTOPUS.png`, `Pulpo morado con laptop plateada.png`.

---

## 3. Contenido (en español, voz plural)

Fuente única en `src/data/content.ts`. Resumen:

- **Hero:** eyebrow *Desarrollo web · Panamá*; titular *Software que / hace lo que dice.*; texto *Diseñamos y programamos sitios, sistemas y apps a medida…*; CTAs **Hablemos** (`#contacto`) · **Cómo trabajamos** (`#proceso`).
- **Servicios** — *Lo que construimos, sin rodeos.* Sitios y landings · Sistemas a medida · APIs e integraciones · Pruebas y calidad.
- **Proceso** — *Cuatro pasos. Cero misterio.* Conversamos · Acordamos alcance · Construimos · Publicamos y acompañamos.
- **Sin humo** — *Lo que sí, y lo que no.*
- **Stack** — carrusel con logos Simple Icons (Oracle y Playwright sin logo → chip de texto con punto degradado).
- **El equipo** — *Somos el equipo detrás de Octopus.* Full-stack · Equipos ágiles · Clientes directos.
- **FAQ** — tecnologías · frontend+backend · tiempo/costo (sin cifras inventadas) · dónde se publica · cambios post-entrega.
- **Contacto** — `marianoctopus.dev@gmail.com` (mailto con asunto prellenado; sin formulario, sitio estático) · GitHub · LinkedIn.
- **Footer** — `© año Octopus Team` + "Volver arriba".

---

## 4. Decisiones técnicas

- **Stack:** Vite + React 19 + TypeScript + Tailwind v4 + oxlint (+ lucide-react; íconos de marca inline SVG en `Contact.tsx` porque la v1 de lucide no los trae).
- **Gestor de paquetes:** pnpm (versión fijada en `packageManager`; lockfile `pnpm-lock.yaml`). No se usa npm ni yarn. Proceso de trabajo en `PLAN-MODE-OCTOPUS.MD`.
- **CI:** `.github/workflows/ci.yml` verifica `tsc -b`, `lint` y `build` en cada PR y en pushes a ramas de trabajo (pnpm, Node 22). Los checks se marcarán como obligatorios en la protección de `main` tras el merge. Pendiente: actualizar las actions de `deploy.yml` (usa versiones sobre Node 20) en un issue aparte.
- **Alias** `@` → `src`.
- **Base de despliegue:** `VITE_BASE` definido en el workflow (`/OCTOPUS/`); `vite.config.ts` cae a `/` en dev.
- **Hero:** copiado a `src/components/ui/liquid-sculpture-hero.tsx`. El acento del titular usa la misma Geist con `font-style: normal` (los defaults del componente apuntaban a Instrument Serif italic; se parchearon `accentFont` y `.sh-accent`).
- **Imagen del hero:** alfa derivado por brillo; el componente auto-detecta imagen con alfa (modo alpha) y descarta píxeles con `a < 0.12`.
- **GitHub Pages:** origen **GitHub Actions** (`build_type: workflow`, fijado por API el 2026-11-02). El workflow sube `dist/` con `actions/deploy-pages@v4`.

---

## 5. Estado actual

### Hecho en la sesión 2
- **Deploy arreglado.** Causa del fallo: Pages estaba en modo *legacy* ("Deploy from a branch") y el workflow exige modo Actions → `configure-pages@v5` fallaba con `Get Pages site failed`. Además el build legacy había publicado el `index.html` crudo (página rota con `/src/main.tsx`). Fix: `PUT /repos/.../pages -f build_type=workflow` + rerun del workflow → **deploy success** en https://marianc-programing.github.io/OCTOPUS/.
- **QA visual desktop:** pulpo recortado sin caja negra (verificado por píxel sampling del screenshot: el fondo dentro y fuera del área es `#07060d`), WebGL activo, consola sin errores. El humo alrededor del pulpo es el efecto `ambient` del componente, no un recorte sucio.
- **QA móvil (390×844 vía iframe):** sin overflow horizontal, FAQ abre/cierra, acento del hero en Geist normal, mailto nuevo, `© Octopus Team`. Pendiente: pase visual por screenshots de secciones internas (la ventana del navegador del desktop quedó oculta a mitad de la revisión).
- **Cambio de voz a Octopus team** en hero, servicios, proceso, FAQ, about, contacto y footer ("© Octopus Team", eyebrow "Cómo trabajamos", etc.). Sin restos de primera persona singular en el texto de la UI (queda solo el dominio de GitHub/LinkedIn, que apuntan a cuentas de Marian).
- **Cursiva eliminada:** `Instrument Serif` fuera de `index.html`, `index.css` y defaults del hero; spans de acento reducidos a `grad-text`; numeritos 01–04 en sans.
- **Correo nuevo:** `marianoctopus.dev@gmail.com` en `CONTACT` (única fuente; usado por el botón de contacto).
- **`og:image` absoluta:** `https://marianc-programing.github.io/OCTOPUS/og-image.jpg`.
- **README.md** renovado (stack, estructura, comandos, deploy).
- **README con portada** (logo `public/OCTOPUS.svg`, badge del workflow, secciones y nota de licencia) y metadatos del repo: descripción en About, website y topics (`react`, `typescript`, `vite`, `tailwindcss`, `github-pages`, `webgl`).
- **Licencia MIT** (archivo `LICENSE`) con nota del derivado del hero; README enlaza a ella. GitHub ya la detecta como MIT en el About.
- Verificado en dist: 0 apariciones del correo viejo, 0 suscriptores de "Instrument"; build/tsc/oxlint en 0/0.

### Pendiente / a vigilar
1. Pase visual completo de secciones en móvil con screenshots (requiere la ventana del navegador visible).
2. Clásico de `favicon` de 1 MB sigue vigente (respaldo PNG ya en `public/`); conviene optimizar cuando haya chance.
3. Links de **GitHub/LinkedIn** siguen siendo cuentas personales de Marian; si la marca crece, evaluar cuentas de "octopus-team" o links hacia `octopus.dev` (dominio futuro).
4. Dominio propio (`octopus.dev`?) — decidir; si se compra, cambiar `og:image` y `VITE_BASE`.

### A confirmar con la usuaria
- ¿Los links del footer/contacto pueden seguir apuntando a GitHub/LinkedIn personales?
- ¿Dominio propio previsto?

---

## 6. Comandos útiles

```bash
cd /home/marian01/ProyectosDev/OCTOPUS
pnpm dev             # desarrollo (localhost:5173)
pnpm exec tsc -b     # typecheck
pnpm lint            # lint (0/0 esperado)
pnpm build           # build de producción
gh run list --repo MarianC-programing/OCTOPUS --limit 3   # estado del deploy
```
