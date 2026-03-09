/**
 * Design Premium - Hero Section Sofisticada
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
        <div className="space-y-8">
          {/* Badge com efeito glow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c6ac79]/15 border border-[#c6ac79]/50 rounded-full backdrop-blur-sm hover:bg-[#c6ac79]/25 transition-all duration-300" style={{
            boxShadow: '0 0 20px rgba(198, 172, 121, 0.2)'
          }}>
            <span className="w-2 h-2 bg-[#c6ac79] rounded-full animate-pulse"></span>
            <p className="text-sm font-semibold text-[#c6ac79] uppercase tracking-widest">
              Excelência em direito há mais de 20 anos
            </p>
          </div>
          <div className="h-2"></div>

          {/* Título Principal com gradiente */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight text-center">
            Defendendo seus{' '}
            <span style={{
              background: 'linear-gradient(135deg, #c6ac79 0%, #e8dcc0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>direitos</span> com excelência e comprometimento
          </h1>

          {/* Descrição */}
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed font-light">
            O escritório MOURA & VIANA oferece soluções jurídicas personalizadas com ética, transparência e resultados. Especialistas em direito de família, previdenciário, trabalhista e muito mais.
          </p>

          {/* CTAs com efeitos premium */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/556282459559"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
              style={{
                boxShadow: '0 10px 30px rgba(198, 172, 121, 0.3)'
              }}>
              Agende sua Consulta
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 border-2 border-[#c6ac79] text-[#c6ac79] rounded-lg font-semibold hover:bg-[#c6ac79]/10 transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center"
              style={{
                boxShadow: '0 0 20px rgba(198, 172, 121, 0.1)'
              }}>
              Conheça Nossas Áreas
            </a>
          </div>

          {/* Stats com cards elegantes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-12 border-t border-white/10 mt-8">
            {[
              { value: '+5.000', label: 'Casos de Sucesso' },
              { value: '+3.500', label: 'Clientes Satisfeitos' },
              { value: '20+', label: 'Anos de Experiência' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-[#c6ac79]/10 hover:scale-105"
                style={{
                  background: 'rgba(198, 172, 121, 0.05)',
                  border: '1px solid rgba(198, 172, 121, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#c6ac79]">{stat.value}</p>
                <p className="text-white/70 text-sm mt-2 font-light">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator com animação suave */}
          <div className="pt-8 flex flex-col items-center gap-2 text-white/60 text-sm text-center">
            <p className="uppercase tracking-widest text-xs">Scroll</p>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
