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
            Recursion is a procedural branching system that simulates organic
            growth using simple mathematical rules combined with randomness.
          </p>

          <p>
            Inspired by natural structures such as trees, roots, veins, and
            lightning, this system evolves over time by continuously spawning
            and transforming branches.
          </p>
        </section>

        <section id="how">
          <h2>How it works</h2>

          <p>
            Each branch is an independent entity that evolves frame by frame.
          </p>

          <h3>Core principles</h3>

          <ul>
            <li>
              <b>Directional growth</b> — branches move using an angle (theta)
            </li>
            <li>
              <b>Wandering</b> — small random variations create organic motion
            </li>
            <li>
              <b>Scaling</b> — branches shrink as they grow
            </li>
            <li>
              <b>Branching</b> — new branches spawn probabilistically
            </li>
          </ul>

          <h3>Lifecycle</h3>

          <ol>
            <li>Branch starts at a point</li>
            <li>Moves forward based on angle</li>
            <li>Slightly changes direction (wander)</li>
            <li>Shrinks over time</li>
            <li>Eventually dies when too small</li>
          </ol>
        </section>

        <section id="params">
          <h2>Parameters</h2>

          <p>
            These parameters control the behavior and appearance of the system.
          </p>

          <div className="docs-grid">
            <div>
              <h3>NUM_BRANCHES</h3>
              <p>Number of initial trunks spawned from origin.</p>
            </div>

            <div>
              <h3>MAX_CONCURRENT</h3>
              <p>
                Maximum number of active branches at any given time. Acts as a
                performance limiter.
              </p>
            </div>

            <div>
              <h3>BRANCH_PROBABILITY</h3>
              <p>Probability of a branch spawning a new branch each frame.</p>
            </div>

            <div>
              <h3>MIN/MAX_RADIUS</h3>
              <p>
                Controls thickness of branches. Larger values create bolder
                shapes.
              </p>
            </div>

            <div>
              <h3>MIN/MAX_WANDER_STEP</h3>
              <p>
                Controls how much direction changes over time. Higher values =
                more chaotic movement.
              </p>
            </div>

            <div>
              <h3>MIN/MAX_GROWTH_RATE</h3>
              <p>
                Speed at which branches extend. Higher values = faster growth.
              </p>
            </div>

            <div>
              <h3>MIN/MAX_SHRINK_RATE</h3>
              <p>
                How quickly branches shrink. Values closer to 1 = longer
                lifespan.
              </p>
            </div>

            <div>
              <h3>MIN/MAX_DIVERGENCE</h3>
              <p>
                Angle difference when spawning new branches. Controls spread.
              </p>
            </div>

            <div>
              <h3>RENDER_MODE</h3>
              <p>
                Defines visual style:
                <br />• <b>darkness</b> → filled organic shapes
                <br />• <b>segmented</b> → layered strokes
                <br />• <b>sketched</b> → hand-drawn look
              </p>
            </div>
          </div>
        </section>

        <section id="presets">
          <h2>Presets</h2>

          <p>
            Presets are curated configurations designed to produce visually
            interesting patterns.
          </p>

          <h3>Examples</h3>

          <ul>
            <li>
              <b>Vines</b> → flowing organic tendrils
            </li>
            <li>
              <b>Fibrous</b> → dense thread-like structures
            </li>
            <li>
              <b>Graffiti</b> → chaotic artistic strokes
            </li>
            <li>
              <b>Frost</b> → crystalline branching
            </li>
            <li>
              <b>Hairball</b> → dense tangled mass
            </li>
          </ul>

          <p>
            Presets are a great starting point for exploration and can be
            modified in real-time using the control panel.
          </p>
        </section>
      </main>
    </div>
  );
}
