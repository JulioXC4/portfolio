'use client';

import { useLanguage } from '@/context/LanguageContext';
import { servicesData } from '@/data/services';
import { WhatsApp } from '@/components/common/BrandIcons';
import { ArrowRight, Braces, Check, ChevronDown, Monitor, ShoppingBag, Workflow } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { trackWhatsAppClick, trackServiceSelect } from '@/lib/analytics';
import styles from './Services.module.css';

const icons = [Monitor, ShoppingBag, Workflow, Braces];

export function Services({ onRequestQuote }: { onRequestQuote: (serviceId: string) => void }) {
  const { language, t } = useLanguage();
  const es = language === 'es';
  return (
    <section id="services" className={styles.section} tabIndex={0} aria-labelledby="services-heading">
      <div className="container">
        <header className={styles.header}>
          <div className="section-rule" aria-hidden="true" />
          <h2 id="services-heading">{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </header>
        <div className={styles.grid}>
          {servicesData.map((service, index) => {
            const Icon = icons[index];
            const title = es ? service.titleES : service.titleEN;
            return (
              <article className={styles.service} key={service.id}>
                <div className={styles.serviceHeading}><Icon size={28} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3></div>
                <p className={styles.summary}>{es ? service.summaryES : service.summaryEN}</p>
                <details className={styles.scope}>
                  <summary>{es ? 'Ver alcance y herramientas' : 'View scope and tools'}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <div className={styles.scopeContent}>
                    <p className={styles.category}>{es ? service.badgeES : service.badgeEN}</p>
                    <p>{es ? service.targetES : service.targetEN}</p>
                    <ul>{(es ? service.benefitsES : service.benefitsEN).map(benefit => <li key={benefit}><Check size={17} aria-hidden="true" /><span>{benefit}</span></li>)}</ul>
                    <p className={styles.tools}>{service.technologies.join(' · ')}</p>
                  </div>
                </details>
                <div className={styles.actions}>
                  <a className={styles.whatsapp} href={getWhatsAppUrl(es ? service.whatsappMessage : `Hi Julio, I would like a quote for: ${service.titleEN}.`)} target="_blank" rel="noopener noreferrer" onClick={() => { trackWhatsAppClick(`service_${service.id}`, service.id); trackServiceSelect(service.id); }} aria-label={`${es ? 'Cotizar por WhatsApp' : 'Quote via WhatsApp'}: ${title}`}><WhatsApp size={19} aria-hidden="true" />WhatsApp<ArrowRight size={17} aria-hidden="true" /></a>
                  <button type="button" onClick={() => { trackServiceSelect(service.id); onRequestQuote(service.id); }}>{es ? 'Solicitar cotización' : 'Request a quote'}<ArrowRight size={17} aria-hidden="true" /></button>
                </div>
              </article>
            );
          })}
        </div>
        <div className={styles.custom}>
          <p>{es ? '¿Tienes un proyecto especial o requerimientos personalizados?' : 'Do you have a unique or custom project?'}</p>
          <button type="button" onClick={() => onRequestQuote('consulting')}>{es ? 'Cuéntame qué necesitas' : 'Tell me what you need'}<ArrowRight size={19} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
