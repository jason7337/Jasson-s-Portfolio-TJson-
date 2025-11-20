import { motion } from 'framer-motion';
import { MapPin, Globe2, ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useResumeGenerator } from '../hooks/useResumeGenerator';

/**
 * Hero section component
 * Displays introduction, social links, and resume download functionality
 */
export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { generateResume } = useResumeGenerator();

  // Social media and contact links
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jason7337', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jasson-gomez-211777209/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gomezjason010@gmail.com', label: 'Email' },
  ];

  /**
   * Navigate to specific section with smooth scrolling
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Introduction"
      role="banner"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-950"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          ></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-semibold mb-2"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4"
              role="heading"
              aria-level={1}
            >
              {t('hero.name')}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2"
            >
              {t('hero.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-primary-600 dark:text-primary-400 mb-6"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            {/* Location & Remote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <MapPin className="w-4 h-4" />
                <span>{t('hero.location')}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <Globe2 className="w-4 h-4" />
                <span>{t('hero.remote')}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                aria-label="Contact me - Navigate to contact section"
              >
                {t('hero.cta')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all border border-primary-200 dark:border-primary-800 text-sm sm:text-base"
                aria-label="View my work - Navigate to projects section"
              >
                {t('hero.viewWork')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateResume}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2"
                aria-label="Download my resume/CV in current language"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
              role="list"
              aria-label="Social media links"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  aria-label={`Visit my ${link.label} profile`}
                  role="listitem"
                >
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur-xl opacity-30"></div>

              {/* Profile Image */}
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto">
                <img
                  src="/images/profile.jpg"
                  alt="Professional portrait of Jasson Gómez, Full Stack TypeScript Developer"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '1/1' }}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6 text-neutral-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
