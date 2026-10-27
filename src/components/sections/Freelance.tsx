'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { WhatsApp } from '@/components/common/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import { freelanceProjects } from '@/data/freelance';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import styles from './Freelance.module.css';
import { useMotion } from '@/hooks/useMotion';

export function Freelance() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const tablist = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  const details = useRef<HTMLDivElement>(null);
  const imageFrame = useRef<HTMLDivElement>(null);
  const previous = useRef(active);
  const direction = useRef(1);
  const changed = useRef(false);
  const { animate, cancel } = useMotion();
  const project = freelanceProjects[active];
  const Preview = project.url ? 'a' : 'div';
  const isSpanish = language === 'es';

  useLayoutEffect(() => {
    if (previous.current !== active) {
      cancel();
      direction.current = active > previous.current ? 1 : -1;
      changed.current = true;
      previous.current = active;
      if (details.current) animate(details.current, [{ opacity: .45 }, { opacity: 1 }], 180);
    }
  }, [active, animate, cancel]);

  useLayoutEffect(() => {
    const list = tablist.current;
    const line = indicator.current;
    const selected = tabs.current[active];
    if (!list || !line || !selected) return;
    let disposed = false;
    const move = (withMotion: boolean) => {
      if (disposed) return;
      const from = getComputedStyle(line).transform;
      const to = `translateX(${selected.offsetLeft}px) scaleX(${selected.offsetWidth})`;
      const ready = list.dataset.indicatorReady === 'true';
      if (ready && line.style.transform === to) return;
      line.getAnimations().forEach(animation => animation.cancel());
      line.style.transform = to;
      list.dataset.indicatorReady = 'true';
      if (withMotion && ready && from !== 'none') animate(line, [{ transform: from }, { transform: to }], 300);
    };
    move(true);
    const observer = new ResizeObserver(() => move(false));
    observer.observe(list);
    tabs.current.forEach(tab => { if (tab) observer.observe(tab); });
    void document.fonts.ready.then(() => move(false));
    return () => { disposed = true; observer.disconnect(); };
  }, [active, language, animate]);

  const revealImage = () => {
    if (!changed.current || !imageFrame.current) return;
    animate(imageFrame.current, [
      { clipPath: direction.current > 0 ? 'inset(0 0 0 12%)' : 'inset(0 12% 0 0)', opacity: .4 },
      { clipPath: 'inset(0 0 0 0)', opacity: 1 },
    ], 360);
  };

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
    tabs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
        <div ref={tablist} className={styles.tabs} role="tablist" aria-label={t('freelance.title')}>
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
          <span ref={indicator} className={styles.indicator} aria-hidden="true" />
        </div>
        <article id="freelance-case" role="tabpanel" aria-labelledby={`freelance-tab-${project.id}`} className={styles.case}>
          <div ref={details} key={project.id} className={styles.details}>
            <span className={styles.number} aria-hidden="true">0{active + 1}</span>
            <h3 className={styles.title}>{project.name}</h3>
            <p className={styles.category}>{isSpanish ? project.categoryES : project.categoryEN}</p>
            <p className={styles.description}>{isSpanish ? project.descriptionES : project.descriptionEN}</p>
            <p className={styles.platform}>
              <Layers3 size={22} aria-hidden="true" />
              {isSpanish ? project.platformES : project.platformEN}
            </p>
            <div className={styles.caseActions}>
              {project.url && <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visit}
                aria-label={`${t('freelance.visit')} — ${project.name}`}
              >
                {t('freelance.visit')}
                <ArrowRight size={18} aria-hidden="true" />
              </a>}
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
          <Preview
            {...(project.url ? {
              href: project.url,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': `${t('freelance.preview')} — ${project.name}`,
            } : {})}
            className={styles.preview}
            style={{ backgroundColor: project.previewBackground, color: project.previewForeground }}
          >
            <div ref={imageFrame} className={styles.imageFrame}>
              <Image
                key={project.id}
                src={project.image}
                fill
                sizes="(max-width: 760px) calc(100vw - 50px), (max-width: 1100px) 54vw, (max-width: 1600px) 62vw, 1000px"
                quality={90}
                alt={`${t('freelance.screenshot')} ${project.name}`}
                className={styles.screenshot}
                onLoad={revealImage}
              />
            </div>
            {project.url && project.domain && <span className={styles.domain}>
              {project.domain}
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>}
          </Preview>
        </article>
      </div>
    </section>
  );
}
