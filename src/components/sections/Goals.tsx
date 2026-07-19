'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Milestone, Code, Cloud, BrainCircuit, HeartHandshake } from 'lucide-react';
import styles from './Goals.module.css';

export const Goals: React.FC = () => {
  const { t } = useLanguage();

  const growthItems = [
    {
      icon: <Milestone size={24} />,
      title: t('goals.arch_title'),
      desc: t('goals.arch_desc')
    },
    {
      icon: <Cloud size={24} />,
      title: t('goals.devops_title'),
      desc: t('goals.devops_desc')
    },
    {
      icon: <Code size={24} />,
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
    <section id="goals" className={styles.goalsSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Left Column: Education / Formación */}
          <div className={styles.educationColumn}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('education.title')}</h2>
              <div className={styles.headerBar}></div>
            </div>

            <div className={`${styles.educationCard} glass-card`}>
              <div className={styles.eduIconWrapper}>
                <GraduationCap size={32} />
              </div>
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
