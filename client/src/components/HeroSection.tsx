/**
 * Design Premium - Hero Section Sofisticada (Versão Simplificada)
 * - Gradientes premium com múltiplas camadas
 * - Efeitos visuais elegantes
 * - Animações sutis ao scroll
 * - Tipografia grande e impactante
 */

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002528 0%, #001a1d 30%, #0a3a3f 60%, #003d42 100%)',
      }}
    >
      {/* Elemento decorativo 1 - Topo direita */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c6ac79]/15 to-transparent rounded-full blur-3xl"></div>
      
      {/* Elemento decorativo 2 - Meio esquerda */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-tr from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(90deg, #c6ac79 1px, transparent 1px), linear-gradient(#c6ac79 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-10">
          
          {/* Título Principal com gradiente */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-center max-w-4xl">
            Defendendo seus{' '}
            <span style={{
              background: 'linear-gradient(135deg, #c6ac79 0%, #e8dcc0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>direitos</span> com excelência e comprometimento
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light text-center">
            O escritório MOURA & VIANA oferece soluções jurídicas personalizadas com ética, transparência e resultados. Especialistas em direito de família, previdenciário, trabalhista e muito mais.
          </p>

          {/* CTAs com efeitos premium */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a
              href="https://wa.me/556282459559"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              style={{
                boxShadow: '0 10px 30px rgba(198, 172, 121, 0.3)'
              }}>
              Agende sua Consulta
            </a>
            <a
              href="#services"
              className="px-10 py-4 border-2 border-[#c6ac79] text-[#c6ac79] rounded-lg font-semibold hover:bg-[#c6ac79]/10 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center"
              style={{
                boxShadow: '0 0 20px rgba(198, 172, 121, 0.1)'
              }}>
              Conheça Nossas Áreas
            </a>
          </div>

          {/* Scroll indicator com animação suave */}
          <div className="pt-16 flex flex-col items-center gap-2 text-white/60 text-sm text-center">
            <p className="uppercase tracking-widest text-xs">Deslize para conhecer</p>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}