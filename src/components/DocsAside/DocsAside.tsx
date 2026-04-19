// import { useState } from "react";
// import style from "./style.module.css";

// export default function DocsAside() {
//   const [wander, setWander] = useState(0.2);
//   const [growth, setGrowth] = useState(10);
//   const [branch, setBranch] = useState(0.1);

//   return (
//     <aside className={style["docs-aside"]}>
//       {/* PLAYGROUND */}
//       <div className={style["aside-card"]}>
//         <h3>Live Playground</h3>

//         <label>
//           Wander
//           <input
//             type="range"
//             min={0}
//             max={2}
//             step={0.01}
//             value={wander}
//             onChange={(e) => setWander(Number(e.target.value))}
//           />
//         </label>

//         <label>
//           Growth
//           <input
//             type="range"
//             min={1}
//             max={20}
//             step={0.1}
//             value={growth}
//             onChange={(e) => setGrowth(Number(e.target.value))}
//           />
//         </label>

//         <label>
//           Branch
//           <input
//             type="range"
//             min={0}
//             max={1}
//             step={0.01}
//             value={branch}
//             onChange={(e) => setBranch(Number(e.target.value))}
//           />
//         </label>

//         <div className="aside-mini">
//           <span>Preview (em breve)</span>
//         </div>
//       </div>

//       {/* RENDER MODES */}
//       <div className="aside-card">
//         <h4>Render Modes</h4>

//         <div className="aside-tags">
//           <span>darkness</span>
//           <span>segmented</span>
//           <span>sketched</span>
//         </div>
//       </div>

//       {/* EXPERIMENTS */}
//       <div className="aside-card">
//         <h4>Experiments</h4>

//         <ul>
//           <li>
//             <b>Organic</b>
//             <p>Low wander + medium branching</p>
//           </li>

//           <li>
//             <b>Chaos</b>
//             <p>High wander + high branching</p>
//           </li>

//           <li>
//             <b> Frost</b>
//             <p>No wander + high divergence</p>
//           </li>
//         </ul>
//       </div>

//       {/* STATS */}
//       <div className="aside-card">
//         <h4>Engine Notes</h4>

//         <ul>
//           <li>MAX_CONCURRENT limits performance</li>
//           <li>Branching grows exponentially</li>
//           <li>Shrink controls lifespan</li>
//         </ul>
//       </div>
//     </aside>
//   );
// }

import { useState } from "react";
import style from "./style.module.css";
import { PRESETS } from "../../config/presets";
import MiniCanvasPreview from "../MiniCanvasPreview/MiniCanvasPreview";

export default function DocsAside() {
  const [wander, setWander] = useState(0.2);
  const [growth, setGrowth] = useState(10);
  const [branch, setBranch] = useState(0.1);
  const [renderMode, setRenderMode] = useState<
    "darkness" | "segmented" | "sketched"
  >("sketched");

  const liveConfig = {
    ...PRESETS.Frost,
    RENDER_MODE: renderMode,
    MIN_WANDER_STEP: wander * 0.5,
    MAX_WANDER_STEP: wander,
    MIN_GROWTH_RATE: growth * 0.5,
    MAX_GROWTH_RATE: growth,
    BRANCH_PROBABILITY: branch,
  };

  return (
    <aside className={style["docs-aside"]}>
      {/* PLAYGROUND */}
      <div className={style["aside-card"]}>
        <h3>Live Playground</h3>
        <p className={style.desc}>
          Experiment with core parameters and understand how behavior emerges in
          real-time.
        </p>

        <label>
          <div className={style.labelRow}>
            <span>Wander</span>
            <strong>{wander.toFixed(2)}</strong>
          </div>

          <input
            type="range"
            min={0}
            max={2}
            step={0.01}
            value={wander}
            onChange={(e) => setWander(Number(e.target.value))}
          />

          <small>Controls randomness in direction</small>
        </label>

        <label>
          <div className={style.labelRow}>
            <span>Growth</span>
            <strong>{growth.toFixed(1)}</strong>
          </div>

          <input
            type="range"
            min={1}
            max={20}
            step={0.1}
            value={growth}
            onChange={(e) => setGrowth(Number(e.target.value))}
          />

          <small>Defines how fast branches expand</small>
        </label>

        <label>
          <div className={style.labelRow}>
            <span>Branching</span>
            <strong>{branch.toFixed(2)}</strong>
          </div>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={branch}
            onChange={(e) => setBranch(Number(e.target.value))}
          />

          <small>Probability of spawning new branches</small>
        </label>

        <div className={style.preview}>
          <MiniCanvasPreview config={liveConfig} />
        </div>
      </div>

      {/* RENDER MODES */}
      <div className={style["aside-card"]}>
        <h4>Render Modes</h4>

        <div className={style["aside-tags"]}>
          <button
            className={renderMode === "darkness" ? style.active : ""}
            onClick={() => setRenderMode("darkness")}
          >
            darkness
          </button>

          <button
            className={renderMode === "segmented" ? style.active : ""}
            onClick={() => setRenderMode("segmented")}
          >
            segmented
          </button>

          <button
            className={renderMode === "sketched" ? style.active : ""}
            onClick={() => setRenderMode("sketched")}
          >
            sketched
          </button>
        </div>

        <p className={style.desc}>
          Each mode changes how geometry is drawn, affecting depth, texture and
          visual weight.
        </p>
      </div>

      {/* QUICK PRESETS */}
      <div className={style["aside-card"]}>
        <h4>Quick Experiments</h4>

        <div className={style["preset-list"]}>
          <button
            onClick={() => {
              setWander(0.1);
              setGrowth(12);
              setBranch(0.05);
            }}
          >
            🌿 Organic
          </button>

          <button
            onClick={() => {
              setWander(1.2);
              setGrowth(14);
              setBranch(0.3);
            }}
          >
            ⚡ Chaos
          </button>

          <button
            onClick={() => {
              setWander(0);
              setGrowth(9);
              setBranch(0.08);
            }}
          >
            ❄ Frost
          </button>
        </div>
      </div>

      {/* ENGINE INSIGHTS */}
      <div className={style["aside-card"]}>
        <h4>Engine Insights</h4>

        <ul>
          <li>
            <b>MAX_CONCURRENT</b>
            <p>Caps total branches to prevent FPS drops</p>
          </li>

          <li>
            <b>Branching</b>
            <p>Grows exponentially — small changes have huge impact</p>
          </li>

          <li>
            <b>Shrink Rate</b>
            <p>Controls how long branches survive</p>
          </li>
        </ul>
      </div>

      {/* TIPS */}
      <div className={style["aside-card"]}>
        <h4>Tips</h4>

        <ul>
          <li>Low wander → structured shapes</li>
          <li>High wander → chaotic motion</li>
          <li>Low branching → tree-like</li>
          <li>High branching → dense clusters</li>
        </ul>
      </div>
    </aside>
  );
}
