'use client';

import Image from 'next/image';
import { ExternalLink, CalendarDays, MapPin, Braces, Cable, BadgeCheck, ShieldCheck } from 'lucide-react';
import { TechMark } from '@/components/common/TechMark';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

export function Experience() {
  const { language, t } = useLanguage();
  const titles = language === 'es'
    ? ['APIs y servicios', 'Integración con SUNAT', 'Validación de datos', 'Seguridad y persistencia']
    : ['APIs and services', 'SUNAT integration', 'Data validation', 'Security and persistence'];
  const icons = [Braces, Cable, BadgeCheck, ShieldCheck];
  const technologies = [
    { label: 'Laravel 11', mark: 'Laravel' },
    { label: 'PHP 8.2', mark: 'PHP' },
    { label: 'MySQL', mark: 'MySQL' },
  ];
  return (
    <section id="experience" className={`${styles.experienceSection} editorial-band`} tabIndex={0} aria-label={t('experience.title')}>
      <div className="container">
        <div className="section-rule" /><h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
        <div className={styles.layout}>
          <aside className={styles.meta}>
            <a href="https://devdatep.com/" target="_blank" rel="noopener noreferrer" className={styles.company}>
              <Image src="/images/brands/devdatep.webp" width={76} height={76} alt="Devdatep Consulting" className={styles.companyMark} />
              <span>{t('experience.internship.company')}<ExternalLink size={15} aria-hidden="true" /></span>
            </a>
            <h3 className={styles.role}>{t('experience.internship.role')}</h3>
            <div className={styles.metaLines}>
              <span className={styles.metaLine}><CalendarDays size={16} aria-hidden="true" />2026 · {t('experience.internship.duration')}</span>
              <span className={styles.metaLine}><MapPin size={16} aria-hidden="true" />{language === 'es' ? 'Lima, Perú' : 'Lima, Peru'}</span>
            </div>
            <div className={styles.product}>
              <h4>EmiteFacil</h4>
              <p>{t('experience.internship.product_summary')}</p>
            </div>
          </aside>
          <article className={styles.article}>
            <h3 className={styles.contributionsTitle}>{t('experience.internship.contributions')}</h3>
            <ul className={styles.contributions}>{titles.map((title, index) => {
              const Icon = icons[index];
              return <li className={styles.contribution} key={title}>
                <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                <div><h4>{title}</h4><p>{t(`experience.internship.bullet${index + 1}`)}</p></div>
              </li>;
            })}</ul>
          </article>
        </div>
        <div className={styles.stack}>
          <h3>{t('experience.internship.tools')}</h3>
          <ul className={styles.tags}>
            {technologies.map(tech => <li key={tech.label}><TechMark name={tech.mark} compact /><span>{tech.label}</span></li>)}
            <li><Cable size={20} aria-hidden="true" /><span>SOAP / XML UBL</span></li>
            <li><Braces size={20} aria-hidden="true" /><span>REST APIs</span></li>
            <li><ShieldCheck size={20} aria-hidden="true" /><span>Sanctum</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
