import LegalLayout from '../components/LegalLayout'

export default function Terminos() {
  return (
    <LegalLayout title="Términos de Uso">
      <p className="legal-updated">Última actualización: marzo 2025</p>

      <section className="legal-section">
        <h2>1. Aceptación</h2>
        <p>
          Al usar la web o la aplicación Album Collect 2026 aceptas estos términos. Si no estás de acuerdo con ellos, debes abstenerte de utilizar el servicio.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Descripción del servicio</h2>
        <p>
          Album Collect 2026 es una herramienta que permite a los usuarios registrar y gestionar el progreso de sus álbumes de colección (por ejemplo, álbumes de figuras deportivas).
        </p>
        <p>Las funcionalidades pueden incluir, entre otras:</p>
        <ul>
          <li>Registro y marcado de estampas</li>
          <li>Estadísticas de progreso</li>
          <li>Gestión de repetidas</li>
          <li>Sincronización de datos en la nube</li>
        </ul>
        <p>El servicio puede cambiar, actualizarse o modificarse en cualquier momento.</p>
      </section>

      <section className="legal-section">
        <h2>3. Uso permitido</h2>
        <p>Te comprometes a utilizar el servicio de manera responsable y conforme a la ley. En particular, aceptas no:</p>
        <ul>
          <li>Usar la aplicación con fines ilegales o fraudulentos</li>
          <li>Interferir con el funcionamiento del servicio</li>
          <li>Intentar acceder sin autorización a sistemas o datos</li>
          <li>Suplantar la identidad de otros usuarios</li>
        </ul>
        <p>Nos reservamos el derecho de suspender el acceso a usuarios que incumplan estos términos.</p>
      </section>

      <section className="legal-section">
        <h2>4. Propiedad intelectual</h2>
        <p>
          Album Collect 2026 no está afiliado con FIFA, Panini ni otras marcas comerciales relacionadas con álbumes de colección.
        </p>
        <p>Las marcas, logotipos y contenidos de terceros pertenecen a sus respectivos titulares.</p>
        <p>
          El diseño, código, interfaz, textos y elementos propios de Album Collect 2026 son propiedad de sus desarrolladores y no pueden copiarse, distribuirse o reutilizarse sin autorización.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Datos y almacenamiento</h2>
        <p>
          El progreso del usuario puede almacenarse localmente en el dispositivo o sincronizarse mediante servicios en la nube (por ejemplo, Firebase).
        </p>
        <p>
          El usuario es responsable de mantener acceso a su cuenta o dispositivo. No garantizamos la disponibilidad permanente de los datos.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Limitación de responsabilidad</h2>
        <p>
          El servicio se ofrece «tal cual» y «según disponibilidad».
        </p>
        <p>
          Album Collect 2026 no garantiza que el servicio esté libre de errores o interrupciones y no será responsable por daños indirectos, pérdida de datos o interrupciones del servicio, salvo cuando la ley aplicable no permita dicha limitación.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Modificaciones del servicio o de los términos</h2>
        <p>Podemos actualizar o modificar estos términos en cualquier momento.</p>
        <p>
          Las modificaciones se publicarán en esta página y entrarán en vigor desde su publicación. El uso continuado del servicio implica la aceptación de los nuevos términos.
        </p>
      </section>

      <section className="legal-section">
        <h2>8. Terminación del uso</h2>
        <p>El usuario puede dejar de utilizar el servicio en cualquier momento.</p>
        <p>
          También podemos suspender o limitar el acceso al servicio en caso de uso indebido o incumplimiento de estos términos.
        </p>
      </section>

      <section className="legal-section">
        <h2>9. Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos, puedes contactar a través del correo o canal de soporte indicado en la aplicación o en esta web.
        </p>
      </section>
    </LegalLayout>
  )
}
