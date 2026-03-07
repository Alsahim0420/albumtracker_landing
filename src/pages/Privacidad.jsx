import LegalLayout from '../components/LegalLayout'

export default function Privacidad() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p className="legal-updated">Última actualización: febrero 2025</p>

      <section className="legal-section">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Album Collect 2026 («nosotros», «la app») es una aplicación para el seguimiento de álbumes de colección. Los datos que recopilamos en esta web y en la aplicación se tratan de acuerdo con esta política.
        </p>
        <p>
          Esta aplicación es un proyecto independiente y no está afiliada ni asociada oficialmente con FIFA, Panini u otras marcas de álbumes de colección.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Datos que recopilamos</h2>
        <p>Podemos recopilar los siguientes tipos de información:</p>
        <p><strong>Datos de cuenta</strong></p>
        <p>Email y nombre si decides registrarte en la aplicación.</p>
        <p><strong>Datos de uso</strong></p>
        <p>
          Progreso de tu álbum, estampas registradas y preferencias de la aplicación.
          Estos datos pueden almacenarse localmente en el dispositivo del usuario para permitir el funcionamiento de la app.
        </p>
        <p><strong>Datos técnicos</strong></p>
        <p>
          Información básica como tipo de dispositivo, sistema operativo y uso de la web. En la web pueden utilizarse cookies según tu configuración.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Finalidad del tratamiento</h2>
        <p>Usamos los datos para:</p>
        <ul>
          <li>Permitir el funcionamiento de la aplicación</li>
          <li>Guardar el progreso del álbum</li>
          <li>Mejorar la experiencia del usuario</li>
          <li>Proporcionar soporte técnico</li>
        </ul>
        <p>No vendemos ni compartimos tus datos personales con terceros con fines comerciales.</p>
      </section>

      <section className="legal-section">
        <h2>4. Base legal y conservación</h2>
        <p>El tratamiento de los datos se basa en:</p>
        <ul>
          <li>Tu consentimiento al utilizar la aplicación</li>
          <li>La ejecución del servicio que ofrecemos</li>
        </ul>
        <p>
          Conservamos los datos mientras sea necesario para proporcionar las funcionalidades de la aplicación o mientras mantengas tu cuenta activa.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Seguridad de los datos</h2>
        <p>
          Aplicamos medidas razonables para proteger la información del usuario contra accesos no autorizados o usos indebidos.
        </p>
        <p>
          No obstante, ningún sistema en internet puede garantizar una seguridad absoluta.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Derechos del usuario</h2>
        <p>Puedes solicitar en cualquier momento:</p>
        <ul>
          <li>Acceso a tus datos</li>
          <li>Corrección de información incorrecta</li>
          <li>Eliminación de tus datos</li>
          <li>Limitación u oposición al tratamiento</li>
        </ul>
        <p>
          Para ejercer estos derechos o realizar consultas sobre privacidad, puedes escribir al correo de soporte indicado en la aplicación o en esta web.
        </p>
      </section>

      <section className="legal-section">
        <h2>7. Cambios en esta política</h2>
        <p>Podemos actualizar esta política de privacidad en cualquier momento.</p>
        <p>
          Los cambios relevantes se publicarán en esta página o dentro de la aplicación.
        </p>
      </section>
    </LegalLayout>
  )
}
