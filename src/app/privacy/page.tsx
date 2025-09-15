import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 relative overflow-hidden">
      {/* Light cloud background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 via-white/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-80 h-16 bg-white/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-64 h-12 bg-white/35 rounded-full blur-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/60 via-blue-50/30 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600">
            Pronóstico Bardero
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Última actualización: 15 de septiembre de 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
            <p className="text-gray-700 leading-relaxed">
              Pronóstico Bardero (&ldquo;nosotros&rdquo;, &ldquo;la aplicación&rdquo;) respeta su privacidad y se compromete a proteger sus datos personales. 
              Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestra aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Información de Ubicación</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para proporcionar pronósticos meteorológicos precisos, la aplicación solicita acceso a su ubicación. 
                  Esta información se utiliza únicamente para obtener datos meteorológicos de su área y no se almacena 
                  en nuestros servidores ni se comparte con terceros.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Datos de Uso</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos recopilar información sobre cómo utiliza la aplicación, incluyendo las funciones que usa 
                  y el tiempo que pasa en la aplicación. Esta información es anónima y se utiliza para mejorar 
                  nuestros servicios.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Usamos su Información</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proporcionar pronósticos meteorológicos precisos para su ubicación</li>
              <li>Personalizar el contenido y las notificaciones meteorológicas</li>
              <li>Mejorar la funcionalidad y el rendimiento de la aplicación</li>
              <li>Analizar el uso de la aplicación para optimizar la experiencia del usuario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intercambio de Información</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>No vendemos, intercambiamos ni transferimos</strong> su información personal a terceros. 
              Su ubicación y datos de uso permanecen privados y seguros. Solo compartimos información cuando:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Es requerido por ley o proceso legal</li>
              <li>Es necesario para proteger nuestros derechos o seguridad</li>
              <li>Cuenta con su consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Servicios de Terceros</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.1 APIs de Clima</h3>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos servicios de terceros para obtener datos meteorológicos (como OpenMeteo). 
                  Estos servicios pueden recibir su ubicación para proporcionar pronósticos precisos, 
                  pero no almacenamos esta información.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.2 Google Play Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  La aplicación puede utilizar Google Play Services para funcionalidades del sistema. 
                  Consulte la política de privacidad de Google para obtener más información sobre 
                  cómo Google maneja los datos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger 
              su información personal contra acceso no autorizado, alteración, divulgación o destrucción. 
              Sin embargo, ningún método de transmisión por internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              No almacenamos su información de ubicación de manera persistente. Los datos de ubicación 
              se utilizan temporalmente para obtener pronósticos meteorológicos y luego se descartan. 
              Los datos de uso anónimos pueden conservarse para análisis y mejoras de la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Revocar el permiso de ubicación en cualquier momento a través de la configuración de su dispositivo</li>
              <li>Solicitar información sobre los datos que procesamos</li>
              <li>Solicitar la eliminación de sus datos (cuando sea aplicable)</li>
              <li>Presentar una queja ante las autoridades de protección de datos competentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Aplicaciones para Menores</h2>
            <p className="text-gray-700 leading-relaxed">
              Pronóstico Bardero no está dirigida específicamente a menores de 13 años. 
              No recopilamos conscientemente información personal de niños menores de 13 años. 
              Si descubrimos que hemos recopilado información personal de un menor de 13 años, 
              la eliminaremos inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Publicidad</h2>
            <p className="text-gray-700 leading-relaxed">
              Actualmente, Pronóstico Bardero <strong>no contiene anuncios</strong> de terceros. 
              Si en el futuro implementamos publicidad, actualizaremos esta política de privacidad 
              para reflejar cómo se manejan los datos relacionados con la publicidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios en esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre 
              cambios importantes mediante una notificación en la aplicación o actualizando la fecha 
              de &ldquo;última actualización&rdquo; en la parte superior de esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Si tiene preguntas sobre esta política de privacidad o nuestras prácticas de datos, 
              puede contactarnos en:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-800">
                <strong>Email:</strong> panzaguardattigianluca@gmail.com<br/>
                <strong>Asunto:</strong> Consulta sobre Política de Privacidad - Pronóstico Bardero
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta política de privacidad se rige por las leyes de Argentina. Para usuarios de la 
              Unión Europea, también cumplimos con el Reglamento General de Protección de Datos (GDPR).
            </p>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
