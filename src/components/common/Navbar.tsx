'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import styles from './Navbar.module.css';
import { BrandMark } from './BrandMark';
import { scrollToSection } from '@/lib/navigation';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'freelance', labelKey: 'nav.freelance' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'tech', labelKey: 'nav.tech' },
  { id: 'goals', labelKey: 'nav.goals' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const headerHeight = document.querySelector('[data-header-bar]')?.getBoundingClientRect().height ?? 88;
      const scrollPosition = window.scrollY + headerHeight + 32;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    drawerRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleResize = () => { if (window.innerWidth > 1080) setIsOpen(false); };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container} data-header-bar>
        {/* Brand Logo */}
        <button type="button" aria-label={language === 'es' ? 'Volver al inicio' : 'Back to top'} className={styles.logo} onClick={() => scrollToSection('home')}>
          <BrandMark className={styles.logoIcon} />
          <span className={styles.logoText}>Julio <span className={styles.logoLastName}>Castro</span></span>
        </button>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
            >
              {t(item.labelKey)}
            </button>
          ))}
          
          <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle language">
            <span className={styles.langText}>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className={styles.mobileRight}>
          <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button onClick={toggleLanguage} className={`${styles.langBtn} ${styles.mobileLang}`} aria-label="Toggle language">
            <span className={styles.langText}>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          
          <button ref={menuButtonRef} onClick={() => setIsOpen(!isOpen)} className={styles.menuBtn} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && <div id="mobile-navigation" ref={drawerRef} className={styles.mobileDrawer}>
        <div className={styles.drawerLinks}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`${styles.drawerLink} ${activeSection === item.id ? styles.drawerActive : ''}`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>
      </div>}
    </nav>
  );
};
