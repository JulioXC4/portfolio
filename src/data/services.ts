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
    titleES: "Sitios web y landing pages",
    titleEN: "Websites and landing pages",
    badgeES: 'Presencia Digital & Clientes',
    badgeEN: 'Digital Presence & Leads',
    summaryES: "Desarrollo sitios web para presentar tu negocio, mostrar tus servicios y facilitar el contacto con tus clientes.",
    summaryEN: "I build websites to introduce your business, showcase your services, and help customers get in touch.",
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
    titleES: "Tiendas online",
    titleEN: "Online stores",
    badgeES: 'Ventas 24/7',
    badgeEN: '24/7 Online Sales',
    summaryES: "Creo tiendas con catálogo, carrito de compras y pagos integrados para que puedas vender y gestionar tus productos.",
    summaryEN: "I build online stores with catalogs, shopping carts, and integrated payments so you can sell and manage your products.",
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
    titleES: "Aplicaciones web a medida",
    titleEN: "Custom web applications",
    badgeES: 'Automatización & Eficiencia',
    badgeEN: 'Automation & Scalability',
    summaryES: "Desarrollo sistemas y paneles para organizar la información y automatizar tareas de tu negocio.",
    summaryEN: "I build applications and dashboards to organize information and automate tasks for your business.",
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
    titleES: "APIs e integraciones",
    titleEN: "APIs and integrations",
    badgeES: 'Conectividad & Seguridad',
    badgeEN: 'Connectivity & Security',
    summaryES: "Desarrollo APIs y conecto aplicaciones con SUNAT, servicios de pago y otros sistemas.",
    summaryEN: "I develop APIs and connect applications to SUNAT, payment services, and other systems.",
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
