import { useEffect, useRef, useState } from "react";

// =====================
// TYPES
// =====================

type RenderMode = "darkness" | "segmented" | "sketched";

interface Config {
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

// =====================
// PRESETS
// =====================

const PRESETS: Record<string, Config> = {
  Vines: {
    RENDER_MODE: "darkness",
    BRANCH_PROBABILITY: 0.2572,
    MAX_CONCURRENT: 388,
    NUM_BRANCHES: 4,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 69,
    MIN_WANDER_STEP: 1.0184,
    MAX_WANDER_STEP: 0.1702,
    MIN_GROWTH_RATE: 10.6214,
    MAX_GROWTH_RATE: 11.8251,
    MIN_SHRINK_RATE: 0.99656,
    MAX_SHRINK_RATE: 0.91265,
    MIN_DIVERGENCE: 0.5101,
    MAX_DIVERGENCE: 0.37466,
  },
  Fibrous: {
    RENDER_MODE: "segmented",
    BRANCH_PROBABILITY: 0.05,
    MAX_CONCURRENT: 800,
    NUM_BRANCHES: 3,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 50,
    MIN_WANDER_STEP: 0.28,
    MAX_WANDER_STEP: 0.7,
    MIN_GROWTH_RATE: 5,
    MAX_GROWTH_RATE: 9,
    MIN_SHRINK_RATE: 0.98,
    MAX_SHRINK_RATE: 0.99,
    MIN_DIVERGENCE: 0.01,
    MAX_DIVERGENCE: 0.05,
  },
  Graffiti: {
    RENDER_MODE: "sketched",
    BRANCH_PROBABILITY: 0.05,
    MAX_CONCURRENT: 500,
    NUM_BRANCHES: 6,
    MIN_RADIUS: 0.15,
    MAX_RADIUS: 70,
    MIN_WANDER_STEP: 0.1197,
    MAX_WANDER_STEP: 1.8269,
    MIN_GROWTH_RATE: 13.66,
    MAX_GROWTH_RATE: 17.35,
    MIN_SHRINK_RATE: 0.95,
    MAX_SHRINK_RATE: 0.98,
    MIN_DIVERGENCE: 1.3268,
    MAX_DIVERGENCE: 1.3885,
  },
  Knarled: {
    RENDER_MODE: "darkness",
    BRANCH_PROBABILITY: 0.09,
    MAX_CONCURRENT: 500,
    NUM_BRANCHES: 5,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 100,
    MIN_WANDER_STEP: 0.1,
    MAX_WANDER_STEP: 0.2,
    MIN_GROWTH_RATE: 3.7,
    MAX_GROWTH_RATE: 10,
    MIN_SHRINK_RATE: 0.97,
    MAX_SHRINK_RATE: 0.99,
    MIN_DIVERGENCE: 0.01,
    MAX_DIVERGENCE: 0.05,
  },
  "Beech Tree": {
    RENDER_MODE: "darkness",
    BRANCH_PROBABILITY: 0.085,
    MAX_CONCURRENT: 500,
    NUM_BRANCHES: 1,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 40,
    MIN_WANDER_STEP: 0.1599,
    MAX_WANDER_STEP: 0.4,
    MIN_GROWTH_RATE: 8,
    MAX_GROWTH_RATE: 15,
    MIN_SHRINK_RATE: 0.98,
    MAX_SHRINK_RATE: 0.982,
    MIN_DIVERGENCE: 0.31,
    MAX_DIVERGENCE: 0.87,
  },
  Frost: {
    RENDER_MODE: "sketched",
    BRANCH_PROBABILITY: 0.09,
    MAX_CONCURRENT: 1000,
    NUM_BRANCHES: 6,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 40,
    MIN_WANDER_STEP: 0,
    MAX_WANDER_STEP: 0,
    MIN_GROWTH_RATE: 9.2,
    MAX_GROWTH_RATE: 9.8,
    MIN_SHRINK_RATE: 0.97,
    MAX_SHRINK_RATE: 0.97,
    MIN_DIVERGENCE: 0.4,
    MAX_DIVERGENCE: 0.8,
  },
  Wooly: {
    RENDER_MODE: "segmented",
    BRANCH_PROBABILITY: 0.07,
    MAX_CONCURRENT: 348,
    NUM_BRANCHES: 9,
    MIN_RADIUS: 1.5,
    MAX_RADIUS: 99,
    MIN_WANDER_STEP: 0.5093,
    MAX_WANDER_STEP: 2.654,
    MIN_GROWTH_RATE: 7.8279,
    MAX_GROWTH_RATE: 18.2956,
    MIN_SHRINK_RATE: 0.94489,
    MAX_SHRINK_RATE: 0.98716,
    MIN_DIVERGENCE: 1.4656,
    MAX_DIVERGENCE: 2.6998,
  },
  "Vegetable Root": {
    RENDER_MODE: "darkness",
    BRANCH_PROBABILITY: 0.06,
    MAX_CONCURRENT: 437,
    NUM_BRANCHES: 1,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 100,
    MIN_WANDER_STEP: 0.05,
    MAX_WANDER_STEP: 0.25,
    MIN_GROWTH_RATE: 5,
    MAX_GROWTH_RATE: 9,
    MIN_SHRINK_RATE: 0.98,
    MAX_SHRINK_RATE: 0.99,
    MIN_DIVERGENCE: 0,
    MAX_DIVERGENCE: 0.1,
  },
  Hairball: {
    RENDER_MODE: "sketched",
    BRANCH_PROBABILITY: 0.6,
    MAX_CONCURRENT: 800,
    NUM_BRANCHES: 7,
    MIN_RADIUS: 0.5,
    MAX_RADIUS: 30,
    MIN_WANDER_STEP: 0.1,
    MAX_WANDER_STEP: 0.2,
    MIN_GROWTH_RATE: 3.5,
    MAX_GROWTH_RATE: 4.5,
    MIN_SHRINK_RATE: 0.992,
    MAX_SHRINK_RATE: 0.992,
    MIN_DIVERGENCE: 2,
    MAX_DIVERGENCE: 2.1,
  },
  Intenstines: {
    RENDER_MODE: "darkness",
    BRANCH_PROBABILITY: 1,
    MAX_CONCURRENT: 350,
    NUM_BRANCHES: 3,
    MIN_RADIUS: 0.1,
    MAX_RADIUS: 100,
    MIN_WANDER_STEP: 0.1,
    MAX_WANDER_STEP: 0.72,
    MIN_GROWTH_RATE: 0.9,
    MAX_GROWTH_RATE: 6.15,
    MIN_SHRINK_RATE: 0.935,
    MAX_SHRINK_RATE: 0.999,
    MIN_DIVERGENCE: 0.01,
    MAX_DIVERGENCE: 0.05,
  },
};

// =====================
// UTILS
// =====================

const random = (min: number, max: number) => {
  if (min > max) [min, max] = [max, min];
  return min + Math.random() * (max - min);
};

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

// =====================
// BRANCH
// =====================

class Branch {
  x: number;
  y: number;
  ox: number;
  oy: number;
  theta: number;
  radius: number;
  scale = 1;
  growing = true;

