import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * Design Premium - Layout Claro e Organizado
 * - Paleta: Verde escuro (#002528) + Dourado (#c6ac79)
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 * - Layout: Fundo escuro, cards bem espaçados, informações claras
 * - Interações: Transições suaves, hover effects elegantes
 * - Ordem: Hero → Serviços → Sobre → Depoimentos → Contato
 */

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error("Error:", error);
    return <div className="p-4 text-red-600">Ocorreu um erro. Por favor, recarregue a página.</div>;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-[#001a1d]">
            <Header />
            <main>
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <TestimonialsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
