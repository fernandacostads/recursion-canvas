import { useEffect, useRef, useState } from "react";
import ControlPanel from "./ControlPanel";

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
};

// =====================
// UTILS
// =====================

const random = (min: number, max: number) => min + Math.random() * (max - min);

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

// =====================
// BRANCH (FIEL)
// =====================

class Branch {
  x: number;
  y: number;
  ox: number;
  oy: number;

  x1 = NaN;
  x2 = NaN;
  y1 = NaN;
  y2 = NaN;

  theta: number;
  radius: number;
  scale: number;
  generation: number;

  growing = true;
  age = 0;

  wanderStep: number;
  growthRate: number;
  shrinkRate: number;

  constructor(
    x: number,
    y: number,
    theta: number,
    radius: number,
    config: Config,
    scale = 1,
    generation = 1,
  ) {
    this.x = this.ox = x;
    this.y = this.oy = y;
    this.theta = theta;
    this.radius = radius;
    this.scale = scale;
    this.generation = generation;

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

      const theta = this.theta + offset * (Math.random() < 0.5 ? 1 : -1);

      const scale = this.scale * 0.95;
      const radius = this.radius * scale;

      branches.push(
        new Branch(
          this.x,
          this.y,
          theta,
          radius,
          config,
          scale,
          this.generation + 1,
        ),
      );
    }

    if (this.radius * this.scale <= config.MIN_RADIUS) {
      this.growing = false;
    }

    this.age++;
  }

  render(ctx: CanvasRenderingContext2D, config: Config) {
    if (!this.growing) return;

    let x1, x2, y1, y2;
    let radius = this.radius * this.scale;
    const scale = this.scale;

    ctx.save();

    switch (config.RENDER_MODE) {
      case "segmented":
        ctx.beginPath();
        ctx.moveTo(this.ox, this.oy);
        ctx.lineTo(this.x, this.y);

        if (radius > 5) {
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          ctx.shadowBlur = scale;
          ctx.shadowColor = "rgba(0,0,0,0.05)";
        }

        ctx.lineWidth = radius + scale;
        ctx.strokeStyle = "#000";
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.ox, this.oy);
        ctx.lineTo(this.x, this.y);

        ctx.lineWidth = radius;
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        break;

      case "sketched":
        radius = radius * 0.5 + 0.5;

        x1 = this.x + Math.cos(this.theta - HALF_PI) * radius;
        x2 = this.x + Math.cos(this.theta + HALF_PI) * radius;
        y1 = this.y + Math.sin(this.theta - HALF_PI) * radius;
        y2 = this.y + Math.sin(this.theta + HALF_PI) * radius;

        ctx.lineWidth = 0.5 + scale;
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#FFF";

        if (this.generation === 1 && this.age === 1) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, radius, 0, TWO_PI);
          ctx.fill();
          ctx.stroke();
        }

        if (this.age > 1) {
          ctx.beginPath();
          ctx.moveTo(this.x1, this.y1);
          ctx.lineTo(x1, y1);
          ctx.moveTo(this.x2, this.y2);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(this.x2, this.y2);
        ctx.closePath();
        ctx.fill();

        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        break;

      case "darkness":
        radius *= 0.5;

        x1 = this.x + Math.cos(this.theta - HALF_PI) * radius;
        x2 = this.x + Math.cos(this.theta + HALF_PI) * radius;
        y1 = this.y + Math.sin(this.theta - HALF_PI) * radius;
        y2 = this.y + Math.sin(this.theta + HALF_PI) * radius;

        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.fillStyle = "#111";

        if (this.generation === 1 && this.age === 1) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, radius, 0, TWO_PI);
          ctx.fill();
          ctx.stroke();
        }

        if (scale > 0.05) {
          ctx.shadowOffsetX = scale;
          ctx.shadowOffsetY = scale;
          ctx.shadowBlur = scale;
          ctx.shadowColor = "#111";
        }

        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(this.x2, this.y2);
        ctx.closePath();
        ctx.fill();

        if (this.age > 1 && scale > 0.1) {
          ctx.beginPath();
          ctx.moveTo(this.x1, this.y1);
          ctx.lineTo(x1, y1);
          ctx.moveTo(this.x2, this.y2);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        break;
    }

    ctx.restore();
  }
}

// =====================
// COMPONENT
// =====================

export default function RecursionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const branchesRef = useRef<Branch[]>([]);
  const configRef = useRef<Config>(PRESETS["Vines"]);
  const animationRef = useRef<number>();

  const [config, setConfig] = useState(PRESETS["Vines"]);

  useEffect(() => {
    configRef.current = config;
  }, [config]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const spawn = (x: number, y: number) => {
      const cfg = configRef.current;

      for (let i = 0; i < cfg.NUM_BRANCHES; i++) {
        const theta = (i / cfg.NUM_BRANCHES) * TWO_PI;

        branchesRef.current.push(
          new Branch(x, y, theta - HALF_PI, cfg.MAX_RADIUS, cfg),
        );
      }
    };

    const spawnCenter = () => {
      spawn(window.innerWidth / 2, window.innerHeight / 2);
    };

    const resize = () => {
      const scale = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;

      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";

      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      branchesRef.current = [];
      spawnCenter();
    };

    const loop = () => {
      animationRef.current = requestAnimationFrame(loop);

      const cfg = configRef.current;

      branchesRef.current.forEach((b) => {
        b.update(branchesRef.current, cfg);
        b.render(ctx, cfg);
      });

      branchesRef.current = branchesRef.current.filter((b) => b.growing);
    };

    resize();
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
  }, []);

  return (
    <>
      <ControlPanel
        config={config}
        setConfig={setConfig}
        presets={PRESETS}
        onReset={() => setConfig(PRESETS["Vines"])}
        onClear={() => (branchesRef.current = [])}
        onSave={() => {
          const url = canvasRef.current!.toDataURL("image/png");
          window.open(url);
        }}
        onRegenerate={() => {
          branchesRef.current = [];
          const canvas = canvasRef.current!;
          const x = canvas.width / 2;
          const y = canvas.height / 2;

          const cfg = configRef.current;

          for (let i = 0; i < cfg.NUM_BRANCHES; i++) {
            const theta = (i / cfg.NUM_BRANCHES) * TWO_PI;

            branchesRef.current.push(
              new Branch(x, y, theta - HALF_PI, cfg.MAX_RADIUS, cfg),
            );
          }
        }}
      />

      <canvas ref={canvasRef} />
    </>
  );
}