  wanderStep: number;
  growthRate: number;
  shrinkRate: number;

  constructor(
    x: number,
    y: number,
    theta: number,
    radius: number,
    config: Config,
  ) {
    this.x = this.ox = x;
    this.y = this.oy = y;
    this.theta = theta;
    this.radius = radius;

    this.wanderStep = random(config.MIN_WANDER_STEP, config.MAX_WANDER_STEP);
    this.growthRate = random(config.MIN_GROWTH_RATE, config.MAX_GROWTH_RATE);
    this.shrinkRate = random(config.MIN_SHRINK_RATE, config.MAX_SHRINK_RATE);
  }

  update(branches: Branch[], config: Config) {
    if (!this.growing) return;

    this.ox = this.x;
    this.oy = this.y;

    this.theta += random(-this.wanderStep, this.wanderStep);

    this.x += Math.cos(this.theta) * this.growthRate * this.scale;
    this.y += Math.sin(this.theta) * this.growthRate * this.scale;

    this.scale *= this.shrinkRate;

    if (
      branches.length < config.MAX_CONCURRENT &&
      Math.random() < config.BRANCH_PROBABILITY
    ) {
      const offset = random(config.MIN_DIVERGENCE, config.MAX_DIVERGENCE);

      branches.push(
        new Branch(
          this.x,
          this.y,
          this.theta + offset * (Math.random() < 0.5 ? 1 : -1),
          this.radius * this.scale,
          config,
        ),
      );
    }

    if (this.radius * this.scale <= config.MIN_RADIUS) {
      this.growing = false;
    }
  }

