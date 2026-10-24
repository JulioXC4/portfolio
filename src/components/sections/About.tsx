'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Settings, ChartNoAxesColumnIncreasing, Layers, BookOpen, MapPin, ArrowUpRight } from 'lucide-react';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const traits = [
    {
      icon: <Settings size={28} className={styles.traitIcon} />,
      titleES: "Resolver necesidades",
      titleEN: "Addressing needs",
      descES: "Parto del problema que necesita resolver cada proyecto.",
      descEN: "I start with the problem each project needs to address.",
    },
    {
      icon: <ChartNoAxesColumnIncreasing size={28} className={styles.traitIcon} />,
      titleES: "Entender el negocio",
      titleEN: "Understanding the business",
      descES: "Busco entender cómo se usará la solución y a quién debe ayudar.",
      descEN: "I aim to understand how the solution will be used and who it should help.",
    },
    {
      icon: <Layers size={28} className={styles.traitIcon} />,
      titleES: "Código organizado",
      titleEN: "Organized code",
      descES: "Organizo el código para facilitar su mantenimiento y los cambios futuros.",
      descEN: "I organize code to make maintenance and future changes easier.",
    },
    {
      icon: <BookOpen size={28} className={styles.traitIcon} />,
      titleES: "Seguir aprendiendo",
      titleEN: "Continuing to learn",
      descES: "Sigo aprendiendo sobre desarrollo web, arquitectura y experiencia de usuario.",
      descEN: "I keep learning about web development, architecture, and user experience.",
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
                    {t('nav.about') === 'Sobre Mí' ? trait.titleES : trait.titleEN}
                  </h3>
                  <p className={styles.traitDesc}>
                    {t('nav.about') === 'Sobre Mí' ? trait.descES : trait.descEN}
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
