import { motion } from 'framer-motion';
import { Calendar, Code2, Globe, Users } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: Calendar, label: 'experience', value: '7+' },
    { icon: Code2, label: 'projects', value: '20+' },
    { icon: Globe, label: 'technologies', value: '20+' },
    { icon: Users, label: 'remote', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">{t('about.subtitle')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.bio2')}
              </p>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {t('about.bio3')}
              </p>
            </div>

            {/* SpeedyGoApp Highlight - Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 sm:mt-8 relative overflow-hidden"
            >
              <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-6 lg:p-8 shadow-xl border border-neutral-200/50 dark:border-neutral-700/50">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/20 to-accent-100/20 dark:from-primary-900/10 dark:to-accent-900/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl shadow-lg flex-shrink-0"
                  >
                    <img
                      src="/images/speedygo_logo.png"
                      alt="SpeedyGoApp"
                      className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                    />
                  </motion.div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-3">
                      SpeedyGoApp
                    </h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 font-medium">
                      {t('about.speedygo.role')}
                    </p>

                    {/* Enhanced buttons section */}
                    <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl p-4 mb-4">
                      <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-3 text-center sm:text-left">
                        {t('experience.speedygo.explore')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.a
                          href="https://speedygoapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10">{t('about.speedygo.visitWebsite')}</span>
                          <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                        <motion.a
                          href="https://play.google.com/store/apps/details?id=com.speedygoapp.speedygoapp"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                          <svg className="relative z-10 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          <span className="relative z-10">{t('about.speedygo.googlePlay')}</span>
                          <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 sm:mb-8 text-center">
              {t('about.highlights.title')}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-50 dark:bg-neutral-700 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all text-center"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl mb-2 sm:mb-4">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {t(`about.highlights.${item.label}`)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
