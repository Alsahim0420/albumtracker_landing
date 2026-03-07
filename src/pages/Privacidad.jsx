import LegalLayout from '../components/LegalLayout'

export default function Privacidad() {
  return (
    <LegalLayout title="Política de Privacidad">
      <p className="legal-updated">Última actualización: febrero 2025</p>

      <section className="legal-section">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Album Collect 2026 («nosotros», «la app») es una aplicación para el seguimiento de álbumes de colección.
          Los datos que recopilamos en esta web y en la aplicación son tratados de acuerdo con esta política.
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Datos que recopilamos</h2>
        <p>Podemos recopilar:</p>
        <ul>
          <li><strong>Datos de cuenta:</strong> email y nombre si te registras.</li>
          <li><strong>Datos de uso:</strong> progreso de tu álbum, preferencias de la app (almacenados de forma segura).</li>
          <li><strong>Datos técnicos:</strong> tipo de dispositivo, sistema operativo y uso de la web (cookies según tu elección).</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Usamos tus datos para ofrecer y mejorar el servicio (sincronización en la nube, estadísticas,
          soporte) y, si lo autorizas, para comunicaciones o análisis. No vendemos tus datos personales.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Base legal y conservación</h2>
        <p>
          El tratamiento se basa en tu consentimiento, la ejecución del servicio o nuestro interés legítimo
          cuando aplique. Conservamos los datos mientras mantengas la cuenta o sea necesario para la finalidad indicada.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Tus derechos</h2>
        <p>
          Puedes acceder, rectificar, suprimir tus datos, oponerte o limitar el tratamiento y portar tus datos.
          Para ejercerlos o consultas sobre privacidad, escríbenos al correo de soporte indicado en la app o en esta web.
        </p>
      </section>

      <section className="legal-section">
        <h2>6. Cambios</h2>
        <p>
          Podemos actualizar esta política. Los cambios relevantes se comunicarán en la app o por email cuando sea necesario.
        </p>
      </section>
    </LegalLayout>
  )
}