  render(ctx: CanvasRenderingContext2D, config: Config) {
    if (!this.growing) return;

    ctx.beginPath();
    ctx.moveTo(this.ox, this.oy);
    ctx.lineTo(this.x, this.y);

    ctx.strokeStyle =
      config.RENDER_MODE === "darkness"
        ? "#fff"
        : config.RENDER_MODE === "segmented"
          ? "#000"
          : "#ccc";

    ctx.lineWidth = this.radius * this.scale;
    ctx.stroke();
  }
}

// =====================
// COMPONENT
// =====================

export default function RecursionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const branchesRef = useRef<Branch[]>([]);
  const animationRef = useRef<number>(null);

  const [config, setConfig] = useState<Config>(PRESETS["Vines"]);
  const [branchCount, setBranchCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    cancelAnimationFrame(animationRef.current!);
    branchesRef.current = [];

    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < config.NUM_BRANCHES; i++) {
        const theta = (i / config.NUM_BRANCHES) * TWO_PI;
        branchesRef.current.push(
          new Branch(x, y, theta - HALF_PI, config.MAX_RADIUS, config),
        );
      }
    };

    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);

      branchesRef.current.forEach((b) => {
        b.update(branchesRef.current, config);
        b.render(ctx, config);
      });

      branchesRef.current = branchesRef.current.filter((b) => b.growing);

      frame++;
      if (frame % 10 === 0) {
        setBranchCount(branchesRef.current.length);
      }
    };

    resize();
    spawn(window.innerWidth / 2, window.innerHeight / 2);
    loop();

    const handleClick = (e: MouseEvent) => {
      branchesRef.current = [];
      spawn(e.offsetX, e.offsetY);
    };

    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, [config]);

  const saveImage = () => {
    const url = canvasRef.current!.toDataURL("image/png");
    const win = window.open("");
    win?.document.write(`<img src="${url}" />`);
  };

  return (
    <>
      <div className="panel">
        <label>Preset</label>
        <select onChange={(e) => setConfig(PRESETS[e.target.value])}>
          {Object.keys(PRESETS).map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Branches: {config.NUM_BRANCHES}</label>
        <input
          type="range"
          min={1}
          max={20}
          value={config.NUM_BRANCHES}
          onChange={(e) =>
            setConfig({ ...config, NUM_BRANCHES: +e.target.value })
          }
        />

        <label>Probability: {config.BRANCH_PROBABILITY.toFixed(2)}</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={config.BRANCH_PROBABILITY}
          onChange={(e) =>
            setConfig({
              ...config,
              BRANCH_PROBABILITY: +e.target.value,
            })
          }
        />

        <button onClick={() => setConfig(PRESETS["Vines"])}>Reset</button>

        <button onClick={saveImage}>Save Image</button>

        <div className="branch-count">Branches: {branchCount}</div>
      </div>

      <canvas ref={canvasRef} />
    </>
  );
}
