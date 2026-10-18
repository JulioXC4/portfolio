'use client';

import React, { useState } from 'react';
import { Footer } from '@/components/common/Footer';
import { Navbar } from '@/components/common/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Freelance } from '@/components/sections/Freelance';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { TechStack } from '@/components/sections/TechStack';
import { Goals } from '@/components/sections/Goals';
import { GithubSection } from '@/components/sections/GithubSection';
import { Contact } from '@/components/sections/Contact';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import { scrollToSection } from '@/lib/navigation';

export default function Home() {
  const { t } = useLanguage();
  const [quoteService, setQuoteService] = useState('web-development');

  return (
    <div className={styles.appWrapper}>
      {/* Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <a href="#main-content" className="skip-link">
        {t('nav.about') === 'Sobre Mí' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      <main id="main-content" className={styles.mainContent}>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Commercial Services Section */}
        <ScrollReveal>
          <Services onRequestQuote={serviceId => { setQuoteService(serviceId); scrollToSection('contact'); }} />
        </ScrollReveal>

        {/* Real Client Freelance Work */}
        <ScrollReveal>
          <Freelance />
        </ScrollReveal>

        {/* Engineering Projects Section */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* Professional Experience Section */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* Tech Stack Section */}
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>

        {/* Goals & Learning Path Section */}
        <ScrollReveal>
          <Goals />
        </ScrollReveal>

        {/* Github stats section */}
        <ScrollReveal>
          <GithubSection />
        </ScrollReveal>

        {/* Contact & Quote Section */}
        <ScrollReveal>
          <Contact serviceId={quoteService} onServiceChange={setQuoteService} />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
