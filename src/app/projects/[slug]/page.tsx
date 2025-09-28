import { notFound } from "next/navigation";
import type { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectLayout } from "@/components/content/ProjectLayout";
import { projectModules } from "@/data/projects/registry";

// Precompute slug -> lazy importer
const loaders: Record<string, () => Promise<{ meta: ProjectMeta; default: React.ComponentType }>> =
  Object.fromEntries(
    projectModules.map(m => [m.meta.slug, () => import(`@/data/projects/${m.meta.slug}`)])
  );

export function generateStaticParams() {
  return projectModules.map(m => ({ slug: m.meta.slug }));
}

interface PageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = params;
  const load = loaders[slug];
  if (!load) return notFound();

  // Dynamically import the project module
  const mod = await load();
  const { meta } = mod;
  const Body = mod.default;

  // Allow custom layout override
  if (meta.layout === "custom") {
    return <Body />;
  }

  return (
    <ProjectLayout meta={meta}>
      <Body />
    </ProjectLayout>
  );
}