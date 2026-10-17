'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, FileText, Settings, Compass, Sliders, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';
import { scrollToSection } from '@/lib/navigation';

type CanvasStage = 'concept' | 'architecture' | 'product';

interface StageDetails {
  labelES: string;
  labelEN: string;
  headlineES: string;
  headlineEN: string;
  detailsES: string;
  detailsEN: string;
  icon: React.ReactNode;
  schema: React.ReactNode;
}

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeStage, setActiveStage] = useState<CanvasStage>('concept');

  const handleStageKey = (event: React.KeyboardEvent<HTMLButtonElement>, stage: CanvasStage) => {
    const order: CanvasStage[] = ['concept', 'architecture', 'product'];
    const index = order.indexOf(stage);
    let next: CanvasStage;
    if (event.key === 'ArrowRight') next = order[(index + 1) % order.length];
    else if (event.key === 'ArrowLeft') next = order[(index + order.length - 1) % order.length];
    else if (event.key === 'Home') next = order[0];
    else if (event.key === 'End') next = order[order.length - 1];
    else return;
    event.preventDefault();
    setActiveStage(next);
    document.getElementById(`hero-tab-${next}`)?.focus();
  };

  const handleScrollTo = (id: string) => {
    scrollToSection(id);
  };

  const stages: Record<CanvasStage, StageDetails> = {
    concept: {
      labelES: '1. Diagnóstico del Problema',
      labelEN: '1. Problem Diagnosis',
      headlineES: 'Entender el negocio antes de escribir código',
      headlineEN: 'Understand business before writing code',
      icon: <Compass size={18} />,
      detailsES: 'Analizo las ineficiencias operativas y los objetivos del usuario. El software debe nacer como respuesta a una necesidad real, no como una justificación técnica.',
      detailsEN: 'Analyzing operational bottlenecks and user goals. Software must be built as a response to a real-world need, not just as a technical exercise.',
      schema: (
        <div className={styles.conceptualSchema}>
          <div className={styles.schemaNode}>
            <FileText className={styles.nodeIcon} aria-hidden="true" />
            <span className={styles.nodeLabel}>{language === 'es' ? 'Desafío Operativo' : 'Business Challenge'}</span>
            <p className={styles.nodeSubtext}>{language === 'es' ? 'Necesidades y procesos por mejorar' : 'Needs and processes to improve'}</p>
          </div>
          <div className={styles.schemaConnector}><ArrowRight size={24} aria-hidden="true" /></div>
          <div className={styles.schemaNodeActive}>
            <Settings className={styles.nodeIcon} aria-hidden="true" />
            <span className={styles.nodeLabel}>{language === 'es' ? 'Definición de Solución' : 'Product Solution'}</span>
            <p className={styles.nodeSubtext}>{language === 'es' ? 'Software que resuelve el problema' : 'Software that solves the problem'}</p>
          </div>
        </div>
      )
    },
    architecture: {
      labelES: '2. Arquitectura de Sistemas',
      labelEN: '2. Systems Architecture',
      headlineES: 'Diseñar para la mantenibilidad y escala',
      headlineEN: 'Design for maintainability & scale',
      icon: <Sliders size={18} />,
      detailsES: 'Estructuro flujos de datos desacoplados. Concebir una estructura clara (capas modulares, base de datos óptimas) asegura que el producto pueda evolucionar de manera estable.',
      detailsEN: 'Structuring decoupled data pipelines. Laying down a modular, clear foundation ensures the product can scale and adapt cleanly over time.',
      schema: (
        <div className={styles.conceptualSchema}>
          <div className={styles.architectureMap}>
            <div className={styles.archBlock}>{language === 'es' ? 'UI Reactiva' : 'Reactive UI'}</div>
            <div className={styles.archLine}></div>
            <div className={styles.archBlock}>{language === 'es' ? 'Lógica Core' : 'Core Logic'}</div>
            <div className={styles.archLine}></div>
            <div className={styles.archBlock}>{language === 'es' ? 'Datos' : 'Data Store'}</div>
          </div>
        </div>
      )
    },
    product: {
      labelES: '3. Entrega de Valor',
      labelEN: '3. Value Delivery',
      headlineES: 'El software puesto en producción',
      headlineEN: 'Deploying robust products',
      icon: <CheckCircle2 size={18} />,
      detailsES: 'Despliego y optimizo la solución completa. El ciclo se cierra cuando el usuario interactúa con una aplicación fluida y el negocio percibe una mejora medible en sus operaciones.',
      detailsEN: 'Deploying and optimizing the end-to-end application. The cycle finishes when users interact with a fluid app and the business notices a measurable upgrade.',
      schema: (
        <div className={styles.conceptualSchema}>
          <div className={styles.productStatusCard}>
            <div className={styles.statusRow}>
              <span className={styles.statusDot}></span>
              <span className={styles.statusText}>{language === 'es' ? 'Solución Implementada con Éxito' : 'Solution Live & Healthy'}</span>
            </div>
            <div className={styles.metricRow}>
              <div className={styles.metricBox}>
                <span>{language === 'es' ? 'Eficiencia' : 'Efficiency'}</span>
                <strong>+85%</strong>
              </div>
              <div className={styles.metricBox}>
                <span>{language === 'es' ? 'Velocidad' : 'Speed'}</span>
                <strong>&lt; 50ms</strong>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="home" className={styles.heroSection} tabIndex={0} aria-label={language === 'es' ? 'Inicio' : 'Home'}>
      <div className={`${styles.container} container`}>
        {/* Typographic and Narrative Column */}
        <div className={styles.textColumn}>
<h1 className={styles.title}>
            {language === 'es' 
              ? 'Transformo ideas en productos digitales estables.' 
              : 'Translating ideas into robust digital products.'}
          </h1>
          
          <p className={styles.description}>
            {language === 'es'
              ? 'Estudiante de Ingeniería de Software enfocado en el desarrollo Full Stack. Mi propósito no es solo escribir código, sino analizar a fondo los problemas del negocio para diseñar, construir y desplegar aplicaciones completas de extremo a extremo que generen valor real.'
              : 'Software Engineering student focused on Full Stack development. My purpose is not just writing code, but analyzing business problems deeply to design, build, and deploy end-to-end applications that deliver true value.'}
          </p>

          <div className={styles.actions}>
            <button onClick={() => handleScrollTo('projects')} className={styles.btnPrimary}>
              <span>{t('hero.cta_projects')}</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('contact')} className={styles.btnSecondary}>
              <span>{t('hero.cta_contact')}</span>
            </button>
          </div>
        </div>

        {/* Conceptual Engineering Canvas Column */}
        <div className={styles.canvasColumn}>
          <div className={styles.artwork}>
            <Image src="/images/problem-solving.png" width={1680} height={944} sizes="(max-width: 760px) 100vw, 50vw" preload className={styles.heroArt} alt={language === 'es' ? 'De necesidades complejas a una solución clara y útil' : 'From complex needs to a clear, useful solution'} />
          </div>
          <div className={`${styles.canvasCard} glass-card`}>
            {/* Canvas Header */}
            <div className={styles.canvasHeader}>
              <div className={styles.tabs} role="tablist" aria-label={language === 'es' ? 'Proceso de trabajo' : 'Working process'}>
                {(['concept', 'architecture', 'product'] as CanvasStage[]).map((stage) => (
                  <button
                    key={stage}
                    id={`hero-tab-${stage}`}
                    role="tab"
                    aria-selected={activeStage === stage}
                    tabIndex={activeStage === stage ? 0 : -1}
                    onKeyDown={event => handleStageKey(event, stage)}
                    aria-controls="hero-panel"
                    onClick={() => setActiveStage(stage)}
                    className={`${styles.tab} ${activeStage === stage ? styles.tabActive : ''}`}
                  >
                    {stage.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Canvas Content */}
            <div key={activeStage} id="hero-panel" role="tabpanel" aria-labelledby={`hero-tab-${activeStage}`} className={styles.canvasBody}>
              <div className={styles.metaRow}>
                <div className={styles.stageIconWrapper}>
                  {stages[activeStage].icon}
                </div>
                <span className={styles.stageLabel}>
                  {language === 'es' ? stages[activeStage].labelES : stages[activeStage].labelEN}
                </span>
              </div>

              <h3 className={styles.stageHeadline}>
                {language === 'es' ? stages[activeStage].headlineES : stages[activeStage].headlineEN}
              </h3>

              {/* Graphical Schema Panel */}
              <div className={styles.schemaPanel}>
                {stages[activeStage].schema}
              </div>

              <p className={styles.stageDetails}>
                {language === 'es' ? stages[activeStage].detailsES : stages[activeStage].detailsEN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
