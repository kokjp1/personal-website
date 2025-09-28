import { notFound } from "next/navigation";
import type { ProjectMeta } from "@/components/content/ProjectLayout";
import { ProjectLayout } from "@/components/content/ProjectLayout";
import { projectModules } from "@/data/projects/registry";

// Map slug -> dynamic importer (static analyzable)
const loaders: Record<string, () => Promise<{ meta: ProjectMeta; default: React.ComponentType }>> =
  Object.fromEntries(
    projectModules.map(m => [m.meta.slug, () => import(`@/data/projects/${m.meta.slug}`)])
  );

export function generateStaticParams() {
  return projectModules.map(m => ({ slug: m.meta.slug }));
}

// NOTE: In Next 15 the `params` prop in an async route can be a Promise.
// Await it before destructuring to avoid the runtime warning.
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params; // await params (fixes warning)

  const load = loaders[slug];
  if (!load) return notFound();

  const mod = await load();
  const { meta } = mod;
  const Body = mod.default;

  if (meta.layout === "custom") {
    return <Body />;
  }

  return (
    <ProjectLayout meta={meta}>
      <Body />
    </ProjectLayout>
  );
}