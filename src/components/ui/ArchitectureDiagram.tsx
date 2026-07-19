'use client';

import React, { useState } from 'react';
import { Cpu, Radio, Network, Database, Terminal, Laptop, ShieldCheck } from 'lucide-react';
import styles from './ArchitectureDiagram.module.css';

interface Node {
  id: string;
  name: string;
  tech: string;
  icon: React.ReactNode;
  roleES: string;
  roleEN: string;
  details: string[];
}

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: Node[] = [
    {
      id: 'iot',
      name: 'IoT Edge Node',
      tech: 'ESP32 & C++',
      icon: <Cpu size={24} />,
      roleES: 'Capa Física e Instrumentación',
      roleEN: 'Physical Instrumentation Layer',
      details: [
        'Sensores de peso HX711 (celdas de carga)',
        'Sensores ambientales DHT11 (temp/humedad)',
        'Comunicación MQTT WiFi asíncrona',
        'Deep sleep para eficiencia energética'
      ]
    },
    {
      id: 'broker',
      name: 'Message Broker',
      tech: 'HiveMQ (MQTT)',
      icon: <Radio size={24} />,
      roleES: 'Capa de Transporte y Mensajería',
      roleEN: 'Transport & Messaging Broker',
      details: [
        'Protocolo MQTT ligero TCP/IP',
        'Topologías de Suscripción/Publicación',
        'Mensajería tolerante a pérdidas',
        'Canales de telemetría dedicados'
      ]
    },
    {
      id: 'edge',
      name: 'Edge Computing Service',
      tech: 'Python / Flask / SQLite',
      icon: <Terminal size={24} />,
      roleES: 'Filtro y Procesamiento Local',
      roleEN: 'Local Filter & Processing Node',
      details: [
        'Filtrado de ruido analógico de celdas de carga',
        'Buffer local para mitigar caídas de internet',
        'Agrupación de datos para reducir tráfico cloud',
        'Base de datos SQLite local integrada'
      ]
    },
    {
      id: 'backend',
      name: 'Cloud Core Backend',
      tech: 'Spring Boot (DDD + CQRS)',
      icon: <Network size={24} />,
      roleES: 'Núcleo del Negocio y Reglas',
      roleEN: 'Business Core & Policy Engine',
      details: [
        'Domain-Driven Design (Bounded Contexts)',
        'Patrón CQRS para separar lecturas y escrituras',
        'Eventos de dominio para alertas de stock',
        'Persistencia asíncrona en base de datos'
      ]
    },
    {
      id: 'database',
      name: 'Cloud Database',
      tech: 'MongoDB',
      icon: <Database size={24} />,
      roleES: 'Almacenamiento de Documentos',
      roleEN: 'Document Data Store',
      details: [
        'Modelo NoSQL de documentos flexible',
        'Colecciones de telemetría indexadas',
        'Historial completo de variaciones de stock',
        'Alta disponibilidad en la nube'
      ]
    },
    {
      id: 'clients',
      name: 'Client Applications',
      tech: 'Angular & Flutter',
      icon: <Laptop size={24} />,
      roleES: 'Interfaces de Visualización',
      roleEN: 'User Interface Clients',
      details: [
        'Dashboard web interactivo en Angular',
        'App móvil en Flutter con patrón BLoC',
        'Soporte offline completo con base local SQLite',
        'Sincronización automática de datos en segundo plano'
      ]
    }
  ];

  return (
    <div className={styles.diagramContainer}>
      <div className={styles.nodesLayout}>
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`${styles.nodeCard} ${activeNode === node.id ? styles.nodeActive : ''}`}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={styles.nodeHeader}>
              <div className={styles.nodeIcon}>{node.icon}</div>
              <div>
                <h4 className={styles.nodeName}>{node.name}</h4>
                <span className={styles.nodeTech}>{node.tech}</span>
              </div>
            </div>
            <p className={styles.nodeRole}>{node.roleES}</p>
            
            {/* Visual flow indicator connecting to next */}
            {node.id !== 'clients' && node.id !== 'database' && (
              <div className={styles.flowArrow}>
                <span className={styles.arrowLine}></span>
                <span className={styles.arrowHead}>&gt;</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Details Box Display */}
      <div className={`${styles.detailsBox} glass-card`}>
        {activeNode ? (
          <div>
            <div className={styles.detailsHeader}>
              <ShieldCheck size={20} className={styles.detailsShield} />
              <h4 className={styles.detailsTitle}>
                {nodes.find(n => n.id === activeNode)?.name} — Especificaciones Técnicas
              </h4>
            </div>
            <ul className={styles.detailsList}>
              {nodes.find(n => n.id === activeNode)?.details.map((detail, idx) => (
                <li key={idx} className={styles.detailItem}>
                  <span className={styles.bullet}>✔</span>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.placeholderBox}>
            <p className={styles.placeholderText}>
              Pasa el cursor sobre cualquiera de los nodos del diagrama para inspeccionar los detalles de su arquitectura y flujos de datos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
