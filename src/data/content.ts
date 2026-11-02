export const CONTACT = {
  email: 'marianoctopus.dev@gmail.com',
  github: 'https://github.com/MarianC-programing',
  linkedin: 'https://www.linkedin.com/in/marian-barba/',
}

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Stack', href: '#stack' },
  { label: 'FAQ', href: '#faq' },
]

export const SERVICES = [
  {
    title: 'Sitios y landing pages',
    text: 'Páginas rápidas, responsivas y claras: que carguen bien en el celular y que el visitante entienda en segundos qué ofreces.',
    tags: ['React', 'Tailwind', 'SEO básico'],
  },
  {
    title: 'Sistemas web a medida',
    text: 'Paneles, usuarios, roles y base de datos. Del requerimiento al despliegue, para reemplazar hojas de cálculo y procesos manuales.',
    tags: ['Laravel', '.NET', 'Node', 'PostgreSQL'],
  },
  {
    title: 'APIs e integraciones',
    text: 'Autenticación, validación de datos y comunicación entre sistemas, con tiempo real cuando el caso lo pide.',
    tags: ['REST', 'Supabase', 'Auth'],
  },
  {
    title: 'Pruebas y calidad',
    text: 'Revisión antes de entregar: pruebas automatizadas, análisis estático y criterios de QA para que no te llegue un "casi listo".',
    tags: ['Vitest', 'SonarQube', 'ISTQB'],
  },
]

export const STEPS = [
  { n: '01', title: 'Conversamos', text: 'Nos cuentas el problema, no la solución. Te decimos con honestidad qué se puede hacer y qué no vale la pena.' },
  { n: '02', title: 'Acordamos alcance', text: 'Qué entra, qué no, en cuánto tiempo y a qué costo. Por escrito y antes de escribir una línea de código.' },
  { n: '03', title: 'Construimos', text: 'Entregas parciales que puedes ver y probar. Si algo no encaja, se corrige temprano, no al final.' },
  { n: '04', title: 'Publicamos y acompañamos', text: 'Despliegue funcionando, documentación básica y un equipo a quien escribir cuando algo falle.' },
]

export const YES = [
  'Alcance y tiempos claros antes de empezar',
  'Código legible que otro desarrollador pueda mantener',
  'Pruebas y revisión antes de cada entrega',
  'Algo publicado y funcionando, no una demo',
]
export const NO = [
  'Promesas de “revolucionar tu negocio con IA”',
  'Plantillas disfrazadas de desarrollo a medida',
  'Tecnología porque está de moda, no porque sirve',
  'Desaparecer después de la entrega',
]

type Tech = { name: string; icon?: string }
export const STACK: Tech[] = [
  { name: 'React', icon: 'react' },
  { name: 'Angular', icon: 'angular' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Vite', icon: 'vite' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'shadcn/ui', icon: 'shadcnui' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'PHP', icon: 'php' },
  { name: '.NET', icon: 'dotnet' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Java', icon: 'openjdk' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'Oracle' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Netlify', icon: 'netlify' },
  { name: 'Railway', icon: 'railway' },
  { name: 'Nginx', icon: 'nginx' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Postman', icon: 'postman' },
  { name: 'Vitest', icon: 'vitest' },
  { name: 'Playwright' },
  { name: 'SonarQube', icon: 'sonarqubeserver' },
  { name: 'Debian', icon: 'debian' },
]

export const FAQ = [
  { q: '¿Con qué tecnologías trabajan?', a: 'En frontend, React y Angular con TypeScript y Tailwind CSS. En backend, PHP con Laravel, C# / .NET, Node.js y Java. En datos, PostgreSQL (vía Supabase), MySQL, SQLite y Oracle. Elegimos según el problema, no según la moda.' },
  { q: '¿Hacen solo frontend o también backend?', a: 'Ambos. Cubrimos el ciclo completo: requerimiento, diseño de la base de datos, backend, interfaz, pruebas y despliegue.' },
  { q: '¿Cuánto tarda y cuánto cuesta?', a: 'Depende del alcance, y preferimos no inventar un número sin conocer tu caso. Después de una conversación corta te damos un estimado de tiempo y costo por escrito.' },
  { q: '¿Dónde se publica lo que construyen?', a: 'Netlify, Vercel o GitHub Pages para sitios estáticos; Railway para aplicaciones con backend y base de datos; y servidores propios cuando el cliente lo requiere.' },
  { q: '¿Qué pasa si necesito cambios después de la entrega?', a: 'Se define desde el inicio: qué cambios menores están incluidos y cómo se cotizan las ampliaciones. Sin sorpresas.' },
]
