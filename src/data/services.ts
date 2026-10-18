export interface Service {
  id: string;
  titleES: string;
  titleEN: string;
  badgeES: string;
  badgeEN: string;
  summaryES: string;
  summaryEN: string;
  targetES: string;
  targetEN: string;
  benefitsES: string[];
  benefitsEN: string[];
  technologies: string[];
  whatsappMessage: string;
}

export const servicesData: Service[] = [
  {
    id: 'web-development',
    titleES: 'Páginas Web Corporativas & Landing Pages',
    titleEN: 'Corporate Websites & High-Converting Landing Pages',
    badgeES: 'Presencia Digital & Clientes',
    badgeEN: 'Digital Presence & Leads',
    summaryES: 'Diseño y desarrollo de sitios web profesionales orientados a convertir visitantes en clientes reales, con carga ultrarrápida y optimización para Google.',
    summaryEN: 'Design and engineering of professional websites focused on turning visitors into real customers, with lightning-fast speeds and top-tier SEO.',
    targetES: 'Ideal para empresas, consultoras y profesionales que necesitan transmitir autoridad y captar cotizaciones.',
    targetEN: 'Perfect for businesses, consultancies, and professionals aiming to project authority and capture inbound leads.',
    benefitsES: [
      'Posicionamiento en Google (SEO on-page y técnico optimizado)',
      '100% adaptable a teléfonos móviles, tablets y computadoras',
      'Integración directa con WhatsApp para contacto inmediato',
      'Velocidad de carga superior para retener visitantes'
    ],
    benefitsEN: [
      'Google search visibility (on-page & technical SEO optimized)',
      'Fully responsive across smartphones, tablets, and desktops',
      'Direct WhatsApp conversion triggers for immediate contact',
      'Blazing load performance to minimize bounce rates'
    ],
    technologies: ['Next.js', 'React', 'Astro', 'TypeScript', 'Tailwind / CSS'],
    whatsappMessage: 'Hola Julio, me interesa cotizar una página web o landing page profesional para mi empresa.'
  },
  {
    id: 'ecommerce',
    titleES: 'Tiendas Virtuales & E-commerce',
    titleEN: 'E-commerce Stores & Online Sales',
    badgeES: 'Ventas 24/7',
    badgeEN: '24/7 Online Sales',
    summaryES: 'Implementación de tiendas online seguras y fáciles de administrar, con catálogo de productos, carrito de compras y pasarelas de pago integradas.',
    summaryEN: 'Secure, easy-to-manage online storefronts featuring dynamic catalogs, shopping carts, and seamless payment gateway integrations.',
    targetES: 'Para marcas y negocios minoristas o mayoristas que desean vender en todo el Perú y el extranjero sin intermediarios.',
    targetEN: 'For brands and merchants looking to sell products directly to customers with automated checkout flows.',
    benefitsES: [
      'Pasarelas de pago seguras (Niubiz, Culqi, Mercado Pago, Stripe)',
      'Panel intuitivo para actualizar precios, fotos y stock',
      'Cálculo de envíos y notificaciones de pedidos por WhatsApp/Email',
      'Diseño enfocado en maximizar la tasa de compra'
    ],
    benefitsEN: [
      'Secure payment processing (Niubiz, Culqi, Stripe, Mercado Pago)',
      'Intuitive admin dashboard to update prices, photos, and stock',
      'Automated order alerts via WhatsApp and Email',
      'Checkout flow refined to maximize purchase conversion'
    ],
    technologies: ['Next.js', 'WooCommerce', 'Stripe / Culqi / Niubiz', 'MySQL / PostgreSQL'],
    whatsappMessage: 'Hola Julio, quisiera cotizar el desarrollo de una tienda virtual / e-commerce para mi negocio.'
  },
  {
    id: 'custom-software',
    titleES: 'Desarrollo de Software & Sistemas a Medida',
    titleEN: 'Custom Software & Web Application Development',
    badgeES: 'Automatización & Eficiencia',
    badgeEN: 'Automation & Scalability',
    summaryES: 'Construcción de aplicaciones web, paneles administrativos (dashboards) y plataformas SaaS creadas exactamente para los flujos de tu negocio.',
    summaryEN: 'Tailor-made web applications, administrative dashboards, and SaaS platforms engineered around your company’s exact operational workflows.',
    targetES: 'Para empresas que necesitan dejar atrás hojas de cálculo dispersas y automatizar procesos operativos y de control.',
    targetEN: 'For growing companies needing to replace messy spreadsheets with centralized, automated software.',
    benefitsES: [
      'Gestión de usuarios con control de roles y permisos estrictos',
      'Métricas e informes interactivos en tiempo real',
      'Arquitectura modular y limpia (DDD, CQRS) escalable en el tiempo',
      'Bases de datos optimizadas para alta concurrencia y seguridad'
    ],
    benefitsEN: [
      'Role-based access control (RBAC) with granular permissions',
      'Interactive real-time metrics and operational reports',
      'Clean modular architecture (DDD, CQRS) built to scale gracefully',
      'Optimized data stores tuned for high concurrency and resilience'
    ],
    technologies: ['Spring Boot', 'Laravel', 'Vue.js 3', 'React', 'PostgreSQL', 'Docker'],
    whatsappMessage: 'Hola Julio, me gustaría cotizar un software o sistema web a medida para optimizar los procesos de mi empresa.'
  },
  {
    id: 'backend-apis',
    titleES: 'Desarrollo Backend & Integración de APIs (SUNAT, Pagos, ERP)',
    titleEN: 'Backend Development & API Integrations (SUNAT, Payments, ERP)',
    badgeES: 'Conectividad & Seguridad',
    badgeEN: 'Connectivity & Security',
    summaryES: 'Diseño de APIs RESTful seguras, integración de facturación electrónica con SUNAT, pasarelas de pago y conexión con sistemas existentes.',
    summaryEN: 'Engineering of secure RESTful APIs, SUNAT electronic billing integration, payment services, and legacy ERP connections.',
    targetES: 'Para plataformas y empresas que requieren interoperabilidad confiable, cumplimiento tributario o sincronización de datos.',
    targetEN: 'For businesses needing tax-compliant electronic invoicing, resilient microservices, or external API bridges.',
    benefitsES: [
      'Integración comprobada con SUNAT (firma digital, SOAP/XML UBL)',
      'Validaciones tributarias automáticas en tiempo real (RUC, DNI)',
      'Autenticación robusta y protección de datos (JWT, Sanctum)',
      'Documentación clara y pruebas de integración'
    ],
    benefitsEN: [
      'Proven SUNAT tax integration (digital signature, SOAP/XML UBL)',
      'Automated fiscal validation in real time (RUC and DNI lookups)',
      'Bulletproof token authentication and data encryption (JWT, Sanctum)',
      'Thorough API documentation and automated testing'
    ],
    technologies: ['Laravel 11', 'PHP 8.2', 'Spring Boot', 'Java', 'MySQL', 'SOAP / XML'],
    whatsappMessage: 'Hola Julio, necesito cotizar un desarrollo backend / integración de APIs o SUNAT.'
  }
];
