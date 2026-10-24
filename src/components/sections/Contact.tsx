'use client';

import { useState, type FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { Github, Linkedin, WhatsApp } from '@/components/common/BrandIcons';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_PHONE, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { servicesData } from '@/data/services';
import { trackWhatsAppClick, trackQuoteRequest } from '@/lib/analytics';
import styles from './Contact.module.css';

export function Contact({ serviceId, onServiceChange }: { serviceId: string; onServiceChange: (id: string) => void }) {
  const { language, t } = useLanguage();
  const es = language === 'es';
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const service = servicesData.find(item => item.id === serviceId);
  const serviceTitle = service ? (es ? service.titleES : service.titleEN) : (es ? 'Consultoría o solución especial' : 'Consulting or custom solution');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const channel = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const method = channel?.value === 'email' ? 'email' : 'whatsapp';
    trackQuoteRequest(method, serviceId);
    const draft = WHATSAPP_MESSAGES.customQuote(name.trim(), serviceTitle, message.trim(), language);
    if (method === 'email') {
      const subject = `${es ? 'Cotización de proyecto' : 'Project quote'}: ${serviceTitle}`;
      window.location.href = `mailto:julioc4.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;
    } else {
      window.open(getWhatsAppUrl(draft), '_blank', 'noopener,noreferrer');
    }
  };
  const channels = [
    { label: 'WhatsApp', value: WHATSAPP_DISPLAY_PHONE, href: getWhatsAppUrl(es ? WHATSAPP_MESSAGES.general : WHATSAPP_MESSAGES.generalEN), Icon: WhatsApp },
    { label: 'Email', value: 'julioc4.dev@gmail.com', href: 'mailto:julioc4.dev@gmail.com', Icon: Mail },
    { label: 'LinkedIn', value: 'juliocastroalejos', href: 'https://www.linkedin.com/in/juliocastroalejos/', Icon: Linkedin },
    { label: 'GitHub', value: 'JulioXC4', href: 'https://github.com/JulioXC4', Icon: Github },
  ];
  return (
    <section id="contact" className={styles.section} tabIndex={0} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className="section-rule" aria-hidden="true" />
            <h2 id="contact-heading" className={styles.title}>{t('contact.title')}</h2>
            <p className={styles.intro}>{t('contact.subtitle')}</p>
            <div className={styles.channels}>{channels.map(({ label, value, href, Icon }) => <a key={label} className={styles.channel} href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined} onClick={label === 'WhatsApp' ? () => trackWhatsAppClick('contact_channel') : undefined}><Icon size={28} aria-hidden="true" /><span><span className={styles.channelLabel}>{label}</span><span className={styles.channelValue}>{value}</span></span><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div>
          </div>
          <div className={styles.formColumn}>
            <h3>{t('contact.form.heading')}</h3>
            <p className={styles.formIntro}>{t('contact.form.intro')}</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}><label htmlFor="quote-name">{t('contact.form.nameLabel')}</label><input id="quote-name" name="name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder={es ? 'Nombre o empresa…' : 'Name or company…'} required maxLength={150} /></div>
              <div className={styles.field}><label htmlFor="quote-service">{t('contact.form.serviceLabel')}</label><select id="quote-service" name="service" value={serviceId} onChange={e => onServiceChange(e.target.value)}>{servicesData.map(item => <option key={item.id} value={item.id}>{es ? item.titleES : item.titleEN}</option>)}<option value="consulting">{es ? 'Consultoría o solución especial' : 'Consulting or custom solution'}</option></select></div>
              <div className={styles.field}><label htmlFor="quote-message">{es ? 'Detalles de tu proyecto' : 'Project details'}</label><textarea id="quote-message" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder={t('contact.form.messagePlaceholder')} rows={4} required maxLength={3000} /></div>
              <div className={styles.actions}><button type="submit" name="channel" value="whatsapp" className={styles.primary}><WhatsApp size={21} aria-hidden="true" />{es ? 'Continuar en WhatsApp' : 'Continue in WhatsApp'}<ArrowUpRight size={19} aria-hidden="true" /></button><button type="submit" name="channel" value="email" className={styles.secondary}><Send size={18} aria-hidden="true" />{t('contact.form.emailButton')}</button></div>
              <p className={styles.note}>{t('contact.form.note')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
