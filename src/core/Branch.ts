import type { Config } from "../types";

// =====================
// UTILS
// =====================

const random = (min: number, max: number) => min + Math.random() * (max - min);

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

// =====================
// BRANCH CLASS
// =====================

export class Branch {
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

    // movimento
    this.theta += random(-this.wanderStep, this.wanderStep);

    this.x += Math.cos(this.theta) * this.growthRate * this.scale;
    this.y += Math.sin(this.theta) * this.growthRate * this.scale;

    // shrink
    this.scale *= this.shrinkRate;

    // branching
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

    // morte
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
