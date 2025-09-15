import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 relative overflow-hidden">
      {/* Cloud Background with Fades */}
      <div className="absolute inset-0">
        {/* Top fade clouds */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/60 via-white/30 to-transparent"></div>
        
        {/* Large background clouds */}
        <div className="absolute top-10 left-20 w-96 h-24 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-80 h-20 bg-white/50 rounded-full blur-lg"></div>
        <div className="absolute top-48 left-1/3 w-72 h-16 bg-white/35 rounded-full blur-xl"></div>
        
        {/* Middle layer clouds */}
        <div className="absolute top-64 right-1/4 w-64 h-12 bg-white/45 rounded-full blur-lg"></div>
        <div className="absolute top-80 left-12 w-56 h-14 bg-white/40 rounded-full blur-xl"></div>
        <div className="absolute top-96 right-8 w-48 h-10 bg-white/55 rounded-full blur-lg"></div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-100/80 via-blue-50/40 to-transparent"></div>
        
        {/* Small scattered clouds */}
        <div className="absolute top-72 left-1/2 w-32 h-8 bg-white/30 rounded-full blur-md"></div>
        <div className="absolute top-40 right-1/3 w-40 h-6 bg-white/35 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-9 bg-white/40 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Pronóstico{" "}
              <span className="text-blue-600">Bardero</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-lg">
              La app del clima más divertida de Argentina. Con insultos creativos que te van a hacer cagar de risa.
            </p>
            
            <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center gap-3 text-lg font-medium hover:bg-gray-800 transition-colors mx-auto lg:mx-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Ver en Google Play
            </button>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-[2.5rem] p-6 w-64 h-[32rem] flex flex-col items-center justify-center text-white relative overflow-hidden">
                {/* Phone screen clouds */}
                <div className="absolute top-4 left-4 w-20 h-4 bg-white/20 rounded-full blur-sm"></div>
                <div className="absolute top-8 right-6 w-16 h-3 bg-white/15 rounded-full blur-sm"></div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Buenos Aires</div>
                  <div className="text-5xl font-bold mb-2">22°C</div>
                  <div className="text-blue-100 mb-6">Nublado</div>
                  
                  <div className="bg-black/20 rounded-lg p-4 text-sm italic max-w-48">
                    &ldquo;Nublado otra vez, la puta madre. Día re contra gris del carajo.&rdquo;
                  </div>
                </div>
                
                {/* More phone clouds */}
                <div className="absolute bottom-8 left-8 w-12 h-2 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute bottom-16 right-4 w-14 h-3 bg-white/15 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">© 2025 Pronóstico Bardero. Hecho en Argentina 🇦🇷</p>
          <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
            Política de Privacidad
          </Link>
        </div>
      </footer>
    </div>
  )
}
