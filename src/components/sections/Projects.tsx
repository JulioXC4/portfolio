'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData, Project } from '@/data/projects';
import { ArrowRight, Award } from 'lucide-react';
import { Github } from '@/components/common/BrandIcons';
import Link from 'next/link';
import styles from './Projects.module.css';

interface CategoryFilter {
  id: 'All' | 'Web' | 'Mobile' | 'Backend' | 'IoT' | 'IA';
  labelKey: string;
}

export const Projects: React.FC = () => {
  const { language: lang, t: translate } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: CategoryFilter[] = [
    { id: 'All', labelKey: 'projects.category.all' },
    { id: 'Web', labelKey: 'projects.category.web' },
    { id: 'Mobile', labelKey: 'projects.category.mobile' },
    { id: 'Backend', labelKey: 'projects.category.backend' },
    { id: 'IoT', labelKey: 'projects.category.iot' },
    { id: 'IA', labelKey: 'projects.category.ia' }
  ];

  // Restock is always the featured project
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  
  // Secondary projects (excluding Restock)
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  // Filter logic for secondary projects
  const filteredProjects = activeCategory === 'All'
    ? secondaryProjects
    : secondaryProjects.filter((p) => 
        p.category.some((cat) => cat === activeCategory)
      );

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'finished':
        return translate('projects.status.finished');
      case 'in_development':
        return translate('projects.status.in_development');
      case 'upcoming':
        return translate('projects.status.upcoming');
      default:
        return '';
    }
  };

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

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`${styles.container} container`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{translate('projects.title')}</h2>
          <p className={styles.sectionSubtitle}>{translate('projects.subtitle')}</p>
          <div className={styles.headerBar}></div>
        </div>

        {/* 1. FEATURED CASE STUDY: RESTOCK */}
        {featuredProject && (
          <div className={styles.featuredContainer}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredGlow}></div>
              
              <div className={styles.featuredLayout}>
                <div className={styles.featuredContent}>
                  <div className={styles.featuredBadge}>
                    <Award size={14} />
                    <span>{translate('projects.featured_tag')}</span>
                  </div>
                  
                  <h3 className={styles.featuredTitle}>
                    {lang === 'es' ? featuredProject.titleES : featuredProject.titleEN}
                  </h3>
                  
                  <p className={styles.featuredDesc}>
                    {lang === 'es' ? featuredProject.descriptionES : featuredProject.descriptionEN}
                  </p>

                  {/* Case Study Metadata Board */}
                  <div className={styles.caseStudyBoard}>
                    <div className={styles.boardItem}>
                      <span className={styles.boardLabel}>
                        {lang === 'es' ? 'Problema que resuelve:' : 'Problem solved:'}
                      </span>
                      <p className={styles.boardValue}>
                        {lang === 'es' ? featuredProject.problemSolvedES : featuredProject.problemSolvedEN}
                      </p>
                    </div>

                    <div className={styles.boardItem}>
                      <span className={styles.boardLabel}>
                        {lang === 'es' ? 'Estado del proyecto:' : 'Project status:'}
                      </span>
                      <span className={`${styles.statusLabel} ${getStatusColor(featuredProject.status)}`}>
                        {getStatusText(featuredProject.status)}
                      </span>
                    </div>

                    <div className={styles.boardItem}>
                      <span className={styles.boardLabel}>
                        {lang === 'es' ? 'Demostración:' : 'Demo status:'}
                      </span>
                      <p className={styles.boardValue}>
                        {lang === 'es' 
                          ? 'Simulación física interactiva disponible en la vista detallada.' 
                          : 'Interactive physics simulator ready inside the details view.'}
                      </p>
                    </div>
                  </div>

                  <div className={styles.featuredTechList}>
                    {featuredProject.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.featuredActions}>
                    <Link href={`/projects/${featuredProject.slug}`} className={styles.btnDetails}>
                      {translate('projects.view_details')}
                      <ArrowRight size={16} />
                    </Link>
                    {featuredProject.githubUrl && (
                      <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.btnGithub} aria-label="GitHub Repository">
                        <Github size={20} />
                        <span>{translate('projects.view_github')}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Graphical Preview (Simulation Interface Shell) */}
                <div className={styles.featuredVisual}>
                  <div className={styles.dashboardShell}>
                    <div className={styles.shellHeader}>
                      <div className={styles.shellButtons}>
                        <span></span><span></span><span></span>
                      </div>
                      <div className={styles.shellTitle}>Restock IoT Cloud Console</div>
                    </div>
                    <div className={styles.shellBody}>
                      <div className={styles.iotMetricRow}>
                        <div className={styles.metricWidget}>
                          <span className={styles.widgetLabel}>Container 01 (Beef)</span>
                          <div className={styles.widgetValue}>
                            <span className={styles.valueNumber}>12.4</span>
                            <span className={styles.valueUnit}>kg</span>
                          </div>
                          <div className={styles.widgetBar} style={{'--fill': '82%'} as React.CSSProperties}></div>
                        </div>
                        <div className={styles.metricWidget}>
                          <span className={styles.widgetLabel}>Temp. Sensor</span>
                          <div className={styles.widgetValue}>
                            <span className={`${styles.valueNumber} ${styles.alertText}`}>4.2</span>
                            <span className={styles.valueUnit}>°C</span>
                          </div>
                          <div className={`${styles.widgetBar} ${styles.barAlert}`} style={{'--fill': '22%'} as React.CSSProperties}></div>
                        </div>
                      </div>
                      <div className={styles.terminalLines}>
                        <p className={styles.termGreen}>[MQTT] Client connected to broker.hivemq.com</p>
                        <p className={styles.termBlue}>[EDGE] Filtering weight noise: raw=12.44kg, filtered=12.40kg</p>
                        <p className={styles.termYellow}>[CLOUD] CQRS stock notification: status=WARNING threshold=15.00kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CATEGORY FILTERS FOR SECONDARY PROJECTS */}
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
            >
              {translate(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* 3. SECONDARY PROJECTS GRID OR EMPTY STATE */}
        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.slug} className={`${styles.card} glass-card`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={`${styles.statusLabel} ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                    <div className={styles.cardCats}>
                      {project.category.map((cat, idx) => (
                        <span key={idx} className={styles.cardCatBadge}>{cat}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h4 className={styles.cardTitle}>
                    {lang === 'es' ? project.titleES : project.titleEN}
                  </h4>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>
                    {lang === 'es' ? project.descriptionES : project.descriptionEN}
                  </p>

                  {project.problemSolvedES && (
                    <div className={styles.secondaryProblemSolved}>
                      <strong>{lang === 'es' ? 'Meta: ' : 'Goal: '}</strong>
                      {lang === 'es' ? project.problemSolvedES : project.problemSolvedEN}
                    </div>
                  )}
                  
                  <div className={styles.cardTech}>
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className={styles.techBadgeSmall}>{tech}</span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className={styles.techBadgeSmallMore}>+{project.technologies.length - 5}</span>
                    )}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/projects/${project.slug}`} className={styles.btnCardLink}>
                    <span>{translate('projects.view_details')}</span>
                    <ArrowRight size={14} />
                  </Link>
                  
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub Repository">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
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
            <h4 className={styles.emptyTitle}>
              {lang === 'es' ? 'Estoy aprendiendo esto para desarrollarlo' : 'Acquiring knowledge to build future products'}
            </h4>
            <p className={styles.emptyDesc}>
              {lang === 'es' 
                ? 'Actualmente explorando patrones avanzados y herramientas en esta disciplina para materializar futuras soluciones y proyectos de extremo a extremo.' 
                : 'Currently researching advanced patterns and toolsets in this discipline to engineer future end-to-end solutions.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
