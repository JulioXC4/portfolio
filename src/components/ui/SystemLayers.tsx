'use client';

import { useId, useState } from 'react';
import { Box, Layers3, Rotate3D } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SystemLayers.module.css';

function Plane({ kind, label, id }: { kind: 'experience' | 'logic' | 'data'; label: string; id: string }) {
  return (
    <svg className={`${styles.plane} ${styles[kind]}`} viewBox="0 0 700 380" aria-hidden="true">
      <defs>
        <pattern id={`${id}-grid-${kind}`} width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke="currentColor" strokeWidth=".45" opacity=".17" />
        </pattern>
      </defs>
      <g transform="matrix(.92 .38 -.86 .47 335 25)" className={styles.surface}>
        <rect width="320" height="320" className={styles.planeBackground} />
        <rect width="320" height="320" fill={`url(#${id}-grid-${kind})`} stroke="currentColor" strokeWidth=".8" />
        {[0, 320].flatMap(x => [0, 320].map(y => <path key={`${x}-${y}`} d={`M${x - 4},${y}h8 M${x},${y - 4}v8`} className={styles.copper} />))}
        {kind === 'experience' && <g className={styles.drawing}>
          <rect x="48" y="62" width="224" height="186" rx="3" className={styles.solid} />
          <path d="M48 86H272" /><circle cx="60" cy="74" r="1.4" /><circle cx="68" cy="74" r="1.4" /><circle cx="76" cy="74" r="1.4" />
          <circle cx="83" cy="117" r="14" />
          <path d="M110 105H252 M110 117H240 M110 129H247 M68 151H250 M68 163H238 M68 175H219" />
          <rect x="67" y="192" width="50" height="22" rx="2" /><rect x="129" y="192" width="29" height="22" rx="2" /><rect x="211" y="192" width="40" height="22" rx="2" />
          <circle cx="174" cy="174" r="12" className={styles.hotspot} /><circle cx="174" cy="174" r="3" className={styles.dot} />
        </g>}
        {kind === 'logic' && <g className={styles.drawing}>
          <path d="M160 66V258 M75 113H246 M75 216H246 M75 113V216 M246 113V216 M75 164H246" className={styles.copper} />
          {[[125, 55], [42, 100], [213, 100], [42, 200], [213, 200], [125, 245]].map(([x, y]) => <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="66" height="30" rx="3" className={styles.solid} />
            <path d={`M${x + 10} ${y + 11}h43 M${x + 10} ${y + 18}h30`} />
          </g>)}
          <path d="M160 139L184 164L160 188L136 164Z" className={styles.core} />
          {[[75, 164], [246, 164], [160, 113], [160, 216]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" className={styles.hotspot} />)}
        </g>}
      </g>
      {kind === 'data' && <g className={styles.drawing}>
        <path d="M230 151L350 214L491 184 M230 151L202 177L350 245L491 184" className={styles.copper} />
        {[[230, 108, 25], [350, 165, 37], [491, 145, 25]].map(([x, y, r]) => <g key={x}>
          <path d={`M${x - r} ${y}v50a${r} 12 0 0 0 ${r * 2} 0v-50`} className={styles.solid} />
          <ellipse cx={x} cy={y} rx={r} ry="12" className={styles.solid} />
          <path d={`M${x - r} ${y + 17}a${r} 12 0 0 0 ${r * 2} 0 M${x - r} ${y + 34}a${r} 12 0 0 0 ${r * 2} 0`} />
          <path d={`M${x - r} ${y + 50}a${r} 12 0 0 0 ${r * 2} 0`} className={styles.copper} />
        </g>)}
        {[[202, 177], [286, 180], [350, 245], [420, 186]].map(([cx, cy]) => <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="6" ry="3" className={styles.hotspot} />)}
      </g>}
      <g className={styles.callout}>
        <path d="M570 132V97H582" /><circle cx="570" cy="132" r="3" /><circle cx="582" cy="97" r="2" />
        <rect x="588" y="82" width="110" height="30" rx="2" />
        <text x="643" y="102" textAnchor="middle">{label}</text>
      </g>
    </svg>
  );
}

export function SystemLayers() {
  const { language } = useLanguage();
  const [separated, setSeparated] = useState(true);
  const [angle, setAngle] = useState(0);
  const id = useId().replace(/:/g, '');
  const es = language === 'es';
  return (
    <div className={styles.wrapper}>
      <div id={`${id}-scene`} className={`${styles.scene} ${separated ? '' : styles.united}`} style={{ transform: `perspective(1200px) rotateY(${angle}deg)` }} role="img" aria-label={es ? `Sistema de experiencia, lógica y datos. Capas ${separated ? 'separadas' : 'unidas'}.` : `Experience, logic and data system. Layers ${separated ? 'separated' : 'joined'}.`}>
        <svg className={styles.connections} viewBox="0 0 700 740" aria-hidden="true">
          <path d="M60 193V571 M628 146V526" className={styles.guide} />
          <path d={separated ? 'M346 173 C288 218 335 289 341 344 S359 488 337 548' : 'M346 319 C325 343 356 365 337 401'} className={styles.routeGlow} />
          <path d={separated ? 'M346 173 C288 218 335 289 341 344 S359 488 337 548' : 'M346 319 C325 343 356 365 337 401'} className={styles.route} />
        </svg>
        <Plane kind="data" label={es ? 'Datos' : 'Data'} id={id} />
        <Plane kind="logic" label={es ? 'Lógica' : 'Logic'} id={id} />
        <Plane kind="experience" label={es ? 'Experiencia' : 'Experience'} id={id} />
      </div>
      <div className={styles.controls} role="group" aria-label={es ? 'Explorar el sistema' : 'Explore the system'}>
        <button aria-controls={`${id}-scene`} aria-pressed={separated} onClick={() => setSeparated(true)} className={separated ? styles.active : ''}><Layers3 size={20} /><span>{es ? 'Ver capas' : 'View layers'}</span></button>
        <button aria-controls={`${id}-scene`} aria-pressed={!separated} onClick={() => setSeparated(false)} className={!separated ? styles.active : ''}><Box size={20} /><span>{es ? 'Unir sistema' : 'Join system'}</span></button>
        <button aria-controls={`${id}-scene`} className={styles.rotate} aria-label={es ? 'Girar sistema' : 'Rotate system'} onClick={() => setAngle(value => value === 0 ? -18 : value === -18 ? 18 : 0)}><Rotate3D size={25} /></button>
      </div>
    </div>
  );
}
