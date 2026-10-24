'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/lib/navigation';
import styles from './Hero.module.css';

export function Hero() {
  const { language, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const es = language === 'es';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;

    function syncPlayback() {
      if (!video) return;
      if (!reducedMotion.matches && visible && !document.hidden) {
        void video.play().catch(() => {
          // Keep the poster visible if the browser blocks decorative autoplay.
        });
      } else {
        video.pause();
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.15 });
    observer.observe(video);
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, []);

  function navigateTo(id: string) {
    scrollToSection(id);
    document.getElementById(id)?.focus({ preventScroll: true });
  }

  return (
    <section id="home" className={styles.heroSection} tabIndex={0} aria-label={es ? 'Inicio' : 'Home'}>
      <div className={styles.artwork} aria-hidden="true">
        <video ref={videoRef} className={styles.video} muted loop playsInline preload="metadata"
          width={1920} height={1080} poster="/images/hero/portal-poster.webp"
          aria-hidden="true" tabIndex={-1} disablePictureInPicture>
          <source src="/videos/hero-portal-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.container + ' container'}>
        <div className={styles.main}>
          <div className={styles.textColumn}>
            <p className={styles.identity}>Julio Castro <span aria-hidden="true">·</span> Full Stack</p>
            <h1 className={styles.title}>
              <span className={styles.firstLine}>{t('hero.title')}</span>{' '}
              <span className={styles.accent}>{t('hero.title_accent')}</span>
            </h1>
            <p className={styles.description}>{t('hero.description')}</p>
            <div className={styles.actions}>
              <button onClick={() => navigateTo('contact')} className={styles.btnPrimary}>
                <span>{t('hero.cta_contact')}</span><ArrowRight size={19} aria-hidden="true" />
              </button>
              <button onClick={() => navigateTo('projects')} className={styles.btnSecondary}>
                <span>{t('hero.cta_projects')}</span><ArrowUpRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>{es ? 'Software a medida · Aplicaciones web · Integraciones' : 'Custom software · Web applications · Integrations'}</p>
          <div className={styles.socials}>
            <a href="https://github.com/JulioXC4" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/juliocastroalejos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

