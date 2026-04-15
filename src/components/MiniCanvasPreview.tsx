import { useEffect, useRef } from "react";
import type { Config } from "../types";
import { Branch } from "../core/Branch";

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

const adaptConfigForPreview = (config: Config): Config => ({
  ...config,

  // menos poluição
  MAX_CONCURRENT: 60,
  NUM_BRANCHES: Math.min(config.NUM_BRANCHES, 3),

  // crescimento visível
  MIN_GROWTH_RATE: 2,
  MAX_GROWTH_RATE: 4,

  // MUITO importante: vida maior
  MIN_SHRINK_RATE: 0.96,
  MAX_SHRINK_RATE: 0.995,

  // evita morte precoce
  MIN_RADIUS: 0.05,
  MAX_RADIUS: config.MAX_RADIUS * 0.3,

  // movimento controlado
  MIN_WANDER_STEP: 0.05,
  MAX_WANDER_STEP: 0.3,
});

export default function MiniCanvasPreview({
  config,
  width = 180,
  height = 120,
}: {
  config: Config;
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const branchesRef = useRef<Branch[]>([]);
  const animationRef = useRef<number>(10);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const cfg = adaptConfigForPreview(config);

    canvas.width = width;
    canvas.height = height;

    const spawn = () => {
      for (let i = 0; i < cfg.NUM_BRANCHES; i++) {
        const theta = (i / cfg.NUM_BRANCHES) * TWO_PI;

        branchesRef.current.push(
          new Branch(
            width / 2,
            height / 2,
            theta - HALF_PI,
            cfg.MAX_RADIUS,
            cfg,
          ),
        );
      }
    };

    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);

      // fundo
      if (cfg.RENDER_MODE === "darkness") {
        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      branchesRef.current.forEach((b) => {
        b.update(branchesRef.current, cfg);
        b.render(ctx, cfg);
      });

      branchesRef.current = branchesRef.current.filter((b) => b.growing);

      // respawn suave
      if (branchesRef.current.length < 5) {
        spawn();
      }
    };

    spawn();
    loop();

    return () => cancelAnimationFrame(animationRef.current!);
  }, [config, width, height]);

  return <canvas ref={canvasRef} />;
}
