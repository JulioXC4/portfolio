'use client';

import React from 'react';
import { Footer } from '@/components/common/Footer';
import { Navbar } from '@/components/common/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Freelance } from '@/components/sections/Freelance';
import { TechStack } from '@/components/sections/TechStack';
import { Goals } from '@/components/sections/Goals';
import { GithubSection } from '@/components/sections/GithubSection';
import { Contact } from '@/components/sections/Contact';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();


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

        <ScrollReveal>
          <Freelance />
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

      <Footer />
    </div>
  );
}
