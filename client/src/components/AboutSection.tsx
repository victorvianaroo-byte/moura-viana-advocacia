import { CheckCircle2, Award, Users, Zap, Shield, Heart, Lightbulb } from 'lucide-react';

/**
 * Design Premium - About Section Sofisticada
 * - Layout assimétrico e elegante
 * - Espaçamento corrigido para melhor legibilidade
 * - Stats (números) organizados em grid
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
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Histórico de sucesso em casos complexos com índice elevado de satisfação de clientes.'
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
      {/* Elementos decorativos sutis */}
      <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-[#c6ac79]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-[#c6ac79]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Centralizado */}
        <div className="text-center mb-24">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-4">
            Sobre Nós
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            MOURA & VIANA
          </h2>
          <div className="w-24 h-1 bg-[#c6ac79] mx-auto mb-6 opacity-80"></div>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Mais de 20 anos dedicados à excelência jurídica e ao atendimento humanizado.
          </p>
        </div>

        {/* Bloco 1: História e Números (Grid Lado a Lado) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          {/* Coluna da Esquerda: Textos */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#c6ac79] mb-4 flex items-center gap-3">
                <Shield className="text-[#c6ac79]" size={24} /> Nossa História
              </h3>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Fundado em 2004, o escritório MOURA & VIANA nasceu da união de advogados visionários, determinados a oferecer serviços jurídicos de excelência com um diferencial: o atendimento humanizado e próximo do cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#c6ac79] mb-4 flex items-center gap-3">
                <Award className="text-[#c6ac79]" size={24} /> Nossa Jornada
              </h3>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Ao longo de mais de duas décadas, construímos uma sólida reputação baseada em resultados e ética profissional. Nossa equipe multidisciplinar atende demandas complexas em diversas áreas do direito.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Stats em Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { value: '20+', label: 'Anos de Experiência', icon: Award },
              { value: '+5.000', label: 'Casos Resolvidos', icon: CheckCircle2 },
              { value: '+3.500', label: 'Clientes Satisfeitos', icon: Users },
              { value: '2004', label: 'Ano de Fundação', icon: Lightbulb }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-start p-8 rounded-xl transition-all duration-300 border border-white/5 hover:border-[#c6ac79]/30 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="w-12 h-12 bg-[#c6ac79]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c6ac79]/20 transition-colors">
                    <Icon size={24} className="text-[#c6ac79]" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-white/60 text-sm md:text-base font-light">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divisor Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

        {/* Bloco 2: Diferenciais */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">Por que nos escolher?</h3>
            <p className="text-white/70 max-w-2xl mx-auto font-light text-lg">Os pilares que sustentam nossa atuação jurídica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-[#c6ac79]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={28} className="text-[#c6ac79]" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco 3: Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Missão',
              icon: Shield,
              text: 'Proporcionar soluções jurídicas eficientes e personalizadas, defendendo os direitos com ética e excelência técnica.'
            },
            {
              title: 'Visão',
              icon: Lightbulb,
              text: 'Ser referência nacional em advocacia especializada, reconhecida pela qualidade e satisfação dos clientes.'
            },
            {
              title: 'Valores',
              icon: Heart,
              text: 'Ética inegociável, comprometimento, transparência absoluta e constante atualização profissional.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-10 rounded-xl overflow-hidden group border border-[#c6ac79]/20"
                style={{
                  background: 'linear-gradient(180deg, rgba(198,172,121,0.05) 0%, rgba(0,37,40,0) 100%)',
                }}
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                  <Icon size={120} className="text-[#c6ac79]" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-8 bg-[#c6ac79] rounded-full"></div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed font-light text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}