interface FreelanceProject {
  id: string;
  name: string;
  url?: string;
  domain?: string;
  image: string;
  previewBackground: string;
  previewForeground: string;
  categoryES: string;
  categoryEN: string;
  descriptionES: string;
  descriptionEN: string;
  platformES: string;
  platformEN: string;
}

export const freelanceProjects: readonly FreelanceProject[] = [
  {
    id: 'rock-hunters',
    name: 'Rock Hunters',
    url: 'https://rock-hunters.com/',
    domain: 'rock-hunters.com',
    image: '/images/freelance/rock-hunters-desktop.webp',
    previewBackground: '#252525',
    previewForeground: '#c8cccf',
    categoryES: 'Web de marca',
    categoryEN: 'Brand website',
    descriptionES: 'Sitio web para una empresa de tecnología y soluciones de campo para geología, geotecnia, exploración y minería. Implementación en WordPress y Elementor.',
    descriptionEN: 'Website for a technology and field solutions company serving geology, geotechnics, exploration, and mining. Built with WordPress and Elementor.',
    platformES: 'WordPress · Elementor',
    platformEN: 'WordPress · Elementor',
  },
  {
    id: '180dc-upc',
    name: '180DC UPC',
    url: 'https://julioxc4.github.io/180dc-upc-ns/',
    domain: 'julioxc4.github.io/180dc-upc-ns',
    image: '/images/freelance/180dc-upc-desktop.webp',
    previewBackground: '#20211e',
    previewForeground: '#e7eadf',
    categoryES: 'Web institucional',
    categoryEN: 'Organization website',
    descriptionES: 'Sitio web para el capítulo UPC de 180 Degrees Consulting. Presenta su propuesta de consultoría social, equipo y formas de participar como estudiante, organización o aliado.',
    descriptionEN: 'Website for the UPC branch of 180 Degrees Consulting. It presents its social consulting approach, team, and ways to participate as a student, organization, or partner.',
    platformES: 'HTML · CSS · JavaScript',
    platformEN: 'HTML · CSS · JavaScript',
  },
  {
    id: 'drillhub',
    name: 'DrillHub',
    image: '/images/freelance/drillhub-desktop.webp',
    previewBackground: '#f3f7f6',
    previewForeground: '#0b4338',
    categoryES: 'Aplicación web',
    categoryEN: 'Web application',
    descriptionES: 'Aplicación web para organizar proyectos de perforación, coordinar equipos y gestionar registros de campo. Una plataforma que reúne la información del trabajo de campo en un mismo lugar.',
    descriptionEN: 'Web application for organizing drilling projects, coordinating teams, and managing field records. A platform that brings fieldwork information together in one place.',
    platformES: 'Next.js · React · TypeScript',
    platformEN: 'Next.js · React · TypeScript',
  },
  {
    id: 'eec-consultores',
    name: 'EEC Consultores',
    url: 'https://www.eecconsultores.com/',
    domain: 'eecconsultores.com',
    image: '/images/freelance/eec-consultores-desktop.webp',
    previewBackground: '#071b42',
    previewForeground: '#c8cccf',
    categoryES: 'Web corporativa',
    categoryEN: 'Corporate website',
    descriptionES: 'Sitio web para una consultora de instalaciones eléctricas, sanitarias y contra incendios. Desarrollé su web original en WordPress y su versión actual en Astro.',
    descriptionEN: 'Website for an electrical, plumbing, and fire protection consultancy. I developed its original WordPress website and its current version in Astro.',
    platformES: 'Astro · WordPress (versión anterior)',
    platformEN: 'Astro · WordPress (previous version)',
  },
] as const;
