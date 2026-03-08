import { Link } from 'react-router-dom'
import LegalLayout from '../components/LegalLayout'

export default function Cookies() {
  return (
    <LegalLayout title="Política de Cookies">
      <p className="legal-updated">Última actualización: marzo 2026</p>

      <section className="legal-section">
        <h2>1. Qué son las cookies</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web pueden guardar en tu dispositivo para recordar preferencias, analizar el uso o mejorar la experiencia de navegación.
        </p>
        <p>
          Esta política se aplica únicamente a la versión web de Album Collect 2026.
          La aplicación móvil no utiliza cookies.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Cookies que utilizamos</h2>
        <p>Actualmente esta web puede utilizar únicamente las siguientes cookies:</p>
        <p><strong>Cookies esenciales</strong></p>
        <p>
          Son necesarias para el funcionamiento básico del sitio web, por ejemplo para recordar tu elección sobre el uso de cookies. Estas cookies no requieren consentimiento.
        </p>
        <p><strong>Cookies de preferencias</strong></p>
        <p>
          Permiten guardar tus preferencias sobre el uso de cookies (por ejemplo, aceptar todas o solo las necesarias) para que no tengamos que preguntarte en cada visita.
        </p>
        <p>En este momento no utilizamos cookies de análisis ni de publicidad.</p>
      </section>

      <section className="legal-section">
        <h2>3. Cómo gestionar tus preferencias</h2>
        <p>Cuando accedes a la web por primera vez verás un aviso de cookies donde puedes elegir entre:</p>
        <ul>
          <li>Aceptar todas las cookies</li>
          <li>Utilizar solo las necesarias</li>
          <li>Consultar más información en esta página</li>
        </ul>
        <p>
          Tu elección se guarda en tu navegador y no se solicitará nuevamente hasta que la cookie expire o borres las cookies del navegador.
        </p>
        <p>
          También puedes modificar o eliminar cookies desde la configuración de tu navegador.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Duración de las cookies</h2>
        <p>
          Las cookies de preferencias pueden conservarse durante un período determinado (por ejemplo, hasta 12 meses) para recordar tu elección sobre el uso de cookies.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Más información</h2>
        <p>
          Para más información sobre cómo tratamos los datos personales, consulta nuestra{' '}
          <Link to="/privacidad">Política de Privacidad</Link>.
        </p>
        <p>
          Si tienes dudas sobre esta política, puedes contactarnos a través del correo o canal de soporte indicado en la aplicación o en esta web.
        </p>
      </section>
    </LegalLayout>
  )
}
