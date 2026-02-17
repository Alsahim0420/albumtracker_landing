import './App.css'
import {
  BookOpen,
  Download,
  Play,
  Check,
  BarChart3,
  Zap,
  Cloud,
  Shield,
  Twitter,
  Youtube,
  LayoutGrid,
  ArrowLeftRight,
} from 'lucide-react'

function MobileMockup({ variant = 'filled' }) {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className={`phone-screen phone-screen--${variant}`}>
          <div className="phone-header">
            <span>Mi Álbum</span>
            <span className="phone-percent">{variant === 'filled' ? '88%' : ''} Completado</span>
          </div>
          {variant === 'filled' && (
            <>
              <div className="phone-stats">
                <div><strong>452</strong> Total</div>
                <div><strong>12</strong> Repes</div>
                <div><strong>218</strong> Faltan</div>
              </div>
              <div className="phone-grid-label">ARGENTINA</div>
              <div className="phone-sticker-grid">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className={`sticker ${i % 6 === 2 ? 'sticker--repeated' : i < 8 ? 'sticker--filled' : ''}`}
                  />
                ))}
              </div>
            </>
          )}
          {variant === 'empty' && (
            <div className="phone-empty-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="empty-slot" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <BookOpen size={28} strokeWidth={2} />
          <span>Album Tracker</span>
        </div>
        <nav className="header-nav">
          <a href="#caracteristicas">Características</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#testimonios">Testimonios</a>
        </nav>
        <div className="header-actions">
          <a href="#" className="btn btn-primary">
            <Download size={18} />
            Descargar App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Controla tu álbum del Mundial 2026 fácilmente</h1>
          <p className="hero-desc">
            La herramienta profesional para coleccionistas serios. Sin anuncios molestos,
            sincronización en la nube instantánea y estadísticas detalladas en tiempo real.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary btn-lg">
              <Download size={20} />
              Descargar en Play Store
            </a>
            <a href="#como-funciona" className="btn btn-outline btn-lg">
              <Play size={20} />
              Ver cómo funciona
            </a>
          </div>
          <div className="hero-badges">
            <span><Check size={16} /> Gratis</span>
            <span><Check size={16} /> Sin Anuncios</span>
            <span><Check size={16} /> Modo Offline</span>
          </div>
        </div>
        <div className="hero-mockup">
          <MobileMockup variant="filled" />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="trust-banner">
        <span><Shield size={18} /> 100% Sin Publicidad</span>
        <span><Shield size={18} /> Firebase Secured</span>
        <span><Shield size={18} /> Hecho por Fans</span>
        <span><Shield size={18} /> Actualizaciones Semanales</span>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="features">
        <h2>Todo lo que necesitas para completar tu colección</h2>
        <p className="features-subtitle">Diseñado para que te concentres en intercambiar y completar, no en organizar.</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Check size={28} /></div>
            <h3>Marcado Rápido</h3>
            <p>Marca las estampas que te salieron con un solo toque, interfaz optimizada para velocidad.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><BarChart3 size={28} /></div>
            <h3>Estadísticas Reales</h3>
            <p>Visualiza tu progreso con gráficos detallados, faltantes, repetidas y porcentaje total.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Zap size={28} /></div>
            <h3>Control de Repetidas</h3>
            <p>Gestiona tus sobres y repes para hacer cambios inteligentes con tus amigos.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Cloud size={28} /></div>
            <h3>Nube Segura</h3>
            <p>Tus datos se almacenan en la nube. Cambia de dispositivo sin perder tu progreso.</p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="how-it-works">
        <span className="section-label">PROCESO SIMPLE</span>
        <h2>Cómo empezar en 3 pasos</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon"><Download size={32} /></div>
            <h3>Descarga la App</h3>
            <p>Disponible gratis en Play Store. Crea tu cuenta en segundos o entra como invitado.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon"><LayoutGrid size={32} /></div>
            <h3>Registra tus Estampas</h3>
            <p>Abre tus sobres y marca rápidamente las que te salieron en la vista de cuadrícula.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon"><ArrowLeftRight size={32} /></div>
            <h3>Intercambia y Completa</h3>
            <p>Usa tu lista de repetidas para hacer cambios inteligentes con tus amigos.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Prepárate para completar tu álbum</h2>
          <p>Únete a miles de coleccionistas que ya están usando Album Tracker para organizar su pasión.</p>
          <a href="#" className="btn btn-accent btn-lg">
            <Download size={20} />
            Descargar Gratis
          </a>
        </div>
        <div className="cta-banner-mockup">
          <MobileMockup variant="empty" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <BookOpen size={24} />
              <span>Album Tracker</span>
            </div>
            <p>La herramienta definitiva para los amantes del coleccionismo deportivo.</p>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Producto</h4>
            <a href="#caracteristicas">Características</a>
            <a href="#">Descarga</a>
            <a href="#">Novedades</a>
          </div>
          <div className="footer-links">
            <h4>Recursos</h4>
            <a href="#">Guía de inicio</a>
            <a href="#">Ideas de intercambio</a>
            <a href="#">Soporte</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 Album Tracker. No afiliado con FIFA o Panini. Hecho por fans para fans.
        </div>
      </footer>
    </div>
  )
}

export default App
