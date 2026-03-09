import { Briefcase, Heart, FileText, Shield, Car, Stethoscope, Users, DollarSign, ShieldAlert, FileCheck } from 'lucide-react';

/**
 * Design Premium - Services Section Sofisticada
 * - Cards com efeitos de hover elegantes
 * - Gradientes e glass morphism
 * - Animações suaves
 * - Layout responsivo e limpo
 */

const services = [
  {
    icon: Heart,
    title: 'Direito de Família',
    description: 'Divórcios, separações, guarda de filhos, adoção e todos os aspectos relacionados às relações familiares.',
    items: ['Divórcio consensual e litigioso', 'Guarda e visitação', 'Adoção'],
  },
  {
    icon: DollarSign,
    title: 'Pensão Alimentícia',
    description: 'Ações de alimentos, revisão de valores, execução de pensão e defesa de seus direitos.',
    items: ['Ação de alimentos', 'Revisão de pensão', 'Execução'],
  },
  {
    icon: FileText,
    title: 'Inventário e Sucessões',
    description: 'Inventários judiciais e extrajudiciais, partilha de bens e planejamento sucessório.',
    items: ['Inventário extrajudicial', 'Partilha de bens', 'Testamento'],
  },
  {
    icon: Shield,
    title: 'Direito Previdenciário',
    description: 'Aposentadorias, benefícios do INSS, revisão de cálculos e defesa em perícias médicas.',
    items: ['Aposentadoria', 'Auxílio-doença', 'LOAS/BPC'],
  },
  {
    icon: Car,
    title: 'Direito de Trânsito',
    description: 'Defesa em multas, suspensão de CNH, recursos e ações de indenização por acidentes.',
    items: ['Defesa de multas', 'Recurso de suspensão', 'Indenização'],
  },
  {
    icon: Stethoscope,
    title: 'Direito Médico',
    description: 'Erros médicos, responsabilidade civil, defesa de profissionais e pacientes.',
    items: ['Erro médico', 'Responsabilidade civil', 'Defesa do médico'],
  },
  {
    icon: Users,
    title: 'Direito Trabalhista',
    description: 'Reclamações trabalhistas, rescisões, assédio moral e defesa de empresas e empregados.',
    items: ['Reclamação trabalhista', 'Rescisão', 'Assédio moral'],
  },
  {
    icon: DollarSign,
    title: 'Cobranças',
    description: 'Recuperação de crédito, execuções, protestos e negociação de dívidas.',
    items: ['Execução de título', 'Protesto', 'Negociação'],
  },
  {
    icon: ShieldAlert,
    title: 'Direito do Consumidor',
    description: 'Defesa dos direitos do consumidor, ações contra empresas e indenizações.',
    items: ['Ação de indenização', 'Dano moral', 'Cancelamento'],
  },
  {
    icon: FileCheck,
    title: 'Direito Civil',
    description: 'Contratos, responsabilidade civil, direito das obrigações e direito de propriedade.',
    items: ['Contratos', 'Indenização', 'Usucapião'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001a1d 0%, #002528 50%, #0a3a3f 100%)',
      }}
    >
      {/* Elemento decorativo */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-4">
            Nossas Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Áreas de <span style={{
              background: 'linear-gradient(135deg, #c6ac79 0%, #e8dcc0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Atuação</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Oferecemos assistência jurídica completa em diversas áreas do direito, sempre com foco na melhor solução para nossos clientes.
          </p>
        </div>

        {/* Services Grid - 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(15, 42, 45, 0.6)',
                  border: '1px solid rgba(198, 172, 121, 0.2)',
                  backdropFilter: 'blur(10px)',
                  padding: '24px'
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
                {/* Icon com gradiente */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#c6ac79] to-[#e8dcc0] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{
                  boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
                }}>
                  <Icon className="w-6 h-6 text-[#002528]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  background: 'radial-gradient(circle at top right, rgba(198, 172, 121, 0.1), transparent)',
                }}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 border-t border-white/10">
          <p className="text-white/80 mb-6 text-lg font-light">
            Não encontrou o que procurava? Entre em contato conosco.
          </p>
          <button className="px-8 py-3.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg font-semibold hover:scale-105 transition-all duration-300" style={{
            boxShadow: '0 10px 30px rgba(198, 172, 121, 0.3)'
          }}>
            Fale com um Advogado
          </button>
        </div>
      </div>
    </section>
  );
}
