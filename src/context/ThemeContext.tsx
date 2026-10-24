'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const switching = useRef(false);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    delete document.documentElement.dataset.themeTransition;
  }, []);

  useEffect(() => {
    // Read from localStorage or system settings on client-side mount
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme;
    
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    // Defer state updates to avoid synchronous cascading renders
    const timer = setTimeout(() => {
      setMounted(true);
      setTheme(initialTheme);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (switching.current) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    const updateTheme = () => {
      flushSync(() => setTheme(nextTheme));
      localStorage.setItem('portfolio-theme', nextTheme);
      root.setAttribute('data-theme', nextTheme);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateTheme();
      return;
    }

    switching.current = true;
    const finish = () => {
      switching.current = false;
      delete root.dataset.themeTransition;
    };
    if (typeof document.startViewTransition === 'function') {
      // Capture the outgoing video frame and fade the complete new theme over it.
      root.dataset.themeTransition = 'snapshot';
      const transition = document.startViewTransition(updateTheme);
      void transition.ready.catch(() => {});
      void transition.finished.then(finish, finish);
    } else {
      root.dataset.themeTransition = 'fallback';
      updateTheme();
      fallbackTimer.current = setTimeout(finish, 600);
    }
  };

  // Provide fallback theme during SSR to avoid mismatch hydration errors
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
