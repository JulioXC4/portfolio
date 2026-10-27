import type { NextConfig } from "next";
import { projectsData } from "./src/data/projects";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return projectsData
      .filter(project => !project.hidden && project.hasDetailPage === false)
      .map(project => ({ source: `/projects/${project.slug}`, destination: "/#projects", permanent: true }));
  },
};

export default nextConfig;
