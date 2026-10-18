import type { MetadataRoute } from 'next';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://juliocastro.vercel.app';

  // Root homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Dynamic project routes
  projectsData
    .filter((project) => !project.hidden && project.hasDetailPage !== false)
    .forEach((project) => {
      routes.push({
        url: `${baseUrl}/projects/${project.slug}`,
        changeFrequency: 'monthly',
        priority: project.featured ? 0.85 : 0.75,
      });
    });

  return routes;
}
