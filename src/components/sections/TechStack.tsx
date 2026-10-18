'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Cloud, Cpu, Database, FileCode2, Monitor, ShieldCheck } from 'lucide-react';
import { TechMark } from '@/components/common/TechMark';
import { useLanguage } from '@/context/LanguageContext';
import { toolkit } from '@/data/toolkit';
import styles from './TechStack.module.css';

const icons = [Monitor, ShieldCheck, Database, FileCode2, Cpu, Cloud];

export function TechStack() {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState('frontend');
  const category = toolkit.find(item => item.id === activeId) ?? toolkit[0];
  const locale = language === 'es' ? 0 : 1;
  return (
    <section id="tech" className={styles.section} tabIndex={0} aria-labelledby="toolkit-heading">
      <div className="container">
        <header className={styles.header}><div className="section-rule" /><h2 id="toolkit-heading">{t('tech.title')}</h2><p>{t('tech.subtitle')}</p></header>
        <div className={styles.layout}>
          <div className={styles.categories} role="group" aria-label={language === 'es' ? 'Categorías de herramientas' : 'Tool categories'}>
            {toolkit.map((item,index) => {
              const Icon = icons[index];
              return <button key={item.id} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id} aria-controls="toolkit-details" className={activeId === item.id ? styles.active : ''}><Icon size={23} aria-hidden="true" /><span>{item.title[locale]}</span><ChevronRight className={styles.chevron} size={17} aria-hidden="true" /></button>;
            })}
          </div>
          <div id="toolkit-details" key={category.id} className={styles.panel}>
            <h3>{category.title[locale]}</h3>
            <div className={styles.tools}>{category.tools.map(tool => <div key={tool.name} className={styles.tool}><TechMark name={tool.name} /><span className={styles.toolName}>{tool.name}</span><p>{tool.usage[locale]}</p></div>)}</div>
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
