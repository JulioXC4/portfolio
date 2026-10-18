'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/lib/navigation';
import { SystemLayers } from '@/components/ui/SystemLayers';
import styles from './Hero.module.css';

export function Hero() {
  const { language, t } = useLanguage();
  return (
    <section id="home" className={styles.heroSection} tabIndex={0} aria-label={language === 'es' ? 'Inicio' : 'Home'}>
      <div className={`${styles.container} container`}>
        <div className={styles.textColumn}>
          <h1 className={styles.title}>{language === 'es'
            ? 'Transformo ideas en productos digitales estables.'
            : 'Translating ideas into robust digital products.'}</h1>
          <p className={styles.description}>{language === 'es'
            ? 'Estudiante de Ingeniería de Software enfocado en el desarrollo Full Stack. Mi propósito no es solo escribir código, sino analizar a fondo los problemas del negocio para diseñar, construir y desplegar aplicaciones completas de extremo a extremo que generen valor real.'
            : 'Software Engineering student focused on Full Stack development. My purpose is not just writing code, but analyzing business problems deeply to design, build, and deploy end-to-end applications that deliver true value.'}</p>
          <div className={styles.actions}>
            <button onClick={() => scrollToSection('freelance')} className={styles.btnPrimary}>
              <span>{t('hero.cta_projects')}</span><ArrowRight size={18} aria-hidden="true" />
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.btnSecondary}>{t('hero.cta_contact')}</button>
          </div>
        </div>
        <SystemLayers />
      </div>
    </section>
  );
}
