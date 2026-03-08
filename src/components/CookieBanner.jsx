import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'albumcollect_cookie_consent'
const COOKIE_CONSENT_EXPIRY_MONTHS = 12

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const { expires } = JSON.parse(raw)
    if (expires && new Date(expires) < new Date()) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      return null
    }
    return true
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

  useEffect(() => {
    if (getStoredConsent() === null) setVisible(true)
  }, [])

  const hide = (choice) => {
    setStoredConsent(choice)
    setVisible(false)
  }

  const acceptAll = () => hide('all')
  const acceptEssentialOnly = () => hide('essential')

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
              Utilizamos cookies esenciales para el funcionamiento de la web y cookies de preferencias para recordar tu elección. Puedes aceptar todas, utilizar solo las necesarias o consultar más información en nuestra{' '}
              <Link to="/cookies" className="cookie-banner-link">
                política de cookies
              </Link>.
            </p>
          </div>
        </div>

        <div className="cookie-banner-actions">
          <Link to="/cookies" className="cookie-btn cookie-btn-secondary">
            Más información
          </Link>
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
