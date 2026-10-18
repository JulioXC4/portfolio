'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData, Project } from '@/data/projects';
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram';
import { LiveDashboardSimulator } from '@/components/ui/LiveDashboardSimulator';
import {
  ArrowLeft,
  ExternalLink,
  ShieldAlert,
  Cpu,
  Network,
  Layers,
  Activity,
  Cloud,
  Smartphone,
  Monitor,
  Bell,
} from 'lucide-react';
import { Github, WhatsApp } from '@/components/common/BrandIcons';
import { BrandMark } from '@/components/common/BrandMark';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import styles from './page.module.css';

interface ProjectClientProps {
  slug: string;
}

export function ProjectClient({ slug }: ProjectClientProps) {
  const { language: lang, t } = useLanguage();
  const isEs = lang === 'es';

  const project = projectsData.find((p) => p.slug === slug && !p.hidden);

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <div className={`${styles.errorCard} glass-card`}>
          <ShieldAlert size={48} className={styles.errorIcon} />
          <h2 className={styles.errorTitle}>
            {isEs ? 'Proyecto No Encontrado' : 'Project Not Found'}
          </h2>
          <p className={styles.errorText}>
            {isEs
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
  const title = isEs ? project.titleES : project.titleEN;
  const description = isEs ? project.longDescriptionES : project.longDescriptionEN;
  const features = isEs ? project.featuresES : project.featuresEN;
  const featureIcons = [Activity, Cpu, Cloud, Smartphone, Monitor, Bell];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'finished':
        return styles.statusFinished;
      case 'in_development':
        return styles.statusDev;
      case 'upcoming':
        return styles.statusUpcoming;
      default:
        return '';
    }
  };

  const getStatusText = (status: Project['status']) => {
    return t(`projects.status.${status}`);
  };

  const handleQuoteClick = () => {
    trackWhatsAppClick('project_detail_view', project.slug);
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
            <BrandMark className={styles.logoIcon} />
            <span className={styles.logoText}>
              Julio <span className={styles.logoLastName}>Castro</span>
            </span>
          </div>
        </div>
      </header>

      <main className={`${styles.main} container`}>
        {/* Project Hero Header */}
        <section className={`${styles.heroSection} ${isRestock ? styles.restockHero : ''}`}>
          <div className={styles.heroMeta}>
            <span className={`${styles.statusLabel} ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
            <div className={styles.categoryBadges}>
              {project.category.map((cat, idx) => (
                <span key={idx} className={styles.catBadge}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <p className={styles.longDesc}>{description}</p>

          <div className={styles.actions}>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.projectSimilar(title, lang))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleQuoteClick}
              className={styles.btnQuoteProjectDetail}
              aria-label={`${isEs ? 'Cotizar proyecto similar a' : 'Quote a project similar to'} ${title}`}
            >
              <WhatsApp size={18} />
              <span>{isEs ? 'Cotizar solución similar por WhatsApp' : 'Quote similar solution on WhatsApp'}</span>
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <Github size={18} />
                <span>{t('projects.view_github')}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {isRestock && (
            <Image
              src="/images/restock-detail.png"
              width={1536}
              height={1024}
              sizes="(max-width: 760px) 90vw, 40vw"
              loading="eager"
              className={styles.projectArt}
              alt="Arquitectura técnica y dashboard de Restock para control de inventario automatizado por IoT"
            />
          )}
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
              <ul className={`${styles.featuresList} ${styles.restockFeatures}`}>
                {features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureBullet}>
                      {React.createElement(featureIcons[idx] ?? Activity, {
                        size: 26,
                        strokeWidth: 1.3,
                        'aria-hidden': true,
                      })}
                    </span>
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
                  {isEs
                    ? 'Desafíos Técnicos y Decisiones de Diseño'
                    : 'Technical Challenges & Architecture Decisions'}
                </span>
              </h3>
              <div className={styles.challengesGrid}>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Domain-Driven Design (DDD) &amp; CQRS</h4>
                  <p>
                    {isEs
                      ? 'El backend cloud en Spring Boot separa la lógica en contextos delimitados (recetas, usuarios, ingredientes). Se implementó CQRS para desacoplar el canal de comandos (actualizaciones de peso masivas desde IoT) del canal de consultas (dashboard de gerencia), previniendo bloqueos de base de datos.'
                      : 'The Spring Boot cloud backend isolates business logic into bounded contexts. CQRS was implemented to decouple the command channel (high-frequency raw weights telemetry) from the query channel (manager dashboard), avoiding data store bottlenecks.'}
                  </p>
                </div>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Edge Computing &amp; Noise Filtration</h4>
                  <p>
                    {isEs
                      ? 'Las celdas de carga sufren de ruido debido a vibraciones ambientales. La capa Edge (Python/Flask) implementa filtros de media móvil ponderada para limpiar la telemetría antes del envío. Esto redujo el tráfico cloud de red en un 70% al descartar variaciones irrelevantes.'
                      : 'Weight load cells experience electrical noise from environmental vibration. The Edge layer (Python/Flask) runs weighted moving average filters to clean telemetry before transport. This decreased cloud network traffic by 70% by ignoring noise.'}
                  </p>
                </div>
                <div className={`${styles.challengeCard} glass-card`}>
                  <h4>Offline-First Mobile Support</h4>
                  <p>
                    {isEs
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
                  <span key={idx} className={styles.techTagBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Julio Castro Alejos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
