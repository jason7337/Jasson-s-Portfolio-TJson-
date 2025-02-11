import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translations } from './translations';

/**
 * Internationalization configuration
 * Manages language switching between English and Spanish
 * Default language: English for professional presentation
 */
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    es: { translation: translations.es },
  },
  lng: 'en', // Default to English for international audience
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  detection: {
    order: [], // Disable automatic language detection
    caches: [], // Don't cache language preference
  },
});

export default i18n;
