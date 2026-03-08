import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import CookieBanner from './components/CookieBanner'
import LandingPage from './pages/LandingPage'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import Cookies from './pages/Cookies'

function MobileMockup({ variant = 'filled', image, video }) {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className={`phone-screen phone-screen--${variant}`}>
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="mockup-video"
            />
          ) : image ? (
            <img
              src={image}
              alt="App preview"
              className="mockup-image"
            />
          ) : (
            <>
              <div className="phone-header">
                <span>Mi Álbum</span>
                <span className="phone-percent">
                  {variant === 'filled' ? '88%' : ''} Completado
                </span>
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
                        className={`sticker ${
                          i % 6 === 2 ? 'sticker--repeated' : i < 8 ? 'sticker--filled' : ''
                        }`}
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
