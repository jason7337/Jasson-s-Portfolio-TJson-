/**
 * About section component
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Code2, Globe, Users } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: Calendar, label: 'experience', value: '7+' },
    { icon: Code2, label: 'projects', value: '20+' },
    { icon: Globe, label: 'technologies', value: '20+' },
    { icon: Users, label: 'remote', value: '100%' }
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
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
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

            {/* SpeedyGoApp Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 sm:mt-8 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950 rounded-xl sm:rounded-2xl border border-primary-200 dark:border-primary-800"
            >
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white dark:bg-neutral-800 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                  <img
                    src="/images/speedygo_logo.png"
                    alt="SpeedyGoApp"
                    className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="flex-1 text-center xs:text-left w-full">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">
                    SpeedyGoApp
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-2 sm:mb-3">
                    {t('about.speedygo.role')}
                  </p>
                  <div className="flex flex-col xs:flex-row gap-2 w-full">
                    <a
                      href="https://speedygoapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm font-medium"
                    >
{t('about.speedygo.visitWebsite')}
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.speedygoapp.speedygoapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium"
                    >
{t('about.speedygo.googlePlay')}
                    </a>
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