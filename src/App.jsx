import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import CookieBanner from './components/CookieBanner'
import LandingPage from './pages/LandingPage'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import Cookies from './pages/Cookies'

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
