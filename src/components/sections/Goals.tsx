'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Boxes, Monitor, Cloud, BrainCircuit, Award, ExternalLink, GraduationCap } from 'lucide-react';
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
      <div className={`container ${styles.container}`}>
        <header className={styles.sectionHeader}>
          <div className={styles.sectionRule} aria-hidden="true" />
          <h2 id="education-heading" className={styles.sectionTitle}>{t('education.section_title')}</h2>
        </header>
        <div className={styles.education}>
          <div className={styles.credentials}>
            <Image src="/images/brands/upc.png" width={104} height={104} alt="UPC" className={styles.universityLogo} />
            <div className={styles.degreeGroup}>
              <h3 className={styles.degree}>{t('education.degree')}</h3>
              <a href="https://www.upc.edu.pe/" target="_blank" rel="noopener noreferrer" className={styles.universityLink}>
                <span>{t('education.university')}</span><ExternalLink size={20} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.credential}><GraduationCap size={44} strokeWidth={1.4} aria-hidden="true" /><span>{t('education.period')}</span></p>
            <p className={styles.credential}><Award size={42} strokeWidth={1.4} aria-hidden="true" /><span>{t('education.academic')}</span></p>
          </div>
          <p className={styles.foundation}>{t('education.foundation')}</p>
        </div>
        <div className={styles.growth}>
          <h3 className={styles.growthHeading}>{t('goals.title')}</h3>
          <p className={styles.sectionSubtitle}>{t('goals.subtitle')}</p>
          <ol className={styles.growthList} role="list">
            {growthItems.map((item, index) => {
              const Icon = item.icon;
              return <li key={item.title} className={styles.growthItem}>
                <span className={styles.itemNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <Icon className={styles.itemIcon} size={36} strokeWidth={1.4} aria-hidden="true" />
                <div className={styles.itemContent}>
                  <h4 className={styles.growthTitle}>{item.title}</h4>
                  <p className={styles.growthDesc}>{item.desc}</p>
                </div>
              </li>;
            })}
          </ol>
        </div>
        <blockquote className={styles.statement}>{t('education.statement')}</blockquote>
      </div>
    </section>
  );
};
