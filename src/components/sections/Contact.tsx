'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '@/components/common/BrandIcons';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      // Simulate form submission to backend/Vercel serverless API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Column 1: Info */}
          <div className={styles.infoColumn}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('contact.title')}</h2>
              <p className={styles.sectionSubtitle}>{t('contact.subtitle')}</p>
              <div className={styles.headerBar}></div>
            </div>

            <div className={styles.contactChannels}>
              <a href="mailto:julioc4.dev@gmail.com" className={`${styles.channelCard} glass-card`}>
                <div className={`${styles.iconWrapper} ${styles.iconEmail}`}>
                  <Mail size={22} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>julioc4.dev@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/juliocastroalejos/" target="_blank" rel="noopener noreferrer" className={`${styles.channelCard} glass-card`}>
                <div className={`${styles.iconWrapper} ${styles.iconLinkedin}`}>
                  <Linkedin size={22} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>LinkedIn</span>
                  <span className={styles.channelValue}>juliocastroalejos</span>
                </div>
              </a>

              <a href="https://github.com/JulioXC4" target="_blank" rel="noopener noreferrer" className={`${styles.channelCard} glass-card`}>
                <div className={`${styles.iconWrapper} ${styles.iconGithub}`}>
                  <Github size={22} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>GitHub</span>
                  <span className={styles.channelValue}>JulioXC4</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className={styles.formColumn}>
            <div className={`${styles.formCard} glass-card`}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className={styles.input}
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className={styles.textarea}
                    placeholder={t('nav.about') === 'Sobre Mí' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
                    rows={5}
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <div className={styles.successBox}>
                    <CheckCircle2 size={20} className={styles.successIcon} />
                    <span>{t('contact.success')}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorBox}>
                    <AlertCircle size={20} className={styles.errorIcon} />
                    <span>{t('contact.error')}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`${styles.submitBtn} ${status === 'sending' ? styles.btnSending : ''}`}
                >
                  {status === 'sending' ? (
                    <>
                      <span>{t('contact.sending')}</span>
                      <span className={styles.spinner}></span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.send')}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
