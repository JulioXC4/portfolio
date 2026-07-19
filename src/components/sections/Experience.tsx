'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  const bullets = [
    t('experience.internship.bullet1'),
    t('experience.internship.bullet2'),
    t('experience.internship.bullet3'),
    t('experience.internship.bullet4'),
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={`${styles.container} container`}>
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
          <div className={styles.headerBar}></div>
        </div>

        <div className={styles.timeline}>
          {/* Vertical central line */}
          <div className={styles.timelineLine}></div>

          {/* Timeline Item: Devdatep Consulting */}
          <div className={styles.timelineItem}>
            {/* Dot indicator */}
            <div className={styles.timelineDot}>
              <Briefcase size={16} />
            </div>

            {/* Experience Card */}
            <div className={`${styles.experienceCard} glass-card`}>
              <div className={styles.cardHeader}>
                <div className={styles.titleArea}>
                  <h3 className={styles.role}>{t('experience.internship.role')}</h3>
                  <div className={styles.companyArea}>
                    <Building size={16} className={styles.headerIcon} />
                    <span className={styles.company}>{t('experience.internship.company')}</span>
                  </div>
                </div>
                <div className={styles.metaArea}>
                  <div className={styles.metaItem}>
                    <Calendar size={14} className={styles.headerIcon} />
                    <span>2026</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={14} className={styles.headerIcon} />
                    <span>Lima, Perú</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardBody}>
                {/* SaaS Product Highlight */}
                <div className={styles.productBadge}>
                  <span className={styles.badgeLabel}>SaaS Product:</span>
                  <span className={styles.badgeName}>EmiteFacil</span>
                </div>

                <ul className={styles.bulletList}>
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      <span className={styles.bulletArrow}>&gt;</span>
                      <p className={styles.bulletText}>{bullet}</p>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges Used */}
                <div className={styles.tagsContainer}>
                  <span className={styles.techTag}>Laravel 11</span>
                  <span className={styles.techTag}>PHP 8.2</span>
                  <span className={styles.techTag}>MySQL</span>
                  <span className={styles.techTag}>SOAP / XML UBL</span>
                  <span className={styles.techTag}>REST APIs</span>
                  <span className={styles.techTag}>Sanctum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
