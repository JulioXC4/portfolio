'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
  children: React.ReactNode;
  delayMs?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delayMs = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    currentElement.dataset.revealReady = 'true';
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after showing to avoid repeatedly triggering transition
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        threshold: 0, // Reveal as soon as the section enters the viewport
        rootMargin: '0px 0px -24px 0px' // Offset trigger point slightly from bottom of screen
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        delete currentElement.dataset.revealReady;
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.revealWrapper} ${isVisible ? styles.revealVisible : ''}`}
      style={{ '--reveal-delay': `${delayMs}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
