import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6" data-testid="hero-title">
            Hola, soy <span className="text-accent">[Tu Nombre]</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="hero-description">
            [Descripción profesional breve - Desarrollador, diseñador, etc. Aquí describes tu especialidad y pasión]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
              data-testid="button-view-projects"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="inline-flex items-center px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-white transition-colors duration-200"
              data-testid="button-contact"
            >
              <span>Contactar</span>
              <Mail className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
