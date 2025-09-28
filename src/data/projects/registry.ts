import * as aurora from "./aurora-dashboard";
import * as immersive from "./immersive-visualizer";
import * as refresh from "./portfolio-refresh";

export const projectModules = [aurora, immersive, refresh] as const;
export const projectMeta = projectModules.map(m => m.meta);