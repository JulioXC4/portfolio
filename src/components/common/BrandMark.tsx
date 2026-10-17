/** An interlocking JC signature: two letters, one continuous visual rhythm. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" data-brand-mark>
      <path d="M6 9h16v19c0 7-4 11-10 11-4 0-7-2-9-5" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 13c-3-3-6-5-10-5-8 0-14 7-14 16s6 16 14 16c4 0 7-2 10-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 24h7" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
