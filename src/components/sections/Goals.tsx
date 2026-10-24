'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Boxes, Monitor, Cloud, BrainCircuit, BadgeCheck, ExternalLink, Plus } from 'lucide-react';
import styles from './Goals.module.css';

export const Goals: React.FC = () => {
  const { t } = useLanguage();
  const growthItems = [
    { icon: Boxes, title: t('goals.arch_title'), desc: t('goals.arch_desc') },
    { icon: Cloud, title: t('goals.devops_title'), desc: t('goals.devops_desc') },
    { icon: Monitor, title: t('goals.front_title'), desc: t('goals.front_desc') },
    { icon: BrainCircuit, title: t('goals.ai_title'), desc: t('goals.ai_desc') },
  ];

  return (
    <section id="goals" className={`${styles.goalsSection} editorial-band`} tabIndex={0} aria-labelledby="education-heading">
      <div className="container">
        <header className={styles.sectionHeader}>
          <div className="section-rule" aria-hidden="true" />
          <h2 id="education-heading" className={styles.sectionTitle}>{t('education.section_title')}</h2>
        </header>
        <div className={styles.grid}>
          <div className={styles.educationColumn}>
            <a href="https://www.upc.edu.pe/" target="_blank" rel="noopener noreferrer" className={styles.universityLink}>
              <Image src="/images/brands/upc.png" width={52} height={52} alt="UPC" className={styles.universityLogo} />
              <span>{t('education.university')}</span><ExternalLink size={16} aria-hidden="true" />
            </a>
            <h3 className={styles.degree}>{t('education.degree')}</h3>
            <p className={styles.period}>{t('education.period')}</p>
            <p className={styles.academic}><BadgeCheck size={19} aria-hidden="true" />{t('education.academic')}</p>
            <p className={styles.foundation}>{t('education.foundation')}</p>
            <blockquote className={styles.statement}>{t('education.statement')}</blockquote>
          </div>
          <div className={styles.growthColumn}>
            <h3 className={styles.growthHeading}>{t('goals.title')}</h3>
            <p className={styles.sectionSubtitle}>{t('goals.subtitle')}</p>
            <div className={styles.growthList}>
              {growthItems.map((item, index) => {
                const Icon = item.icon;
                return <details key={item.title} className={styles.growthCard} open={index === 0}>
                  <summary className={styles.growthToggle}>
                    <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    <span>{item.title}</span>
                    <Plus size={18} className={styles.toggleMark} aria-hidden="true" />
                  </summary>
                  <p className={styles.growthDesc}>{item.desc}</p>
                </details>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
