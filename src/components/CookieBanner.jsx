import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'albumtracker_cookie_consent'
const COOKIE_CONSENT_EXPIRY_MONTHS = 12

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const { choice, expires } = JSON.parse(raw)
    if (expires && new Date(expires) < new Date()) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      return null
    }
    return choice
  } catch {
    return null
  }
}

function setStoredConsent(choice) {
  const expires = new Date()
  expires.setMonth(expires.getMonth() + COOKIE_CONSENT_EXPIRY_MONTHS)
  localStorage.setItem(
    COOKIE_CONSENT_KEY,
    JSON.stringify({ choice, expires: expires.toISOString() })
  )
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [analytics, setAnalytics] = useState(true)

  useEffect(() => {
    const consent = getStoredConsent()
    if (consent === null) setVisible(true)
  }, [])

  const hide = (choice) => {
    setStoredConsent(choice)
    setVisible(false)
    setPreferencesOpen(false)
    // Aquí podrías activar/desactivar scripts de analytics según choice.analytics
  }

  const acceptAll = () => hide({ essential: true, analytics: true })
  const acceptEssentialOnly = () => hide({ essential: true, analytics: false })
  const savePreferences = () => hide({ essential: true, analytics })

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-content">
          <div className="cookie-banner-icon">
            <Cookie size={24} aria-hidden />
          </div>
          <div>
            <p className="cookie-banner-title">Usamos cookies</p>
            <p className="cookie-banner-text">
              Utilizamos cookies propias para el funcionamiento de la web y para recordar tu preferencia.
              Opcionalmente, cookies de análisis para mejorar la experiencia. Puedes aceptar todas, solo las
              necesarias o personalizar en «Preferencias». Más información en nuestra{' '}
              <Link to="/cookies" className="cookie-banner-link" onClick={() => setPreferencesOpen(false)}>
                política de cookies
              </Link>.
            </p>
          </div>
        </div>

        {!preferencesOpen ? (
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-secondary"
              onClick={() => setPreferencesOpen(true)}
            >
              Preferencias
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-outline"
              onClick={acceptEssentialOnly}
            >
              Solo necesarias
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-primary"
              onClick={acceptAll}
            >
              Aceptar todas
            </button>
          </div>
        ) : (
          <div className="cookie-preferences">
            <div className="cookie-pref-row">
              <span>Cookies esenciales</span>
              <span className="cookie-pref-badge">Siempre activas</span>
            </div>
            <div className="cookie-pref-row">
              <label className="cookie-pref-label">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Cookies de análisis (uso de la web)
              </label>
            </div>
            <div className="cookie-banner-actions cookie-pref-actions">
              <button
                type="button"
                className="cookie-btn cookie-btn-outline"
                onClick={() => setPreferencesOpen(false)}
              >
                Volver
              </button>
              <button
                type="button"
                className="cookie-btn cookie-btn-primary"
                onClick={savePreferences}
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          className="cookie-banner-close"
          onClick={acceptEssentialOnly}
          aria-label="Cerrar y aceptar solo necesarias"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
