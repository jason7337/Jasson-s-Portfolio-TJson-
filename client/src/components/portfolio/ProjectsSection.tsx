import { useState } from "react";
import { ExternalLink, Github, Image } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Diseño' }
  ];

  const projects = [
    {
      id: 1,
      title: '[Nombre del Proyecto]',
      description: '[Descripción breve del proyecto y tecnologías utilizadas]',
      technologies: ['React', 'Node.js'],
      category: 'web',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: '[Nombre del Proyecto]',
      description: '[Descripción breve del proyecto y tecnologías utilizadas]',
      technologies: ['Vue.js', 'Firebase'],
      category: 'web',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: '[Nombre del Proyecto]',
      description: '[Descripción breve del proyecto y tecnologías utilizadas]',
      technologies: ['Python', 'Django'],
      category: 'web',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" data-testid="projects-title">
            Proyectos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto" data-testid="projects-description">
            [Descripción breve de tu trabajo y enfoque en los proyectos]
          </p>
        </div>

        {/* Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-secondary hover:bg-accent hover:text-white'
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              data-testid={`project-card-${project.id}`}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Image className="h-16 w-16 text-secondary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-secondary mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      data-testid={`project-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    className="text-accent hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-accent hover:text-blue-600 transition-colors duration-200 inline-flex items-center"
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
