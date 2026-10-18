'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, Database, FileText, Laptop, Wrench } from 'lucide-react';
import { Github } from '@/components/common/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import styles from './Projects.module.css';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'IoT', 'IA'] as const;
const categoryKeys = ['all', 'web', 'mobile', 'backend', 'iot', 'ia'] as const;
const projectIcons = { restock: Database, 'markdown-to-pptx-automator': FileText, portfolio: Laptop, 'gestion-citas-medicas': CalendarDays };

export function Projects() {
  const { language, t } = useLanguage();
  const es = language === 'es';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const projects = projectsData.filter(project => !project.hidden && (activeCategory === 'All' || project.category.some(category => category === activeCategory)));
  return (
    <section id="projects" className={styles.section} tabIndex={0} aria-labelledby="projects-heading">
      <div className="container">
        <header className={styles.header}><div className="section-rule" aria-hidden="true" /><h2 id="projects-heading">{t('projects.title')}</h2><p>{t('projects.subtitle')}</p></header>
        <div className={styles.filters} role="group" aria-label={es ? 'Filtrar proyectos' : 'Filter projects'}>{categories.map((category, index) => <button key={category} type="button" aria-pressed={category === activeCategory} className={category === activeCategory ? styles.active : ''} onClick={() => setActiveCategory(category)}>{t(`projects.category.${categoryKeys[index]}`)}</button>)}</div>
        <p className={styles.srOnly} role="status">{projects.length} {es ? 'proyectos visibles' : 'projects shown'}</p>
        <div className={styles.grid}>
          {projects.map(project => {
            const view = project.presentation;
            const title = view ? (es ? view.titleES : view.titleEN) : (es ? project.titleES : project.titleEN);
            const summary = view ? (es ? view.summaryES : view.summaryEN) : (es ? project.descriptionES : project.descriptionEN);
            const steps = view ? (es ? view.stepsES : view.stepsEN) : [];
            const tools = view?.technologies ?? project.technologies;
            const Icon = projectIcons[project.slug as keyof typeof projectIcons] ?? FileText;
            return (
              <article id={`project-${project.slug}`} key={project.slug} className={styles.card} aria-labelledby={`project-heading-${project.slug}`}>
                <div className={styles.cardHeader}><Icon size={36} strokeWidth={1.4} aria-hidden="true" /><div>{view && <p className={styles.context}>{es ? view.contextES : view.contextEN}</p>}<h3 id={`project-heading-${project.slug}`}>{title}</h3></div></div>
                <p className={styles.description}>{summary}</p>
                {steps.length > 0 && <div className={styles.process}><p>{es ? 'Cómo funciona' : 'How it works'}</p><ol>{steps.map((step, index) => <li key={step}><span>{step}</span>{index < steps.length - 1 && <ArrowRight size={21} aria-hidden="true" />}</li>)}</ol></div>}
                <div className={styles.cardFooter}>
                  <div className={styles.tools}><p>{es ? 'Tecnologías' : 'Tools'}</p><span>{tools.join(' · ')}</span></div>
                  <div className={styles.actions}>
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${es ? 'Ver sitio' : 'View site'} — ${title}`}><ArrowUpRight size={20} aria-hidden="true" />{es ? 'Ver sitio' : 'View site'}</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${es ? 'Ver código' : 'View code'} — ${title}`}><Github size={21} aria-hidden="true" />{project.slug === 'restock' ? (es ? 'Ver repositorios' : 'View repositories') : (es ? 'Ver código' : 'View code')}</a>}
                    {!project.githubUrl && !project.liveUrl && <span className={styles.status}><Wrench size={18} aria-hidden="true" />{t(`projects.status.${project.status}`)}</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {projects.length === 0 && <p className={styles.empty}>{es ? 'No hay proyectos en esta categoría.' : 'No projects in this category.'}</p>}
      </div>
    </section>
  );
}
