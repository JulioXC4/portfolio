'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';
import { Github } from '@/components/common/BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import type { GithubActivity } from '@/lib/github';
import styles from './GithubSection.module.css';

export function GithubSection() {
  const { language } = useLanguage();
  const es = language === 'es';
  const [activity, setActivity] = useState<GithubActivity | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/github', { signal: controller.signal }).then(response => {
      if (!response.ok) throw new Error('Activity unavailable');
      return response.json() as Promise<GithubActivity>;
    }).then(data => { if (!controller.signal.aborted) setActivity(data); })
      .catch(() => { if (!controller.signal.aborted) setFailed(true); });
    return () => controller.abort();
  }, []);
  const overview = activity?.overview;
  const streak = activity?.streak;
  const format = (value: number) => new Intl.NumberFormat(es ? 'es-PE' : 'en-US').format(value);
  const largest = Math.max(1, ...(overview?.languages.map(item => item.count) ?? []));
  return (
    <section id="github" className={styles.section} tabIndex={0} aria-labelledby="github-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="github-heading">{es ? 'Actividad en GitHub' : 'GitHub activity'}</h2>
          <div className={styles.account}><Github size={27} /><span>JulioXC4</span><a href="https://github.com/JulioXC4" target="_blank" rel="noopener noreferrer">{es ? 'Ver perfil' : 'View profile'}<ArrowUpRight size={20} aria-hidden="true" /></a></div>
        </header>
        {!activity && <p className={styles.state} role="status">{failed ? (es ? 'No se pudo consultar la actividad. Puedes verla en mi perfil de GitHub.' : 'Activity could not be loaded. You can view it on my GitHub profile.') : (es ? 'Consultando actividad pública de GitHub…' : 'Loading public GitHub activity…')}</p>}
        {activity && !overview && <p role="status" className={styles.state}>{es ? 'El resumen no está disponible ahora. Puedes consultarlo en mi perfil.' : 'The summary is currently unavailable. You can view it on my profile.'}</p>}
        {overview && <>
          <dl className={styles.metrics}>
            {[[overview.publicRepos, es ? 'Repositorios públicos' : 'Public repositories'], [overview.stars, es ? 'Estrellas' : 'Stars'], [overview.followers, es ? 'Seguidores' : 'Followers']].map(([value,label]) => <div key={String(label)}><dt>{String(label)}</dt><dd>{format(Number(value))}</dd></div>)}
          </dl>
          <div className={styles.columns}>
            <div className={styles.languages}><h3>{es ? 'Lenguajes en repositorios' : 'Languages in repositories'}</h3>
              <ul>{overview.languages.map(item => <li key={item.name}><span>{item.name}</span><span className={styles.track} aria-hidden="true"><span style={{ width: `${item.count / largest * 100}%` }} /></span><strong>{format(item.count)}</strong></li>)}</ul>
              <p className={styles.note}>{es ? 'Repositorios propios · lenguaje principal' : 'Non-fork repositories · primary language'}{overview.publicRepos > overview.countedRepos ? (es ? ' · muestra de los 100 más recientes' : ' · sample of the 100 most recent') : ''}</p>
            </div>
            <div className={styles.recent}><h3>{es ? 'Actualizados recientemente' : 'Recently updated'}</h3>
              {overview.recent.map(repo => <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer"><Github size={24} /><span>{repo.name}</span><ArrowUpRight size={20} aria-hidden="true" /></a>)}
            </div>
          </div>
        </>}
        {streak && <div className={styles.streak}><h3>{es ? 'Racha de contribuciones' : 'Contribution streak'}</h3><dl>
          <div className={styles.contributions}><dt>{es ? 'Total de contribuciones' : 'Total contributions'}</dt><dd><span className={styles.flame} aria-hidden="true"><Flame size={27} /></span>{format(streak.totalContributions)}</dd></div>
          <div><dt>{es ? 'Racha actual · días' : 'Current streak · days'}</dt><dd>{format(streak.current)}</dd></div>
          <div><dt>{es ? 'Racha más larga · días' : 'Longest streak · days'}</dt><dd>{format(streak.longest)}</dd></div>
        </dl></div>}
        {overview && <p className={styles.note}>{es ? 'Datos públicos de GitHub' : 'Public GitHub data'}{streak ? (es ? ' · Rachas: GitHub Streak Stats' : ' · Streaks: GitHub Streak Stats') : ''}</p>}
      </div>
    </section>
  );
}
