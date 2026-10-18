import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectClient } from './ProjectClient';
import { JsonLd } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData
    .filter((project) => !project.hidden && project.hasDetailPage !== false)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug && !p.hidden);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto solicitado no existe en los registros de Julio Castro.',
    };
  }

  const title = project.titleES;
  const description = `${project.descriptionES} Tecnologías: ${project.technologies.slice(0, 5).join(', ')}.`;

  return {
    title,
    description,
    keywords: [
      project.titleES,
      ...project.technologies,
      'Julio Castro',
      'Desarrollo de Software a Medida',
      'Ingeniería de Software Lima',
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://juliocastro.vercel.app/projects/${slug}`,
      type: 'article',
      siteName: 'Julio Castro - Portafolio y Servicios Digitales',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug && !p.hidden);

  if (!project) {
    notFound();
  }
  if (project.hasDetailPage === false) permanentRedirect('/#projects');

  const projectBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://juliocastro.vercel.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Proyectos',
        item: 'https://juliocastro.vercel.app/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.titleES,
        item: `https://juliocastro.vercel.app/projects/${project.slug}`,
      },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `Caso de estudio: ${project.titleES}`,
    description: project.longDescriptionES,
    about: { '@type': 'SoftwareApplication', name: project.titleES },
    author: {
      '@type': 'Person',
      name: 'Julio Castro Alejos',
      url: 'https://juliocastro.vercel.app/',
    },
  };

  return (
    <>
      <JsonLd data={projectBreadcrumbSchema} />
      <JsonLd data={softwareAppSchema} />
      <ProjectClient slug={slug} />
    </>
  );
}
