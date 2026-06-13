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
import * as portfoliov3 from "./portfoliov3/index";
import * as writedown from "./writedown/index";
import * as chatextractor from "./chatextractor/index";
import * as sonora from "./sonora/index";
import * as goldenroast from "./goldenroast/index";
import * as indiesleaze from "./indiesleaze-meesterproef/index";

type ProjectModule = {
  meta: ProjectMeta;
  default: ComponentType<unknown>;
};

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
  portfoliov3,
  writedown,
  chatextractor,
  sonora,
  goldenroast,
  indiesleaze,
];

export const projectModules: ProjectModule[] = rawModules.filter(isProjectModule);

export const projectMeta: ProjectMeta[] = projectModules.map((m) => m.meta);
