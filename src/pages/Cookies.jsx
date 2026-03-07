import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'

export default function Cookies() {
  return (
    <LegalLayout title="Política de Cookies">
      <p className="legal-updated">Última actualización: febrero 2025</p>

      <section className="legal-section">
        <h2>1. Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web pueden guardar en tu dispositivo para
          recordar preferencias, analizar el uso o mejorar la experiencia. En esta web usamos cookies propias
          y, si las aceptas, de análisis.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Cookies que utilizamos</h2>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico (por ejemplo, recordar
            tu elección de cookies). No requieren consentimiento.
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> guardan tu decisión sobre cookies (aceptar / solo necesarias)
            para no mostrarte el aviso en cada visita.
          </li>
          <li>
            <strong>Cookies de análisis (opcionales):</strong> si las aceptas, nos ayudan a entender cómo se usa
            la web (páginas visitadas, origen del tráfico) de forma agregada y anónima.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Cómo gestionar tus preferencias</h2>
        <p>
          Al entrar en la web verás un aviso de cookies donde puedes elegir «Aceptar todas», «Solo necesarias»
          o leer más en esta página. Tu elección se guarda en tu navegador y no te pedimos de nuevo el
          consentimiento hasta que caduque o borres las cookies. Puedes cambiar la configuración en cualquier
          momento desde la opción de cookies en el pie de página o desde la configuración de tu navegador.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Duración y terceros</h2>
        <p>
          Las cookies de preferencia se conservan según lo indicado en el aviso (por ejemplo, 12 meses). Las
          de análisis, si las aceptas, pueden ser propias o de servicios de terceros que cumplen normativa de
          privacidad. No vendemos la información recogida por cookies.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Más información</h2>
        <p>
          Para más detalles sobre el tratamiento de datos, consulta nuestra{' '}
          <Link to="/privacidad">Política de Privacidad</Link>. Si tienes dudas, contacta con nosotros a través
          del correo o canal de soporte indicado en la web o en la app.
        </p>
      </section>
    </LegalLayout>
  )
}
