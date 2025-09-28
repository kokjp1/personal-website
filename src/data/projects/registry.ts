// Registry of project TSX modules (each exports: meta + default Body component)

import type { ComponentType } from "react";
import type { ProjectMeta } from "@/components/content/ProjectLayout";

import * as blender from "./blender/index";
import * as boekenzoeker from "./boekenzoeker/index";
import * as gameboxd from "./gameboxd/index";
import * as gamescout from "./gamescout/index";
import * as listral from "./listral/index";
import * as minor from "./minor/index";
import * as onyx from "./onyx/index";
import * as personalprojects from "./personalprojects/index";
import * as rhythmrain from "./rhythmrain/index";
import * as userjourney from "./userjourney/index";
import * as whackamole from "./whackamole/index";

type ProjectModule = {
  meta: ProjectMeta;
  default: ComponentType<unknown>;
};

// Refined type guard (removed unused @ts-expect-error)
function isProjectModule(mod: unknown): mod is ProjectModule {
  if (!mod || typeof mod !== "object") return false;
  if (!("meta" in mod)) return false;
  const meta = (mod as { meta?: unknown }).meta;
  return !!meta && typeof meta === "object";
}

const rawModules = [
  blender,
  boekenzoeker,
  gameboxd,
  gamescout,
  listral,
  minor,
  onyx,
  personalprojects,
  rhythmrain,
  userjourney,
  whackamole,
];

// Filter (in case a folder is missing an index.tsx)
export const projectModules: ProjectModule[] = rawModules.filter(isProjectModule);

// Strongly typed array of meta objects (no explicit any)
export const projectMeta: ProjectMeta[] = projectModules.map((m) => m.meta);
