'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { WhatsApp } from '@/components/common/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import { freelanceProjects } from '@/data/freelance';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import styles from './Freelance.module.css';

export function Freelance() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = freelanceProjects[active];
  const isSpanish = language === 'es';

  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % freelanceProjects.length;
    else if (event.key === 'ArrowLeft') next = (index + freelanceProjects.length - 1) % freelanceProjects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = freelanceProjects.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus({ preventScroll: true });
  };

  const handleQuoteClick = () => {
    trackWhatsAppClick('freelance_case_study', project.id);
  };

  return (
    <section id="freelance" className={styles.section} tabIndex={0} aria-labelledby="freelance-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="freelance-heading" className={styles.heading}>{t('freelance.title')}</h2>
          <p className={styles.intro}>{t('freelance.subtitle')}</p>
        </header>
        <div className={styles.tabs} role="tablist" aria-label={t('freelance.title')}>
          {freelanceProjects.map((item, index) => (
            <button
              key={item.id}
              ref={node => { tabs.current[index] = node; }}
              id={`freelance-tab-${item.id}`}
              role="tab"
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              aria-controls="freelance-case"
              onClick={() => setActive(index)}
              onKeyDown={event => selectWithKeyboard(event, index)}
              className={active === index ? styles.activeTab : ''}
            >
              <span aria-hidden="true">0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <article id="freelance-case" role="tabpanel" aria-labelledby={`freelance-tab-${project.id}`} className={styles.case}>
          <div key={project.id} className={styles.details}>
            <span className={styles.number} aria-hidden="true">0{active + 1}</span>
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.category}>{isSpanish ? project.categoryES : project.categoryEN}</p>
            <p className={styles.description}>{isSpanish ? project.descriptionES : project.descriptionEN}</p>
            <p className={styles.platform}>
              <Layers3 size={22} aria-hidden="true" />
              {isSpanish ? project.platformES : project.platformEN}
            </p>
            <div className={styles.caseActions}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visit}
                aria-label={`${t('freelance.visit')} — ${project.name}`}
              >
                {t('freelance.visit')}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.freelanceSimilar(project.name, language))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleQuoteClick}
                className={styles.btnQuoteSimilar}
                aria-label={`${isSpanish ? 'Cotizar proyecto similar a' : 'Quote a project similar to'} ${project.name}`}
              >
                <WhatsApp size={16} />
                <span>{isSpanish ? 'Cotizar web similar' : 'Quote similar site'}</span>
              </a>
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.preview}
            aria-label={`${t('freelance.preview')} — ${project.name}`}
            style={{ backgroundColor: project.previewBackground }}
          >
            <div className={styles.imageFrame}>
              <Image
                key={project.id}
                src={project.image}
                fill
                sizes="(max-width: 760px) 88vw, 60vw"
                alt={`${t('freelance.screenshot')} ${project.name}`}
                className={styles.screenshot}
              />
            </div>
            <span className={styles.domain}>
              {project.domain}
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
        </article>
      </div>
    </section>
  );
}
