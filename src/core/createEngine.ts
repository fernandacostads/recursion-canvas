import { Branch } from "./Branch";
import type { Config } from "../components/RecursionCanvas/types";

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

export function createEngine(
  ctx: CanvasRenderingContext2D,
  configRef: { current: Config },
  branchesRef: { current: Branch[] },
) {
  const spawn = (x: number, y: number) => {
    const cfg = configRef.current;

    for (let i = 0; i < cfg.NUM_BRANCHES; i++) {
      const theta = (i / cfg.NUM_BRANCHES) * TWO_PI;

      branchesRef.current.push(
        new Branch(x, y, theta - HALF_PI, cfg.MAX_RADIUS, cfg),
      );
    }
  };

  const update = () => {
    const cfg = configRef.current;

    branchesRef.current.forEach((b) => {
      b.update(branchesRef.current, cfg);
      b.render(ctx, cfg);
    });

    branchesRef.current = branchesRef.current.filter((b) => b.growing);
  };

  return { spawn, update };
}
