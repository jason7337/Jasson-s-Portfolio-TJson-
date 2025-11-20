import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'gomezjason010@gmail.com',
      href: 'mailto:gomezjason010@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.info.whatsapp'),
      value: '+503 7502 5302',
      href: 'https://wa.me/50375025302'
    },
    { icon: MapPin, label: t('contact.info.location'), value: 'El Salvador', href: '#' },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jasson Gómez',
      href: 'https://www.linkedin.com/in/jasson-gomez-211777209/',
    },
    { icon: Github, label: 'GitHub', value: '@jason7337', href: 'https://github.com/jason7337' },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-1">{info.label}</p>
                  <p className="text-sm sm:text-lg font-semibold text-neutral-900 dark:text-white break-all sm:break-normal">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 sm:p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl border border-green-200 dark:border-green-800 sm:col-span-2"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <p className="text-base sm:text-lg font-semibold text-green-700 dark:text-green-300">
                  {t('contact.info.availability')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
