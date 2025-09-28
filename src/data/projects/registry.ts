// Registry of project TSX modules.
// NOTE: Your TS config / moduleResolution is rejecting bare folder imports.
// Fix: import explicit index files (…/index). This works with NodeNext / strict ESM.

import * as blender from "./blender/index";
import * as boekenzoeker from "./boekenzoeker/index";
import * as gameboxd from "./gameboxd/index";
import * as gamescout from "./gamescout/index";
import * as listral from "./listral/index";
import * as minor from "./minor/index";
import * as onyx from "./onyx/index";
import * as personalprojects from "./personalprojects/index";
import * as portfolioRefresh from "./portfolio-refresh/index";
import * as rhythmrain from "./rhythmrain/index";
import * as userjourney from "./userjourney/index";
import * as whackamole from "./whackamole/index";

export const projectModules = [
  portfolioRefresh,
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
] as const;

export const projectMeta = projectModules
  .map(m => ("meta" in m ? (m as any).meta : null))
  .filter(Boolean);
