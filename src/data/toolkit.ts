export interface ToolCategory {
  id: string;
  title: [string, string];
  tools: { name: string; usage: [string, string] }[];
  summary: [string, string];
  links: { label: string; href: string }[];
}

export const toolkit: ToolCategory[] = [
  {
    id: 'frontend', title: ['Frontend y móvil', 'Frontend and mobile'],
    tools: [
      { name: 'Vue.js 3', usage: ['Citas Médicas · en desarrollo', 'Medical booking · in development'] },
      { name: 'Angular', usage: ['Restock · aplicación web', 'Restock · web application'] },
      { name: 'React / Next.js', usage: ['Este portafolio', 'This portfolio'] },
      { name: 'Flutter (App)', usage: ['Restock · aplicación móvil', 'Restock · mobile application'] },
      { name: 'Livewire 3', usage: ['Interfaces con Laravel', 'Laravel interfaces'] },
    ],
    summary: ['Angular y Flutter en Restock; Vue y Pinia en Citas Médicas; React y Next.js en este portafolio.', 'Angular and Flutter in Restock; Vue and Pinia in Medical Booking; React and Next.js in this portfolio.'],
    links: [{ label: 'Restock', href: '/projects/restock' }, { label: 'Citas Médicas', href: '/projects/gestion-citas-medicas' }],
  },
  {
    id: 'backend', title: ['Backend y APIs', 'Backend and APIs'],
    tools: [
      { name: 'Spring Boot (Java)', usage: ['Restock y Citas Médicas', 'Restock and Medical Booking'] },
      { name: 'Laravel (PHP)', usage: ['EmiteFacil · Devdatep', 'EmiteFacil · Devdatep'] },
      { name: 'Node.js', usage: ['Desarrollo web con JavaScript', 'JavaScript web development'] },
      { name: 'Flask (Python)', usage: ['Restock · servicio edge', 'Restock · edge service'] },
    ],
    summary: ['Java y Spring Boot para el backend de Restock y Citas Médicas; PHP y Laravel en mi experiencia con EmiteFacil; Python y Flask en el servicio edge de Restock.', 'Java and Spring Boot for Restock and Medical Booking; PHP and Laravel in my work on EmiteFacil; Python and Flask for the Restock edge service.'],
    links: [{ label: 'Restock', href: '/projects/restock' }, { label: 'Devdatep', href: 'https://devdatep.com/' }],
  },
  {
    id: 'data', title: ['Bases de datos', 'Databases'],
    tools: [
      { name: 'PostgreSQL', usage: ['Citas Médicas · en desarrollo', 'Medical booking · in development'] },
      { name: 'MySQL', usage: ['EmiteFacil · Devdatep', 'EmiteFacil · Devdatep'] },
      { name: 'MongoDB', usage: ['Restock · persistencia cloud', 'Restock · cloud persistence'] },
      { name: 'SQLite', usage: ['Restock · almacenamiento local', 'Restock · local storage'] },
    ],
    summary: ['MongoDB y SQLite en Restock, PostgreSQL en Citas Médicas y MySQL en el desarrollo de EmiteFacil.', 'MongoDB and SQLite in Restock, PostgreSQL in Medical Booking, and MySQL in EmiteFacil development.'],
    links: [{ label: 'Restock', href: '/projects/restock' }, { label: 'Citas Médicas', href: '/projects/gestion-citas-medicas' }],
  },
  {
    id: 'cms', title: ['Web y CMS', 'Web and CMS'],
    tools: [
      { name: 'Astro', usage: ['EEC Consultores · versión actual', 'EEC Consultores · current version'] },
      { name: 'WordPress', usage: ['Rock Hunters y EEC original', 'Rock Hunters and original EEC site'] },
      { name: 'Elementor', usage: ['Rock Hunters', 'Rock Hunters'] },
    ],
    summary: ['Desarrollé la web original de EEC Consultores con WordPress y su versión actual con Astro. En Rock Hunters utilicé WordPress y Elementor.', 'I built the original EEC Consultores website with WordPress and its current version with Astro. Rock Hunters uses WordPress and Elementor.'],
    links: [{ label: 'EEC Consultores', href: 'https://www.eecconsultores.com/' }, { label: 'Rock Hunters', href: 'https://rock-hunters.com/' }],
  },
  {
    id: 'iot', title: ['IoT y edge', 'IoT and edge'],
    tools: [
      { name: 'ESP32 / C++', usage: ['Restock · firmware y sensores', 'Restock · firmware and sensors'] },
      { name: 'MQTT Protocol', usage: ['Restock · comunicación', 'Restock · communication'] },
      { name: 'Python Flask Edge', usage: ['Restock · procesamiento local', 'Restock · local processing'] },
    ],
    summary: ['ESP32 y C++ para los sensores de Restock, MQTT para la comunicación y Python con Flask para el procesamiento edge.', 'ESP32 and C++ for Restock sensors, MQTT for communication, and Python with Flask for edge processing.'],
    links: [{ label: 'Restock', href: '/projects/restock' }],
  },
  {
    id: 'delivery', title: ['Despliegue y herramientas', 'Deployment and tools'],
    tools: [
      { name: 'Git', usage: ['Control de versiones y equipos', 'Version control and teamwork'] },
      { name: 'Docker', usage: ['Entornos en contenedores', 'Container environments'] },
      { name: 'GitHub Actions', usage: ['Automatización de flujos', 'Workflow automation'] },
      { name: 'Microsoft Azure', usage: ['Entornos cloud', 'Cloud environments'] },
      { name: 'Vercel Deployment', usage: ['Despliegue de este portafolio', 'This portfolio deployment'] },
      { name: 'Linux Shell', usage: ['Terminal y herramientas de desarrollo', 'Terminal and development tools'] },
    ],
    summary: ['Uso Git para trabajar con equipos y Vercel para publicar este portafolio. Docker, GitHub Actions, Azure y la terminal forman parte de mis herramientas de desarrollo.', 'I use Git for teamwork and Vercel to publish this portfolio. Docker, GitHub Actions, Azure, and the terminal are part of my development toolkit.'],
    links: [{ label: 'GitHub', href: 'https://github.com/JulioXC4' }],
  },
];
