'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

type Language = 'es' | 'en';
type Translations = typeof es;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { es, en };

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved preference or browser setting on mount
    const savedLang = localStorage.getItem('portfolio-lang') as Language;
    let targetLang: Language = 'es';
    
    if (savedLang === 'es' || savedLang === 'en') {
      targetLang = savedLang;
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        targetLang = 'en';
      }
    }
    
    // Defer state updates to avoid synchronous setState inside render-phase effects
    const timer = setTimeout(() => {
      setLanguageState(targetLang);
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  // Helper function to resolve nested keys like "hero.greeting"
  const t = (keyPath: string): string => {
    const dict = translations[language];
    const keys = keyPath.split('.');
    let current: unknown = dict;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[key];
      } else {
        // Fallback to key itself if not found
        return keyPath;
      }
    }

    return typeof current === 'string' ? current : keyPath;
  };

  // Avoid hydration mismatch by rendering a consistent layout until mounted
  if (!mounted) {
    // Provide a simple shell, or just render the children using the default Spanish dictionary
    // rendering children immediately prevents block of page load, but we ensure translations
    // evaluate with 'es' on server and client until mounted.
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
