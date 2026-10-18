'use client';

import Image from 'next/image';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

export function Experience() {
  const { language, t } = useLanguage();
  const titles = language === 'es'
    ? ['APIs y servicios', 'Integración con SUNAT', 'Validación de datos', 'Seguridad y persistencia']
    : ['APIs and services', 'SUNAT integration', 'Data validation', 'Security and persistence'];
  return (
    <section id="experience" className={`${styles.experienceSection} editorial-band`} tabIndex={0} aria-label={t('experience.title')}>
      <div className="container">
        <div className="section-rule" /><h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
        <div className={styles.layout}>
          <aside className={styles.meta}>
            <a href="https://devdatep.com/" target="_blank" rel="noopener noreferrer" className={styles.company}>
              <Image src="/images/brands/devdatep.webp" width={76} height={76} alt="Devdatep Consulting" className={styles.companyMark} />
              <span>{t('experience.internship.company')}<ArrowUpRight size={18} aria-hidden="true" /></span>
            </a>
            <span className={styles.metaLine}><CalendarDays size={18} aria-hidden="true" />2026</span>
            <span className={styles.metaLine}><MapPin size={18} aria-hidden="true" />Lima, Perú</span>
          </aside>
          <article className={styles.article}>
            <h3 className={styles.role}>{t('experience.internship.role')}</h3>
            <p className={styles.product}>SaaS Product: <strong>EmiteFacil</strong></p>
            <ol className={styles.contributions}>{titles.map((title, index) => (
              <li className={styles.contribution} key={title}>
                <span className={styles.ordinal} aria-hidden="true">0{index + 1}</span>
                <div><h4>{title}</h4><p>{t(`experience.internship.bullet${index + 1}`)}</p></div>
              </li>
            ))}</ol>
            <div className={styles.tags}>{['Laravel 11','PHP 8.2','MySQL','SOAP / XML UBL','REST APIs','Sanctum'].map(tech => <span key={tech}>{tech}</span>)}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
