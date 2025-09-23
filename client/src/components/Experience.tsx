import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* SpeedyGoApp Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></div>
            <div className="ml-4 sm:ml-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl flex-shrink-0">
                      <img
                        src="/images/speedygo_logo.png"
                        alt="SpeedyGo Logo"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white break-words">
                        {t('experience.speedygo.title')}
                      </h3>
                      <p className="text-base sm:text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {t('experience.speedygo.company')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="whitespace-nowrap">{t('experience.speedygo.period')}</span>
                  </div>
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 mb-6">{t('experience.speedygo.description')}</p>

                <div className="space-y-3 mb-6">
                  {['designed', 'developed', 'implemented', 'built'].map((key, index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {t(`experience.speedygo.achievements.${index}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Project Links Section */}
                <div className="mt-6 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                    {t('experience.speedygo.explore')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href="https://speedygoapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-sm sm:text-base"
                    >
                      <span className="relative z-10">{t('experience.speedygo.website')}</span>
                      <ExternalLink className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://play.google.com/store/apps/details?id=com.speedygoapp.speedygoapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-sm sm:text-base"
                    >
                      <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span className="relative z-10">{t('experience.speedygo.playStore')}</span>
                      <ExternalLink className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Freelance Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent-600 to-primary-600 rounded-full"></div>
            <div className="ml-4 sm:ml-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900 dark:to-primary-900 rounded-xl flex-shrink-0">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white break-words">
                        {t('experience.freelance.title')}
                      </h3>
                      <p className="text-base sm:text-lg text-accent-600 dark:text-accent-400 font-medium">
                        {t('experience.freelance.company')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span className="whitespace-nowrap">{t('experience.freelance.period')}</span>
                  </div>
                </div>

                <p className="text-neutral-700 dark:text-neutral-300 mb-6">{t('experience.freelance.description')}</p>

                <div className="space-y-3">
                  {['delivered', 'specialized', 'implemented', 'integrated'].map((key, index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {t(`experience.freelance.achievements.${index}`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
