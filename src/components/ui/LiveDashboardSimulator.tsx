'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Wifi } from 'lucide-react';
import styles from './LiveDashboardSimulator.module.css';

interface Ingredient {
  id: string;
  nameES: string;
  nameEN: string;
  weight: number;
  maxWeight: number;
  threshold: number;
  unit: string;
}

export const LiveDashboardSimulator: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 'beef', nameES: 'Carne de Res', nameEN: 'Beef Cutlets', weight: 28.5, maxWeight: 50, threshold: 10, unit: 'kg' },
    { id: 'tomatoes', nameES: 'Tomates Fresh', nameEN: 'Tomatoes', weight: 12.4, maxWeight: 20, threshold: 4, unit: 'kg' },
    { id: 'lettuce', nameES: 'Lechuga Picada', nameEN: 'Shredded Lettuce', weight: 1.5, maxWeight: 10, threshold: 2, unit: 'kg' }
  ]);

  const [logs, setLogs] = useState<string[]>([
    'System initialization successful.',
    'MQTT subscriber connected to edge node [port 1883].',
    'Sensors calibration status: SUCCESS.'
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (terminal) terminal.scrollTop = terminal.scrollHeight;
  }, [logs]);

  const handleWeightChange = (id: string, newWeight: number) => {
    const ingredient = ingredients.find(item => item.id === id);
    if (!ingredient) return;
    const roundedWeight = Math.round(newWeight * 10) / 10;
    if (roundedWeight === ingredient.weight) return;

    // A reproducible sample models small sensor fluctuations around the input.
    const rawNoise = Math.round((roundedWeight + Math.sin(roundedWeight * 19.7) * 0.08) * 100) / 100;
    const messages = [
      `[MQTT] Published raw reading: ${rawNoise}${ingredient.unit} on topic /sensor/${id}`,
      `[EDGE] Filtered weight noise: ${rawNoise}${ingredient.unit} -> ${roundedWeight}${ingredient.unit}`
    ];
    if (roundedWeight <= ingredient.threshold && ingredient.weight > ingredient.threshold) {
      messages.push(`[CLOUD] ALERT: Stock of ${ingredient.nameEN} (${roundedWeight}${ingredient.unit}) has dropped below threshold (${ingredient.threshold}${ingredient.unit})!`);
      messages.push('[CLOUD] CQRS notification triggered. Dispatching SMS/Email alerts.');
    } else if (roundedWeight > ingredient.threshold && ingredient.weight <= ingredient.threshold) {
      messages.push(`[CLOUD] Status recovery: ${ingredient.nameEN} is back above threshold.`);
    }
    const timestamp = new Date().toLocaleTimeString();
    setIngredients(previous => previous.map(item => item.id === id ? { ...item, weight: roundedWeight } : item));
    setLogs(previous => [...previous, ...messages.map(message => `[${timestamp}] ${message}`)].slice(-30));
  };

  return (
    <div className={styles.simulatorGrid}>
      {/* Control sliders column */}
      <div className={`${styles.panel} glass-card`}>
        <div className={styles.panelHeader}>
          <Sliders size={18} className={styles.panelHeaderIcon} />
          <h4 className={styles.panelTitle}>Calibrador de Celdas de Peso (ESP32)</h4>
        </div>
        
        <div className={styles.slidersContainer}>
          {ingredients.map((ing) => {
            const isCritical = ing.weight <= ing.threshold;
            const fillPercent = (ing.weight / ing.maxWeight) * 100;

            return (
              <div key={ing.id} className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <span className={styles.ingName}>{ing.nameES}</span>
                  <span className={`${styles.ingWeight} ${isCritical ? styles.textAlert : ''}`}>
                    {ing.weight} / {ing.maxWeight} {ing.unit}
                  </span>
                </div>
                
                <input
                  type="range"
                  aria-label={ing.nameES}
                  aria-describedby={`threshold-${ing.id}`}
                  min="0"
                  max={ing.maxWeight}
                  step="0.1"
                  value={ing.weight}
                  onChange={(e) => handleWeightChange(ing.id, parseFloat(e.target.value))}
                  className={styles.rangeInput}
                  style={{'--fill-percent': `${fillPercent}%`} as React.CSSProperties}
                />

                <div className={styles.sliderFooter}>
                  <span id={`threshold-${ing.id}`} className={styles.thresholdLabel}>Umbral Crítico: {ing.threshold}{ing.unit}</span>
                  <span className={`${styles.statusPill} ${isCritical ? styles.pillAlert : styles.pillOk}`}>
                    {isCritical ? 'ALERT: LOW' : 'STOCK OK'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Terminal logs column */}
      <div className={`${styles.panel} ${styles.consolePanel} glass-card`}>
        <div className={styles.panelHeader}>
          <Wifi size={18} className={styles.panelHeaderIcon} />
          <h4 className={styles.panelTitle}>Terminal Edge &amp; Cloud Logs</h4>
        </div>

        <div ref={terminalRef} className={styles.terminalBody} role="log" aria-live="polite" aria-label="Terminal Edge & Cloud Logs">
          <div className={styles.logsContainer}>
            {logs.map((log, idx) => {
              let logClass = styles.logDefault;
              if (log.includes('[MQTT]')) logClass = styles.logMqtt;
              if (log.includes('[EDGE]')) logClass = styles.logEdge;
              if (log.includes('[CLOUD] ALERT')) logClass = styles.logCloudAlert;
              else if (log.includes('[CLOUD]')) logClass = styles.logCloud;

              return (
                <div key={idx} className={`${styles.logLine} ${logClass}`}>
                  {log}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
