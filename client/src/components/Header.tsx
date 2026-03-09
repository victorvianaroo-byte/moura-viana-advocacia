import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Design Premium - Header Fixo com Efeitos
 * - Logo com efeito hover
 * - Navegação com underline animado
 * - Fundo com glass morphism
 * - Animações suaves
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Áreas de Atuação' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(0, 37, 40, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(198, 172, 121, 0.2)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo com efeito hover (responsiva) */}
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('home')}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(198, 172, 121, 0.2))'
            }}
            aria-label="Voltar para o início"
          >
            {/* Versão horizontal (full) para mobile */}
            <img
              src="/images/logo-horizontal.png"
              alt="Moura & Viana Advogados"
              className="h-20 w-auto shadow-lg md:hidden"
            />
            {/* Versão circular para telas médias e maiores */}
            <img
              src="/images/logo-circular.png"
              alt="Moura & Viana Advogados"
              className="hidden md:block h-24 w-24 rounded-full object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
                className="text-white/80 hover:text-[#c6ac79] transition-colors text-sm font-medium relative group"
              >
                {item.label}
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] transition-all duration-300"
                  style={{
                    width: hoveredNav === item.id ? '100%' : '0%'
                  }}
                ></span>
              </button>
            ))}
          </nav>

          {/* CTA and WhatsApp */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/556282459559"
              className="text-white/80 hover:text-[#c6ac79] transition-colors text-sm font-medium"
            >
              WhatsApp: (62) 98245-9559
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-sm active:scale-95"
              style={{
                boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
              }}
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#c6ac79] transition-colors duration-300 hover:scale-110"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 space-y-2 border-t border-[#c6ac79]/20 pt-4 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-[#c6ac79] hover:bg-[#c6ac79]/10 transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/556282459559"
              className="block w-full text-left text-white/80 hover:text-[#c6ac79] hover:bg-[#c6ac79]/10 transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg"
            >
              WhatsApp: (62) 98245-9559
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-sm mt-2"
              style={{
                boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
              }}
            >
              Consulta Gratuita
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
