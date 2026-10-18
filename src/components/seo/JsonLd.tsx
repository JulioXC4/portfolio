import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
};

export const mainWebsiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://juliocastro.vercel.app/#website',
      'url': 'https://juliocastro.vercel.app/',
      'name': 'Julio Castro | Desarrollo de software y Full Stack',
      'description': 'Portafolio profesional de Julio Castro. Servicios de desarrollo web, landing pages, tiendas virtuales, software a medida y desarrollo backend en Lima, Perú.',
      'inLanguage': ['es-PE', 'en-US'],
      'publisher': {
        '@id': 'https://juliocastro.vercel.app/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://juliocastro.vercel.app/#person',
      'name': 'Julio Castro Alejos',
      'alternateName': 'Julio Castro',
      'url': 'https://juliocastro.vercel.app/',
      'image': 'https://juliocastro.vercel.app/images/julio-castro.jpg',
      'jobTitle': 'Desarrollador Full Stack',
      'telephone': '+51 949 331 767',
      'email': 'julioc4.dev@gmail.com',
      'sameAs': [
        'https://www.linkedin.com/in/juliocastroalejos/',
        'https://github.com/JulioXC4',
      ],
      'affiliation': {
        '@type': 'CollegeOrUniversity',
        'name': 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        'url': 'https://www.upc.edu.pe/',
      },
      'knowsAbout': [
        'Desarrollo Web Freelance',
        'Next.js',
        'React',
        'Spring Boot',
        'Laravel',
        'TypeScript',
        'PHP',
        'Facturación Electrónica SUNAT',
        'Arquitectura de Software',
        'Bases de Datos Relacionales y NoSQL',
        'Internet de las Cosas (IoT)',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://juliocastro.vercel.app/#service-provider',
      'name': 'Julio Castro - Desarrollo Web & Software Freelance',
      'url': 'https://juliocastro.vercel.app/',
      'image': 'https://juliocastro.vercel.app/images/julio-castro.jpg',
      'telephone': '+51 949 331 767',
      'email': 'julioc4.dev@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Lima',
        'addressRegion': 'Lima',
        'addressCountry': 'PE',
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'Perú' },
        { '@type': 'Place', 'name': 'Latinoamérica' },
        { '@type': 'Place', 'name': 'Remoto / Internacional' },
      ],
      'founder': {
        '@id': 'https://juliocastro.vercel.app/#person',
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Servicios Profesionales de Desarrollo de Software',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Desarrollo de Páginas Web Corporativas y Landing Pages',
              'description': 'Creación de sitios web a medida con optimización SEO, velocidad ultrarrápida y alta tasa de conversión para empresas y negocios.',
              'provider': { '@id': 'https://juliocastro.vercel.app/#person' },
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Desarrollo de Tiendas Virtuales (E-commerce)',
              'description': 'Diseño e implementación de tiendas online con catálogo dinámico, pasarelas de pago peruanas e internacionales y panel autogestionable.',
              'provider': { '@id': 'https://juliocastro.vercel.app/#person' },
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Desarrollo de Software y Sistemas Empresariales a Medida',
              'description': 'Sistemas web personalizados, paneles administrativos, automatización de procesos operativos y plataformas SaaS.',
              'provider': { '@id': 'https://juliocastro.vercel.app/#person' },
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Desarrollo Backend e Integración de APIs (SUNAT, Pagos, ERP)',
              'description': 'Arquitectura de APIs RESTful seguras, integración de facturación electrónica SUNAT con firma digital XML y sincronización con servicios cloud.',
              'provider': { '@id': 'https://juliocastro.vercel.app/#person' },
            },
          },
        ],
      },
    },
  ],
};
