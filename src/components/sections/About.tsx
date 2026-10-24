'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Settings, ListChecks, Users, BookOpen, MapPin, ArrowUpRight } from 'lucide-react';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const traits = [
    {
      icon: <Settings size={28} className={styles.traitIcon} />,
      titleES: "Entender antes de construir",
      titleEN: "Understand before building",
      descES: "Escucho, hago preguntas y busco el problema que realmente hay que resolver.",
      descEN: "I listen, ask questions, and look for the problem that actually needs solving.",
    },
    {
      icon: <ListChecks size={28} className={styles.traitIcon} />,
      titleES: "Trabajo con orden",
      titleEN: "An organized approach",
      descES: "Divido los retos en tareas claras, priorizo y documento lo que importa.",
      descEN: "I break challenges into clear tasks, set priorities, and document what matters.",
    },
    {
      icon: <Users size={28} className={styles.traitIcon} />,
      titleES: "Colaboración",
      titleEN: "Collaboration",
      descES: "Comparto ideas, escucho otras perspectivas y me hago responsable de mi parte.",
      descEN: "I share ideas, listen to other perspectives, and take responsibility for my work.",
    },
    {
      icon: <BookOpen size={28} className={styles.traitIcon} />,
      titleES: "Aprendizaje continuo",
      titleEN: "Continuous learning",
      descES: "Me gusta investigar, probar y mejorar a partir de lo que aprendo en cada proyecto.",
      descEN: "I enjoy researching, experimenting, and improving through what each project teaches me.",
    }
  ];

  return (
    <section id="about" className={`${styles.aboutSection} editorial-band`} tabIndex={0} aria-label={t('about.title')}>
      <div className={`${styles.container} container`}>
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBar}></div>
          <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
          <Image src="/images/julio-castro.jpg" width={1025} height={1245} sizes="(max-width: 700px) 75vw, 24vw" alt="Julio Castro Alejos" className={styles.portrait} />
          <h3 className={styles.profileName}>Julio Castro Alejos</h3>
          <p className={styles.profileRole}>{t('about.profile_role')}</p>
          <dl className={styles.profileFacts}>
            <div><dt><MapPin size={17} /><span className={styles.srOnly}>{t('about.location_label')}</span></dt><dd>{t('about.location')}</dd></div>
            <div><dt><Image src="/images/brands/upc.png" width={32} height={32} alt="Universidad Peruana de Ciencias Aplicadas" className={styles.institutionMark} /><span className={styles.srOnly}>{t('about.education_label')}</span></dt><dd><a href="https://www.upc.edu.pe/" target="_blank" rel="noopener noreferrer">{t('about.education_summary')}<ArrowUpRight size={14} aria-hidden="true" /></a></dd></div>
            <div><dt><Image src="/images/brands/180dc-icon.png" width={32} height={32} alt="180 Degrees Consulting UPC" className={styles.institutionMark} /><span className={styles.srOnly}>{t('about.consulting_label')}</span></dt><dd><a href="https://180dc.org/" target="_blank" rel="noopener noreferrer">{t('about.consulting')}<ArrowUpRight size={14} aria-hidden="true" /></a></dd></div>
          </dl>
          <a className={styles.profileLink} href="https://www.linkedin.com/in/juliocastroalejos/" target="_blank" rel="noopener noreferrer">{t('about.profile_link')}<ArrowUpRight size={18} /></a>
        </div>

        <div className={styles.grid}>
          {/* Narrative Text */}
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>{t('about.paragraph1')}</p>
            <p className={styles.paragraph}>{t('about.paragraph2')}</p>
            <p className={styles.paragraph}>{t('about.paragraph3')}</p>
          </div>

          {/* Core Focus Trait Grid */}
          <div className={styles.traitsColumn}>
            {traits.map((trait, index) => (
              <div key={index} className={`${styles.traitCard} glass-card`}>
                <div className={styles.iconWrapper}>{trait.icon}</div>
                <div className={styles.traitContent}>
                  <h3 className={styles.traitTitle}>
                    {language === 'es' ? trait.titleES : trait.titleEN}
                  </h3>
                  <p className={styles.traitDesc}>
                    {language === 'es' ? trait.descES : trait.descEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
