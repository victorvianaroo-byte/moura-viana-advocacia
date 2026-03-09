import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

/**
 * Design Premium - Contact Section com Google Maps
 * - Maps integrado com localização correta
 * - Números responsivos e interativos com animações
 * - Tipografia ajustada para mobile
 * - Cards com glass morphism
 * - Formulário com animações interativas
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [animatingNumbers, setAnimatingNumbers] = useState<{ [key: number]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar para FormSubmit.co
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/advocaciamouraviana@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
      } else {
        console.error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
    }
  };

  const handleNumberHover = (idx: number) => {
    setAnimatingNumbers(prev => ({ ...prev, [idx]: true }));
    setTimeout(() => {
      setAnimatingNumbers(prev => ({ ...prev, [idx]: false }));
    }, 600);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Graça Aranha - Jardim Nova Era\nAparecida de Goiânia - GO, 74916-070',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      numbers: [
        { display: '(62) 98245-9559', link: 'https://wa.me/556282459559' },
      ],
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'advocaciamouraviana@gmail.com',
      link: 'mailto:advocaciamouraviana@gmail.com',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 9h às 18h\nSábado: 9h às 12h\n(com agendamento)',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002528 0%, #001a1d 50%, #0a3a3f 100%)',
      }}
    >
      {/* Elemento decorativo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#c6ac79]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c6ac79] text-sm font-semibold uppercase tracking-widest mb-4">
            Fale Conosco
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Entre em Contato
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light">
            Agende sua consulta gratuita e descubra como podemos ajudar você. Nossa equipe está pronta para atender suas necessidades jurídicas.
          </p>
        </div>

        {/* Main Contact Container - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Info Cards and Map */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl p-4 md:p-6 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                    style={{
                      background: 'rgba(15, 42, 45, 0.6)',
                      border: '1px solid rgba(198, 172, 121, 0.2)',
                      backdropFilter: 'blur(10px)',
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
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#c6ac79] to-[#e8dcc0] rounded-lg flex items-center justify-center mb-3 md:mb-4 flex-shrink-0" style={{
                      boxShadow: '0 10px 25px rgba(198, 172, 121, 0.3)'
                    }}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#002528]" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">{info.title}</h3>
                    
                    {/* Render numbers with animation */}
                    {'numbers' in info && info.numbers ? (
                      <div className="space-y-1">
                        {info.numbers.map((num, numIdx) => (
                          <a
                            key={numIdx}
                            href={num.link}
                            onMouseEnter={() => handleNumberHover(idx)}
                            className="text-white/70 text-xs md:text-sm leading-relaxed hover:text-[#c6ac79] transition-all duration-300 font-light block"
                            style={{
                              transform: animatingNumbers[idx] ? 'scale(1.05)' : 'scale(1)',
                              opacity: animatingNumbers[idx] ? 1 : 0.7,
                            }}
                          >
                            {num.display}
                          </a>
                        ))}
                      </div>
                    ) : 'link' in info && info.link ? (
                      <a
                        href={info.link}
                        className="text-white/70 text-xs md:text-sm leading-relaxed hover:text-[#c6ac79] transition-colors duration-300 font-light break-all"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden border border-[#c6ac79]/20" style={{
              background: 'rgba(15, 42, 45, 0.6)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(198, 172, 121, 0.1)',
              height: '300px'
            }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Moura%20%26%20Viana%20Advogados%2C%20Aparecida%20de%20Goi%C3%A2nia%20-%20GO&output=embed"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-xl p-6 md:p-8 border border-[#c6ac79]/20" style={{
            background: 'rgba(15, 42, 45, 0.6)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(198, 172, 121, 0.1)'
          }}>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6 md:mb-8">Solicite uma Consulta Gratuita</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method="POST" action="https://formsubmit.co/advocaciamouraviana@gmail.com">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-white mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Seu nome"
                  required
                  className="w-full bg-[#1a4a4f]/50 border border-[#c6ac79]/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#c6ac79] focus:bg-[#1a4a4f] transition-all duration-300 font-light"
                  style={{
                    boxShadow: focusedField === 'name' ? '0 0 20px rgba(198, 172, 121, 0.2)' : 'none'
                  }}
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-white mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="seu@email.com"
                    required
                    className="w-full bg-[#1a4a4f]/50 border border-[#c6ac79]/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#c6ac79] focus:bg-[#1a4a4f] transition-all duration-300 font-light"
                    style={{
                      boxShadow: focusedField === 'email' ? '0 0 20px rgba(198, 172, 121, 0.2)' : 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-white mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full bg-[#1a4a4f]/50 border border-[#c6ac79]/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#c6ac79] focus:bg-[#1a4a4f] transition-all duration-300 font-light"
                    style={{
                      boxShadow: focusedField === 'phone' ? '0 0 20px rgba(198, 172, 121, 0.2)' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-semibold text-white mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Assunto da mensagem"
                  required
                  className="w-full bg-[#1a4a4f]/50 border border-[#c6ac79]/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#c6ac79] focus:bg-[#1a4a4f] transition-all duration-300 font-light"
                  style={{
                    boxShadow: focusedField === 'subject' ? '0 0 20px rgba(198, 172, 121, 0.2)' : 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-white mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Descreva seu caso ou dúvida..."
                  required
                  rows={4}
                  className="w-full bg-[#1a4a4f]/50 border border-[#c6ac79]/30 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-white/50 focus:outline-none focus:border-[#c6ac79] focus:bg-[#1a4a4f] transition-all duration-300 resize-none font-light"
                  style={{
                    boxShadow: focusedField === 'message' ? '0 0 20px rgba(198, 172, 121, 0.2)' : 'none'
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c6ac79] to-[#e8dcc0] text-[#002528] px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 text-sm md:text-base"
                style={{
                  boxShadow: '0 10px 30px rgba(198, 172, 121, 0.3)'
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-xs text-white/60 text-center font-light">
                Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros conosco.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
