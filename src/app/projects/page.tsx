"use client";
// Rebuilt list page: UI only (no real project data yet)
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { projectMeta } from "@/data/projects/registry";
import type { ProjectMeta } from "@/components/content/ProjectLayout";

const ROLES = ["🔎 UX", "🎨 UI", "💻 DEV", "✨ CREATIVE"] as const;

export default function ProjectsPage() {
  const [query, setQuery] = React.useState("");
  const [roleFilters, setRoleFilters] = React.useState<string[]>([]);

  const toggleRole = (role: string) =>
    setRoleFilters((f) => (f.includes(role) ? f.filter((r) => r !== role) : [...f, role]));

  const filtered: ProjectMeta[] = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectMeta.filter((p) => {
      const textMatch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(q));
      const rolesMatch =
        roleFilters.length === 0 ||
        (p.roles ?? []).some((r) => roleFilters.includes(r));
      return textMatch && rolesMatch;
    });
  }, [query, roleFilters]);

  return (
    <main className="text-foreground flex flex-col gap-10 px-5 md:px-8">
      <header className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight mb-2">projects</h1>
          <p className="text-muted-foreground text-sm">
            Search and filter by focus area.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <Input
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {ROLES.map((role) => {
              const active = roleFilters.includes(role);
              return (
                <Button
                  key={role}
                  type="button"
                  variant={active ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleRole(role)}
                  className="rounded-md px-3"
                  aria-pressed={active}
                >
                  {role}
                </Button>
              );
            })}
          </div>
        </div>
      </header>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground">No projects match your search.</p>
      )}

      <section className="flex flex-col gap-6">
        {filtered.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
            <Card
              className="relative overflow-hidden p-0 flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300 w-full animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Media */}
              <div className="w-full md:w-64 p-4 md:p-3 shrink-0 flex">
                <div className="relative w-full aspect-[16/10] rounded-md border bg-muted/30 overflow-hidden">
                  {p.cover ? (
                    <Image
                      src={p.cover}
                      alt={`${p.title} cover`}
                      fill
                      sizes="(max-width:768px) 100vw, 256px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                      no cover
                    </div>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1">
                <CardHeader className="pt-5 pb-2 pl-5 md:pl-0">
                  <div className="flex flex-wrap items-start gap-3 justify-between">
                    <CardTitle className="text-lg leading-tight">
                      {p.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 flex-wrap">
                      <Badge variant="secondary" className="text-[10px] font-medium">
                        {p.year}
                      </Badge>
                      {(p.roles ?? []).map((r) => (
                        <Badge
                          key={r}
                          variant="outline"
                          className="text-[10px] font-medium"
                        >
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-5 pl-5 md:pl-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
                    {p.description ?? ""}
                  </p>
                </CardContent>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-foreground" />
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
