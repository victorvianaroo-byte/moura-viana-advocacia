import { CheckCircle2, Users, Zap, Shield, Heart, Lightbulb } from 'lucide-react';

/**
 * Design Premium - About Section Sofisticada (Versão Simplificada)
 * - Layout centralizado e elegante
 * - Diferenciais com ícones e design premium
 * - Cards de Missão/Visão/Valores com efeitos visuais
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
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002528 0%, #001a1d 50%, #0a3a3f 100%)',
      }}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#c6ac79]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-4">
            Sobre Nós
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            MOURA & VIANA
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Dedicados à excelência jurídica e ao atendimento humanizado
          </p>
        </div>

        {/* Conteúdo Principal Centralizado */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#c6ac79] mb-4">Nosso Compromisso</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Acreditamos que cada caso é único e merece atenção especial. Por isso, trabalhamos incansavelmente para encontrar as melhores soluções jurídicas, sempre com foco nos objetivos e necessidades específicas de quem confia em nosso trabalho.
            </p>
          </div>
        </div>

        {/* Nossos Diferenciais - Grid Premium */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Nossos Diferenciais</h3>
            <p className="text-white/70 max-w-2xl mx-auto font-light">O que nos torna únicos no mercado jurídico</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden relative"
                  style={{
                    background: 'rgba(15, 42, 45, 0.6)',
                    border: '1px solid rgba(198, 172, 121, 0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 42, 45, 0.9)';
                    e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.5)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(198, 172, 121, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 42, 45, 0.6)';
                    e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Ícone com gradiente */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c6ac79] to-[#e8dcc0] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{
                    boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
                  }}>
                    <Icon size={28} className="text-[#002528]" />
                  </div>

                  {/* Conteúdo */}
                  <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c6ac79] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Elemento decorativo ao hover */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          {[
            {
              title: 'Missão',
              icon: Shield,
              text: 'Proporcionar soluções jurídicas eficientes e personalizadas, defendendo os direitos de nossos clientes com ética, transparência e excelência técnica.'
            },
            {
              title: 'Visão',
              icon: Lightbulb,
              text: 'Ser referência em advocacia especializada, reconhecida pela qualidade dos serviços prestados e pela satisfação de nossos clientes.'
            },
            {
              title: 'Valores',
              icon: Heart,
              text: 'Ética, comprometimento, excelência, transparência, respeito ao cliente e constante atualização profissional.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'rgba(15, 42, 45, 0.6)',
                  border: '1px solid rgba(198, 172, 121, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(15, 42, 45, 0.9)';
                  e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(198, 172, 121, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(15, 42, 45, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#c6ac79] to-[#e8dcc0] rounded-lg flex items-center justify-center mb-4" style={{
                  boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
                }}>
                  <Icon size={24} className="text-[#002528]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#c6ac79] mb-4 group-hover:text-[#e8dcc0] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}