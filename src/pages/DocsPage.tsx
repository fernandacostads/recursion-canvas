import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "how", label: "How it works" },
  { id: "params", label: "Parameters" },
  { id: "presets", label: "Presets" },
];

export default function DocsPage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handler = () => {
      const scroll = window.scrollY;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (!el) continue;

        if (scroll >= el.offsetTop - 100) {
          setActive(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="docs-layout">
      {/* SIDEBAR */}
      <aside className="docs-sidebar">
        <h2>Recursion</h2>

        <nav>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          className="back-btn"
          onClick={() => (window.location.href = "/")}
        >
          ← Back
        </button>
      </aside>

      {/* CONTENT */}
      <main className="docs-content">
        <section id="intro">
          <h1>Recursion</h1>
          <p>
            A procedural branching system that simulates organic growth using
            recursive structures and randomness.
          </p>
        </section>

        <section id="how">
          <h2>How it works</h2>

          <p>
            Each branch grows forward while slightly changing direction. Over
            time, it shrinks and may spawn new branches.
          </p>

          <ul>
            <li>Branches move using angle (theta)</li>
            <li>Random wandering creates organic shapes</li>
            <li>Scaling simulates natural decay</li>
            <li>Branching uses divergence angles</li>
          </ul>
        </section>

        <section id="params">
          <h2>Parameters</h2>

          <div className="docs-grid">
            <div>
              <h3>NUM_BRANCHES</h3>
              <p>Initial number of trunks</p>
            </div>

            <div>
              <h3>MAX_CONCURRENT</h3>
              <p>Maximum branches alive at once</p>
            </div>

            <div>
              <h3>BRANCH_PROBABILITY</h3>
              <p>Chance of creating a new branch</p>
            </div>

            <div>
              <h3>WANDER_STEP</h3>
              <p>Controls randomness in direction</p>
            </div>

            <div>
              <h3>GROWTH_RATE</h3>
              <p>Speed of expansion</p>
            </div>

            <div>
              <h3>SHRINK_RATE</h3>
              <p>Decay over time</p>
            </div>

            <div>
              <h3>DIVERGENCE</h3>
              <p>Angle between new branches</p>
            </div>

            <div>
              <h3>RENDER_MODE</h3>
              <p>Visual style of rendering</p>
            </div>
          </div>
        </section>

        <section id="presets">
          <h2>Presets</h2>

          <p>
            Presets are predefined configurations that generate unique visual
            patterns such as vines, roots, and abstract structures.
          </p>
        </section>
      </main>
    </div>
  );
}
