'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData, Project } from '@/data/projects';
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram';
import { LiveDashboardSimulator } from '@/components/ui/LiveDashboardSimulator';
import { ArrowLeft, ExternalLink, ShieldAlert, Cpu, Network, Layers } from 'lucide-react';
import { Github } from '@/components/common/BrandIcons';
import styles from './page.module.css';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const { language: lang, t } = useLanguage();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <div className={`${styles.errorCard} glass-card`}>
          <ShieldAlert size={48} className={styles.errorIcon} />
          <h2 className={styles.errorTitle}>
            {lang === 'es' ? 'Proyecto No Encontrado' : 'Project Not Found'}
          </h2>
          <p className={styles.errorText}>
            {lang === 'es' 
              ? 'El proyecto que estás intentando ver no existe en los registros.' 
              : 'The project you are trying to view does not exist.'}
          </p>
          <Link href="/" className={styles.btnBack}>
            <ArrowLeft size={16} />
            <span>{t('projects.back_to_portfolio')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const isRestock = project.slug === 'restock';
  const title = lang === 'es' ? project.titleES : project.titleEN;
  const description = lang === 'es' ? project.longDescriptionES : project.longDescriptionEN;
  const features = lang === 'es' ? project.featuresES : project.featuresEN;

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'finished': return styles.statusFinished;
      case 'in_development': return styles.statusDev;
      case 'upcoming': return styles.statusUpcoming;
      default: return '';
    }
  };

  const getStatusText = (status: Project['status']) => {
    return t(`projects.status.${status}`);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top sticky navigation */}
      <header className={styles.header}>
        <div className={`${styles.headerContainer} container`}>
          <Link href="/" className={styles.btnNavBack}>
            <ArrowLeft size={16} />
            <span>{t('projects.back_to_portfolio')}</span>
          </Link>
          <div className={styles.logo}>
            <svg className={styles.logoIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" stroke="var(--color-primary)" strokeWidth="1.5" />
              <line x1="9" y1="15" x2="15" y2="9" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={styles.logoText}>Julio <span className={styles.logoLastName}>Castro</span></span>
          </div>
        </div>
      </header>

      <main className={`${styles.main} container`}>
        {/* Project Hero Header */}
        <section className={styles.heroSection}>
          <div className={styles.heroMeta}>
            <span className={`${styles.statusLabel} ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
            <div className={styles.categoryBadges}>
              {project.category.map((cat, idx) => (
                <span key={idx} className={styles.catBadge}>{cat}</span>
              ))}
            </div>
          </div>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.longDesc}>{description}</p>

          <div className={styles.actions}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                <Github size={18} />
                <span>{t('projects.view_github')}</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </section>

        {/* Dynamic content rendering based on whether it is Restock or a standard project */}
        {isRestock ? (
          /* RESTOCK PREMIUM DETAIL LAYOUT */
          <div className={styles.detailsLayout}>
            {/* Features section */}
            <section className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Layers size={20} className={styles.headingIcon} />
                <span>{t('projects.key_features')}</span>
              </h3>
              <ul className={styles.featuresList}>
                {features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureBullet}>✔</span>
                    <p>{feat}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture section */}
            <section className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Network size={20} className={styles.headingIcon} />
                <span>{t('projects.architecture_title')}</span>
              </h3>
              <ArchitectureDiagram />
            </section>

            {/* Live simulator section */}
            <section className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Cpu size={20} className={styles.headingIcon} />
                <span>{t('projects.simulator_title')}</span>
              </h3>
              <p className={styles.sectionIntro}>{t('projects.simulator_desc')}</p>
              <LiveDashboardSimulator />
            </section>

            {/* Technical Challenges detail */}
            <section className={`${styles.section} ${styles.challengesSection}`}>
              <h3 className={styles.sectionHeading}>
                <ShieldAlert size={20} className={styles.headingIcon} />
                <span>
                  {lang === 'es' ? 'Desafíos Técnicos y Decisiones de Diseño' : 'Technical Challenges & Architecture Decisions'}
                </span>
              </h3>
              <div className={styles.challengesGrid}>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Domain-Driven Design (DDD) &amp; CQRS</h4>
                  <p>
                    {lang === 'es'
                      ? 'El backend cloud en Spring Boot separa la lógica en contextos delimitados (recetas, usuarios, ingredientes). Se implementó CQRS para desacoplar el canal de comandos (actualizaciones de peso masivas desde IoT) del canal de consultas (dashboard de gerencia), previniendo bloqueos de base de datos.'
                      : 'The Spring Boot cloud backend isolates business logic into bounded contexts. CQRS was implemented to decouple the command channel (high-frequency raw weights telemetry) from the query channel (manager dashboard), avoiding data store bottlenecks.'}
                  </p>
                </div>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Edge Computing &amp; Noise Filtration</h4>
                  <p>
                    {lang === 'es'
                      ? 'Las celdas de carga sufren de ruido debido a vibraciones ambientales. La capa Edge (Python/Flask) implementa filtros de media móvil ponderada para limpiar la telemetría antes del envío. Esto redujo el tráfico cloud de red en un 70% al descartar variaciones irrelevantes.'
                      : 'Weight load cells experience electrical noise from environmental vibration. The Edge layer (Python/Flask) runs weighted moving average filters to clean telemetry before transport. This decreased cloud network traffic by 70% by ignoring noise.'}
                  </p>
                </div>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Offline-First Mobile Support</h4>
                  <p>
                    {lang === 'es'
                      ? 'En cocinas de restaurantes, las caídas de internet son comunes. La app móvil Flutter utiliza base de datos SQLite local controlada mediante el patrón BLoC. Las alertas de stock se recalculan en el dispositivo de forma autónoma y se sincronizan al recuperar la conectividad.'
                      : 'In restaurant kitchens, internet drops are frequent. The Flutter mobile app uses a local SQLite store managed via the BLoC pattern. Stock alerts are calculated on-device independently and synchronized as soon as connections resume.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* STANDARD PROJECT LAYOUT */
          <div className={styles.detailsLayout}>
            <section className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Layers size={20} className={styles.headingIcon} />
                <span>{t('projects.key_features')}</span>
              </h3>
              <ul className={styles.featuresList}>
                {features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureBullet}>✔</span>
                    <p>{feat}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionHeading}>
                <Cpu size={20} className={styles.headingIcon} />
                <span>{t('projects.tech_stack')}</span>
              </h3>
              <div className={styles.techTagsContainer}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techTagBadge}>{tech}</span>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.copyright}>© {new Date().getFullYear()} Julio Castro Alejos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
