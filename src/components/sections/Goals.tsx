'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Boxes, Monitor, Cloud, BrainCircuit, HeartHandshake } from 'lucide-react';
import styles from './Goals.module.css';

export const Goals: React.FC = () => {
  const { t } = useLanguage();

  const growthItems = [
    {
      icon: <Boxes size={24} />,
      title: t('goals.arch_title'),
      desc: t('goals.arch_desc')
    },
    {
      icon: <Cloud size={24} />,
      title: t('goals.devops_title'),
      desc: t('goals.devops_desc')
    },
    {
      icon: <Monitor size={24} />,
      title: t('goals.front_title'),
      desc: t('goals.front_desc')
    },
    {
      icon: <BrainCircuit size={24} />,
      title: t('goals.ai_title'),
      desc: t('goals.ai_desc')
    }
  ];

  return (
    <section id="goals" className={`${styles.goalsSection} editorial-band`} tabIndex={0} aria-label={t('goals.title')}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Left Column: Education / Formación */}
          <div className={styles.educationColumn}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('education.title')}</h2>
              <div className={styles.headerBar}></div>
            </div>

            <div className={`${styles.educationCard} glass-card`}>
              <Image src="/images/brands/upc.png" width={90} height={90} alt="UPC — Universidad Peruana de Ciencias Aplicadas" className={styles.universityLogo} />
              <div className={styles.eduDetails}>
                <h3 className={styles.degree}>{t('education.degree')}</h3>
                <span className={styles.university}>{t('education.university')}</span>
                <div className={styles.eduMeta}>
                  <span className={styles.eduStatusBadge}>{t('education.period')}</span>
                </div>
              </div>
            </div>

            {/* Value statement card */}
            <div className={`${styles.statementCard} glass-card`}>
              <HeartHandshake size={28} className={styles.statementIcon} />
              <p className={styles.statementText}>
                &quot;Construir cosas que funcionen. Documentar lo que importa. Mejorar lo que se puede medir.&quot;
              </p>
            </div>
            <Image src="/images/learning-path.png" width={1536} height={1024} sizes="(max-width: 760px) 80vw, 25vw" alt="" className={styles.learningArt} />
          </div>

          {/* Right Column: Growth Goals / Objetivos */}
          <div className={styles.growthColumn}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('goals.title')}</h2>
              <p className={styles.sectionSubtitle}>{t('goals.subtitle')}</p>
              <div className={styles.headerBar}></div>
            </div>

            <div className={styles.growthList}>
              {growthItems.map((item, idx) => (
                <div key={idx} className={styles.growthCard}>
                  <div className={styles.growthIcon}>{item.icon}</div>
                  <div className={styles.growthContent}>
                    <h3 className={styles.growthTitle}>{item.title}</h3>
                    <p className={styles.growthDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
