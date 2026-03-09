import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

/**
 * Design Premium - Testimonials Section com Carousel
 * - Carousel horizontal com scroll suave
 * - Cards com efeitos de hover premium
 * - Navegação com botões elegantes
 * - Animações interativas
 */

const testimonials = [
  {
    text: 'O escritório MOURA & VIANA foi fundamental na resolução do meu processo de divórcio. A equipe foi extremamente profissional, atenciosa e sempre me manteve informada sobre cada etapa. Recomendo de olhos fechados!',
    author: 'Maria Silva',
    role: 'Empresária',
    rating: 5,
  },
  {
    text: 'Excelente atendimento e resultado excepcional no meu caso de direito previdenciário. A transparência e dedicação da equipe foram notáveis. Muito satisfeito com os resultados alcançados.',
    author: 'João Santos',
    role: 'Aposentado',
    rating: 5,
  },
  {
    text: 'Procurava um escritório confiável para assuntos trabalhistas. Encontrei profissionais competentes, éticos e sempre disponíveis. Recomendo fortemente a MOURA & VIANA.',
    author: 'Ana Costa',
    role: 'Gerente de Recursos Humanos',
    rating: 5,
  },
  {
    text: 'Atendimento impecável e resultado rápido no meu caso de direito do consumidor. Equipe muito dedicada e sempre disponível para esclarecer dúvidas. Muito grato!',
    author: 'Carlos Mendes',
    role: 'Empresário',
    rating: 5,
  },
  {
    text: 'Excelente experiência do início ao fim. Os advogados são muito competentes e o atendimento é humanizado. Consegui resolver meu problema de forma satisfatória.',
    author: 'Fernanda Costa',
    role: 'Advogada',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Atualizar estado dos botões após scroll
      setTimeout(() => {
        if (scrollContainerRef.current) {
          setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
          setCanScrollRight(
            scrollContainerRef.current.scrollLeft < 
            scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #001a1d 0%, #002528 50%, #0a3a3f 100%)',
      }}
    >
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/70 text-lg font-light">Deslize para ver mais depoimentos</p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-96 rounded-xl p-8 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(15, 42, 45, 0.6)',
                  border: '1px solid rgba(198, 172, 121, 0.2)',
                  backdropFilter: 'blur(10px)',
                  minHeight: '380px',
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
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#c6ac79] text-lg">★</span>
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#c6ac79]/40 mb-4" />

                {/* Text */}
                <p className="text-white/90 leading-relaxed mb-6 italic font-light flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-[#c6ac79]/20 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-[#c6ac79] text-sm font-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: canScrollLeft ? 'rgba(198, 172, 121, 0.2)' : 'rgba(198, 172, 121, 0.1)',
                border: '1px solid rgba(198, 172, 121, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <ChevronLeft size={24} className="text-[#c6ac79]" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: canScrollRight ? 'rgba(198, 172, 121, 0.2)' : 'rgba(198, 172, 121, 0.1)',
                border: '1px solid rgba(198, 172, 121, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <ChevronRight size={24} className="text-[#c6ac79]" />
            </button>
          </div>
        </div>

        {/* Citation */}
        <div className="max-w-3xl mx-auto text-center rounded-xl p-12 transition-all duration-300 hover:scale-105" style={{
          background: 'rgba(15, 42, 45, 0.6)',
          border: '1px solid rgba(198, 172, 121, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 20px rgba(198, 172, 121, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(15, 42, 45, 0.9)';
          e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.5)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(198, 172, 121, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(15, 42, 45, 0.6)';
          e.currentTarget.style.borderColor = 'rgba(198, 172, 121, 0.2)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(198, 172, 121, 0.1)';
        }}
        >
          <Quote className="w-12 h-12 text-[#c6ac79]/40 mx-auto mb-6" />
          <p className="text-2xl font-serif italic text-white mb-4">
            "A justiça é a constante e perpetua vontade de dar a cada um o que é seu."
          </p>
          <p className="text-[#c6ac79] font-semibold">— Ulpiano</p>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
