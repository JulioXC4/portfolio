export const WHATSAPP_PHONE = '51949331767';
export const WHATSAPP_DISPLAY_PHONE = '+51 949 331 767';

export const WHATSAPP_MESSAGES = {
  general: 'Hola Julio, encontré tu portafolio y estoy interesado en desarrollar un proyecto. Me gustaría conversar contigo para solicitar una cotización.',
  generalEN: 'Hi Julio, I found your portfolio and would like to discuss a software project and request a quote.',
  hero: 'Hola Julio, vi tu portafolio y quisiera cotizar un proyecto de desarrollo para mi negocio.',
  webService: 'Hola Julio, me interesa cotizar una página web o landing page profesional para mi empresa.',
  ecommerceService: 'Hola Julio, quisiera cotizar el desarrollo de una tienda virtual / e-commerce.',
  customSoftware: 'Hola Julio, me gustaría cotizar un software o sistema web a medida para optimizar procesos en mi empresa.',
  backendApi: 'Hola Julio, necesito cotizar un desarrollo backend / integración de APIs (SUNAT, pagos o servicios).',
  projectSimilar: (projectName: string, language: 'es' | 'en' = 'es') => language === 'en'
    ? `Hi Julio, I saw the project "${projectName}" in your portfolio and would like a quote for a similar solution for my business.`
    : `Hola Julio, estuve revisando el proyecto "${projectName}" en tu portafolio y me gustaría cotizar una solución similar para mi negocio.`,
  freelanceSimilar: (clientName: string, language: 'es' | 'en' = 'es') => language === 'en'
    ? `Hi Julio, I saw the work you did for ${clientName} and would like a quote for a website for my company.`
    : `Hola Julio, vi el trabajo que realizaste para ${clientName} y me gustaría cotizar un desarrollo web para mi empresa.`,
  customQuote: (name: string, service: string, details: string, language: 'es' | 'en' = 'es') => {
    if (language === 'en') return `Hi Julio,${name ? ` my name is ${name}.` : ''}${service ? ` I would like a quote for: ${service}.` : ' I would like to discuss a project.'}${details ? `\n\nProject details:\n${details}` : ''}\n\nI look forward to discussing the project with you.`;
    const greeting = name ? `Hola Julio, mi nombre es ${name}.` : 'Hola Julio,';
    const serviceText = service ? ` Estoy interesado en cotizar: ${service}.` : ' Estoy interesado en cotizar un proyecto.';
    const detailsText = details ? `\n\nDetalles del proyecto:\n${details}` : '';
    return `${greeting}${serviceText}${detailsText}\n\nQuedo atento para coordinar una reunión o propuesta.`;
  },
} as const;

/**
 * Builds a direct wa.me link with URL-encoded message text
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message || WHATSAPP_MESSAGES.general;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
