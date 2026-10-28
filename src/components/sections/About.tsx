'use client';

import Image from 'next/image';
import { Settings, ListChecks, Users, BookOpen, MapPin, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

const traits = [
  {
    icon: Settings,
    titleES: 'Entender antes de construir',
    titleEN: 'Understand before building',
    descES: 'Escucho, hago preguntas y busco el problema que realmente hay que resolver.',
    descEN: 'I listen, ask questions, and look for the problem that actually needs solving.',
  },
  {
    icon: ListChecks,
    titleES: 'Trabajo con orden',
    titleEN: 'An organized approach',
    descES: 'Divido los retos en tareas claras, priorizo y documento lo que importa.',
    descEN: 'I break challenges into clear tasks, set priorities, and document what matters.',
  },
  {
    icon: Users,
    titleES: 'Colaboración',
    titleEN: 'Collaboration',
    descES: 'Comparto ideas, escucho otras perspectivas y me hago responsable de mi parte.',
    descEN: 'I share ideas, listen to other perspectives, and take responsibility for my work.',
  },
  {
    icon: BookOpen,
    titleES: 'Aprendizaje continuo',
    titleEN: 'Continuous learning',
    descES: 'Me gusta investigar, probar y mejorar a partir de lo que aprendo en cada proyecto.',
    descEN: 'I enjoy researching, experimenting, and improving through what each project teaches me.',
  },
];

export function About() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className={`${styles.aboutSection} editorial-band`} tabIndex={0} aria-labelledby="about-heading">
      <div className={`${styles.container} container`}>
        <div className={styles.mainGrid}>
          <div className={styles.profile}>
            <h2 id="about-heading" className={styles.sectionTitle}>{t('about.title')}</h2>
            <h3 className={styles.profileName}>Julio Castro Alejos<span aria-hidden="true">.</span></h3>
            <p className={styles.profileRole}>{t('about.profile_role')}</p>
            <div className={styles.biography}>
              <p>{t('about.intro')}</p>
              <p>{t('about.approach')}</p>
            </div>
          </div>

          <div className={styles.method}>
            <h3 className={styles.methodHeading}>{t('about.method_heading')}</h3>
            <div className={styles.traits}>
              {traits.map((trait, index) => (
                <details key={trait.titleEN} name="about-method" className={styles.trait} open={index === 0}>
                  <summary className={styles.traitToggle}>
                    <trait.icon size={28} className={styles.traitIcon} aria-hidden="true" />
                    <span>{language === 'es' ? trait.titleES : trait.titleEN}</span>
                    <span className={styles.toggleMark} aria-hidden="true">
                      <Plus size={21} className={styles.plus} />
                      <Minus size={21} className={styles.minus} />
                    </span>
                  </summary>
                  <p className={styles.traitDescription}>{language === 'es' ? trait.descES : trait.descEN}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className={styles.portraitColumn} aria-label="Julio Castro Alejos">
            <Image
              src="/images/julio-castro.jpg"
              width={1025}
              height={1245}
              quality={90}
              sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) 35vw, 450px"
              alt="Julio Castro Alejos"
              className={styles.portrait}
            />
            <p className={styles.location}><MapPin size={20} aria-hidden="true" />{t('about.location')}</p>
            <a className={styles.profileLink} href="https://www.linkedin.com/in/juliocastroalejos/" target="_blank" rel="noopener noreferrer">
              {t('about.profile_link')}<ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </aside>
        </div>

        <ul className={styles.credentials} aria-label={t('about.credentials_label')}>
          <li>
            <a className={styles.credential} href="https://www.upc.edu.pe/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/brands/upc.png" width={52} height={52} alt="Universidad Peruana de Ciencias Aplicadas" className={styles.institutionMark} />
              <span className={styles.credentialContent}>
                <span className={styles.credentialTitle}>{t('about.education_summary')}</span>
                <span>{t('about.academic_record')}</span>
              </span>
            </a>
          </li>
          <li>
            <a className={styles.credential} href="https://180dc.org/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/brands/180dc-icon.png" width={52} height={52} alt="180 Degrees Consulting" className={styles.institutionMark} />
              <span className={styles.credentialContent}>
                <span className={styles.credentialTitle}>{t('about.consulting')}</span>
                <span>{t('about.consulting_label')}</span>
              </span>
            </a>
          </li>
          <li>
            <a className={styles.credential} href="https://devdatep.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/brands/devdatep.webp" width={52} height={52} alt="Devdatep Consulting" className={styles.institutionMark} />
              <span className={styles.credentialContent}>
                <span className={styles.credentialTitle}>{t('experience.internship.role')}</span>
                <span>{t('about.internship_summary')}</span>
                <span>{t('about.internship_work')}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
