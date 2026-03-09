import { Instagram, Facebook, Linkedin, ArrowUp, Heart } from 'lucide-react';

/**
 * Design Premium - Footer Elegante
 * - Fundo escuro com gradiente
 * - Links bem organizados
 * - Redes sociais com hover effects
 */

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#002528] via-[#001a1d] to-[#000f12] text-white relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-5 mb-6">
              {/* Versão horizontal (full) para mobile */}
              <img
                src="/images/logo-horizontal.png"
                alt="Moura & Viana Advogados"
                className="h-20 w-auto shadow-lg md:hidden"
              />
              {/* Versão circular para telas maiores */}
              <img
                src="/images/logo-circular.png"
                alt="Moura & Viana Advogados"
                className="hidden md:block h-24 w-24 rounded-full object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Excelência em soluções jurídicas há mais de 20 anos. Confiança e resultados comprovados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#c6ac79]">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Início</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Áreas de Atuação</a></li>
              <li><a href="#about" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#c6ac79]">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Direito de Família</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Direito Previdenciário</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Direito Trabalhista</a></li>
              <li><a href="#services" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">Direito Civil</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#c6ac79]">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/556282459559" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm">
                  WhatsApp: (62) 98245-9559
                </a>
              </li>
              <li>
                <a href="mailto:advocaciamouraviana@gmail.com" className="text-white/70 hover:text-[#c6ac79] transition-colors text-sm break-all">
                  advocaciamouraviana@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c6ac79] hover:text-[#002528] transition-all duration-300 shadow-lg">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c6ac79] hover:text-[#002528] transition-all duration-300 shadow-lg">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#c6ac79] hover:text-[#002528] transition-all duration-300 shadow-lg">
                    <Linkedin size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm flex items-center gap-1">
            © 2024 MOURA & VIANA Advocacia. Feito com <Heart size={14} className="text-[#c6ac79]" /> por profissionais dedicados.
          </p>
          <button
            onClick={scrollToTop}
            className="px-6 py-2.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-sm"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} />
            Voltar ao Topo
          </button>
        </div>
      </div>
    </footer>
  );
}
