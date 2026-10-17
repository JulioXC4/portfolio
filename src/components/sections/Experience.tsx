'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className={`${styles.experienceSection} editorial-band`} tabIndex={0} aria-label={t('experience.title')}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
        <div className={styles.layout}>
          <div className={styles.meta}><span className={styles.year}>2026</span><span>Lima, Perú</span><span className={styles.company}>{t('experience.internship.company')}</span></div>
          <article className={styles.article}>
            <h3 className={styles.role}>{t('experience.internship.role')}</h3>
            <p className={styles.product}>SaaS Product: EmiteFacil</p>
            <ul className={styles.bulletList}>{[1,2,3,4].map(index => <li className={styles.bulletItem} key={index}><p className={styles.bulletText}>{t(`experience.internship.bullet${index}`)}</p></li>)}</ul>
            <div className={styles.tags}>{['Laravel 11','PHP 8.2','MySQL','SOAP / XML UBL','REST APIs','Sanctum'].map(tech => <span className={styles.tech} key={tech}>{tech}</span>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
