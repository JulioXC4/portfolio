/**
 * Analytics tracking utilities for Google Analytics 4 (GA4).
 * Works gracefully in environments without GA enabled.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (process.env.NODE_ENV === 'development') {
    // Helpful debug in development
    // console.log(`[Analytics Event] ${eventName}`, params);
  }
}

export function trackWhatsAppClick(location: string, service?: string): void {
  trackEvent('click_whatsapp', {
    event_category: 'Conversion',
    event_label: location,
    service_type: service || 'general',
  });
}

export function trackQuoteRequest(method: 'whatsapp' | 'email', service: string): void {
  trackEvent('request_quote', {
    event_category: 'Lead',
    event_label: method,
    service_type: service,
  });
}

export function trackServiceSelect(serviceId: string): void {
  trackEvent('select_service', {
    event_category: 'Engagement',
    event_label: serviceId,
  });
}

export function trackProjectView(slug: string): void {
  trackEvent('view_project_detail', {
    event_category: 'Portfolio',
    event_label: slug,
  });
}
