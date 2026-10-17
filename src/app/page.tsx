'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { TechStack } from '@/components/sections/TechStack';
import { Goals } from '@/components/sections/Goals';
import { GithubSection } from '@/components/sections/GithubSection';
import { Contact } from '@/components/sections/Contact';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import { BrandMark } from '@/components/common/BrandMark';
import { scrollToSection } from '@/lib/navigation';

export default function Home() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.appWrapper}>
      {/* Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <a href="#main-content" className="skip-link">{t('nav.about') === 'Sobre Mí' ? 'Saltar al contenido' : 'Skip to content'}</a>
      <main id="main-content" className={styles.mainContent}>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Experience Section */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* Projects Section */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Tech Stack Section */}
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>

        {/* Goals & Education Section */}
        <ScrollReveal>
          <Goals />
        </ScrollReveal>

        {/* Github stats section */}
        <ScrollReveal>
          <GithubSection />
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerContainer} container`}>
          <div className={styles.footerLeft}>
            <button type="button" aria-label="Back to top" className={styles.footerLogo} onClick={() => scrollToSection('home')}>
              <BrandMark className={styles.logoIcon} />
              <span className={styles.logoText}>Julio <span className={styles.logoLastName}>Castro</span></span>
            </button>
            <p className={styles.footerSubtitle}>
              {t('nav.about') === 'Sobre Mí' ? 'Ingeniería con propósito' : 'Engineering with purpose'}
            </p>
          </div>
          
          <div className={styles.footerLinks}>
            <button onClick={() => scrollToSection('about')} className={styles.footerLink}>
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('experience')} className={styles.footerLink}>
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('projects')} className={styles.footerLink}>
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('tech')} className={styles.footerLink}>
              {t('nav.tech')}
            </button>
            <button onClick={() => scrollToSection('goals')} className={styles.footerLink}>
              {t('nav.goals')}
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.footerLink}>
              {t('nav.contact')}
            </button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Julio Castro Alejos. {t('nav.about') === 'Sobre Mí' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
