export type RenderMode = "darkness" | "segmented" | "sketched";

export interface Config {
  RENDER_MODE: RenderMode;
  BRANCH_PROBABILITY: number;
  MAX_CONCURRENT: number;
  NUM_BRANCHES: number;
  MIN_RADIUS: number;
  MAX_RADIUS: number;
  MIN_WANDER_STEP: number;
  MAX_WANDER_STEP: number;
  MIN_GROWTH_RATE: number;
  MAX_GROWTH_RATE: number;
  MIN_SHRINK_RATE: number;
  MAX_SHRINK_RATE: number;
  MIN_DIVERGENCE: number;
  MAX_DIVERGENCE: number;
}
