import { useEffect, useState } from "react";
import RandomnessDemo from "../components/RandomnessDemo";
import MiniCanvasPreview from "../components/MiniCanvasPreview";
import { PRESETS } from "../components/RecursionCanvas";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "how", label: "How it works" },
  { id: "math", label: "Mathematical Model" },
  { id: "render", label: "Render Modes" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "randomness", label: "Randomness" },
  { id: "params", label: "Parameters" },
  { id: "performance", label: "Performance" },
  { id: "ideas", label: "Ideas" },
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

        <section id="math">
          <h2>Mathematical Model</h2>

          <p>
            The system is based on a simple idea: complex organic behavior can
            emerge from very small mathematical rules combined with randomness.
          </p>

          <h4>Growth visualization:</h4>

          <p>
            This diagram shows how a single branch evolves over time using
            growth, randomness, and decay.
          </p>

          <h3>Deterministic rules</h3>
          <p>Each branch follows predictable equations at every frame:</p>

          <ul>
            <li>Position is updated using trigonometry (cosine and sine)</li>
            <li>Growth follows a constant rate</li>
            <li>Scale decreases over time (shrink factor)</li>
          </ul>

          <p>In simplified form:</p>

          <pre>
            x += cos(theta) * growthRate y += sin(theta) * growthRate scale *=
            shrinkRate
          </pre>

          <h3>Randomness (stochastic behavior)</h3>

          <h4>Interactive example:</h4>
          <p>
            Adjust the randomness (wander) and see how the path changes from
            straight to chaotic.
          </p>

          <RandomnessDemo />

          <p>
            To avoid rigid and artificial patterns, randomness is introduced at
            key points in the system:
          </p>

          <ul>
            <li>
              <b>Wander</b> — small random changes in direction (theta)
            </li>
            <li>
              <b>Branching probability</b> — determines if a new branch is
              created
            </li>
            <li>
              <b>Parameter ranges</b> — values like growth and shrink vary per
              branch
            </li>
          </ul>

          <h3>Emergent complexity</h3>

          <p>
            Individually, each rule is extremely simple. However, when hundreds
            of branches interact over time, the result is complex,
            natural-looking structures.
          </p>

          <p>
            This phenomenon is known as <b>emergence</b>, where complexity
            arises from the interaction of simple components.
          </p>

          <h3>Why it looks organic</h3>

          <ul>
            <li>No two branches behave exactly the same</li>
            <li>Small variations accumulate over time</li>
            <li>Growth + decay mimics natural systems</li>
          </ul>

          <p>
            This combination of deterministic rules and controlled randomness is
            what creates the illusion of life-like growth.
          </p>
        </section>

        <section id="render">
          <h2>Render Modes</h2>
          <p>
            The rendering mode defines how branches are visually represented on
            the canvas.
          </p>
          <section id="render">
            <h2>Render Modes</h2>

            <div className="docs-grid">
              <div className="doc-item">
                <h3>darkness</h3>
                <span className="tag">visual</span>

                <p>Organic filled shapes with shadow blending.</p>

                <div className="preview">
                  <MiniCanvasPreview
                    config={{ ...PRESETS.Hairball, RENDER_MODE: "darkness" }}
                  />
                </div>
              </div>

              <div className="doc-item">
                <h3>segmented</h3>
                <span className="tag">visual</span>

                <p>Layered strokes with light borders.</p>

                <div className="preview">
                  <MiniCanvasPreview
                    config={{ ...PRESETS.Fibrous, RENDER_MODE: "segmented" }}
                  />
                </div>
              </div>

              <div className="doc-item">
                <h3>sketched</h3>
                <span className="tag">visual</span>

                <p>Hand-drawn organic look.</p>
                <br />
                <div className="preview">
                  <MiniCanvasPreview
                    config={{ ...PRESETS.Graffiti, RENDER_MODE: "sketched" }}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="docs-grid">
            <div className="doc-item">
              <h3>Darkness</h3>
              <p>Filled organic shapes with shadow and depth.</p>
              <span className="tag">Organic</span>
              <span className="tag">Heavy</span>
            </div>

            <div className="doc-item">
              <h3>Segmented</h3>
              <p>Layered strokes that resemble tubes or fibers.</p>
              <span className="tag">Structured</span>
              <span className="tag">Balanced</span>
            </div>

            <div className="doc-item">
              <h3>Sketched</h3>
              <p>Loose, hand-drawn appearance with visible edges.</p>
              <span className="tag">Artistic</span>
              <span className="tag">Lightweight</span>
            </div>
          </div>
        </section>

        <section id="lifecycle">
          <h2>Lifecycle</h2>

          <p>
            Every branch follows a lifecycle from creation to disappearance.
          </p>

          <ol>
            <li>
              <b>Spawn</b> — created at origin or from another branch
            </li>
            <li>
              <b>Grow</b> — moves forward using angle and growth rate
            </li>
            <li>
              <b>Wander</b> — small randomness alters direction
            </li>
            <li>
              <b>Branch</b> — may spawn new branches
            </li>
            <li>
              <b>Shrink</b> — scale decreases over time
            </li>
            <li>
              <b>Death</b> — removed when too small
            </li>
          </ol>

          <p>
            This cycle repeats recursively, creating complex structures from
            simple rules.
          </p>
        </section>

        <section id="randomness">
          <h2>Randomness & Determinism</h2>

          <p>
            The system combines deterministic rules with controlled randomness.
          </p>

          <h3>Deterministic</h3>
          <ul>
            <li>Movement uses trigonometry</li>
            <li>Growth and shrink follow fixed rates</li>
            <li>Each frame updates predictably</li>
          </ul>

          <h3>Randomness</h3>
          <ul>
            <li>Wander introduces directional variation</li>
            <li>Branching is probabilistic</li>
            <li>Parameters vary per branch</li>
          </ul>

          <p>
            This balance ensures results are never identical, yet always
            coherent.
          </p>

          <div className="doc-item">
            <span className="tag">Stochastic</span>
            <span className="tag">Emergence</span>
          </div>
        </section>

        {/* <section id="params">
          <h2>Parameters</h2>

          <p>
            These parameters control the behavior and appearance of the system.
          </p>

          <div className="docs-grid">
            <div className="doc-item">
              <h3>NUM_BRANCHES</h3>
              <p>Number of initial trunks spawned from origin.</p>
            </div>

            <div className="doc-item">
              <h3>MAX_CONCURRENT</h3>
              <p>
                Maximum number of active branches at any given time. Acts as a
                performance limiter.
              </p>
            </div>

            <div className="doc-item">
              <h3>BRANCH_PROBABILITY</h3>
              <p>Probability of a branch spawning a new branch each frame.</p>
            </div>

            <div className="doc-item">
              <h3>MIN/MAX_RADIUS</h3>
              <p>
                Controls thickness of branches. Larger values create bolder
                shapes.
              </p>
            </div>

            <div className="doc-item">
              <h3>MIN/MAX_WANDER_STEP</h3>
              <p>
                Controls how much direction changes over time. Higher values =
                more chaotic movement.
              </p>
            </div>

            <div className="doc-item">
              <h3>MIN/MAX_GROWTH_RATE</h3>
              <p>
                Speed at which branches extend. Higher values = faster growth.
              </p>
            </div>

            <div className="doc-item">
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
        </section> */}

        <div className="docs-grid">
          <div className="doc-item">
            <h3>NUM_BRANCHES</h3>
            <p>Initial trunks spawned.</p>
            <span className="tag">Structure</span>
          </div>

          <div className="doc-item">
            <h3>MAX_CONCURRENT</h3>
            <p>Limits total active branches.</p>
            <span className="tag">Performance</span>
          </div>

          <div className="doc-item">
            <h3>BRANCH_PROBABILITY</h3>
            <p>Chance of spawning new branches.</p>
            <span className="tag">Growth</span>
            <span className="tag">Chaos</span>
          </div>

          <div className="doc-item">
            <h3>MIN/MAX_RADIUS</h3>
            <p>Controls thickness.</p>
            <span className="tag">Visual</span>
          </div>

          <div className="doc-item">
            <h3>MIN/MAX_WANDER_STEP</h3>
            <p>Controls randomness in direction.</p>
            <span className="tag">Randomness</span>
          </div>

          <div className="doc-item">
            <h3>MIN/MAX_GROWTH_RATE</h3>
            <p>Growth speed.</p>
            <span className="tag">Speed</span>
          </div>

          <div className="doc-item">
            <h3>MIN/MAX_SHRINK_RATE</h3>
            <p>Controls lifespan.</p>
            <span className="tag">Decay</span>
          </div>

          <div className="doc-item">
            <h3>MIN/MAX_DIVERGENCE</h3>
            <p>Angle between branches.</p>
            <span className="tag">Spread</span>
          </div>
        </div>

        <section id="performance">
          <h2>Performance</h2>

          <p>Performance depends heavily on how many branches are active.</p>

          <ul>
            <li>
              Lower <b>MAX_CONCURRENT</b> for better FPS
            </li>
            <li>Reduce branching probability</li>
            <li>
              Use <b>Segmented</b> mode for lighter rendering
            </li>
            <li>Lower growth rate to slow updates</li>
          </ul>

          <div className="doc-item">
            <span className="tag">Optimization</span>
            <span className="tag">FPS</span>
          </div>
        </section>

        <section id="ideas">
          <h2>Ideas & Exploration</h2>

          <p>Try combining parameters to explore different behaviors:</p>

          <ul>
            <li>
              <b>Tree-like</b> → low branching + high growth
            </li>
            <li>
              <b>Chaos</b> → high wander + high probability
            </li>
            <li>
              <b>Roots</b> → low divergence + slow growth
            </li>
            <li>
              <b>Explosion</b> → high divergence + many branches
            </li>
            <li>
              <b>Hairball</b> → high shrink + high branching
            </li>
          </ul>

          <div className="doc-item">
            <span className="tag">Creative</span>
            <span className="tag">Exploration</span>
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
