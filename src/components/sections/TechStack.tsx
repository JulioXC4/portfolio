'use client';

import React, { useState } from 'react';
import { TechMark } from '@/components/common/TechMark';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Database, Cpu, Cloud, Monitor } from 'lucide-react';
import styles from './TechStack.module.css';

interface Layer {
  id: string;
  nameES: string;
  nameEN: string;
  icon: React.ReactNode;
  techs: string[];
  philosophyES: string;
  philosophyEN: string;
  projectsES: string;
  projectsEN: string;
}

export const TechStack: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeLayerId, setActiveLayerId] = useState<string>('ui');

  const layers: Layer[] = [
    {
      id: 'ui',
      nameES: 'Capa 1: Interacción & UI',
      nameEN: 'Layer 1: Interaction & UI',
      icon: <Monitor size={18} />,
      techs: ['Vue.js 3', 'Angular', 'React / Next.js', 'Flutter (App)', 'Livewire 3'],
      philosophyES: 'Construyo interfaces responsivas, optimizadas para el rendimiento y la accesibilidad, priorizando la separación de responsabilidades y el manejo eficiente de estados globales.',
      philosophyEN: 'Building responsive, performance-optimized, and fully accessible interfaces, prioritizing clean separation of concerns and efficient state management.',
      projectsES: 'Aplicado en Restock (Angular / Flutter BLoC), Sistema de Citas Médicas (Vue 3 / Pinia) e Inventario (Livewire 3).',
      projectsEN: 'Used in Restock (Angular / Flutter BLoC), Medical Appointments (Vue 3 / Pinia), and Inventory Management (Livewire 3).'
    },
    {
      id: 'backend',
      nameES: 'Capa 2: Lógica & Core Backend',
      nameEN: 'Layer 2: Logic & Core Backend',
      icon: <ShieldCheck size={18} />,
      techs: ['Spring Boot (Java)', 'Laravel (PHP)', 'Node.js', 'Flask (Python)'],
      philosophyES: 'Diseño APIs robustas siguiendo patrones SOLID, arquitectura limpia y Domain-Driven Design (DDD). Me enfoco en validaciones estrictas y flujos de datos desacoplados.',
      philosophyEN: 'Designing robust APIs under SOLID principles, clean architecture, and Domain-Driven Design (DDD). Focusing on strict validations and decoupled pipelines.',
      projectsES: 'Aplicado en Restock (Spring Boot con CQRS/DDD), Control de Acceso (Spring Boot con Clean Arch) e Inventario (Laravel).',
      projectsEN: 'Used in Restock (Spring Boot CQRS/DDD), Access Control (Spring Boot Clean Arch), and Inventory Management (Laravel).'
    },
    {
      id: 'database',
      nameES: 'Capa 3: Datos & Persistencia',
      nameEN: 'Layer 3: Data & Persistence',
      icon: <Database size={18} />,
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
      philosophyES: 'Estructuro bases de datos relacionales y no relacionales analizando el acceso a datos. Optimizo consultas, índices y garantizo consistencia según las necesidades del producto.',
      philosophyEN: 'Structuring relational and document databases by analyzing data access patterns. Optimizing queries, indexes, and ensuring consistency.',
      projectsES: 'Aplicado en Restock (MongoDB / SQLite offline), Citas Médicas (PostgreSQL) e Inventario (MySQL).',
      projectsEN: 'Used in Restock (MongoDB / local SQLite), Medical Appointments (PostgreSQL), and Inventory Management (MySQL).'
    },
    {
      id: 'edge',
      nameES: 'Capa 4: Edge Computing & IoT',
      nameEN: 'Layer 4: Edge Computing & IoT',
      icon: <Cpu size={18} />,
      techs: ['ESP32 / C++', 'MQTT Protocol', 'Python Flask Edge'],
      philosophyES: 'Conecto el mundo físico con la nube. Escribo firmware eficiente para microcontroladores y construyo servicios edge intermedios para filtrar ruido local y mitigar pérdidas de red.',
      philosophyEN: 'Connecting the physical world to the cloud. Writing efficient microcontroller firmware and intermediate edge services to filter local noise.',
      projectsES: 'Aplicado en Restock (Firmware C++ en ESP32, comunicación MQTT y servicio local de buffer en Python Flask).',
      projectsEN: 'Used in Restock (ESP32 C++ firmware, MQTT communication, and intermediate Python Flask edge local buffer service).'
    },
    {
      id: 'infrastructure',
      nameES: 'Capa 5: Infraestructura & DevOps',
      nameEN: 'Layer 5: Infrastructure & DevOps',
      icon: <Cloud size={18} />,
      techs: ['Docker', 'GitHub Actions', 'Microsoft Azure', 'Vercel Deployment', 'Linux Shell'],
      philosophyES: 'Automatizo flujos de integración y despliegue continuo (CI/CD) para garantizar entregas de valor seguras. Contenedorizo servicios para lograr entornos consistentes y portables.',
      philosophyEN: 'Automating continuous integration and deployment pipelines (CI/CD) for safe releases. Containerizing services for consistent and portable execution.',
      projectsES: 'Aplicado en el despliegue automático del Portafolio (Vercel), compilación en contenedores (Docker) y pipelines de GitHub Actions.',
      projectsEN: 'Used in automated Portfolio deployments (Vercel), container builds (Docker), and GitHub Actions pipeline runs.'
    }
  ];

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[0];

  const getLayerName = (layer: Layer) => {
    return language === 'es' ? layer.nameES : layer.nameEN;
  };

  const getLayerPhilosophy = (layer: Layer) => {
    return language === 'es' ? layer.philosophyES : layer.philosophyEN;
  };

  const getLayerProjects = (layer: Layer) => {
    return language === 'es' ? layer.projectsES : layer.projectsEN;
  };

  return (
    <section id="tech" className={styles.techSection} tabIndex={0} aria-label={t('tech.title')}>
      <div className={`${styles.container} container`}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('tech.title').split(' ')[0]} <span>{t('tech.title').split(' ').slice(1).join(' ')}</span></h2>
          <p className={styles.sectionSubtitle}>{t('tech.subtitle')}</p>
          <div className={styles.headerBar}></div>
        </div>

        <div className={styles.layout}>
          {/* Vertical Stack Tower left */}
          <div className={styles.stackTower}>
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`${styles.towerLayerBlock} ${activeLayerId === layer.id ? styles.blockActive : ''}`}
                aria-label={`Select ${getLayerName(layer)}`}
                aria-pressed={activeLayerId === layer.id}
                aria-controls="tech-details"
              >
                <span className={styles.blockIcon}>{layer.icon}</span>
                <span className={styles.blockLabel}>{getLayerName(layer)}</span>
                <ChevronRight size={18} className={styles.blockChevron} />
              </button>
            ))}
          </div>

          {/* Detailed Side Panel right */}
          <div id="tech-details" key={activeLayerId} className={`${styles.sidePanel} glass-card`}>
            <div className={styles.panelHeader}>
              <h3 className={styles.panelTitle}>{getLayerName(activeLayer)}</h3>
            </div>

            <div className={styles.panelContent}>
              {/* Tech Badges Grid */}
              <div className={styles.techBadgeGrid}>
                {activeLayer.techs.map((tech, idx) => (
                  <div key={idx} className={styles.techBadgeCard}>
                    <TechMark name={tech} />
                    <span className={styles.badgeName}>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Rationale text */}
              <div className={styles.detailsGroup}>
                <h4 className={styles.detailsLabel}>
                  {language === 'es' ? 'Enfoque y Filosofía' : 'Focus & Philosophy'}
                </h4>
                <p className={styles.detailsText}>{getLayerPhilosophy(activeLayer)}</p>
              </div>

              {/* Projects connection */}
              <div className={`${styles.detailsGroup} ${styles.projectsGroup}`}>
                <h4 className={styles.detailsLabel}>
                  {language === 'es' ? 'Proyectos Vinculados' : 'Associated Projects'}
                </h4>
                <p className={styles.projectsText}>{getLayerProjects(activeLayer)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
