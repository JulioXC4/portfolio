'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ExternalLink, CalendarDays, Database, FileText, Laptop, Wrench } from 'lucide-react';
import { Github } from '@/components/common/BrandIcons';
import { TechMark } from '@/components/common/TechMark';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import styles from './Projects.module.css';
import { useMotion } from '@/hooks/useMotion';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'IoT', 'IA'] as const;
const categoryKeys = ['all', 'web', 'mobile', 'backend', 'iot', 'ia'] as const;
const projectIcons = { restock: Database, 'markdown-to-pptx-automator': FileText, portfolio: Laptop, 'gestion-citas-medicas': CalendarDays };

export function Projects() {
  const { language, t } = useLanguage();
  const es = language === 'es';
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const grid = useRef<HTMLDivElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const positions = useRef<Map<string, DOMRect> | null>(null);
  const outgoing = useRef<{ element: HTMLElement; rect: DOMRect }[]>([]);
  const { animate, cancel } = useMotion();
  const projects = projectsData.filter(project => !project.hidden && (activeCategory === 'All' || project.category.some(category => category === activeCategory)));

  const selectCategory = (category: string) => {
    if (category === activeCategory || !grid.current) return;
    const cards = Array.from(grid.current.children) as HTMLElement[];
    positions.current = new Map(cards.map(card => [card.id, card.getBoundingClientRect()]));
    cancel();
    outgoing.current = [];
    if (ghosts.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const visible = new Set(projectsData.filter(project => !project.hidden && (category === 'All' || project.category.some(value => value === category))).map(project => `project-${project.slug}`));
      for (const card of cards) {
        if (visible.has(card.id)) continue;
        const clone = card.cloneNode(true) as HTMLElement;
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
        clone.inert = true;
        const rect = positions.current.get(card.id)!;
        Object.assign(clone.style, { position: 'absolute', width: `${rect.width}px`, height: `${rect.height}px`, margin: '0' });
        ghosts.current.append(clone);
        outgoing.current.push({ element: clone, rect });
      }
    }
    setActiveCategory(category);
  };

  useLayoutEffect(() => {
    if (!positions.current || !grid.current || !shell.current) return;
    const origin = shell.current.getBoundingClientRect();
    for (const { element, rect } of outgoing.current) {
      element.style.left = `${rect.left - origin.left}px`;
      element.style.top = `${rect.top - origin.top}px`;
      animate(element, [{ opacity: .4 }, { opacity: 0 }], 120, () => element.remove());
    }
    outgoing.current = [];
    for (const card of Array.from(grid.current.children) as HTMLElement[]) {
      const before = positions.current.get(card.id);
      const after = card.getBoundingClientRect();
      if (before) {
        animate(card, [{ transform: `translate(${before.left - after.left}px,${before.top - after.top}px)` }, { transform: 'none' }], 280);
      } else {
        animate(card, [{ opacity: .45, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], 220);
      }
    }
    positions.current = null;
  }, [activeCategory, animate]);
  return (
    <section id="projects" className={styles.section} tabIndex={0} aria-labelledby="projects-heading">
      <div className="container">
        <header className={styles.header}><div className="section-rule" aria-hidden="true" /><h2 id="projects-heading">{t('projects.title')}</h2><p>{t('projects.subtitle')}</p></header>
        <div className={styles.filters} role="group" aria-label={es ? 'Filtrar proyectos' : 'Filter projects'}>{categories.map((category, index) => <button key={category} type="button" aria-pressed={category === activeCategory} className={category === activeCategory ? styles.active : ''} onClick={() => selectCategory(category)}>{t(`projects.category.${categoryKeys[index]}`)}</button>)}</div>
        <p className={styles.srOnly} role="status">{projects.length} {es ? 'proyectos visibles' : 'projects shown'}</p>
        <div ref={shell} className={styles.gridShell}>
        <div ref={grid} className={styles.grid}>
          {projects.map(project => {
            const view = project.presentation;
            const title = view ? (es ? view.titleES : view.titleEN) : (es ? project.titleES : project.titleEN);
            const summary = view ? (es ? view.summaryES : view.summaryEN) : (es ? project.descriptionES : project.descriptionEN);
            const tools = view?.technologies ?? project.technologies;
            const Icon = projectIcons[project.slug as keyof typeof projectIcons] ?? FileText;
            return (
              <article id={`project-${project.slug}`} key={project.slug} className={styles.card} aria-labelledby={`project-heading-${project.slug}`}>
                <div className={styles.cardHeader}><div><h3 id={`project-heading-${project.slug}`}>{title}</h3>{view && <p className={styles.context}>{es ? view.contextES : view.contextEN}</p>}</div><Icon size={26} strokeWidth={1.4} aria-hidden="true" /></div>
                <p className={styles.description}>{summary}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tools}><p>{es ? 'Tecnologías' : 'Tools'}</p><ul>{tools.map(tool => <li key={tool}><TechMark name={tool} compact /><span>{tool}</span></li>)}</ul></div>
                  <div className={styles.actions}>
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${es ? 'Ver sitio' : 'View site'} — ${title}`}><ExternalLink size={18} aria-hidden="true" />{es ? 'Ver sitio' : 'View site'}</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${es ? 'Ver código' : 'View code'} — ${title}`}><Github size={21} aria-hidden="true" />{project.slug === 'restock' ? (es ? 'Ver repositorios' : 'View repositories') : (es ? 'Ver código' : 'View code')}</a>}
                    {!project.githubUrl && !project.liveUrl && <span className={styles.status}><Wrench size={18} aria-hidden="true" />{t(`projects.status.${project.status}`)}</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div ref={ghosts} className={styles.ghostLayer} aria-hidden="true" inert />
        </div>
        {projects.length === 0 && <p className={styles.empty}>{es ? 'No hay proyectos en esta categoría.' : 'No projects in this category.'}</p>}
      </div>
    </section>
  );
}
