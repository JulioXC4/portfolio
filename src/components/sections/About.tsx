'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Briefcase, Cpu, Award } from 'lucide-react';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const traits = [
    {
      icon: <ShieldCheck size={28} className={styles.traitIcon} />,
      titleES: 'Soluciones Reales',
      titleEN: 'Real Solutions',
      descES: 'Desarrollo software robusto y tolerante a fallos pensado para producción.',
      descEN: 'Developing robust, fault-tolerant software designed for production environments.'
    },
    {
      icon: <Briefcase size={28} className={styles.traitIcon} />,
      titleES: 'Foco en el Negocio',
      titleEN: 'Business Value',
      descES: 'Entiendo el problema operativo para aportar valor tecnológico con propósito.',
      descEN: 'Understanding the operational problem to deliver purposeful technical value.'
    },
    {
      icon: <Cpu size={28} className={styles.traitIcon} />,
      titleES: 'Arquitectura Limpia',
      titleEN: 'Clean Architecture',
      descES: 'Aplico patrones (DDD, CQRS, DTO) para mantener la escalabilidad.',
      descEN: 'Applying design patterns (DDD, CQRS, DTO) to maintain long-term scalability.'
    },
    {
      icon: <Award size={28} className={styles.traitIcon} />,
      titleES: 'Aprendizaje Activo',
      titleEN: 'Continuous Growth',
      descES: 'Evoluciono constantemente investigando mejores prácticas de arquitectura y experiencia de usuario.',
      descEN: 'Constantly evolving by researching software architecture patterns and UX best practices.'
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.container} container`}>
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
          <div className={styles.headerBar}></div>
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
