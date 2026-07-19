'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Github } from '@/components/common/BrandIcons';
import styles from './GithubSection.module.css';

export const GithubSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="github" className={styles.githubSection}>
      <div className={`${styles.container} container`}>
        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t('nav.about') === 'Sobre Mí' ? 'Actividad en GitHub' : 'GitHub Activity'}
          </h2>
          <div className={styles.headerBar}></div>
        </div>

        <div className={`${styles.dashboard} glass-card`}>
          {/* Header info */}
          <div className={styles.dashboardHeader}>
            <div className={styles.userInfo}>
              <div className={styles.avatarWrapper}>
                <Github size={28} />
              </div>
              <div>
                <h3 className={styles.username}>JulioXC4</h3>
                <p className={styles.userSubtitle}>Software Engineering Student &amp; Developer</p>
              </div>
            </div>
            <a 
              href="https://github.com/JulioXC4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.profileBtn}
            >
              <Github size={16} />
              <span>{t('nav.about') === 'Sobre Mí' ? 'Ver Perfil' : 'View Profile'}</span>
            </a>
          </div>

          {/* Streak Card */}
          <div className={styles.streakWrapper}>
            {/* We render the streak card directly using NextImage-like or standard img tag since it's dynamic SVG */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://streak-stats.demolab.com/?user=JulioXC4&theme=tokyonight&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff" 
              alt="GitHub Streak Stats" 
              className={styles.streakImg}
              loading="lazy"
            />
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            <div className={styles.statCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=JulioXC4&theme=tokyonight&hide_border=true" 
                alt="Repos por lenguaje" 
                className={styles.statCardImg}
                loading="lazy"
              />
            </div>
            
            <div className={styles.statCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=JulioXC4&theme=tokyonight&hide_border=true" 
                alt="Lenguajes por commits" 
                className={styles.statCardImg}
                loading="lazy"
              />
            </div>
            
            <div className={styles.statCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=JulioXC4&theme=tokyonight&hide_border=true" 
                alt="Stats generales" 
                className={styles.statCardImg}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
