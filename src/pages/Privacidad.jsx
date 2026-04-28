import LegalLayout from '../components/LegalLayout'

export default function Privacidad() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p className="legal-updated">Última actualización: marzo 2026</p>

      <section className="legal-section">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Album Collect 2026 («nosotros», «la app») es una aplicación para el seguimiento de álbumes de colección.
        </p>
        <p>
          Esta aplicación es un proyecto independiente y no está afiliada ni asociada oficialmente con FIFA, Panini u otras marcas de álbumes de colección.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Información que utilizamos</h2>
        <p>
          La aplicación no recopila ni almacena datos personales de los usuarios en servidores externos.
        </p>
        <p>
          Toda la información relacionada con el uso de la app se almacena localmente en el dispositivo del usuario para permitir el funcionamiento de la aplicación.
        </p>
        <p>Los datos que pueden almacenarse localmente incluyen:</p>
        <ul>
          <li>Datos de uso dentro de la aplicación</li>
          <li>Progreso del álbum</li>
          <li>Estampas registradas</li>
          <li>Preferencias de la aplicación</li>
        </ul>
        <p>
          Estos datos permanecen únicamente en el dispositivo del usuario y no se transmiten a servidores externos.
        </p>
        <p>
          La app no utiliza servicios de analítica de terceros, no integra publicidad y no comparte información con terceros.
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Finalidad del uso de la información</h2>
        <p>La información almacenada localmente se utiliza únicamente para:</p>
        <ul>
          <li>Permitir el funcionamiento de la aplicación</li>
          <li>Guardar el progreso del álbum</li>
          <li>Mantener las preferencias del usuario</li>
          <li>Mejorar la experiencia dentro de la app</li>
        </ul>
        <p>La aplicación no vende, comparte ni transfiere datos personales a terceros.</p>
      </section>

      <section className="legal-section">
        <h2>4. Almacenamiento de la información</h2>
        <p>
          Toda la información generada por el usuario se almacena exclusivamente en el dispositivo mediante almacenamiento local.
        </p>
        <p>
          Si el usuario elimina la aplicación, los datos almacenados localmente pueden eliminarse del dispositivo según la configuración del sistema operativo.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Seguridad</h2>
        <p>
          Aunque la aplicación no recopila datos personales en servidores externos, aplicamos buenas prácticas de desarrollo para garantizar un funcionamiento seguro.
        </p>
        <p>
          No obstante, ningún sistema tecnológico puede garantizar una seguridad absoluta.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Derechos del usuario</h2>
        <p>
          Dado que la aplicación no recopila datos personales en servidores, el usuario mantiene control total sobre la información almacenada en su dispositivo.
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
