'use client';

import { useCallback, useEffect, useRef } from 'react';

/** Bounded, interruptible animations; the DOM always keeps its final visible state. */
export function useMotion() {
  const running = useRef(new Map<Animation, () => void>());

  const cancel = useCallback(() => {
    for (const [animation, cleanup] of running.current) {
      animation.cancel();
      cleanup();
    }
    running.current.clear();
  }, []);

  const animate = useCallback((element: HTMLElement, frames: Keyframe[], duration: number, cleanup = () => {}) => {
    if (document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !element.animate) {
      cleanup();
      return;
    }
    const animation = element.animate(frames, { duration, easing: 'cubic-bezier(.16,1,.3,1)' });
    running.current.set(animation, cleanup);
    const finish = () => {
      if (running.current.delete(animation)) cleanup();
    };
    void animation.finished.then(finish, finish);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handlePreference = () => { if (preference.matches) cancel(); };
    const handleVisibility = () => { if (document.hidden) cancel(); };
    preference.addEventListener('change', handlePreference);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      preference.removeEventListener('change', handlePreference);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancel();
    };
  }, [cancel]);

  return { animate, cancel };
}
