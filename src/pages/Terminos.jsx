import LegalLayout from '../components/LegalLayout'

export default function Terminos() {
  return (
    <LegalLayout title="Términos de Uso">
      <p className="legal-updated">Última actualización: febrero 2025</p>

      <section className="legal-section">
        <h2>1. Aceptación</h2>
        <p>
          Al usar la web o la aplicación Album Tracker aceptas estos términos. Si no estás de acuerdo, no utilices el servicio.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Descripción del servicio</h2>
        <p>
          Album Tracker es una herramienta para que los usuarios registren y gestionen el progreso de sus álbumes
          de colección (por ejemplo, álbumes de figuras deportivas). Ofrecemos funcionalidades como marcado de
          estampas, estadísticas y sincronización en la nube.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Uso permitido</h2>
        <p>Te comprometes a:</p>
        <ul>
          <li>Usar la app y la web de forma lícita y respetuosa.</li>
          <li>No realizar usos que sobrecarguen, dañen o comprometan la seguridad del servicio.</li>
          <li>No suplantar identidades ni usar la app para fines fraudulentos.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>4. Propiedad intelectual</h2>
        <p>
          Album Tracker no está afiliado con FIFA, Panini ni otras marcas de álbumes. Las marcas y contenidos
          de terceros son propiedad de sus respectivos titulares. Nos reservamos los derechos sobre el diseño,
          código y materiales propios de la app y la web.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Limitación de responsabilidad</h2>
        <p>
          El servicio se ofrece «tal cual». No nos hacemos responsables de daños indirectos o derivados del uso
          de la app o la web, salvo en los casos que la ley no permita limitar.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Modificaciones y baja</h2>
        <p>
          Podemos modificar estos términos; los cambios se publicarán aquí. El uso continuado implica aceptación.
          Puedes dejar de usar el servicio en cualquier momento; para dar de baja tu cuenta, utiliza la opción
          correspondiente en la app o contacta con soporte.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Contacto</h2>
        <p>
          Para dudas sobre estos términos, utiliza el correo o canal de soporte indicado en la aplicación o en esta web.
        </p>
      </section>
    </LegalLayout>
  )
}
