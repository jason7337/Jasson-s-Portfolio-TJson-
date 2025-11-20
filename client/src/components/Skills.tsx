import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'skills.frontend',
      skills: [
        { name: 'TypeScript', level: 95, tools: ['ES6+', 'Type Safety'] },
        { name: 'React', level: 95, tools: ['Hooks', 'Context', 'Redux'] },
        { name: 'Angular', level: 88, tools: ['RxJS', 'Forms', 'Services'] },
        { name: 'Tailwind CSS', level: 92, tools: ['Responsive Design', 'CSS3'] },
        { name: 'Vite', level: 88, tools: ['Build Tool', 'HMR'] },
      ],
    },
    backend: {
      title: 'skills.backend',
      skills: [
        { name: 'Node.js', level: 95, tools: ['TypeScript', 'Async/Await'] },
        { name: 'Express', level: 93, tools: ['REST APIs', 'Middleware'] },
        { name: 'AdonisJS', level: 88, tools: ['ORM', 'Authentication'] },
        { name: 'Python', level: 85, tools: ['Flask', 'FastAPI'] },
        { name: 'C#', level: 80, tools: ['.NET', 'ASP.NET'] },
        { name: 'Java', level: 78, tools: ['Spring', 'Maven'] },
      ],
    },
    mobile: {
      title: 'skills.mobile',
      skills: [
        { name: 'Flutter', level: 92, tools: ['Dart', 'Material Design'] },
        { name: 'React Native', level: 85, tools: ['Expo', 'Native Modules'] },
        { name: 'Java/Kotlin', level: 82, tools: ['Android SDK', 'Native Apps'] },
        { name: 'Google Maps API', level: 88 },
      ],
    },
    database: {
      title: 'skills.database',
      skills: [
        { name: 'Firebase', level: 93, tools: ['Firestore', 'Realtime DB', 'Auth'] },
        { name: 'PostgreSQL', level: 88, tools: ['SQL', 'Queries'] },
        { name: 'MySQL', level: 87, tools: ['SQL', 'Optimization'] },
        { name: 'MongoDB', level: 82 },
      ],
    },
    cloud: {
      title: 'skills.cloud',
      skills: [
        { name: 'Firebase', level: 93, tools: ['Hosting', 'Functions', 'Analytics'] },
        { name: 'Docker', level: 85, tools: ['Containers', 'Compose'] },
        { name: 'Google Cloud', level: 82, tools: ['Cloud Run', 'Storage'] },
        { name: 'CI/CD', level: 80, tools: ['GitHub Actions'] },
      ],
    },
    tools: {
      title: 'skills.tools',
      skills: [
        { name: 'Git', level: 95, tools: ['GitHub', 'Version Control'] },
        { name: 'Jira', level: 90, tools: ['Project Management', 'Agile'] },
        { name: 'Trello', level: 92, tools: ['Task Management', 'Kanban'] },
        { name: 'Scrum', level: 88, tools: ['Agile Methodologies', 'Sprints'] },
        { name: 'VS Code', level: 93, tools: ['Extensions', 'Debugging'] },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {t(skillCategories[category as keyof typeof skillCategories].title)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-accent-600"
                  />
                </div>
              </div>

              {/* Tools/Frameworks */}
              {skill.tools && (
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-xs sm:text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            + i18next, Docker, Play Console, App Store Connect, RESTful APIs, and many more...
          </p>
        </motion.div>
      </div>
    </section>
  );
};
