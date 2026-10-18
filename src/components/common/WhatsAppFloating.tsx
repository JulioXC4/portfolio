'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WhatsApp } from './BrandIcons';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { trackWhatsAppClick } from '@/lib/analytics';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WhatsAppFloating.module.css';

export function WhatsAppFloating() {
  const { language } = useLanguage();
  const es = language === 'es';
  const pathname = usePathname();
  const [hiddenPath, setHiddenPath] = useState<string | null>(null);
  useEffect(() => {
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setHiddenPath(visible.size > 0 ? pathname : null);
    });
    document.querySelectorAll('#services, #projects, #contact, #footer').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <aside className={`${styles.container} ${hiddenPath === pathname ? styles.hidden : ''}`} aria-label={es ? 'Contacto directo' : 'Direct contact'}>
      <a href={getWhatsAppUrl(es ? WHATSAPP_MESSAGES.general : WHATSAPP_MESSAGES.generalEN)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('floating_button')} className={styles.button} aria-label={es ? 'Contactar a Julio Castro por WhatsApp' : 'Contact Julio Castro via WhatsApp'}>
        <WhatsApp size={27} aria-hidden="true" />
        <span className={styles.tooltip} aria-hidden="true">{es ? '¿Hablamos de tu proyecto?' : 'Let’s discuss your project'}</span>
      </a>
    </aside>
  );
}
