import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Formulario enviado (funcionalidad por implementar)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="contact-title">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto" data-testid="contact-description">
            [Mensaje de invitación para contactarte y colaborar]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4" data-testid="contact-email">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-secondary">[tu-email@ejemplo.com]</p>
              </div>
            </div>

            <div className="flex items-center space-x-4" data-testid="contact-phone">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Teléfono</h3>
                <p className="text-secondary">[+XX XXX XXX XXX]</p>
              </div>
            </div>

            <div className="flex items-center space-x-4" data-testid="contact-location">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Ubicación</h3>
                <p className="text-secondary">[Tu Ciudad, País]</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-primary mb-4" data-testid="social-title">
                Sígueme en:
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-github"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-accent/10 hover:bg-accent text-accent hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  data-testid="social-twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="Tu nombre completo"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="tu@email.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="¿En qué puedo ayudarte?"
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                  data-testid="textarea-message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 inline-flex items-center justify-center"
                data-testid="button-submit-form"
              >
                <span>Enviar Mensaje</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
