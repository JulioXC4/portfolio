'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'tech', labelKey: 'nav.tech' },
  { id: 'goals', labelKey: 'nav.goals' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg className={styles.logoIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" stroke="var(--color-primary)" strokeWidth="1.5" />
            <line x1="9" y1="15" x2="15" y2="9" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={styles.logoText}>Julio <span className={styles.logoLastName}>Castro</span></span>
        </div>

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
            <Globe size={18} />
            <span className={styles.langText}>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className={styles.mobileRight}>
          <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button onClick={toggleLanguage} className={`${styles.langBtn} ${styles.mobileLang}`} aria-label="Toggle language">
            <Globe size={18} />
            <span className={styles.langText}>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className={styles.menuBtn} aria-label="Open menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ''}`}>
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
      </div>
    </nav>
  );
};
