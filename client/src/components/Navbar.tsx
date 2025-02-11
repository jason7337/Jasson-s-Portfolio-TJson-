import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

/**
 * Premium navigation component with sophisticated animations
 * Features glassmorphism effects and smooth transitions for all screen sizes
 */
export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });

  // Track scroll position with framer motion for smoother performance
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('nav')) {
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    if (isLangMenuOpen || isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLangMenuOpen, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation sections in display order
  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  /**
   * Enhanced smooth scroll with offset for fixed header
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  /**
   * Toggle between English and Spanish languages
   */
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setIsLangMenuOpen(false);
  };

  /**
   * Update button position when menu opens
   */
  useEffect(() => {
    if (isLangMenuOpen && langButtonRef.current) {
      const rect = langButtonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
  }, [isLangMenuOpen]);

  return (
    <>
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 w-full max-w-full ${
        isScrolled
          ? 'bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl shadow-xl border-b border-neutral-200/20 dark:border-neutral-800/20'
          : 'bg-gradient-to-b from-white/10 to-transparent dark:from-neutral-950/50 dark:to-transparent backdrop-blur-sm'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 min-w-0">
          {/* Premium logo with hover effects */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/images/logo_tjson.png"
              alt="TJson Logo"
              className="h-10 sm:h-14 w-auto relative z-10 drop-shadow-md"
            />
          </motion.div>

          {/* Desktop Navigation with active indicators */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection(item)}
                className="relative px-4 py-2 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={`relative z-10 text-sm font-medium capitalize transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                }`}>
                  {t(`nav.${item}`)}
                </span>

                {/* Active indicator */}
                {activeSection === item && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Actions: Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* Enhanced Language Switcher */}
            <div className="relative">
              <motion.button
                ref={langButtonRef}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="group flex items-center space-x-2 px-3 py-2 rounded-xl bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Globe className="w-4 h-4 text-neutral-600 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hidden sm:inline">
                  {i18n.language.toUpperCase()}
                </span>
                <ChevronDown className={`w-3 h-3 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ${
                  isLangMenuOpen ? 'rotate-180' : ''
                }`} />
              </motion.button>
            </div>

            {/* Premium Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 group-hover:bg-primary-600 dark:group-hover:bg-primary-400 transition-colors"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-2 left-0 w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 group-hover:bg-primary-600 dark:group-hover:bg-primary-400 transition-colors"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 left-0 w-5 h-0.5 bg-neutral-600 dark:bg-neutral-300 group-hover:bg-primary-600 dark:group-hover:bg-primary-400 transition-colors"
                />
              </div>
            </motion.button>
          </div>
        </div>

      </div>

    </motion.nav>

    {/* Mobile Dropdown Menu */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white dark:bg-neutral-950 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-xl z-40"
      >
        <div className="px-4 py-4 space-y-2 w-full max-w-none">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                scrollToSection(item);
                setIsMobileMenuOpen(false);
              }}
              className={`group flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 ${
                activeSection === item
                  ? 'bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <span className={`text-base font-medium capitalize transition-colors ${
                activeSection === item
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-neutral-700 dark:text-neutral-200'
              }`}>
                {t(`nav.${item}`)}
              </span>
              {activeSection === item && (
                <motion.div
                  layoutId="mobile-active-indicator"
                  className="w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full"
                />
              )}
            </motion.button>
          ))}

          {/* Language Switch in Mobile Menu */}
          <div className="pt-3 mt-3 border-t border-neutral-200/20 dark:border-neutral-800/20">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 hover:from-sky-100 hover:to-blue-100 dark:hover:from-sky-900/30 dark:hover:to-blue-900/30 transition-all duration-200 border border-sky-200 dark:border-sky-800"
            >
              <Globe className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
              <span className="font-medium text-primary-700 dark:text-primary-300">
                {i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              </span>
            </motion.button>
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Language Dropdown Portal */}
    {isLangMenuOpen && createPortal(
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed py-2 w-32 sm:w-36 bg-white dark:bg-neutral-900 backdrop-blur-xl rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
          style={{
            top: buttonPosition.top,
            right: buttonPosition.right,
            zIndex: 9999
          }}
        >
          <button
            onClick={toggleLanguage}
            className="group flex items-center w-full px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all duration-200"
          >
            <span className="mr-2 text-sm font-bold">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
            <span className="font-medium">{i18n.language === 'en' ? 'Español' : 'English'}</span>
          </button>
        </motion.div>
      </AnimatePresence>,
      document.body
    )}
  </>
  );
};
