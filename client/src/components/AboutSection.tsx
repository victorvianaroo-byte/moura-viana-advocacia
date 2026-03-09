import { Users, Zap, Shield, Heart, Lightbulb } from 'lucide-react';

/**
 * Design Premium - About Section (Versão com Mais Respiro)
 * - Espaçamento ampliado (gap-12) para evitar a sensação de "tudo junto"
 * - Cartões maiores com mais preenchimento (p-10)
 * - Layout equilibrado para 5 diferenciais
 */

export default function AboutSection() {
  const diferenciais = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com empatia, compreendendo suas necessidades além do aspecto jurídico.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais com vasta experiência em suas respectivas áreas de atuação jurídica.'
    },
    {
      icon: Shield,
      title: 'Transparência Total',
      description: 'Mantemos nossos clientes informados em cada etapa do processo, sem surpresas.'
    },
    {
      icon: Zap,
      title: 'Agilidade Processual',
      description: 'Utilizamos tecnologia avançada para acelerar processos e entregar resultados mais rápidos.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Jurídica',
      description: 'Atualizados com as últimas tendências e jurisprudência do direito brasileiro.'
    }
  ];

  return (
    <section
      id="about"
      className="py-32 md:py-48 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002528 0%, #001a1d 50%, #0a3a3f 100%)',
      }}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#c6ac79]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-6">
            Sobre Nós
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
            MOURA & VIANA
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Dedicados à excelência jurídica e ao atendimento humanizado
          </p>
        </div>

        {/* Nosso Compromisso - Mais Amplo */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="space-y-8 bg-white/5 p-12 rounded-3xl border border-[#c6ac79]/10 backdrop-blur-sm">
            <h3 className="text-3xl font-serif font-bold text-[#c6ac79]">Nosso Compromisso</h3>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Acreditamos que cada caso é único e merece atenção especial. Por isso, trabalhamos incansavelmente para encontrar as melhores soluções jurídicas, sempre com foco nos objetivos e necessidades específicas de quem confia em nosso trabalho.
            </p>
          </div>
        </div>

        {/* Nossos Diferenciais - Grid com Mais Espaço */}
        <div>
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Nossos Diferenciais</h3>
            <p className="text-white/60 max-w-2xl mx-auto font-light text-lg italic">O que nos torna únicos no mercado jurídico</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-12">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden relative flex flex-col items-center text-center w-full md:w-[calc(50%-24px)] lg:w-[calc(33.33%-32px)]"
                  style={{
                    background: 'rgba(15, 42, 45, 0.6)',
                    border: '1px solid rgba(198, 172, 121, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Ícone com gradiente */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c6ac79] to-[#e8dcc0] rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300 shadow-[0_10px_25px_rgba(198,172,121,0.3)]">
                    <Icon size={32} className="text-[#002528]" />
                  </div>

                  {/* Conteúdo */}
                  <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#c6ac79] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-lg leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Elemento decorativo ao hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}