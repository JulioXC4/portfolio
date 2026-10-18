import { ImageResponse } from 'next/og';

export const alt = 'Julio Castro — Creo software que resuelve problemas reales.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '56px 64px', backgroundColor: '#131514', color: '#f3f0e8', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <svg width="52" height="52" viewBox="0 0 48 48" fill="none"><path d="M6 9h16v19c0 7-4 11-10 11-4 0-7-2-9-5" stroke="#c58d66" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M42 13c-3-3-6-5-10-5-8 0-14 7-14 16s6 16 14 16c4 0 7-2 10-5" stroke="#f3f0e8" strokeWidth="2.5" strokeLinecap="round" /><path d="M37 24h7" stroke="#c58d66" strokeWidth="2.5" strokeLinecap="round" /></svg>
        <span style={{ fontSize: 30, fontWeight: 600 }}>Julio Castro</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 65, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.04em' }}><span>Creo software que resuelve</span><span style={{ color: '#c58d66' }}>problemas reales.</span></div>
        <div style={{ fontSize: 25, color: '#b7b8b3' }}>Desarrollador Full Stack · Estudiante de Ingeniería de Software en la UPC</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f0e826', paddingTop: 24, fontSize: 21, color: '#b7b8b3' }}><span>Desarrollo web · Software a medida · Integración de APIs</span><span style={{ color: '#c58d66' }}>juliocastro.vercel.app</span></div>
    </div>,
    size,
  );
}
