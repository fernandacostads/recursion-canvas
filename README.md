# 🌱 Recursion Canvas

A procedural branching system that simulates organic growth using simple mathematical rules combined with randomness.

Inspired by natural structures like trees, roots, lightning, and veins, this project explores how complex patterns can emerge from minimal logic.

---

## ✨ Preview

Interactive canvas with real-time controls:

- 🌿 Organic growth simulation
- 🎛️ Fully configurable parameters
- 🎨 Multiple render modes
- ⚡ Real-time performance metrics (FPS / branches)
- 🧪 Presets for instant exploration

---

## 🚀 [Demo](https://fernandacostads.github.io/recursion-canvas/) 
https://fernandacostads.github.io/recursion-canvas/

> Run locally and explore the system in real-time.

---

## 🧠 Core Idea

This project is based on a simple principle:

> **Complex behavior can emerge from simple rules + randomness**

Each "branch" is an independent entity that:

1. Moves forward using an angle (`theta`)
2. Slightly changes direction (wander)
3. Shrinks over time
4. Spawns new branches probabilistically
5. Eventually dies

---

## ⚙️ Parameters

| Parameter             | Description                  |
| --------------------- | ---------------------------- |
| `NUM_BRANCHES`        | Initial number of branches   |
| `MAX_CONCURRENT`      | Max active branches          |
| `BRANCH_PROBABILITY`  | Chance to spawn new branches |
| `MIN/MAX_RADIUS`      | Thickness                    |
| `MIN/MAX_WANDER_STEP` | Direction randomness         |
| `MIN/MAX_GROWTH_RATE` | Growth speed                 |
| `MIN/MAX_SHRINK_RATE` | Lifespan                     |
| `MIN/MAX_DIVERGENCE`  | Spread angle                 |
| `RENDER_MODE`         | Visual style                 |

---

## 🎨 Render Modes

- darkness
- segmented
- sketched

---

## 🧪 Tech Stack

- React + TypeScript
- HTML5 Canvas

---

## ▶️ Getting Started

```bash
npm install
npm run dev
```

---

## 🪪 License

MIT
