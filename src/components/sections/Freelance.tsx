'use client';

import Image from 'next/image';
import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { freelanceProjects } from '@/data/freelance';
import styles from './Freelance.module.css';

export function Freelance() {
  const { language, t } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section id="freelance" className={styles.section} tabIndex={0} aria-labelledby="freelance-heading">
      <div className="container">
        <header className={styles.header}>
          <div>
            <div className="section-rule" />
            <h2 id="freelance-heading" className={styles.heading}>{t('freelance.title')}</h2>
          </div>
          <p className={styles.intro}>{t('freelance.subtitle')}</p>
        </header>

        <div className={styles.projects}>
          {freelanceProjects.map(project => (
            <article key={project.id} className={styles.project} aria-labelledby={`${project.id}-title`}>
              <a className={styles.preview} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${t('freelance.preview')} — ${project.name}`}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span className={styles.browserDots}><i /><i /><i /></span>
                  <LockKeyhole size={13} />
                  <span className={styles.domain}>{project.domain}</span>
                  <ArrowUpRight size={18} className={styles.previewArrow} />
                </div>
                <div className={styles.imageFrame} style={{ backgroundColor: project.previewBackground }}>
                  <Image src={project.image} fill sizes="(max-width: 760px) 90vw, (max-width: 1600px) 44vw, 720px" alt={`${t('freelance.screenshot')} ${project.name}`} className={styles.screenshot} />
                </div>
              </a>

              <h3 id={`${project.id}-title`} className={styles.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}<ArrowUpRight size={28} aria-hidden="true" /></a>
              </h3>
              <p className={styles.category}>{isSpanish ? project.categoryES : project.categoryEN}</p>
              <p className={styles.description}>{isSpanish ? project.descriptionES : project.descriptionEN}</p>
              <div className={styles.footer}>
                <p className={styles.platform}>{isSpanish ? project.platformES : project.platformEN}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.visit} aria-label={`${t('freelance.visit')} — ${project.name}`}>
                  {t('freelance.visit')}<ArrowRight size={20} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
