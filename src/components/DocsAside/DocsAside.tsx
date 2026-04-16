import { useState } from "react";
import style from "./style.module.css";

export default function DocsAside() {
  const [wander, setWander] = useState(0.2);
  const [growth, setGrowth] = useState(10);
  const [branch, setBranch] = useState(0.1);

  return (
    <aside className={style["docs-aside"]}>
      {/* PLAYGROUND */}
      <div className={style["aside-card"]}>
        <h3>Live Playground</h3>

        <label>
          Wander
          <input
            type="range"
            min={0}
            max={2}
            step={0.01}
            value={wander}
            onChange={(e) => setWander(Number(e.target.value))}
          />
        </label>

        <label>
          Growth
          <input
            type="range"
            min={1}
            max={20}
            step={0.1}
            value={growth}
            onChange={(e) => setGrowth(Number(e.target.value))}
          />
        </label>

        <label>
          Branch
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={branch}
            onChange={(e) => setBranch(Number(e.target.value))}
          />
        </label>

        <div className="aside-mini">
          <span>Preview (em breve)</span>
        </div>
      </div>

      {/* RENDER MODES */}
      <div className="aside-card">
        <h3>Render Modes</h3>

        <div className="aside-tags">
          <span>darkness</span>
          <span>segmented</span>
          <span>sketched</span>
        </div>
      </div>

      {/* EXPERIMENTS */}
      <div className="aside-card">
        <h3>Experiments</h3>

        <ul>
          <li>
            <b>🌿 Organic</b>
            <p>Low wander + medium branching</p>
          </li>

          <li>
            <b>🔥 Chaos</b>
            <p>High wander + high branching</p>
          </li>

          <li>
            <b>❄ Frost</b>
            <p>No wander + high divergence</p>
          </li>
        </ul>
      </div>

      {/* STATS */}
      <div className="aside-card">
        <h3>Engine Notes</h3>

        <ul>
          <li>MAX_CONCURRENT limits performance</li>
          <li>Branching grows exponentially</li>
          <li>Shrink controls lifespan</li>
        </ul>
      </div>
    </aside>
  );
}
