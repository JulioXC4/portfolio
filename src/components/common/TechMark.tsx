import { Code2 } from 'lucide-react';
import Image from 'next/image';
import styles from './TechMark.module.css';

const brandAssets: Record<string, { file: string; monochrome?: boolean; companion?: string; companionMonochrome?: boolean }> = {
  'Vue.js 3': { file: 'vuejs' },
  Angular: { file: 'angular' },
  'React / Next.js': { file: 'react', companion: 'nextjs' },
  'Flutter (App)': { file: 'flutter' },
  'Livewire 3': { file: 'livewire' },
  'Spring Boot (Java)': { file: 'spring', companion: 'java' },
  'Laravel (PHP)': { file: 'laravel', companion: 'php' },
  'Node.js': { file: 'nodejs' },
  'Flask (Python)': { file: 'flask', monochrome: true, companion: 'python' },
  PostgreSQL: { file: 'postgresql' },
  MySQL: { file: 'mysql' },
  MongoDB: { file: 'mongodb' },
  SQLite: { file: 'sqlite' },
  'ESP32 / C++': { file: 'espressif', monochrome: true, companion: 'cplusplus' },
  'MQTT Protocol': { file: 'mqtt', monochrome: true },
  'Python Flask Edge': { file: 'python', companion: 'flask', companionMonochrome: true },
  Docker: { file: 'docker' },
  'GitHub Actions': { file: 'githubactions' },
  'Microsoft Azure': { file: 'azure' },
  'Vercel Deployment': { file: 'vercel', monochrome: true },
  'Linux Shell': { file: 'linux' },
  Astro: { file: 'astro', monochrome: true },
  WordPress: { file: 'wordpress', monochrome: true },
  Elementor: { file: 'elementor', monochrome: true },
  Git: { file: 'git' },
};

export function TechMark({ name }: { name: string }) {
  const asset = brandAssets[name];
  if (asset) {
    const mark = <Image src={`/images/brands/${asset.file}.svg`} width={70} height={70} alt="" className={`${styles.mark} ${asset.monochrome ? styles.monochrome : ''}`} />;
    return asset.companion ? <span className={styles.pair}>{mark}<Image src={`/images/brands/${asset.companion}.svg`} width={34} height={34} alt="" className={`${styles.companion} ${asset.companionMonochrome ? styles.monochrome : ''}`} /></span> : mark;
  }
  return <Code2 size={38} strokeWidth={1.3} aria-hidden="true" />;
}
