import { Link } from 'react-router-dom'
import { BookOpen, ArrowLeft } from 'lucide-react'

export default function LegalLayout({ title, children }) {
  return (
    <div className="landing legal-page">
      <header className="header">
        <Link to="/" className="header-logo">
          <BookOpen size={28} strokeWidth={2} />
          <span>Album Collect 2026</span>
        </Link>
        <nav className="header-nav">
          <Link to="/">
            <ArrowLeft size={18} style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} />
            Volver al inicio
          </Link>
        </nav>
      </header>
      <main className="legal-main">
        <div className="legal-content">
          <h1 className="legal-title">{title}</h1>
          {children}
        </div>
      </main>
      <footer className="footer footer-legal">
        <div className="footer-bottom">
          <Link to="/privacidad">Privacidad</Link>
          {' · '}
          <Link to="/terminos">Términos</Link>
          {' · '}
          <Link to="/cookies">Cookies</Link>
          <br />
          © {new Date().getFullYear()} Album Collect 2026. No afiliado con FIFA o Panini. Hecho por fans para fans.
        </div>
      </footer>
    </div>
  )
}
