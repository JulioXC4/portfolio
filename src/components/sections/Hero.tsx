'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/lib/navigation';
import styles from './Hero.module.css';

export function Hero() {
  const { language, t } = useLanguage();
  return (
    <section id="home" className={styles.heroSection} tabIndex={0} aria-label={language === 'es' ? 'Inicio' : 'Home'}>
      <div className={`${styles.container} container`}>
        <div className={styles.textColumn}>
          <h1 className={styles.title}>
            <span className={styles.firstLine}>{t('hero.title')}</span>{' '}
            <span className={styles.accent}>{t('hero.title_accent')}
              <svg className={styles.underline} viewBox="0 0 600 45" fill="none" aria-hidden="true">
                <path d="M8 36C175 8 373 3 586 13M566 2L587 13L567 26" pathLength="1" />
              </svg>
            </span>
          </h1>
          <p className={styles.description}>{t('hero.description')}</p>
          <div className={styles.actions}>
            <button onClick={() => scrollToSection('contact')} className={styles.btnPrimary}>
              <span>{t('hero.cta_contact')}</span><ArrowRight size={18} aria-hidden="true" />
            </button>
            <button onClick={() => scrollToSection('freelance')} className={styles.btnSecondary}>{t('hero.cta_projects')}</button>
          </div>
        </div>
        <div className={styles.bottomRule} aria-hidden="true" />
      </div>
    </section>
  );
}
