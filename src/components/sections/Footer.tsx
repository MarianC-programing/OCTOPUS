const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-mist/50">
        <p>© {YEAR} Octopus Team</p>
        <a href="#top" className="hover:text-lilac">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
