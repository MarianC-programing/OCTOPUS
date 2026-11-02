# OCTOPUS — Contexto del proyecto y estado de la sesión

> Última actualización: 2026-11-02 · Sesión 1
> Leer este archivo antes de continuar (regla 1 del `CLAUDE.md` general).

---

## 1. Qué es el proyecto

Sitio web de identidad de **Octopus**: la marca bajo la que **Marian Barba** (desarrolladora full-stack, Panamá) ofrece servicios de desarrollo.

**Objetivo del sitio:** verse dinámico (no corporativo ni seco) y transmitir *"sabe lo que hace"* sin sonar a *vendehumos de IA*.

**Reglas de contenido pedidas por la usuaria**
- No hablar de proyectos concretos (nada de casos/portafolio).
- Usar las tecnologías de su portafolio: https://marianc-programing.github.io/mi-portafolio/
- Colores: **azul o lila** (el pulpo del logo es morado/lila).
- Favicon: `/home/marian01/ProyectosDev/OCTOPUS/OCTOPUS.svg`
- Hero basado en el componente *Liquid Sculpture Hero* (partículas WebGL2 que reaccionan al cursor).
- Primero va el repositorio en GitHub.

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

- Tipografías: **Geist** (UI) + **Instrument Serif itálica** (palabras de acento con degradado lila→azul).
- Animaciones: partículas del hero, reveal al hacer scroll, tarjetas con halo que sigue al cursor, carrusel (marquee) de tecnologías, blobs flotantes en contacto. Todo respeta `prefers-reduced-motion`.
- Assets (en `public/`): `octopus-hero.webp` (pulpo con laptop, recortado con transparencia), `OCTOPUS.svg` (favicon), `favicon-48.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.jpg`.
- Originales sin tocar en la raíz de OCTOPUS: `OCTOPUS.svg`, `OCTOPUS.png`, `Pulpo morado con laptop plateada.png`.

---

## 3. Contenido que se agrega al sitio (en español)

Fuente única en `src/data/content.ts`. Resumen:

### Hero
- Eyebrow: *Desarrollo web · Panamá*
- Titular: **Software que / hace lo que dice.** (acento en "hace lo que dice.")
- Texto: *Diseño y programo sitios, sistemas y apps a medida. Te digo qué se puede hacer, cuánto toma y qué no vale la pena.*
- CTAs: **Hablemos** (`#contacto`) · **Cómo trabajo** (`#proceso`)
- Nav: Servicios · Proceso · Stack · FAQ · Contacto
- Pista: *Mueve el cursor sobre el pulpo* / *Toca el pulpo*

### Servicios — "Lo que construyo, sin rodeos."
1. **Sitios y landing pages** — React, Tailwind, SEO básico.
2. **Sistemas web a medida** — Laravel, .NET, Node, PostgreSQL.
3. **APIs e integraciones** — REST, Supabase, Auth.
4. **Pruebas y calidad** — Vitest, SonarQube, ISTQB.

### Proceso — "Cuatro pasos. Cero misterio."
01 Conversamos · 02 Acordamos alcance · 03 Construimos · 04 Publicamos y acompañamos.

### Sin humo — "Lo que sí, y lo que no."
- **Sí:** alcance y tiempos claros; código legible y mantenible; pruebas antes de cada entrega; algo publicado y funcionando.
- **No:** promesas de "revolucionar tu negocio con IA"; plantillas disfrazadas de a medida; tecnología por moda; desaparecer tras la entrega.

### Stack (carrusel con logos Simple Icons en lila)
React, Angular, TypeScript, JavaScript, Vite, Tailwind CSS, shadcn/ui, Laravel, PHP, .NET, Node.js, Java, PostgreSQL, MySQL, SQLite, Oracle*, Supabase, Vercel, Netlify, Railway, Nginx, Git, GitHub, Figma, Postman, Vitest, Playwright*, SonarQube, Debian.
\*Sin logo (el slug no existe en Simple Icons): chip de texto con punto de degradado.

### Quién está detrás
*Soy Marian, desarrolladora.* Full-stack desde Panamá; entiende el problema antes de elegir tecnología; código legible, probado y mantenible. Puntos: Full-stack · Equipos ágiles · Clientes directos.

### FAQ
Tecnologías · Frontend y backend · Cuánto tarda y cuesta (sin inventar cifras; estimado por escrito tras una charla) · Dónde se publica · Cambios después de la entrega.

### Contacto
- Correo: `marianbarba1208@gmail.com` (`mailto:` con asunto prellenado; no hay formulario porque el sitio es estático)
- GitHub: https://github.com/MarianC-programing
- LinkedIn: https://www.linkedin.com/in/marian-barba/
- Pie: © año Octopus · Marian Barba · "Volver arriba"

---

## 4. Decisiones técnicas

- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 + estructura shadcn (`components.json`, `@/components/ui`, `@/lib/utils`) + lucide-react + oxlint (viene en la plantilla de Vite).
- **Alias** `@` → `src` (en `vite.config.ts` y `tsconfig.app.json`).
- **Base de despliegue:** `VITE_BASE` (ej. `/OCTOPUS/` para GitHub Pages).
- **Hero:** el componente se copió a `src/components/ui/liquid-sculpture-hero.tsx`. El código pegado traía saltos de línea literales dentro de strings (`headline` y `split("\n")`); se corrigieron a `\n`.
- **Imagen del hero:** el original tiene fondo negro; se recortó a WebP con transparencia (alfa derivado del brillo) para que el modo "alpha" del componente funcione sobre el fondo oscuro. Se usa la misma imagen en todos los modos (el sitio es solo oscuro, `themeToggle={false}`).
- **Voz del texto:** primera persona singular ("yo"), porque Marian se vende a sí misma; evita aparentar un equipo.
- **Atribución:** `showCredit` queda activo (crédito del autor del componente). Se puede desactivar si la licencia lo permite.

---

## 5. Estado actual — dónde quedé

### Hecho
- Carpeta `OCTOPUS` con scaffold de Vite + dependencias instaladas (Tailwind, clsx, tailwind-merge, cva, lucide-react).
- Assets optimizados en `public/`.
- `index.html` (SEO, Open Graph, favicon SVG + PNG, fuentes).
- `src/index.css` (tema, animaciones, `.reveal`, `.glow-card`, `.grad-text`).
- `src/data/content.ts` con todo el contenido.
- Componentes: `Reveal`, `GlowCard`, `SectionHeading` y secciones `Services`, `Process`, `NoSmoke`, `Stack`, `About`, `Faq`, `Contact`, `Footer`; `App.tsx` ensamblado con el hero.

### Pendiente / errores conocidos (última ejecución de `npx tsc -b` y `npx oxlint`)
1. **`Contact.tsx`:** `lucide-react` v1 ya no exporta `Github` ni `Linkedin` → reemplazar por SVG inline propios.
2. **`liquid-sculpture-hero.tsx`:** TS6133 `'lastInput' is declared but its value is never read` → eliminar el campo `lastInput` y su asignación en `pointer()` (cambio mínimo; no altera el comportamiento).
3. **oxlint:** 4 *warnings* (0 errores) dentro del componente del hero (`react(refs)` y `set-state-in-effect`). Son del código original; no se debilitaron reglas. Decidir si se deja o se ajusta.
4. **Revisar el archivo del hero:** `wc -l` reporta 1738 líneas, más de lo esperable para el original (~870). Verificar si hay líneas en blanco duplicadas y limpiarlas.
5. **`npm run build`** y prueba visual (`npm run dev`) aún **no ejecutados**: nada está verificado en navegador. Probar sobre todo que el pulpo se renderiza bien (recorte del fondo negro) y el comportamiento en móvil.
6. **Git:** `OCTOPUS` **no tiene repo propio**. El `git` que respondió pertenece a la carpeta padre `ProyectosDev` (sin commits). Hacer `git init` dentro de OCTOPUS **sin tocar el repo padre**.
7. **GitHub:** `gh` ya está autenticado como `MarianC-programing`. Falta crear el repo (nombre propuesto: `OCTOPUS`), hacer el primer commit y push.
8. **`.gitignore`:** añadir los originales de la raíz (`OCTOPUS.png`, `OCTOPUS.svg`, `Pulpo morado con laptop plateada.png`) para no versionar ~3.6 MB de fuentes; en `public/` ya hay versiones optimizadas.
9. **GitHub Pages:** crear workflow (`.github/workflows/deploy.yml`) con `VITE_BASE=/OCTOPUS/` y activar Pages con origen "GitHub Actions".
10. **`og:image`:** usa ruta relativa; para previsualizaciones sociales conviene URL absoluta una vez conocido el dominio final.
11. **Actualizar `README.md`** (sigue siendo el de la plantilla de Vite) y este archivo al avanzar.

### A confirmar con la usuaria
- ¿Repo **público** (necesario para Pages gratis) y nombre `OCTOPUS`?
- ¿La voz en primera persona ("yo") es la correcta, o prefiere "nosotros"?
- ¿Mantener el crédito del autor del hero visible?
- ¿Dominio propio previsto?
- El favicon SVG pesa ~1 MB (contiene un raster incrustado). Se usó tal como se pidió; se recomienda un SVG/ICO ligero a futuro (ya hay PNG de respaldo).

### Siguiente paso concreto
Corregir los puntos 1–2, correr `npm run build` + `npm run dev` para validar el hero, y recién entonces `git init`, commit inicial, crear el repo en GitHub y configurar Pages.

---

## 6. Comandos útiles

```bash
cd /home/marian01/ProyectosDev/OCTOPUS
npm run dev          # desarrollo
npx tsc -b           # typecheck
npx oxlint           # lint
npm run build        # build de producción
```
