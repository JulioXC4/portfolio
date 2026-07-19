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
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset trigger point slightly from bottom of screen
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.revealWrapper} ${isVisible ? styles.revealVisible : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};
