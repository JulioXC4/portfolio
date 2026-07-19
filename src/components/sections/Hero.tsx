'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, MessageSquare, Compass, Sliders, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

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

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            <span className={styles.nodeLabel}>{language === 'es' ? 'Desafío Operativo' : 'Business Challenge'}</span>
            <p className={styles.nodeSubtext}>{language === 'es' ? 'Procesos manuales, pérdida de stock' : 'Manual steps, stock leaks'}</p>
          </div>
          <div className={styles.schemaConnector}>➔</div>
          <div className={styles.schemaNodeActive}>
            <span className={styles.nodeLabel}>{language === 'es' ? 'Definición de Solución' : 'Product Solution'}</span>
            <p className={styles.nodeSubtext}>{language === 'es' ? 'Automatizar control mediante sensores' : 'Automate tracking via sensors'}</p>
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
    <section className={styles.heroSection}>
      <div className={`${styles.container} container`}>
        {/* Typographic and Narrative Column */}
        <div className={styles.textColumn}>
          <span className={styles.eyebrow}>
            {language === 'es' ? 'Ingeniero de Software' : 'Software Engineer'}
          </span>
          
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
              <MessageSquare size={18} />
            </button>
          </div>
        </div>

        {/* Conceptual Engineering Canvas Column */}
        <div className={styles.canvasColumn}>
          <div className={`${styles.canvasCard} glass-card`}>
            {/* Canvas Header */}
            <div className={styles.canvasHeader}>
              <div className={styles.tabs}>
                {(['concept', 'architecture', 'product'] as CanvasStage[]).map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setActiveStage(stage)}
                    className={`${styles.tab} ${activeStage === stage ? styles.tabActive : ''}`}
                  >
                    {stage.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Canvas Content */}
            <div className={styles.canvasBody}>
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
