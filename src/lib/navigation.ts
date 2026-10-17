export function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollTo({ top: 0, behavior: 'instant' });

  const header = document.querySelector<HTMLElement>('[data-header-bar]');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: Math.max(0, window.scrollY + section.getBoundingClientRect().top - headerHeight),
    behavior: reducedMotion ? 'instant' : 'smooth',
  });
}
