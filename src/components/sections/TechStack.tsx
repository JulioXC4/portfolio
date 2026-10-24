'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cloud, Cpu, Database, FileCode2, Monitor, ShieldCheck, Sparkles } from 'lucide-react';
import { TechMark } from '@/components/common/TechMark';
import { useLanguage } from '@/context/LanguageContext';
import { toolkit } from '@/data/toolkit';
import styles from './TechStack.module.css';

const icons = { ai: Sparkles, frontend: Monitor, backend: ShieldCheck, data: Database, cms: FileCode2, iot: Cpu, delivery: Cloud };

export function TechStack() {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState('ai');
  const category = toolkit.find(item => item.id === activeId) ?? toolkit[0];
  const locale = language === 'es' ? 0 : 1;
  return (
    <section id="tech" className={styles.section} tabIndex={0} aria-labelledby="toolkit-heading">
      <div className="container">
        <header className={styles.header}><div className="section-rule" /><h2 id="toolkit-heading">{t('tech.title')}</h2><p>{t('tech.subtitle')}</p></header>
        <div className={styles.layout}>
          <div className={styles.categories} role="group" aria-label={language === 'es' ? 'Categorías de herramientas' : 'Tool categories'}>
            {toolkit.map(item => {
              const Icon = icons[item.id as keyof typeof icons];
              return <button key={item.id} id={`toolkit-category-${item.id}`} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id} aria-controls="toolkit-details" className={activeId === item.id ? styles.active : ''}><Icon size={21} aria-hidden="true" /><span>{item.title[locale]}</span><span className={styles.categoryCount} aria-hidden="true">{item.tools.length}</span></button>;
            })}
          </div>
          <div id="toolkit-details" key={category.id} className={styles.panel} role="region" aria-labelledby={`toolkit-category-${category.id}`}>
            <div className={styles.panelHeader}><h3>{category.title[locale]}</h3><span>{category.tools.length} {locale === 0 ? 'herramientas' : 'tools'}</span></div>
            <ul className={styles.tools}>{category.tools.map(tool => <li key={tool.name} className={styles.tool}><TechMark name={tool.name} size="medium" /><div><span className={styles.toolName}>{tool.name}</span><p>{tool.usage[locale]}</p></div></li>)}</ul>
            <p className={styles.summary}>{category.summary[locale]}</p>
            <div className={styles.caseLinks}>{category.links.map(link => {
              const external = link.href.startsWith('https:');
              const label = locale === 1 && link.label === 'Citas Médicas' ? 'Medical Booking' : link.label;
              return external
                ? <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={17} aria-hidden="true" /></a>
                : <Link key={link.href} href={link.href}>{label}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
            })}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
