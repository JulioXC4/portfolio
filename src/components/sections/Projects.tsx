'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import { Github, WhatsApp } from '@/components/common/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import styles from './Projects.module.css';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'IoT', 'IA'] as const;
const categoryKeys = ['all', 'web', 'mobile', 'backend', 'iot', 'ia'] as const;

export function Projects() {
  const { language: lang, t: translate } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const featuredProject = projectsData.find(project => project.featured && !project.hidden) ?? projectsData[0];
  const filteredProjects = projectsData.filter(project => !project.hidden && !project.featured &&
    (activeCategory === 'All' || project.category.some(category => category === activeCategory)));

  const handleQuoteClick = (projectName: string) => {
    trackWhatsAppClick('featured_project', projectName);
  };

  return (
    <section id="projects" className={styles.projectsSection} tabIndex={0} aria-label={translate('projects.title')}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="section-rule" />
          <h2 className={styles.sectionTitle}>{translate('projects.title')}</h2>
          <p className={styles.sectionSubtitle}>{translate('projects.subtitle')}</p>
        </div>
        <div className={styles.featuredLayout}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredBadge}>
              <Award size={14} />
              <span>{translate('projects.featured_tag')}</span>
            </div>
            <h3 className={styles.featuredTitle}>{lang === 'es' ? featuredProject.titleES : featuredProject.titleEN}</h3>
            <p className={styles.featuredDesc}>{lang === 'es' ? featuredProject.descriptionES : featuredProject.descriptionEN}</p>
            <div className={styles.caseStudyBoard}>
              <div className={styles.boardItem}>
                <span className={styles.boardLabel}>{lang === 'es' ? 'Problema que resuelve:' : 'Problem solved:'}</span>
                <p className={styles.boardValue}>{lang === 'es' ? featuredProject.problemSolvedES : featuredProject.problemSolvedEN}</p>
              </div>
              <div className={styles.boardItem}>
                <span className={styles.boardLabel}>{lang === 'es' ? 'Estado del proyecto:' : 'Project status:'}</span>
                <span className={styles.statusLabel}>{translate(`projects.status.${featuredProject.status}`)}</span>
              </div>
              <div className={styles.boardItem}>
                <span className={styles.boardLabel}>{lang === 'es' ? 'Demostración:' : 'Demo status:'}</span>
                <p className={styles.boardValue}>
                  {lang === 'es'
                    ? 'Simulación física interactiva disponible en la vista detallada.'
                    : 'Interactive physics simulator ready inside the details view.'}
                </p>
              </div>
            </div>
            <div className={styles.featuredTechList}>
              {featuredProject.technologies.map(tech => (
                <span key={tech} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <div className={styles.featuredActions}>
              <Link href={`/projects/${featuredProject.slug}`} className={styles.btnDetails}>
                {translate('projects.view_details')}
                <ArrowRight size={20} />
              </Link>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.projectSimilar(lang === 'es' ? featuredProject.titleES : featuredProject.titleEN, lang))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleQuoteClick(featuredProject.slug)}
                className={styles.btnQuoteProject}
                aria-label={`${lang === 'es' ? 'Cotizar proyecto similar a' : 'Quote a project similar to'} ${featuredProject.titleES}`}
              >
                <WhatsApp size={16} />
                <span>{lang === 'es' ? 'Cotizar solución similar' : 'Quote similar solution'}</span>
              </a>
              {featuredProject.githubUrl && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnGithub}
                >
                  <Github size={22} />
                  <span>{translate('projects.view_github')}</span>
                </a>
              )}
            </div>
          </div>
          <div className={styles.featuredVisual}>
            <div className={styles.dashboardShell}>
              <div className={styles.shellHeader}>
                <div className={styles.shellButtons} aria-hidden="true"><span /><span /><span /></div>
                <span className={styles.shellTitle}>Restock IoT Cloud Console</span>
              </div>
              <div className={styles.shellBody}>
                <div className={styles.iotMetricRow}>
                  <div className={styles.metricWidget}>
                    <span className={styles.widgetLabel}>Container 01 (Beef)</span>
                    <div className={styles.widgetValue}>12.4<span className={styles.valueUnit}>kg</span></div>
                  </div>
                  <div className={styles.metricWidget}>
                    <span className={styles.widgetLabel}>Temp. Sensor</span>
                    <div className={styles.widgetValue}>4.2<span className={styles.valueUnit}>°C</span></div>
                  </div>
                </div>
                <div className={styles.terminalLines}>
                  <p className={styles.termGreen}>[MQTT] Client connected to broker.hivemq.com</p>
                  <p className={styles.termBlue}>[EDGE] Filtering weight noise: raw=12.44kg, filtered=12.40kg</p>
                  <p className={styles.termYellow}>[CLOUD] CQRS stock notification: status=WARNING threshold=15.00kg</p>
                </div>
                <Image
                  src="/images/restock-system.png"
                  width={1728}
                  height={928}
                  sizes="(max-width: 760px) 90vw, 40vw"
                  alt="Consola de telemetría y panel de control de inventario IoT en tiempo real para restaurantes"
                  className={styles.systemArt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filterContainer} role="group" aria-label={translate('projects.title')}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterActive : ''}`}
            >
              {translate(`projects.category.${categoryKeys[index]}`)}
            </button>
          ))}
        </div>
        {filteredProjects.length ? (
          <div className={styles.grid}>
            {filteredProjects.map(project => (
              <article key={project.slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{lang === 'es' ? project.titleES : project.titleEN}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{lang === 'es' ? project.descriptionES : project.descriptionEN}</p>
                </div>
                {project.problemSolvedES && (
                  <div className={styles.secondaryProblemSolved}>
                    <strong>{lang === 'es' ? 'Meta: ' : 'Goal: '}</strong>
                    {lang === 'es' ? project.problemSolvedES : project.problemSolvedEN}
                  </div>
                )}
                <div className={styles.cardAside}>
                  <div className={styles.cardMeta}>
                    <span className={styles.statusLabel}>{translate(`projects.status.${project.status}`)}</span>
                    <div className={styles.cardCats}>
                      {project.category.map(category => (
                        <span key={category} className={styles.cardCatBadge}>{category}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.cardTech}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.techBadgeSmall}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <Link href={`/projects/${project.slug}`} className={styles.btnCardLink}>
                      {translate('projects.view_details')}
                      <ArrowRight size={18} />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${translate('projects.view_github')} — ${lang === 'es' ? project.titleES : project.titleEN}`}
                        className={styles.iconLink}
                      >
                        <Github size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIllustration}>
              <svg className={styles.radarSvg} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.radarOuter} cx="50" cy="50" r="40" stroke="currentColor" />
                <circle className={styles.radarInner} cx="50" cy="50" r="20" stroke="currentColor" />
                <line className={styles.radarSweep} x1="50" y1="50" x2="85" y2="25" stroke="currentColor" />
                <circle className={styles.radarCore} cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.emptyTitle}>
              {lang === 'es' ? 'Sin proyectos en esta categoría' : 'No projects found'}
            </h3>
            <p className={styles.emptyDesc}>
              {lang === 'es'
                ? 'Actualmente no hay proyectos públicos listados bajo este filtro específico.'
                : 'There are currently no public projects listed under this specific filter.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
