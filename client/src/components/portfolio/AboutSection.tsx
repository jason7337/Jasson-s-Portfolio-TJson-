import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="about-title">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed" data-testid="about-description">
              [Párrafo introductorio sobre tu background, experiencia y motivación. Personaliza este contenido con tu historia profesional.]
            </p>
            <p className="text-lg text-secondary leading-relaxed" data-testid="about-experience">
              [Párrafo sobre tu experiencia técnica, proyectos destacados o logros. Añade detalles específicos de tu trayectoria.]
            </p>
            
            {/* Quick Stats or Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" data-testid="stat-experience-number">
                  [X]
                </div>
                <div className="text-sm text-secondary" data-testid="stat-experience-label">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" data-testid="stat-projects-number">
                  [X]
                </div>
                <div className="text-sm text-secondary" data-testid="stat-projects-label">
                  Proyectos Completados
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-100 rounded-lg flex items-center justify-center" data-testid="profile-photo-placeholder">
              <User className="h-24 w-24 text-secondary" />
              <span className="sr-only">Foto profesional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
