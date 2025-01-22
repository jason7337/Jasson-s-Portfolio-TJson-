import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'TJson Portfolio',
      descriptionKey: 'projects.portfolio.description',
      image: '/images/logo2_tjson.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/jason7337/Jasson-s-Portfolio-TJson-.git',
      live: 'https://tjson.net',
      featured: true,
    },
    {
      title: 'SpeedyGoApp',
      descriptionKey: 'projects.speedygo.description',
      image: '/images/speedygo_logo.png',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      github: '#',
      live: 'https://play.google.com/store/apps/details?id=com.speedygoapp.speedygoapp',
      featured: true,
    },
    {
      title: 'LogSense AI',
      descriptionKey: 'projects.logsense.description',
      image: '/images/logo_tjson.png',
      technologies: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'Cloud Run'],
      github: 'https://github.com/jason7337/logsense-ai.git',
      live: 'https://logsense-ai.tjson.net',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold rounded-full">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-24 object-contain opacity-50 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {t(project.descriptionKey)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-neutral-500 dark:text-neutral-400 text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.github !== '#' ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-neutral-900 dark:bg-neutral-800 text-white rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.viewGithub')}</span>
                    </motion.a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 rounded-lg cursor-not-allowed text-sm"
                    >
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.private')}</span>
                    </button>
                  )}
                  {project.live !== '#' ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.viewLive')}</span>
                    </motion.a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 rounded-lg cursor-not-allowed text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.comingSoon')}</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/jason7337"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-800 text-white rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">{t('projects.viewMore')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
