'use client';

import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { Github, Linkedin } from './BrandIcons';
import { useLanguage } from '@/context/LanguageContext';
import { scrollToSection } from '@/lib/navigation';
import styles from './Footer.module.css';

const sections = ['about', 'experience', 'freelance', 'projects', 'tech', 'goals', 'contact'];

export function Footer() {
  const { language, t } = useLanguage();
  const es = language === 'es';
  return (
    <footer id="footer" className={styles.footer} tabIndex={0} aria-label={es ? 'Pie de página' : 'Footer'}>
      <div className="container">
        <div className={styles.closing}>
          <h2>{t('contact.title')}</h2>
          <a href="mailto:julioc4.dev@gmail.com" className={styles.email}><span>julioc4.dev@gmail.com</span><span className={styles.emailArrow}><ArrowUpRight size={32} aria-hidden="true" /></span></a>
        </div>
        <div className={styles.columns}>
          <div className={styles.brand}><BrandMark className={styles.mark} /><span>Julio Castro</span><p>{es ? 'Ingeniería con propósito' : 'Engineering with purpose'}</p></div>
          <nav aria-label={es ? 'Navegación del pie' : 'Footer navigation'} className={styles.navigation}>
            <h3>{es ? 'Navegación' : 'Navigation'}</h3>
            <div>{sections.map(id => <button key={id} onClick={() => scrollToSection(id)}>{t(`nav.${id}`)}<ArrowUpRight size={15} aria-hidden="true" /></button>)}</div>
          </nav>
          <div className={styles.socials}><h3>{es ? 'Conecta' : 'Connect'}</h3>
            <a href="https://www.linkedin.com/in/juliocastroalejos/" target="_blank" rel="noopener noreferrer"><Linkedin size={22} />LinkedIn<ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="https://github.com/JulioXC4" target="_blank" rel="noopener noreferrer"><Github size={22} />GitHub<ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Julio Castro Alejos. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <span className={styles.location}><MapPin size={15} aria-hidden="true" />{es ? 'Perú' : 'Peru'}</span>
          <button className={styles.toTop} onClick={() => scrollToSection('home')}>{es ? 'Volver arriba' : 'Back to top'}<ArrowUp size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </footer>
  );
}
