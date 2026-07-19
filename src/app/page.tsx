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

export default function Home() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.appWrapper}>
      {/* Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <main className={styles.mainContent}>
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
            <div className={styles.footerLogo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg className={styles.logoIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" stroke="var(--color-primary)" strokeWidth="1.5" />
                <line x1="9" y1="15" x2="15" y2="9" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className={styles.logoText}>Julio <span className={styles.logoLastName}>Castro</span></span>
            </div>
            <p className={styles.footerSubtitle}>
              {t('nav.about') === 'Sobre Mí' ? 'Ingeniería con propósito' : 'Engineering with purpose'}
            </p>
          </div>
          
          <div className={styles.footerLinks}>
            <button onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
              {t('nav.about')}
            </button>
            <button onClick={() => { document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
              {t('nav.experience')}
            </button>
            <button onClick={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
              {t('nav.projects')}
            </button>
            <button onClick={() => { document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
              {t('nav.tech')}
            </button>
            <button onClick={() => { document.getElementById('goals')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
              {t('nav.goals')}
            </button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className={styles.footerLink}>
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
